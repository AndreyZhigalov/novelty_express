import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface headerSlice {
  showSearch: boolean;
  searchValue: string;
  showMenu: boolean;
  isLoaded: boolean;
}

const initialState: headerSlice = {
  showSearch: false,
  searchValue: '',
  showMenu: true,
  isLoaded: false,
};

const headerInputsSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setShowSearch(state, action: PayloadAction<boolean | undefined>) {
      if (action.payload !== undefined) {
        state.searchValue = ""
        state.showMenu = action.payload;
        state.showSearch = action.payload;
      } else {
        state.searchValue = '';
        state.showMenu = true;
        state.showSearch = !state.showSearch;
      }
    },
    setSearchValue(state, action: PayloadAction<string>) {
      let text = action.payload;
      text ? (state.searchValue = text) : (state.searchValue = '');
    },
    setShowMenu(state, action: PayloadAction<boolean | undefined>) {
      if (action.payload !== undefined) {
        state.showMenu = action.payload;
      } else {
        if ((state.showSearch || !state.showSearch) && state.showMenu) {
          state.searchValue = '';
          state.showSearch = false;
          state.showMenu = !state.showMenu;
        } else if ((state.showMenu || !state.showMenu) && !state.showSearch) {
          state.showMenu = !state.showMenu;
          state.searchValue = '';
        }
      }
    },
    screenSizeCheck(state, action: PayloadAction<number>) {
       if (action.payload <= 1100) {
        state.showMenu = false;
        state.showSearch = false;
      }  else if (action.payload > 1100) {
        state.showMenu = true;
        state.showSearch = false;
      }
    },
  },
});

export const { setShowSearch, setSearchValue, setShowMenu, screenSizeCheck } =
  headerInputsSlice.actions;
export default headerInputsSlice.reducer;
