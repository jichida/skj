import React, { Component, PropTypes } from 'react';
import {Page,Button} from 'react-onsenui';
import TopicDetail from './topicdetail.js';

export default function MyPage(props){
    return (<Page>
      <p style={{textAlign: 'center'}}>
          <Button onClick={()=>{
            props.navigator.pushPage({
                    comp: TopicDetail,
                    props: {key: "topicdetail", topicid: 300}
            });
          }}>
          圈子!
          </Button>
      </p>
    </Page>);
}
