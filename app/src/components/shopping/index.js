/*
 * 商城首页
 * */
import React, { Component, PropTypes } from 'react';
import { Button, Comment, Header, Feed, Icon, Input  } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash'; 
import { Swiper, Slide } from 'react-dynamic-swiper';
import '../../../node_modules/react-dynamic-swiper/lib/styles.css';
import '../../../public/css/shopping.css';
import {withRouter} from 'react-router-dom';
import {
    search_shoptxt,
    mycartaddone_request,
    mycartgetall,
    uiaddcartdilog
} from '../../actions';
import Addcartdilog from './addcartdilog.js';

let swiperOptions = {
    navigation: false,
    pagination: true,
    scrollBar: false
};

let Page = (props) => {

    let showaddcartdilog =(e, proid)=>{
        e.stopPropagation(e);
        props.dispatch(uiaddcartdilog({
            addcartdilogshow : true,
            addcartdilogproid : proid
        }));
    }

    let onClickPage = (e,name)=> {
        e.stopPropagation(e);
        props.history.push(name);
    };
    let shopcategorylist2ProList =(categoryid)=> {
        let products = [];
        _.map(props.products,(product,productid)=>{
            if(product.categoryid === categoryid){
                products.push(product);
            }
        });
        return products;
    }
    //加入购物车
    let addShoppingCart =(e, pro)=>{
        // e.stopPropagation(e);
        // props.dispatch(mycartaddone_request({
        //     product:pro._id
        // }));  
    }
    //取消时间冒泡
    let stopDefault =(e)=>{
        e.stopPropagation
    }
    //let proid = this.props.match.params.id;
    let shoppingBanner;
    if(props.shopbanners.length > 0){
        shoppingBanner =   (<div className="shoppingBanner">
                    <Swiper
                        swiperOptions={{slidesPerView: 'auto'}}
                        {...swiperOptions}>
                        {_.map(props.shopbanners, (bannerid,index)=>{
                            return (
                                <Slide key={index} className="Demo-swiper__slide">
                                    <img src={props.banners[bannerid].picurl} />
                                </Slide>
                            )
                        })}
                    </Swiper>
                </div>);
    }
    let shoppingNews;
    if(props.news.length > 0){
        shoppingNews = (<div className="shoppingNews">
                        <Swiper
                            swiperOptions={{
                                slidesPerView: 'auto',
                                pagination: '.swiper-pagination',
                                direction: 'vertical',
                                pagination : false,
                                loop: true,
                                autoplay : 5000,
                                scrollBar: false
                            }}
                            navigation={false}
                            >
                            {_.map(props.news, (newsinfo,index)=>{
                                return (
                                    <Slide key={newsinfo._id} className="Demo-swiper__slide" style={{height:"42px"}}>
                                        <span>{newsinfo.textname}</span>
                                    </Slide>
                                )
                            })}
                        </Swiper>
                    </div>);
    }
    return (
        <div className="shoppingPage">
            <div className="shoppingHead">
                <Input placeholder="请输入关键字" value={props.searchtxt} onClick={(e)=>{
                    onClickPage(e,'/shoppingprolist/search');
                }} />
                <img src="img/shopping/10.png"/>
            </div>
            <div className="shoppingBody">
                {shoppingBanner}
                <div className="listTitle" style={{height:"42px"}}>
                    <img src="img/shopping/1.png"/>
                    {shoppingNews}
                </div>
                <div className="shoppingBanner2">
                    {
                        _.map(props.categories, (category, index)=>{
                            if(category.name=="套餐"){
                                return (
                                    <img src="img/shopping/2.png" onClick={(e)=>{onClickPage(e, `/shoppingpackage/${category._id}`)}} />
                                )
                            }
                            if(category.name=="一体机"){
                                return (
                                    <img src="img/shopping/3.png" onClick={(e)=>{onClickPage(e, `/shoppingpackage/${category._id}`)}}/>
                                )
                            }
                        })
                    }
                </div>
                <div className="shoppingBannerLnk">
                    {_.map(props.shopcategorylist1, (categoryid, index)=>{
                        let category = props.categories[categoryid];
                        return (
                            <span key={index} onClick={(e)=>{onClickPage(e,`/shoppingprolist/${categoryid}`)}}>
                                <img src={category.picurl}/>
                                {category.name}
                            </span>
                        )
                    })}
                </div>
                {_.map(props.shopcategorylist2, (categoryid, index)=>{
                    let category = props.categories[categoryid];
                    let prolist = shopcategorylist2ProList(categoryid);
                    return (
                        <div key={index}>
                            <div className="listTitle2" onClick={(e)=>{onClickPage(e,`/shoppingprolist/${categoryid}`)}}>
                                <span>{category.name}</span>
                                <span>更多 <Icon name="angle right"/></span>
                            </div>
                            <div className="proList">
                                {_.map(prolist, (product,index)=>{
                                    return (
                                        <div key={index} className="li" onClick={(e)=>{onClickPage(e,`/shoppingproinfo/${product._id}`)}}>
                                            <img src={product.picurl}/>
                                            <span className="name">{product.name}</span>
                                            <span className="price">
                                                <span>{product.pricenow}</span>
                                                <img src='img/shopping/9.png' onClick={(e)=>{showaddcartdilog(e,product._id)}}/>
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <Addcartdilog show={props.addcartdilogshow} proid={props.addcartdilogproid} number={props.addcartdilogpronumber} />
        </div>
    );
}

let mapStateToProps = ({shop,app}) => {
    return {...shop,...app};
}

Page = connect(mapStateToProps)(Page);
Page = withRouter(Page);
export default Page;

