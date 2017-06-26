export const getssid = (fncallback)=>{
   fncallback({
       code:'0',
       message:'WB123',
   });
}

export const senddata = (values,fncallback)=>{
  /*
  values期望格式：ssid，password
  */
  console.log(`values:${JSON.stringify(values)}`);
  let retjson = {
    code:'0',
    messgae:'获取成功',
    data:[
      {
        name:'模块1',
        mac:'F8:00:20:0A:8C:6D',
        ip:'192.168.9.3'
      },
      {
        name:'Wi-Fi模块2',
        mac:'08:00:20:0A:8C:4C',
        ip:'192.168.9.4'
      },
    ]
  };
  fncallback(retjson);
};
