import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "lulu",
    age:9,
  },
  reducers: {
    //reducer函数充当action creators，生成不同类型的action。这些 action creators 可以被其他地方引入并使用，以便在应用中分发对应的 action
    incrementAge: (state) => {
      // Redux Toolkit 允许我们在 reducers 中编写 mutating 逻辑。
      // 它实际上并没有 mutate state 因为它使用了 Immer 库，
      // 它检测到草稿 state 的变化并产生一个全新的基于这些更改的不可变 state
      state.age += 1;
    },
    decrementAge: (state) => {
      state.age -= 1;
    },
    //action通常为一个含有type和payload的对象，如果没有标识，只是一个简单的数字，会被识别为payload

    change: (state, action) => {
      state.name = action.payload;
    },
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { incrementAge, decrementAge, change } = userSlice.actions;

export default userSlice.reducer;
//createSlice 自动生成的 reducer 函数。它将根据接收到的 action 来更新状态。
// edux 中的 action creators（或 reducers）用来生成描述操作的 action 对象，这些 action 对象通过 dispatch 被发送到 Redux store，最终由 reducers 处理这些 action 并更新应用程序的状态