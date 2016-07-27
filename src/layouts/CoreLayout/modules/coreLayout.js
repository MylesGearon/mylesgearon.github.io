// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

export const UPDATE_BREAKPOINT = 'UPDATE_BREAKPOINT'

// ----------------------------------------------------------------------------
// Actions
// ----------------------------------------------------------------------------

export function updateBreakpoint (currentWidth) {
  return {
    type: UPDATE_BREAKPOINT,
    payload: currentWidth
  }
}

export const actions = {
  updateBreakpoint
}

// ----------------------------------------------------------------------------
// Action Handlers
// ----------------------------------------------------------------------------

const ACTION_HANDLERS = {
  [UPDATE_BREAKPOINT]: (state, action) => {
    let rangeInd = 0
    while (true) {
      if (state.ranges[rangeInd][0] <= action.payload && state.ranges[rangeInd][1] > action.payload) {
        break
      }
      rangeInd++
    }
    return ({
      ...state,
      current: rangeInd
    })
  }
}

// ----------------------------------------------------------------------------
// Reducer
// ----------------------------------------------------------------------------

const initialState = {
  ranges: [[0, 700], [701, Infinity]],
  current: null
}

export default function breakpointReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
