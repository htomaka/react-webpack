/**
 * Created by htomaka on 18/10/16.
 */

import {dispatcher} from '../dispatcher/dispatcher';
import constants from '../constants/constants';
import EventEmitter from 'events';

let _count = 0;

function getCount(){
    return _count;
}

function incrementCount(){
    return _count++;
}

export let store = Object.assign({}, EventEmitter.prototype, {
    getCount,
    emitChange: function(){
        this.emit('CHANGE');
    },
    addChangeListener: function(cb){
        this.on('CHANGE', cb);
    },
    removeChangeListener: function(cb){
        this.removeListener(cb);
    }
});

dispatcher.register(action => {
    switch(action.actionTyoe) {
        case constants.INCREMENT:
            incrementCount();
            store.emitChange();
            break;
    }
});
