#!/usr/bin/env python
#coding=utf8

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)) + "/..")
print(sys.path)
print(__name__)


import time
from sample_common import MNSSampleCommon
from mns.account import Account
from mns.queue import *
import base64
import json

import struct
import binascii
import pymysql



#从sample.cfg中读取基本配置信息
## WARNING： Please do not hard code your accessId and accesskey in next line.(more information: https://yq.aliyun.com/articles/55947)
accid,acckey,endpoint,token = MNSSampleCommon.LoadConfig()

#初始化 my_account, my_queue
my_account = Account(endpoint, accid, acckey, token)
queue_name = sys.argv[1] if len(sys.argv) > 1 else "MySampleQueue"
isbase64 = False if len(sys.argv) > 2 and sys.argv[2].lower() == "false" else True
my_queue = my_account.get_queue(queue_name)
my_queue.set_encoding(isbase64)


db = pymysql.connect("101.200.158.2","smartlinkcloud","Smartlink6027","friday" )
cursor = db.cursor()

#循环读取删除消息直到队列空
#receive message请求使用long polling方式，通过wait_seconds指定长轮询时间为3秒

## long polling 解析:
### 当队列中有消息时，请求立即返回；
### 当队列中没有消息时，请求在MNS服务器端挂3秒钟，在这期间，有消息写入队列，请求会立即返回消息，3秒后，请求返回队列没有消息；

wait_seconds = 3
print ("%sReceive And Delete Message From Queue%s\nQueueName:%s\nWaitSeconds:%s\n" % (10*"=", 10*"=", queue_name, wait_seconds))
while True:
    #读取消息
    try:
        recv_msg = my_queue.receive_message(wait_seconds)
        print ("Receive Message Succeed! ReceiptHandle:%s MessageBody:%s MessageID:%s" % (recv_msg.receipt_handle, recv_msg.message_body, recv_msg.message_id))
        print ("***" * 10)

        message_body_json = recv_msg.message_body
        print(message_body_json)
        message_body = json.loads(message_body_json)

        print('---message_body---')
        print(message_body)

        message_body_payload_64 = message_body['payload']
        print(message_body_payload_64)


        message_body_payload = base64.b64decode(message_body_payload_64)
        print(message_body_payload)
        
        # fake_str = '01034042140000425D33334291CCCD42AECCCD42C1999A42C7CCCD42C0999A42ACCCCD428F000042573333420E00004199999A40E000003F3333333F80000040FCCCCD0E88'
        # fake_a2b_hex = binascii.a2b_hex(fake_str)

        message_body_payload_hex = binascii.a2b_hex(message_body_payload)

        daq_data_length = struct.unpack('B', message_body_payload_hex[2:3])
        print(daq_data_length)
        daq_data = message_body_payload_hex[3:3 + daq_data_length[0]]

        device_daqs = []
        for i in range(int(daq_data_length[0]/4)):
            packed_data = daq_data[4*i:4*i + 4]
            print('-----packed_data-----'* 3)

            print(binascii.hexlify(packed_data))

            unpacked_data = struct.unpack('>f', packed_data)
            device_daqs.append([str(i), unpacked_data[0]])

            print(packed_data)
            print(unpacked_data)

        device_daqs_json = json.dumps(device_daqs)

        #insert into database;

        # SQL 插入语句
        sql = """INSERT INTO daqs(device_id,
                 gmt_daq, daq_value)
                 VALUES ({0}, {1}, {2})""".format(1, datetime.datetime.utcnow(), device_daqs_json)
        try:
           # 执行sql语句
           cursor.execute(sql)
           # 提交到数据库执行
           db.commit()
        except:
           # 如果发生错误则回滚
           db.rollback()
           print('insert error!')

        # daq = Daq()
        # daq.device_id = 1
        # daq.gmt_daq = datetime.datetime.utcnow()
        # daq.daq_value = device_daqs_json

        # session.add(daq)

        # try:
        #     session.commit()
        #     print("inserted", daq)
        # except Exception as e:
        #     log.error("Creating Daq: %s", e)
        #     session.rollback()

        print ("---" * 10)

    except MNSExceptionBase, e:
        if e.type == "QueueNotExist":
            print ("Queue not exist, please create queue before receive message.")
            sys.exit(0)
        elif e.type == "MessageNotExist":
            print ("Queue is empty!")
            sys.exit(0)
        print ("Receive Message Fail! Exception:%s\n" % e)
        continue

    #删除消息
    try:
        my_queue.delete_message(recv_msg.receipt_handle)
        print ("Delete Message Succeed!  ReceiptHandle:%s" % recv_msg.receipt_handle)
        print ("***" * 10)
        print ("\n" * 3)
    except MNSException, e:
        print ("Delete Message Fail! Exception:%s\n" % e)