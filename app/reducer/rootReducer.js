const { combineReducers } = require("redux");
const { counterReducer } = require("./counter");

export const rootReducer=combineReducers({
    total:counterReducer
})