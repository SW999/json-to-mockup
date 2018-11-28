export const initialState = {
  data: null,
  selectedMockUpIndex: null,
  gridView: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };

    case 'SELECT_MOCKUP':
      return { ...state, selectedMockUpIndex: action.payload, gridView: false };

    case 'TOGGLE_GRID':
      return { ...state, gridView: !action.gridView };

    default:
      return state
  }
}
