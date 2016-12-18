import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import CounterStore from './CounterStore.js';
import EventEmitter from 'events';

const SummaryStore = new EventEmitter();


function computeSummary(counterValues) {
  let summary = 0;
  for (const key in counterValues) {
    if (counterValues.hasOwnProperty(key)) {
      summary += counterValues[key];
    }
  }
  return summary;
}

SummaryStore.summary = computeSummary(CounterStore.counterValues);

function onDispatch(action) {
  if ((action.type === ActionTypes.INCREMENT) ||
      (action.type === ActionTypes.DECREMENT)) {
    AppDispatcher.waitFor([CounterStore.dispatchToken]);

    this.summary = computeSummary(CounterStore.counterValues);

    this.emit('changed');
  }
}

SummaryStore.onDispatch = onDispatch.bind(SummaryStore);

SummaryStore.dispatchToken = AppDispatcher.register(SummaryStore.onDispatch);

export default SummaryStore;

