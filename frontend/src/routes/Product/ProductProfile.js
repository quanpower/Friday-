import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Badge, Table, Divider } from 'antd';
import DescriptionList from 'components/DescriptionList';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './ProductProfile.less';

const { Description } = DescriptionList;


@connect(({ products, loading }) => ({
  products,
  loading: loading.effects['products/fetchProductProfile'],
}))

export default class ProductProfile extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'products/fetchProductProfile',
      payload: {
          product_id: 1,
        },
    });


    this.timer = setInterval(() => {

    dispatch({
      type: 'products/fetchProductProfile',
      payload: {
          product_id: 1,
        },
    });

    }, 10000);
  }

  render() {
    const { productProfile, loading } = this.props;
    console.log(productProfile)
    return (
      <PageHeaderLayout title="产品详情页">


        <List
          rowKey="id"
          style={{ marginTop: 24 }}
          grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
          loading={loading}
          dataSource={productProfile}
          renderItem={item => (
            <List.Item key={item.id}>

              <Card bordered={false}>
                <DescriptionList size="large" title="基本信息" style={{ marginBottom: 32 }}>
                  <Description term="产品名称">{item.product_name}</Description>
                  <Description term="所属用户">{item.owner}</Description>
                  <Description term="product_key">{item.product_key}</Description>

                  <Description term="产品描述">{item.product_description}</Description>
                </DescriptionList>
                <Divider style={{ marginBottom: 32 }} />
                <DescriptionList size="large" title="状态信息" style={{ marginBottom: 32 }}>
                  <Description term="产品类型">{item.node_type}</Description>
                  <Description term="消息格式">{item.data_format}</Description>
                  <Description term="创建时间">{item.gmt_create}</Description>
                  <Description term="更新时间">{item.gmt_update}</Description>
                  <Description term="备注">无</Description>
                </DescriptionList>
                <Divider style={{ marginBottom: 32 }} />
                
              </Card>

            </List.Item>
          )}
        />

      </PageHeaderLayout>
    );
  }
}
