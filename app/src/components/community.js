import React, { Component, PropTypes } from 'react';
import { Button, Comment, Header, Feed, Icon, Input, Grid, Popup  } from 'semantic-ui-react';
import Lnk from './lnk.js';
import Bigimg from './tools/bigimg.js';

import { connect } from 'react-redux';
import {
    ui_settopiclistinited,
    gettopiclist_request,
    uicommentshow,
    uicommenthide,
    setCommunityListHeight
} from '../actions/index.js';
import '../../public/css/feed.css';
import NavBar from './nav2.js';

import ForumComment from './community_comment.js';
import ForumTopic from './community_topic.js';
import FeedReplyForm from './community_reply.js';
import TopTip from './community_topictip';

import { gettopiclist } from '../actions/sagacallback';
import InfinitePage from './controls/infinitecontrol';


export class Topic extends React.Component {
    render() {
        const {topic,comments} = this.props;
        let commentsco = [];
        let commentslength = topic.comments.length;
        let showcomments = commentslength>0?"commentlistcontent":"commentlistcontent hide";
        let length = commentslength>2?2:topic.comments.length;
        let showmore = commentslength>0?(<div className="comentShowMore" onClick={()=>{this.props.onClickTopic(topic._id);}}>查看更多...</div>) :'';
        for (let i = 0; i<length; i++) {
            let commentid = topic.comments[i];
            commentsco.push(
                <ForumComment 
                    key={commentid}
                    topicid={topic._id}
                    comment={comments[commentid]}
                    showchild={false} />
                );
        }
        return (
            <div>
                <ForumTopic topic={topic} />
                <div className={showcomments}>
                    <Comment.Group>
                        {commentsco}
                        {showmore}
                    </Comment.Group>
                </div>
            </div>);
    }
}
const mapStateToPropsTopic = ({forum:{comments,topics}},props) => {
     let topic = topics[props.itemid];
     return {comments,topic};
}
Topic = connect(mapStateToPropsTopic)(Topic);


let ToptipCo = (props)=>{
    const {useralerttopiclist,users,useralerttopics} = props;
    let ToptipCo = null;
    if(useralerttopiclist.length > 0){
        let useralerttopicnew = useralerttopics[useralerttopiclist[0]]; //选取最新一条
        let user = users[useralerttopicnew.userfrom];
        let toptipData = {
             avatar: user.profile.avatar,
             text: `${useralerttopiclist.length}条新消息`
        };
        ToptipCo = <TopTip data={toptipData} useralerttopic={useralerttopicnew} frompage='nextpage'/>;
     }
    return (<div>{ToptipCo}</div>);
}
const mapStateToPropsToptip = ({forum:{useralerttopiclist,users,useralerttopics}}) => {
     return {useralerttopiclist,users,useralerttopics};
}
ToptipCo = connect(mapStateToPropsToptip)(ToptipCo);



export class Page extends React.Component {

    componentWillMount() {
        this.props.dispatch(uicommenthide());
        console.log("--------->comm:componentWillMount");
    }

    onClickPage = ()=> {//点击空白处，隐藏?如何判断点击空白
        this.props.dispatch(uicommenthide());
    };
    onClickTopic = (topicid)=> {//点击空白处，隐藏?如何判断点击空白
        this.props.history.push(`/communityinfo/${topicid}`);
    };
    stopDefault = (e)=> {
        e.stopPropagation
    };

    //新建帖子
    addNewCommunity = (topicid)=> {
        this.props.history.push(`/communityinfo/${topicid}`);
    };

    addNewCommunityHotlnk = ()=>{
        this.props.history.push('/newtopic');
    };

    updateContent = (item)=> {
        return  (
            <Topic 
                key = {`topic${item._id}`} 
                itemid = {item._id}
                onClickTopic = {this.onClickTopic}
            />
        );
    }

    render() {

        const {communityListHeight,iscommentshow,bigimglist,bigimgshow,bigimgindex} = this.props;

        return (
            <div className="feedPage">
                <div className="PageHead">
                    <span className="title">圈子</span>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign='right'>
                                <Popup
                                    trigger={
                                        <img src="img/head/1.png" />
                                    }
                                    position='top right'
                                    on='click'
                                    hideOnScroll
                                    >
                                    <Popup.Content>
                                        <div className="communityMoreLnk">
                                            <Lnk value="" url="/newtopic" {...this.props}>
                                                <Icon name="add circle"/>
                                                <span>发布</span>
                                            </Lnk>
                                            <Lnk value="" url="/mytopiclist" {...this.props}>
                                                <Icon name="commenting"/>
                                                <span>我的发布</span>
                                            </Lnk>
                                        </div>
                                    </Popup.Content>
                                </Popup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <Icon name="add circle" color='blue' size='huge' className="addcommunityHotlnk"
                      onClick={this.addNewCommunityHotlnk.bind(this)}
                    />
                <div onClick={this.onClickPage}>
                    <ToptipCo />
                </div>
                <div className="tc" onClick={this.onClickPage} style={{height:communityListHeight+"px"}}>
                    <InfinitePage
                        pagenumber = {16}
                        updateContent= {this.updateContent} 
                        queryfun= { gettopiclist }
                        listheight= { communityListHeight }
                        sort = {{created_at: -1}}
                        query = {{}}
                    />
                </div>
                <div onClick={this.stopDefault}>
                    {iscommentshow ? <FeedReplyForm /> : null}
                </div>
                <Bigimg imglist={bigimglist} showindex={bigimgindex} show={bigimgshow} />
            </div>);
    }
}

const mapStateToProps = ({forum:{useralerttopiclist,iscommentshow,bigimglist,bigimgshow,bigimgindex}}) => {
    let communityListHeight = useralerttopiclist.length > 0?window.innerHeight-140:window.innerHeight-98;
    //所有使用到的属性列表：bigimgindex/iscommentshow/communityListHeight/useralerttopiclist
    return {communityListHeight,iscommentshow,bigimglist,bigimgshow,bigimgindex};
}
Page = connect(mapStateToProps)(Page);
export default Page;

// 回复自己帖子？
// 点赞自己帖子?
// 或者回复自己评论？
// 点赞自己评论?
//publish:自己帖子id,自己帖子评论id
// let UserAlertTopicSchema = new Schema({
//     creator:{ type: Schema.Types.ObjectId, ref: 'User' }, //提醒谁看
//     type:String,//topiclove,topiccomment,commentlove,commentcomment,
//     topicself:{ type: Schema.Types.ObjectId, ref: 'Topic' },//针对哪条帖子
//     commentself:{ type: Schema.Types.ObjectId, ref: 'Comment' },//针对那条评论
//     comment:{ type: Schema.Types.ObjectId, ref: 'Comment' },//新发的评论
//     userfrom:{ type: Schema.Types.ObjectId, ref: 'User' },//来自用户
//     created_at: Date,//发表时间
// });