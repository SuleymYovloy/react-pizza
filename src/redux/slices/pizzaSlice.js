import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

// Асинхронный экшен
export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params, thunkAPI) => {
    const {
      sortBy,
      order,
      category,
      search,
      currentPage
    } = params;
    // Запрос
    const { data } = await axios.get(
      `https://63ad763c3e465169165afd84.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data // вернет ответ 
  }
)

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

//action creator
const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.items = [];
    },
    // если успешно выполнится, вывести в консоль
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload 
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error'
      state.items = [];
    }
  }
});

export const selectPizzaData = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
