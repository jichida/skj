export default {
  pos:{
    configuration: '偏好',
    language:'语言',
    theme: {
        name: '皮肤',
        light: 'Clair',
        dark: 'Obscur',
    },
  },
  resources: {
    devicedatahistory:{
      name: '设备历史数据 |||| 设备历史数据',
      fields:{
        keyname:'设置类型',
      }
    },
    about:{
      name: '关于信息设置 |||| 关于信息设置',
      fields:{
        keyname:'设置类型',
      }
    },
    mycouponsbatch:{
      name:'批量优惠券 |||| 批量优惠券',
      fields:{
        creators:'所属用户',
      }
    },
    baseinfo:{
      name: '基本信息 |||| 基本信息',
    },
    forum:{
      name: '圈子管理 |||| 圈子管理',
    },
    usermgr:{
      name: '用户管理 |||| 用户管理',
    },
    banner:{
      name: '广告编辑 |||| 广告编辑',
      fields:{
        productid:'产品',
      },
    },
    device:{
      name: '设备管理 |||| 设备管理',
      fields:{
        type:'类型',
        name:'名字',
        typevol:'流量',
        typeday:'天数',
        t:'总数',
        v:'当前值',
        ln:'ln',
        lx:'lx',
        l0:'l0'
      }
    },
    realtimedata:{
      name: '设备实时数据 |||| 设备实时数据',
      fields:{
        name:'名字',
        leftpecent:'剩余百分比',
        leftday:'剩余天数'
      }
    },
    product:{
      name: '产品管理 |||| 产品管理',
      fields:{
        categoryid:'类别',
      },
      notification:{
        enable_success:'上架成功',
        enable_error:'上架失败',
        disable_success:'下架成功',
        disable_error:'下架失败',
      }
    },
    category:{
      name: '类别管理 |||| 类别管理',
      fields:{
        product:'产品'
      }
    },
    express:{
      name: '快递管理 |||| 快递管理',
    },
    topic:{
      name: '圈子帖子管理 |||| 圈子帖子管理',
      tabs:{
        basic:'基本信息',
        comment:'评论信息'
      },
      notification:{
        visiable_success:'设置可见成功',
        visiable_error:'设置可见失败',
        invisiable_success:'设置不可见成功',
        invisiable_error:'设置不可见失败',
      }
    },
    comments:{
      name: '圈子评论管理 |||| 圈子评论管理',
       fields:{
          id:'评论id',
          title:'评论内容',
          creator:'评论用户',
          created_at:'评论时间'
       }
    },
    notifymessage:{
      name: '通知消息 |||| 通知消息',
    },
    feedback:{
      name: '用户反馈 |||| 用户反馈',
    },
    coupon:{
      name: '优惠券管理 |||| 优惠券管理',
    },
    mycoupon:{
      name: '用户优惠券管理 |||| 用户优惠券管理',
      fields:{
        coupon:'优惠券名',
        creator:'目标用户',
      }
    },
    user:{
      name: '用户管理 |||| 用户管理',
    },
    news:{
      name: '动态管理 |||| 动态管理',
      fields:{
        productid:'产品',
      },
    },
    withdrawcash:{
      name: '提现管理 |||| 提现管理',
    },
    order:{
      name: '订单管理 |||| 订单管理',
      fields:{
        orderstatus:'订单状态',
        paystatus:'支付状态',
        creator:'关联用户',
        expressid:'选择快递公司(仅设为可见的快递公司才会列出)',
        expresscode:'快递公司编码',
        orderprice:'商品总额',
        realprice:'实付价',
        couponprice:'优惠价抵扣',
        pointprice:'积分抵扣',
        productname:'产品名',
        productnumber:'购买数量',
        productprice:'产品单价',
        producttotalprice:'产品总价'
      }
    },
    systemconfig:{
      name: '系统配置 |||| 系统配置',
      fields:{
        productcategoryid1:'显示在商城首页的套餐(分类）',
        productcategoryid2:'显示在商城首页的商用一体机(分类）',
      },
      tabs:{
        shop:'商城设置',
        device:'设备设置'
      }
    },
  }

};
