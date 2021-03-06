import React, { Component } from 'react';
import WeUI from 'react-weui';
import 'weui';
import '../../../public/react-weui.min.css';
import './myweui.css';
import { connect } from 'react-redux';
import { set_weui } from '../../actions/index.js';
const {
    Toast,
    Dialog,
    ActionSheet
} = WeUI;

const icon = {
    "warning" : "warn",
    "success" : "success-no-circle",
    "loading" : "loading"
}

const tosatDefault = {
    show : false,
    text : "",
    type : ""
}

const confirmDefault = {
    show : false,
    title : "",
    text : "",
    buttonsClose : ()=>{},
    buttonsClick : ()=>{}
}

const alertDefault = {
    show : false,
    title : "",
    text : "",
    buttonsClick : ()=>{}
}


export class Page extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.toast.show && !this.props.toast.show) {
            window.setTimeout(()=> {
                let toast = {
                    show : false,
                    text : "",
                    type : ""
                }
                this.props.dispatch(set_weui({ toast }));
            }, 2000);
        }
    };
    //confirm close
    confirmClose = (confirm,dispatch)=>{
        dispatch(set_weui({ confirm:confirmDefault }));
        if(!!confirm.buttonsClose){
            confirm.buttonsClose();
        }
        
    };
    //confirm click
    confirmClick = (confirm,dispatch)=>{
        dispatch(set_weui({ confirm:confirmDefault }));
        if(!!confirm.buttonsClick){
            confirm.buttonsClick();
        }
        
    };
    //alert click
    alertClick =(alert,dispatch)=>{
        if(alert.hasOwnProperty("buttonsClick")){
            alert.buttonsClick();
        }
        dispatch(set_weui({ alert:alertDefault }));
    };
    render(){
        const {
            toast,
            alert,
            confirm,
            loading,
            action
        } = this.props;
        
        let isshow = toast.show || alert.show || confirm.show || loading.show;


        return (
            <div className="weuiPage" style={ isshow? {bottom: "0px", height : "auto"}: {}}>

                <Toast
                    icon={icon[toast.type]}
                    show={toast.show}
                    >
                    {toast.text}
                </Toast>

                <Dialog
                    id="weuiAlert"
                    type="ios"
                    title={alert.title}
                    buttons={
                        [
                            {
                                type: 'primary',
                                label: "确定",
                                onClick: this.alertClick.bind(this,alert,this.props.dispatch)
                            }
                        ]
                    }
                    show={alert.show}
                    >
                    {alert.text}
                </Dialog>

                <Dialog
                    id="weuiConfirm"
                    type="ios"
                    title={confirm.title}
                    buttons={
                        [
                            {
                                type: 'default',
                                label: "取消",
                                onClick: this.confirmClose.bind(this,confirm,this.props.dispatch)
                            },
                            {
                                type: 'primary',
                                label: "确定",
                                onClick: this.confirmClick.bind(this,confirm,this.props.dispatch)
                            }
                        ]
                    }
                    show={confirm.show}
                    >
                    {confirm.text}
                </Dialog>

                <Toast
                    id="weuiLoading"
                    icon="loading"
                    show={loading.show}>
                    Loading...
                </Toast>


            </div>
        )
    }

}

let data =  ({weui}) =>{
    return { ...weui };
};

Page = connect(data)(Page);

export default Page;
