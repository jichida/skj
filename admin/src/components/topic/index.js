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

const TopiclistTitle = ({ record }) => {
   return <span>编辑 帖子信息</span>;
};

const TopiclistEdit = (props) => {
      return (<Edit title={<TopiclistTitle />} {...props}>
          <SimpleForm>
              <DisabledInput label="Id" source="id" />
              <DisabledInput label="标题"  source="title" />
              <BooleanInput label="是否显示" source="isvisiable" defaultValue={true} />
          </SimpleForm>
      </Edit>);

};


const TopiclistShow = (props) => (
       <Show title={<TopiclistTitle />} {...props}>
           <SimpleShowLayout>
               <TextField source="id" />
               <TextField label="标题" source="title" />
           </SimpleShowLayout>
       </Show>
);



const TopiclistList = (props) => (//
     <List title="帖子信息列表" {...props} >
        <Datagrid>
        <TextField label="标题" source="title" />
        <EditButton />
        <ShowButton />
        </Datagrid>
    </List>
);


export  {TopiclistList,TopiclistEdit,TopiclistShow};
