import orderReducer from './orderRedux';


const initialState = {
  order: {
    trip: null,
    email: '',
    options: {},
  },
}

const reducers = {
  filters: filtersReducer,
  order: orderReducer,
};

export default Store;