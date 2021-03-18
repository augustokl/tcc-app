import { combineReducers } from 'redux';

import equipment from './equipment/reducer';
import automaticConf from './automaticConf/reducer';
import manualConf from './manualConf/reducer';

export default combineReducers({ equipment, automaticConf, manualConf });
