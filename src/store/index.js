import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import tutorialReducer from './slices/tutorials';
import localizationSlice from './slices/localizations';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['localization'],
  stateReconciler: autoMergeLevel2
};

const reducers = combineReducers({
  tutorials: tutorialReducer,
  localization: localizationSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }),
})

export default store;