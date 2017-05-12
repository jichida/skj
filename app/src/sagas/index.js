import { fork } from 'redux-saga/effects';
import {flowmain} from './flowmain';
import {calcmsgcountflow} from './calcmsgcount';
import {
  createsagacallbackflow
} from '../actions/sagacallback.js';
import {wififlow} from './wififlow';
import {wsrecvsagaflow} from './wsrecvsaga';

export default function* rootSaga() {
  yield fork(wsrecvsagaflow);
  yield fork(flowmain);
  yield fork(wififlow);
 // yield fork(calcmsgcountflow);
  yield fork(createsagacallbackflow);
}
