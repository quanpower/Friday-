import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Table, Icon, Divider } from 'antd';
import numeral from 'numeral';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import Authorized from '@/utils/Authorized';
import styles from './Monitor.less';

const { Secured } = Authorized;

const targetTime = new Date().getTime() + 3900000;

// use permission as a parameter
const havePermissionAsync = new Promise(resolve => {
  // Call resolve on behalf of passed
  setTimeout(() => resolve(), 1000);
});

@connect(({ survey, loading }) => ({
  survey,
  loading: loading.effects['survey/fetchDeviceDaqRecord'],
}))

export default class Monitor extends PureComponent {
  componentDidMount() {

    console.log('monitor this.props:')
    console.log(this.props);
    const device_id = this.props.match.params.device_id
    console.log(device_id);

    this.props.dispatch({
        type: 'survey/fetchDeviceDaqRecord',
        payload: {
          device_id: device_id,
        },
      });

    this.timer = setInterval(() => {

      this.props.dispatch({
        type: 'survey/fetchDeviceDaqRecord',
        payload: {
          device_id: device_id,
        },
      });
    }, 10000);
  }


  render() {
    const { survey, loading } = this.props;
    const { recordColumns, deviceDaqRecord } = survey;


    return (
      <Fragment>
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card title="历史记录" bordered={false}>
              <Row>
              <Table columns={recordColumns} dataSource={deviceDaqRecord} />
              </Row>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}