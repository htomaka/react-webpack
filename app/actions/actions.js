/**
 * Created by htomaka on 18/10/16.
 */

import constants from '../constants/constants';
import {dispatcher} from '../dispatcher/dispatcher';

export default {
    increment(){
        dispatcher.dispatch({
            actionTyoe: constants.INCREMENT
        })
    }
};

