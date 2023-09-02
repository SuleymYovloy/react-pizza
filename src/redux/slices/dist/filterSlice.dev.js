"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setSearchValue = exports.setFilters = exports.setCurrentPage = exports.setSort = exports.setCategoryId = exports.selectSort = exports.selectFilter = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}; //action creator

var filterSlice = (0, _toolkit.createSlice)({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setCategoryId: function setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue: function setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort: function setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage: function setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters: function setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    }
  }
});

var selectFilter = function selectFilter(state) {
  return state.filter;
};

exports.selectFilter = selectFilter;

var selectSort = function selectSort(state) {
  return state.filter.sort;
};

exports.selectSort = selectSort;
var _filterSlice$actions = filterSlice.actions,
    setCategoryId = _filterSlice$actions.setCategoryId,
    setSort = _filterSlice$actions.setSort,
    setCurrentPage = _filterSlice$actions.setCurrentPage,
    setFilters = _filterSlice$actions.setFilters,
    setSearchValue = _filterSlice$actions.setSearchValue;
exports.setSearchValue = setSearchValue;
exports.setFilters = setFilters;
exports.setCurrentPage = setCurrentPage;
exports.setSort = setSort;
exports.setCategoryId = setCategoryId;
var _default = filterSlice.reducer;
exports["default"] = _default;