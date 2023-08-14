"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setItems = void 0;

var _toolkit = require("@reduxjs/toolkit");

var fetchPizzas = (0, _toolkit.createAsyncThunk)('pizza/fetchPizzasStatus', function _callee() {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get("https://63ad763c3e465169165afd84.mockapi.io/items?page=".concat(currentPage, "&limit=4&").concat(category, "&sortBy=").concat(sortBy, "&order=").concat(order).concat(search)));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
var initialState = {
  totalPrice: 0,
  items: []
}; //action creator

var pizzaSlice = (0, _toolkit.createSlice)({
  name: 'pizza',
  initialState: initialState,
  reducers: {
    setItems: function setItems(state, action) {
      state.items = action.payload;
    }
  }
});
var setItems = pizzaSlice.actions.setItems;
exports.setItems = setItems;
var _default = pizzaSlice.reducer;
exports["default"] = _default;