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
  ReferenceField,
  ReferenceInput,
  Filter
} from 'admin-on-rest/lib/mui';

import { Field,FieldArray } from 'redux-form';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TimePicker from 'material-ui/TimePicker';
import moment from 'moment';
import ImageArrayField from '../controls/imagearrayfield.js';

export const FeedbackFilter = props => (
    <Filter {...props}>
         <TextInput label="反馈内容" source="feedbacktxt_q" />
         <ReferenceInput label="用户" source="creator" reference="user" addLabel={false}>
            <SelectInput optionText="username" />
        </ReferenceInput>
    </Filter>
);


const FeedbackTitle = ({ record }) => {
   return <span>显示 用户反馈</span>;
};

const FeedbackShow = (props) => (
       <Show title={<FeedbackTitle />} {...props}>
           <SimpleShowLayout>
               <TextField source="id" />
               <TextField label="反馈内容" source="feedbacktxt" />
           </SimpleShowLayout>
       </Show>
);



const FeedbackList = (props) => (//
     <List title="用户反馈列表" {...props}  filters={<FeedbackFilter />}  sort={{ field: 'created_at', order: 'DESC' }}>
        <Datagrid>
        <ReferenceField label="反馈用户" source="creator" reference="user" addLabel={false}>
            <TextField source="username" />
        </ReferenceField>
        <DateField label="反馈时间" source="created_at" showTime />
        <TextField label="反馈内容" source="feedbacktxt" />
        <ImageArrayField label="反馈图片" source="picurl" />
        </Datagrid>
    </List>
);


export  {FeedbackList,FeedbackShow};
