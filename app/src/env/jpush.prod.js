import * as xview from './xview/Common';
import {jpushlistenInMessage,jpushpostNotification} from '../actions';

export const cancelJPushAlisa=()=>{
    try{
        xview.cancelJPushAlisa();
    }
    catch(e){

    }

}

export const setJPushAlias = (name)=> {
    //设置jpush名字
    console.log(`设置别名${name}`);
    try{
         xview.jiGuangTuiSong(name);
     }
     catch(e){

     }
}

export const postNotifyFromJPush = (dispatch)=>{
    //未点击推送消息
    window.listenInMessage=(jsonstr)=>{
        let jsonobj = jsonstr;
        try{
            if(typeof jsonobj === 'string'){
                jsonobj = JSON.parse(jsonobj);
            }
        }
        catch(e){

        }
        dispatch(jpushlistenInMessage(jsonobj));
    }
    //点击了推送消息
    window.postNotification=(jsonstr)=>{
        let jsonobj = jsonstr;
        try{
            if(typeof jsonobj === 'string'){
                jsonobj = JSON.parse(jsonobj);
            }
        }
        catch(e){

        }
        dispatch(jpushpostNotification(jsonobj));
    }
}
