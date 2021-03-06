import React from 'react';
import { List, EmailField } from 'admin-on-rest/lib/mui';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import {
  CreateButton,
  RichTextField,
  NumberInput,
  Create,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  Show,
  SimpleShowLayout,
  ShowButton,
  DateInput,
  LongTextInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  SelectInput,
  BooleanInput,
  BooleanField,
  NumberField
} from 'admin-on-rest/lib/mui';

import { Field,FieldArray } from 'redux-form';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TimePicker from 'material-ui/TimePicker';

import moment from 'moment';


const CouponcreateTitle = ({ record }) => {
   return <span>新建 优惠券</span>;
};
const CouponlistCreate = (props) => (
       <Create {...props} title={<CouponcreateTitle />} >
           <SimpleForm>
               <TextInput label="名字" source="name" />
               <DateInput label="过期时间"  source="expdate" />
               <TextInput label="价格条件"  source="pricecondition" />
               <NumberInput label="最高抵扣"  source="pricediscount" />
           </SimpleForm>
       </Create>
);

const CouponlistTitle = ({ record }) => {
    console.log("record=>" + JSON.stringify(record));
   return <span>编辑 优惠券</span>;
};

const CouponlistEdit = (props) => {
      return (<Edit title={<CouponlistTitle />} {...props}>
          <SimpleForm>
               <TextInput label="名字" source="name" />
               <DateInput label="过期时间"  source="expdate" />
               <TextInput label="价格条件"  source="pricecondition" />
               <NumberInput label="最高抵扣"  source="pricediscount" />
          </SimpleForm>
      </Edit>);

};


const CouponlistShow = (props) => (
       <Show title={<CouponlistTitle />} {...props}>
           <SimpleShowLayout>
               <TextField source="id" />
               <TextField label="名字" source="name" />
               <DateField label="过期时间" source="expdate"  />
               <TextField label="价格条件"  source="pricecondition" />
               <TextField label="最高抵扣"  source="pricediscount" />
           </SimpleShowLayout>
       </Show>
);



const CouponlistList = (props) => (//
     <List title="优惠券列表" {...props} >
        <Datagrid>
            <TextField label="名字" source="name" />
            <DateField label="过期时间" source="expdate"  />
            <NumberField label="价格条件" source="pricecondition" locales="zh-cn"  options={{ style: 'currency', currency: 'CNY' }} elStyle={{ fontWeight: 'bold' }}/>
            <NumberField label="最高抵扣" source="pricediscount" locales="zh-cn" options={{ style: 'currency', currency: 'CNY' }} elStyle={{ fontWeight: 'bold' }}/>
        <EditButton />
        </Datagrid>
    </List>
);


export  {CouponlistList,CouponlistCreate,CouponlistEdit,CouponlistShow};
