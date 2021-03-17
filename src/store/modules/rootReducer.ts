import { combineReducers } from 'redux';

import equipment from './equipment/reducer';
import automaticConf from './automaticConf/reducer';

export default combineReducers({ equipment, automaticConf });
