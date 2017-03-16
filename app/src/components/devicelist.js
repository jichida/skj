import React, { Component, PropTypes } from 'react';
import { Input, List, Radio, Button, Icon } from 'semantic-ui-react'
import NavBar from './nav.js';
import Swipeout from 'rc-swipeout';
import 'rc-swipeout/assets/index.css';
import { connect } from 'react-redux';
import {getdevicelist_request,deletedevice_request} from '../actions/index.js';
import {deletedevice_confirmpopshow,deletedevice_confirmpophide} from '../actions/index.js';
import { Confirm } from 'semantic-ui-react';

const DeviceItem=(props)=>{
  const {deviceitem} = props;
  let onDelete=()=>{
    props.onClickDelete(deviceitem);
  };

  return (
  <List.Item key={deviceitem._id}>
    <Swipeout autoClose={true}
    right={[
      {
        text: '删除',
        onPress:onDelete,
        style: { backgroundColor: 'red', color: 'white' }
      }
    ]}
    onOpen={() => console.log('open')}
    onClose={() => console.log('close')}
  >
    <div style={{height: 44}}>
      <div className="tit">
          <span>{deviceitem.devicename}</span>
          <span>{deviceitem.devicebrand}</span>
      </div>
      <div className="address">
          <span>{deviceitem.devicemodel}</span>
      </div>
    </div>
  </Swipeout>
  </List.Item>);
}

export class Page extends React.Component {

  componentWillMount () {
      let page = 1;
      let perpagenumber = 10;
      let payload = {
        query:{},
        options:{
          page: page,
          limit: perpagenumber,
        }
      };
      this.props.dispatch(getdevicelist_request(payload));
  }
  onClickReturn =()=>{
    this.props.history.goBack();
  }
  onClickDelete =(deviceitem)=>{
    let poptitle = '确认删除';
    let popmsg = `你确认要删除设备:${deviceitem.devicename}吗?`;
    this.props.dispatch(deletedevice_confirmpopshow({poptitle:poptitle,popmsg:popmsg,deleteingdevice:deviceitem}));
  }
  onClickConfirmOK=()=>{
    this.props.dispatch(deletedevice_request({_id:this.props.deleteingdevice._id}));
    this.props.dispatch(deletedevice_confirmpophide());
  }
  onClickConfirmCancel=()=>{
    this.props.dispatch(deletedevice_confirmpophide());
  }
  onClickNewDevice =()=>{
    this.props.history.push('/newdevice');
  }
  render() {
    console.log("devicelist:" + JSON.stringify(this.props));

    let itemsco = [];
    this.props.mydevicelist.forEach((deviceitem)=>{
      itemsco.push(<DeviceItem key={deviceitem._id} deviceitem={deviceitem} onClickDelete={this.onClickDelete} />);
    });
    return (
        <div>
          <NavBar lefttitle="返回" title="设备列表" onClickLeft={this.onClickReturn}
           righttitle='新建'  onClickRight={this.onClickNewDevice} />
              <List selection>
              {itemsco}
              </List>
              <Confirm
                header={this.props.poptitle}
                content={this.props.popmsg}
                open={this.props.isconfirmshow}
                onCancel={this.onClickConfirmCancel}
                onConfirm={this.onClickConfirmOK}
              />
        </div>);

  }
}

const mapStateToProps = ({device}) => {
  return device;
}
Page = connect(mapStateToProps)(Page);
export default Page;