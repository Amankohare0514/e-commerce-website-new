
// import { createStore } from 'redux';
// import rootReducer from './rootReducer';

// const store = createStore(rootReducer);

// export default store;
// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducer';

const store = configureStore({
  reducer: rootReducers,
});

export default store;

