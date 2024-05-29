const initialState = {
  theme: 'dark',
  open: false,
  checked: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        open: !state.open,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
        checked: !state.checked,
      };
    default:
      return state;
  }
};

export default themeReducer;
