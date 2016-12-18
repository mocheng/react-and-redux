import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import EventEmitter from 'events';

const CounterStore = new EventEmitter();

CounterStore.counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 30
};

function onDispatch(action) {
  if (action.type === ActionTypes.INCREMENT) {
    this.counterValues[action.counterCaption] ++;
    this.emit('changed');
  } else if (action.type === ActionTypes.DECREMENT) {
    this.counterValues[action.counterCaption] --;
    this.emit('changed');
  }
}

CounterStore.onDispatch = onDispatch.bind(CounterStore);

CounterStore.dispatchToken = AppDispatcher.register(CounterStore.onDispatch);

export default CounterStore;
