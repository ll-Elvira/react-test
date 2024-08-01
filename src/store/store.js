import { configureStore, combineReducers } from '@reduxjs/toolkit';
// 2. 导入持久化所需要的插件
import { persistStore, persistReducer } from 'redux-persist';
// 3. 导入本地存储插件，可选storage，cookie，session等
import storage from 'redux-persist/lib/storage'; 

import counter from './modules/test';
import user from './modules/user';
//自动生成的 reducer 函数，它被用作 Redux 应用的一部分，以管理名为 counter 的状态。
// 相当于一个注册动作，把之前创建的slice在这里注册
//在这里，counterReducer 是之前创建的 Redux slice 的 reducer 函数

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

//持久化配置

// 创建reducer(合并拆分的reducer)
const rootReducer= combineReducers({
	counter,
  user,
});

//持久化配置
const persistConfig = {
  key: 'root',//键名
  storage,//代表localStorage
  // whitelist: [], // 需要持久化保存的模块，默认保存所有模块（语义：白名单）
  // blacklist: [], // 不需要持久化保存的模块，默认不保存任何模块（语义：黑名单）
};

// 5. 创建持久化后的reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 6. 创建store
const store = configureStore({
  reducer: persistedReducer,
  devTools: true, // 是否开启开发者工具，默认true
  // 配置中间件：如果使用redux-persist，则需要设置为false，否则控制台报错（非序列化数据）
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
	   serializableCheck: false,
  })
});

// 7. 创建持久化后的store
const persistor = persistStore(store);

// 8. 导出store和持久化后的store
export {
	store,
	persistor
}
