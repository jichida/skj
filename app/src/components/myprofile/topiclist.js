import React, { Component, PropTypes } from 'react';
import NavBar from '../nav.js';
import { Input, Button, Menu, Icon } from 'semantic-ui-react';
import '../../../public/css/mytopiclist.css';
import Bigimg from '../tools/bigimg.js';
import { InfiniteLoader, List } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import { connect } from 'react-redux';
import moment from 'moment';
import {ui_setmytopiclistinited,getmytopic_request} from '../../actions';
import { uicommentimg } from '../../actions/index.js';

let TopicInfo = (props)=>{
    const {iteminfo, dispatch} = props;
    let piccos = [];
    let pics = iteminfo.picurl;
    //点击显示大图
    let clickimg = (pic, index)=>{
        let imgObj = {
          bigimgshow : true,
          bigimglist : pic,
          bigimgindex : index
        };
        dispatch(uicommentimg(imgObj));
    }
    pics.forEach((picurl,index)=>{
        piccos.push(<div key={index}><img src={picurl} onClick={()=>{clickimg(iteminfo.picurl, index)}}/></div>);
    });
    return (
        <div className="li" onClick={props.onClick}>
            <div className="title"></div>
                <div className="content">
                    <div>{iteminfo.title}</div>
                    <div className="imglist">
                        {piccos}
                    </div>
                </div>
                <div className="lnk">
                    <div>{moment(iteminfo.created_at).format("MM月DD日 HH时mm分")}</div>
                    <div className="myCommentLnk">
                        <div className="lnkAddCommunity" >
                        <Icon name="commenting outline"/>
                        {iteminfo.comments.length}
                    </div>
                    <div className="lnkZhan">
                        <Icon name="thumbs outline up"/>
                        {iteminfo.loves.length}
                    </div>
                </div>
            </div>
        </div>
    );
}

class Page extends Component {
    componentWillMount () {
        this.props.dispatch(ui_setmytopiclistinited(true));
        let queryobj = {};
        this.props.dispatch(getmytopic_request({
            query:queryobj,
            options:{
                sort:{created_at:-1},
                offset: 0,
                limit: 10,
            }
        }));
    }
    onClickReturn =()=>{
        this.props.history.goBack();
    };

    isRowLoaded = ({ index })=> {
        return (this.props.mytopiclist.length > index);
    }

    loadMoreRows= ({ startIndex, stopIndex })=> {
        let queryobj = {};
        this.props.dispatch(getmytopic_request({
            query:queryobj,
            options:{
                sort:{created_at:-1},
                offset: startIndex,
                limit: (stopIndex-startIndex)+1,
            }
        }));

    }

    onClick =(iteminfo)=>{
        console.log(JSON.stringify(iteminfo));
        this.props.history.push(`/communityinfo/${iteminfo._id}`);
    }
    rowRenderer= ({ key, index, style})=> {
        if(this.isRowLoaded({index})){
            let topicid = this.props.mytopiclist[index];
            let iteminfo = this.props.topics[topicid];

            if (typeof iteminfo.created_at === 'string') {
                iteminfo.created_at = new Date(Date.parse(iteminfo.created_at));
            }
            return (
                <TopicInfo 
                dispatch={this.props.dispatch}
                key={`mytopic${key}`} 
                onClick={()=>{this.onClick(iteminfo);}}
                iteminfo={iteminfo}/>
            );

        }
        return (<div key={key}>loading...</div>);

    }


    render() {
        //const { activeItem } = this.state;
        return (
            <div className="myTopicListPage" style={{height:window.innerHeight+"px"}}>
                <NavBar lefttitle="返回" title="我的帖子" onClickLeft={this.onClickReturn} />
                <div className="cont">
                    <InfiniteLoader
                        isRowLoaded={this.isRowLoaded}
                        loadMoreRows={this.loadMoreRows}
                        rowCount={this.props.remoteRowCount}
                    >
                        {({ onRowsRendered, registerChild }) => (
                            <List
                                height={this.props.mytopiclist.length*207}
                                onRowsRendered={onRowsRendered}
                                ref={registerChild}
                                rowCount={this.props.mytopicremoteRowCount}
                                rowHeight={207}
                                rowRenderer={this.rowRenderer}
                                width={window.innerWidth}
                            />
                        )}
                    </InfiniteLoader>
                </div>
                <Bigimg imglist={this.props.bigimglist} showindex={this.props.bigimgindex} show={this.props.bigimgshow} />
            </div>
        );
    }
}

const mapStateToProps = ({forum,app}) => {
    return {...forum,...app};
}
Page = connect(mapStateToProps)(Page);
export default Page;