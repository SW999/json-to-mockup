export const initialState = {
  data: null,
  selectedMockUpIndex: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };

    case 'SELECT_MOCKUP':
      return { ...state, selectedMockUpIndex: action.payload };

    default:
      return state
  }
}
