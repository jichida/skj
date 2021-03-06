import React, { Component } from 'react';
import NavBar from './nav.js';
import { Input, Button, Select } from 'semantic-ui-react';
import '../../public/css/myprofile.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    myOrderList_filler_set,
    share_data_updata,
    getusergetpointsigntoday_request,
    useraddpoint_request,
    queryorderstatusstat_request,
    setsharesettingcur
} from '../actions';
import _ from "lodash";
import {setbackhandler,removebackhandler} from '../env/android';
export class Page extends Component {

    componentWillMount () {
        //判断今天是否签到
        this.props.dispatch(setsharesettingcur(this.props.sharesetting));
        this.props.dispatch(getusergetpointsigntoday_request({}));
        this.props.dispatch(queryorderstatusstat_request({}));
        //queryorderstatusstat_request
    };

    onClickPage = (name)=> {
        this.props.history.push(name);
    };

    handleOrderClick = (status) => {
        this.props.dispatch(myOrderList_filler_set(status));
        this.onClickPage("/myorder");
    };
    componentWillUnmount() {

    }
    showShare =()=>{
        let oldhandlerbackfn = setbackhandler(()=>{
          this.props.dispatch(share_data_updata(false));
          setbackhandler(oldhandlerbackfn);
        });
        this.props.dispatch(share_data_updata(true));
    }

    signAdd =(reason)=>{
        this.props.dispatch(useraddpoint_request({reason}));
        setTimeout(()=>{
            this.props.dispatch(getusergetpointsigntoday_request({}));
        },1500)
    }

    render(){
        const { orderstatus,loginsuccess } = this.props;
        return (
            <div className="myProfilePage">
                <div className="headCont">
                {
                    loginsuccess?(
                    <div className="userInfo" onClick={()=>{this.onClickPage('/userinfo')}}>
                        <img src={this.props.profile.avatar} className="avatar"/>
                        <span className="username">{this.props.profile.nickname}</span>
                        <span className="usertype">{this.props.usertype}</span>
                    </div>):
                    (<div className="userInfo" onClick={()=>{this.onClickPage('/login')}}>
                        <img src="img/myprofile/1.png" className="avatar"/>
                        <span className="username">未登录</span>
                        <span className="usertype"></span>
                    </div>)
                }
                    <div className="userCode">我的积分 <span>{this.props.point}</span></div>
                    <div className="userMessageLnk"  onClick={()=>{this.onClickPage('/mymessage')}}>
                        <img src="img/shuikj_3.png"/>
                        {this.props.newmsgnumber>0?(
                            <span>{this.props.newmsgnumber}</span>
                        ):""}
                    </div>
                    {!this.props.isusergetpointsigntoday?(
                        <div className="signDom">
                            <span className="lnk" onClick={()=>{this.signAdd("签到")}}>签到</span>
                            <span>领积分</span>
                        </div>
                    ):""}

                    <div className="myorderstitle">
                        <span>我的订单</span>
                        <span onClick={()=>{this.handleOrderClick('全部')}}>全部订单</span>
                    </div>
                </div>
                <div className="myProfileBannerCont">
                    <div className="l1con">
                        
                        <div className="l2">
                            <div onClick={()=>{this.handleOrderClick('未支付')}}>
                                <img src="img/shuikj_7.png"/>
                                <span>待付款</span>
                                {orderstatus['未支付']>0&&loginsuccess?(<i>{orderstatus['未支付']}</i>):""}
                            </div>
                            <div onClick={()=>{this.handleOrderClick('待发货')}}>
                                <img src="img/shuikj_8.png"/>
                                <span>待发货</span>
                                {orderstatus['待发货']>0&&loginsuccess?(<i>{orderstatus['待发货']}</i>):""}
                            </div>
                            <div onClick={()=>{this.handleOrderClick('待收货')}}>
                                <img src="img/shuikj_9.png"/>
                                <span>待收货</span>
                                {orderstatus['待收货']>0&&loginsuccess?(<i>{orderstatus['待收货']}</i>):""}
                            </div>
                            <div onClick={()=>{this.handleOrderClick('已完成')}}>
                                <img src="img/shuikj_10.png"/>
                                <span>已完成</span>
                                {orderstatus['已完成']>0&&loginsuccess?(<i>{orderstatus['已完成']}</i>):""}
                            </div>
                        </div>
                    </div>
                    <div className="llcont">
                        <div className="ll">
                            <div onClick={()=>{this.onClickPage('/distribution')}}>
                                <img src="img/shuikj_30.png"/>
                                <span>我的分销</span>
                            </div>
                            <div onClick={()=>{this.onClickPage('/myprofit')}}>
                                <img src="img/shuikj_31.png" />
                                <span>我的钱包</span>
                            </div>
                            <div onClick={()=>{this.onClickPage('/integral')}}>
                                <img src="img/shuikj_32.png" />
                                <span>积分明细</span>
                            </div>
                        </div>
                        <div className="ll">
                            <div onClick={()=>{this.onClickPage('/mycode')}}>
                                <img src="img/shuikj_33.png" />
                                <span>推广产品</span>
                            </div>
                            <div onClick={()=>{this.showShare()}}>
                                <img src="img/shuikj_34.png" />
                                <span>分享赚钱</span>
                            </div>
                        </div>

                        <div className="ll">
                            <div onClick={()=>{this.onClickPage('/mycollection')}}>
                                <img src="img/shui_06.png"/>
                                <span>我的收藏</span>
                            </div>
                            <div onClick={()=>{this.onClickPage('/mycoupon')}}>
                                <img src="img/shui_08.png"/>
                                <span>优惠券</span>
                            </div>
                            <div onClick={()=>{this.onClickPage('/addresslist')}}>
                                <img src="img/shui_10.png"/>
                                <span>地址管理</span>
                            </div>
                        </div>
                        <div className="ll">
                            <div onClick={()=>{this.onClickPage('/settings')}}>
                                <img src="img/shui_03.png"/>
                                <span>设置</span>
                            </div>
                            <div onClick={()=>{this.onClickPage('/feedback')}}>
                                <img src="img/shui_12.png"/>
                                <span>意见反馈</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
}

const mapStateToProps =  ({userlogin,app:{newmsgnumber,memberlevelsetting,sharesetting}}) =>{
    let usertype = "";
    let usertypeArry = [];
    _.map(memberlevelsetting, (typepoint, index)=>{
        let s = {};
        s.number = typepoint;
        s.name = index;
        usertypeArry.push(s);
    })
    usertypeArry = _.sortBy(usertypeArry, ['number']);
    _.forEach(usertypeArry, function(value) {
        if(userlogin.point>=value.number){
            usertype = value.name;
        }
    });
    let userlogins = {...userlogin}
    return {...userlogins,newmsgnumber,usertype,sharesetting};
};
Page = withRouter(Page);
export default connect(
    mapStateToProps
)(Page);
