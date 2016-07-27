// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

export const ANIMATE_IN_MENU = 'ANIMATE_IN_MENU'
export const EXPAND_MENU = 'EXPAND_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'

// ----------------------------------------------------------------------------
// Actions
// ----------------------------------------------------------------------------

export function animateInMenu (nextMenuSize) {
  return {
    type: ANIMATE_IN_MENU,
    payload: nextMenuSize
  }
}

export function expandMenu () {
  return {
    type: EXPAND_MENU
  }
}

export function closeMenu () {
  return {
    type: CLOSE_MENU
  }
}

export const actions = {
  animateInMenu,
  expandMenu,
  closeMenu
}

// ----------------------------------------------------------------------------
// Action Handlers
// ----------------------------------------------------------------------------

const ACTION_HANDLERS = {
  [ANIMATE_IN_MENU]: (state, action) => {
    return ({
      ...state,
      current: action.payload,
      expanded: false,
      visible: true
    })
  },
  [EXPAND_MENU]: state => {
    return ({
      ...state,
      expanded: true
    })
  },
  [CLOSE_MENU]: state => {
    return ({
      ...state,
      expanded: false
    })
  }
}

// ----------------------------------------------------------------------------
// Reducer
// ----------------------------------------------------------------------------

const initialState = {
  visible: window.location.pathname !== '/',
  current: null,
  expanded: false
}

export default function menuReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
