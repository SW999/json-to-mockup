export function setData(data) {
  return {
    type: 'SET_DATA',
    payload: data
  }
}

export function selectMockUp(selectedMockUpIndex) {
  return {
    type: 'SELECT_MOCKUP',
    payload: selectedMockUpIndex
  }
}

export function toggleGridView() {
  return {
    type: 'TOGGLE_GRID'
  }
}
