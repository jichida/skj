import React, { Component, PropTypes } from 'react';
import '../../../public/css/bigimg.css';
import _ from 'lodash'; 
import { connect } from 'react-redux';
import '../../../public/css/addcartdilog.css';
import { 
    uiaddcartdilog,
    mycartaddone_request
} from '../../actions/index.js';


let Page = ({proid, show, number, dispatch, products})=>{

    let hidedilog = ()=>{
        dispatch(uiaddcartdilog({
            addcartdilogshow : false,
            addcartdilogproid : '',
            addcartdilogpronumber : 1
        }));
    }
    //取消冒泡事件
    let stopDefault =(e)=>{
        e.stopPropagation();
    }

    //添加数量
    let addnumver =()=>{
        dispatch(uiaddcartdilog({
            addcartdilogpronumber : ++number
        }));
    }
    //减少数量
    let delnumber =()=>{
        if(number>1){
            dispatch(uiaddcartdilog({
                addcartdilogpronumber : --number
            }));
        }
    }
    //加入购物车
    let addcart =()=>{
        dispatch(mycartaddone_request({
            product: proid,
            number: number
        }));
    }

    let showstyle = show?"addcartdilog":"addcartdilog hide";
    let translatestyle = show?"weui-actionsheet weui-actionsheet_toggle":"weui-actionsheet";
    let proinfo = {};
    if(show){
        proinfo = products[proid];
    }

    return (
        <div className={showstyle} 
             onClick={()=>{hidedilog()}}
             >
            <div 
                className={translatestyle} 
                id="iosActionsheet"
                onClick={(e)=>{stopDefault(e)}}
                >
                <div className="addcartdilogProinfo">
                    <img src={proinfo.picurl} />
                    <div>
                        <span>{proinfo.name}</span>
                        <span>¥ {proinfo.pricenow}</span>
                    </div>
                </div>
                <div className="setnumber">
                    <span>数量</span>
                    <div>
                        <span className="add" onClick={()=>{delnumber()}}>-</span>
                        <span className="input">{number}</span>
                        <span className="del" onClick={()=>{addnumver()}}>＋</span>
                    </div>
                </div>
                <div className="addcartbtn" onClick={()=>{addcart()}}>加入购物车</div>
            </div>
        </div>
    )
};

const mapStateToProps =  ({userlogin, shop}) =>{
  return {...userlogin,...shop};
};
Page = connect(mapStateToProps)(Page);
export default Page;