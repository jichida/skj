import {
    showpopmessage,
    login_request,login_result,login_err,
    logout_request,logout_result,
    loginwithtoken_request,
    inserttopic_request,inserttopic_result,
    getmytopic_request,getmytopic_result,
    gettopiclist_request,gettopiclist_result,
    insertcommentstotopic_request,insertcommentstotopic_result,
    insertcommentstocomments_request,insertcommentstocomments_result,
    lovetopicadd_request,lovetopicadd_result,
    lovetopicunadd_request,lovetopicunadd_result,
    lovecommentsadd_request,lovecommentsadd_result,
    lovecommentsunadd_request,lovecommentsunadd_result,
    payorder_request,
    payorder_result,
    createdevice_request,
    getdevicelist_request,getdevicelist_result,
    deletedevice_request,
    deletedevice_result,
    setuseralerttopicreaded_request,
    setuseralerttopicdeleted_request,
    setuseralerttopicdeleted_result,
    createaddress_request,
    deleteaddress_request,
    editaddress_request,
    getaddresslist_request,

    getnotifymessage_request,
    fillprofile_request,
    findpwd_request,

    getbanner_request,
    getcategory_request,
    getproduct_request,

    mycartaddone_request,
    mycartupdateone_request,
    mycartdelone_request,
    mycartgetall_request,
    mycollectionaddone_request,
    mycollectiondelone_request,
    mycollectiongetall_request,
    myorderaddone_request,
    myorderupdateone_request,
    myorderdelone_request,
    myordergetall_request,
    mycollectionisproductexits_request,

    productcommentsfromproduct_request,
    productcommentaddone_request,
    productcommentsfromproductgetcount_request,

    withdrawcashapplyaddone_request,
    withdrawcashapplyauth_request,

    mycoupongetall_request,

    getnextusers_request,
    getdistsalesorderstat_request,
    getdistsalesorders_request,

    getdistsalesorderdetails_request,
    getpaysign_request,

    getusermoney,
    useraddpoint_request,
    getusergetpointsigntoday_request,
    getuserpointdetails_request,
    loginwithoauth_request,
    oauthbinduser_request,

    setlastreadmsgtime_request,

    feedbackaddone_request,
    getabouthtml_request,

    expressquery_request,

    sendauth_request,sendauth_result,sendauth_err,
    register_request,register_result,register_err,

    queryorderstatusstat_request,

    queryorderstatusstat_result,
    expressquery_result,
    getabouthtml_result,
    setlastreadmsgtime_result,
    loginwithoauth_result,
    serverpush_orderinfo,
    serverpush_usermoney,
    getusergetpointsigntoday_result,
    getpaysign_result,
    serverpush_defaultaddress,
    serverpush_mycartcount,
    getnews_result,

    md_createaddress,
    md_editaddress,
    md_register,
    md_findpwd,
    md_inserttopic,
    md_createdevice_result,
    md_getnotifymessage,
    md_getmytopic,
    md_gettopiclist,
    md_mycartgetall,
    md_mycollectiongetall,
    md_myordergetall,
    md_mycartaddone,
    md_mycartupdateone,
    md_mycartdelone,
    md_mycollectiondelone,
    md_mycollectionisproductexits,
    md_myorderaddone,
    md_myorderupdateone,
    md_productcommentsfromproduct,
    md_productcommentaddone,
    md_productcommentsfromproductgetcount,
    md_withdrawcashapplyaddone,
    md_withdrawcashapplyauth,
    md_mycoupongetall,
    md_getdistsalesorderdetails,
    md_getpaysign,
    md_getuserpointdetails,
    md_oauthbinduser,
    md_feedbackaddone,

    updatedevice_request,
    md_updatedevice_result,

    getsystemconfig_result,
    getnextusers_result,
    getdistsalesorderstat_result,
    getdistsalesorders_result,
    myorderdelone_result,
    mycollectionaddone_result,
    getbanner_result,
    getcategory_result,
    getproduct_result,
    serverpush_useralerttopic,
    serverpush_useralerttopiclist,
    setuseralerttopicreaded_result,
    fillprofile_result,
    getaddresslist_result,
    deleteaddress_result,

    serverpush_devicedata,
    senddevicecmd_request,
    senddevicecmd_result,
    md_useraddpoint_result,

    getnotifymessageone_request,
    getnotifymessageone_result,
    common_err,
    queryuserbalance_request,
    queryuserbalance_result
} from '../actions/index.js';

//接收的对应关系
exports.recvmessagetoresultpair = {
  'payorder_result':payorder_result,
  'setuseralerttopicdeleted_result':setuseralerttopicdeleted_result,
  'queryuserbalance_result':queryuserbalance_result,
  'common_err':common_err,
  'getnotifymessageone_result':getnotifymessageone_result,
  'useraddpoint_result':md_useraddpoint_result,
  'users.sendauth_result':sendauth_result,
  'senddevicecmd_result':senddevicecmd_result,
  'serverpush_devicedata':serverpush_devicedata,
  'device.updatedevice_result':md_updatedevice_result,
  'queryorderstatusstat_result':queryorderstatusstat_result,
  'shop.expressquery_result':expressquery_result,
  'getabouthtml_result':getabouthtml_result,
  'setlastreadmsgtime_result':setlastreadmsgtime_result,
  'loginwithoauth_result':loginwithoauth_result,
  'serverpush_orderinfo':serverpush_orderinfo,
  'serverpush_usermoney':serverpush_usermoney,
  'shop.getusergetpointsigntoday_result':getusergetpointsigntoday_result,

  'serverpush_defaultaddress':serverpush_defaultaddress,
  'getsystemconfig_result':getsystemconfig_result,
  'shop.getnextusers_result':getnextusers_result,
  'shop.getdistsalesorderstat_result':getdistsalesorderstat_result,
  'shop.getdistsalesorders_result':getdistsalesorders_result,
  'serverpush_mycartcount':serverpush_mycartcount,
  'shop.getnews_result':getnews_result,
  'shop.myorderdelone_result':myorderdelone_result,
  'shop.mycollectionaddone_result':mycollectionaddone_result,
  'shop.getbanner_result':getbanner_result,
  'shop.getcategory_result':getcategory_result,
  'shop.getproduct_result':getproduct_result,
  'serverpush_useralerttopic':serverpush_useralerttopic,
  'serverpush_useralerttopiclist':serverpush_useralerttopiclist,
  'setuseralerttopicreaded_result':setuseralerttopicreaded_result,
  'logout_result':logout_result,
  'users.login_result':login_result,
  'fillprofile_result':fillprofile_result,
  'forum.lovetopicadd_result':lovetopicadd_result,
  'forum.lovetopicunadd_result':lovetopicunadd_result,
  'forum.lovecommentsadd_result':lovecommentsadd_result,
  'forum.lovecommentsunadd_result':lovecommentsunadd_result,
  'forum.insertcommentstotopic_result':insertcommentstotopic_result,
  'forum.insertcommentstocomments_result':insertcommentstocomments_result,
  'device.getdevicelist_result':getdevicelist_result,
  'device.deletedevice_result':deletedevice_result,
  'address.getaddresslist_result':getaddresslist_result,
  'address.deleteaddress_result':deleteaddress_result,

  'address.createaddress_result':md_createaddress,
  'address.editaddress_result':md_editaddress,
  'users.register_result':md_register,//<--
  'users.register_err':md_findpwd,//<===
  'forum.inserttopic_result':md_inserttopic,
  'device.createdevice_result':md_createdevice_result,
  'getnotifymessage_result':md_getnotifymessage,
  'forum.getmytopic_result':md_getmytopic,
  'forum.gettopiclist_result':md_gettopiclist,
  'shop.mycartgetall_result':md_mycartgetall,
  'shop.mycollectiongetall_result':md_mycollectiongetall,
  'shop.myordergetall_result':md_myordergetall,
  'shop.mycartaddone_result':md_mycartaddone,
  'shop.mycartupdateone_result':md_mycartupdateone,
  'shop.mycartdelone_result':md_mycartdelone,
  'shop.mycollectiondelone_result':md_mycollectiondelone,
  'shop.mycollectionisproductexits_result':md_mycollectionisproductexits,
  'shop.myorderaddone_result':md_myorderaddone,
  'shop.myorderupdateone_result':md_myorderupdateone,
  'shop.productcommentsfromproduct_result':md_productcommentsfromproduct,
  'shop.productcommentaddone_result':md_productcommentaddone,
  'shop.productcommentsfromproductgetcount_result':md_productcommentsfromproductgetcount,
  'shop.withdrawcashapplyaddone_result':md_withdrawcashapplyaddone,
  'shop.withdrawcashapplyauth_result':md_withdrawcashapplyauth,
  'shop.mycoupongetall_result':md_mycoupongetall,
  'shop.getdistsalesorderdetails_result':md_getdistsalesorderdetails,
  'getpaysign_result':md_getpaysign,
  'shop.getuserpointdetails_result':md_getuserpointdetails,
  'oauthbinduser_result':md_oauthbinduser,
  'app.feedbackaddone_result':md_feedbackaddone,
};

//非验证发送接口
exports.sendmessagefnsz = {
  'getabouthtml':`${getabouthtml_request}`,
  'oauthbinduser':`${oauthbinduser_request}`,
  'loginwithoauth':`${loginwithoauth_request}`,
  'login':`${login_request}`,
  'sendauth':`${sendauth_request}`,
  'register':`${register_request}`,
  'gettopiclist':`${gettopiclist_request}`,
  'getnotifymessageone':`${getnotifymessageone_request}`,
  'getnotifymessage':`${getnotifymessage_request}`,
  'findpwd':`${findpwd_request}`,
  'getbanner':`${getbanner_request}`,
  'getcategory':`${getcategory_request}`,
  'getproduct':`${getproduct_request}`,
  'setlastreadmsgtime':`${setlastreadmsgtime_request}`,
};

//验证发送接口
exports.sendmessageauthfnsz = {
    'payorder':`${payorder_request}`,
    'setuseralerttopicdeleted':`${setuseralerttopicdeleted_request}`,
    'queryuserbalance':`${queryuserbalance_request}`,
    'senddevicecmd':`${senddevicecmd_request}`,
    'updatedevice':`${updatedevice_request}`,
    'queryorderstatusstat':`${queryorderstatusstat_request}`,
    'getmytopic':`${getmytopic_request}`,
    'inserttopic':`${inserttopic_request}`,
    'insertcommentstotopic':`${insertcommentstotopic_request}`,
    'insertcommentstocomments':`${insertcommentstocomments_request}`,
    'lovetopicadd':`${lovetopicadd_request}`,
    'lovetopicunadd':`${lovetopicunadd_request}`,
    'lovecommentsadd':`${lovecommentsadd_request}`,
    'lovecommentsunadd':`${lovecommentsunadd_request}`,
    'createdevice':`${createdevice_request}`,
    'getdevicelist':`${getdevicelist_request}`,
    'deletedevice':`${deletedevice_request}`,

    'createaddress':`${createaddress_request}`,
    'deleteaddress':`${deleteaddress_request}`,
    'editaddress':`${editaddress_request}`,
    'getaddresslist':`${getaddresslist_request}`,
    'fillprofile':`${fillprofile_request}`,
    'logout':`${logout_request}`,
    'setuseralerttopicreaded':`${setuseralerttopicreaded_request}`,

    'mycartaddone':`${mycartaddone_request}`,
    'mycartdelone':`${mycartdelone_request}`,
    'mycartupdateone':`${mycartupdateone_request}`,
    'mycartgetall':`${mycartgetall_request}`,
    'mycollectionaddone':`${mycollectionaddone_request}`,
    'mycollectiondelone':`${mycollectiondelone_request}`,
    'mycollectiongetall':`${mycollectiongetall_request}`,
    'mycollectionisproductexits':`${mycollectionisproductexits_request}`,

    'myorderaddone':`${myorderaddone_request}`,
    'myorderupdateone':`${myorderupdateone_request}`,
    'myorderdelone':`${myorderdelone_request}`,
    'myordergetall':`${myordergetall_request}`,
    'getpaysign':`${getpaysign_request}`,

    'productcommentsfromproduct':`${productcommentsfromproduct_request}`,
    'productcommentaddone':`${productcommentaddone_request}`,
    'productcommentsfromproductgetcount':`${productcommentsfromproductgetcount_request}`,

    'withdrawcashapplyaddone':`${withdrawcashapplyaddone_request}`,
    'withdrawcashapplyauth':`${withdrawcashapplyauth_request}`,

    'mycoupongetall' :`${mycoupongetall_request}`,

    'getnextusers' :`${getnextusers_request}`,
    'getdistsalesorderstat' :`${getdistsalesorderstat_request}`,
    'getdistsalesorders' :`${getdistsalesorders_request}`,
    'getdistsalesorderdetails':`${getdistsalesorderdetails_request}`,

    'getusermoney':`${getusermoney}`,
    'useraddpoint':`${useraddpoint_request}`,
    'getusergetpointsigntoday':`${getusergetpointsigntoday_request}`,
    'getuserpointdetails':`${getuserpointdetails_request}`,
    'feedbackaddone':`${feedbackaddone_request}`,

    'expressquery':`${expressquery_request}`,
};
