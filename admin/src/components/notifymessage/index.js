import React from 'react';
import { List, EmailField } from 'admin-on-rest/lib/mui';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import {
    CreateButton
    ,RichTextField, 
    NumberInput,
    Edit, 
    SimpleForm, 
    DisabledInput, 
    TextInput,  
    Create,
    Show,
    SimpleShowLayout,
    BooleanInput,
    ShowButton,
    DateInput, 
    LongTextInput, 
    ReferenceManyField, 
    Datagrid, 
    TextField, 
    DateField, 
    EditButton
} from 'admin-on-rest/lib/mui';

import RichTextInput from '../controls/richtoolbar.js';

//import RichTextInput from 'aor-rich-text-input';

import { Field,FieldArray } from 'redux-form';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TimePicker from 'material-ui/TimePicker';
import moment from 'moment';

const NotifymessagecreateTitle = ({ record }) => {
   return <span>新建 系统消息</span>;
};
const NotifymessageCreate = (props) => (
       <Create {...props} title={<NotifymessagecreateTitle />} >
           <SimpleForm>
              <TextInput label="标题" source="messagetitle" />
              <RichTextInput label="详细信息" source="messagecontent" addLabel={false}/>
           </SimpleForm>
       </Create>
);

const NotifymessagelistTitle = ({ record }) => {
   return <span>编辑 系统信息</span>;
};

const NotifymessagelistEdit = (props) => {
      return (<Edit title={<NotifymessagelistTitle />} {...props}>
          <SimpleForm>
              <DisabledInput label="Id" source="id" />
              <DisabledInput label="消息类型" source="messagetype" />
              <TextInput label="标题"  source="messagetitle" />
              <RichTextInput label="详细信息" source="messagecontent" addLabel={false}/>
          </SimpleForm>
      </Edit>);

};


const NotifymessagelistShow = (props) => (
       <Show title={<NotifymessagelistTitle />} {...props}>
           <SimpleShowLayout>
               <TextField source="id" />
               <TextField label="类型" source="messagetype" />
               <TextField label="标题" source="messagetitle" />
               <RichTextField label="详细信息"  source="messagecontent" stripTags={false} />
           </SimpleShowLayout>
       </Show>
);



const NotifymessagelistList = (props) => (//
     <List title="系统消息列表" {...props} >
        <Datagrid>
        <TextField label="类型" source="messagetype" />
        <TextField label="标题" source="messagetitle" />
        <RichTextField label="详细信息"  source="messagecontent" stripTags={false} />
        <EditButton />
        <ShowButton />
        </Datagrid>
    </List>
);


export  {NotifymessageCreate,NotifymessagelistList,NotifymessagelistEdit,NotifymessagelistShow};
