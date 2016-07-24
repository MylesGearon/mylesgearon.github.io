// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

export const ANIMATE_IN_MENU = 'ANIMATE_IN_MENU'

// ----------------------------------------------------------------------------
// Actions
// ----------------------------------------------------------------------------

export function animateInMenu (nextMenuSize) {
  return {
    type: ANIMATE_IN_MENU,
    payload: nextMenuSize
  }
}

export const actions = {
  animateInMenu
}

// ----------------------------------------------------------------------------
// Action Handlers
// ----------------------------------------------------------------------------

const ACTION_HANDLERS = {
  [ANIMATE_IN_MENU]: (state, action) => {
    return ({...state, current: action.payload})
  }
}

// ----------------------------------------------------------------------------
// Reducer
// ----------------------------------------------------------------------------

const initialState = {
  current: null
}

export default function menuReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
