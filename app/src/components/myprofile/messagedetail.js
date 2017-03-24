/**
 * Created by wangxiaoqing on 2017/3/25.
 */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


export class Page extends React.Component {

    componentWillMount () {
    }
    onClickBack(){
        this.props.history.goBack();
    }
    componentWillUnmount () {

    }
    render() {
        const {notifymessageitem} = this.props;
        if (typeof notifymessageitem.created_at === 'string') {
            notifymessageitem.created_at = new Date(Date.parse(notifymessageitem.created_at));
        }
        return (<div className="items" >
            <span onClick={this.onClickBack.bind(this)}>返回</span>

                        <div className="tt">{notifymessageitem.messagetitle}</div>
                    <div className="cont">{notifymessageitem.messagecontent}</div>
                    <div className="lnk">
                        <span>{moment(notifymessageitem.created_at).format("MM月DD日 HH时ss分")}</span>


            </div>
        </div>);
    }
}




const mapStateToProps =  ({notifymessage}, props) =>{
    let msgid = props.match.params.msgid;
    let notifymessageitem = notifymessage.mynotifymessages.entities.notifymessages[msgid];
    return {notifymessageitem};
};

export default connect(
    mapStateToProps,
)(Page);