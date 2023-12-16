//const {v4: uuidv4Plugin } = require('uuid');

import {v4 as uuidv4Plugin} from 'uuid';

export const uuidv4 = () => {
    return uuidv4Plugin();
}
