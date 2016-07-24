// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

export const ANIMATE_IN_MENU = 'ANIMATE_IN_MENU'
export const ANIMATE_OUT_MENU = 'ANIMATE_OUT_MENU'
export const FINISH_ANIMATION = 'FINISH_ANIMATION'

// ----------------------------------------------------------------------------
// Actions
// ----------------------------------------------------------------------------

export function animateInMenu (nextMenuSize) {
  return {
    type: ANIMATE_IN_MENU,
    payload: nextMenuSize
  }
}

export function animateOutMenu () {
  return {
    type: ANIMATE_OUT_MENU
  }
}

export function finishAnimation () {
  return {
    type: FINISH_ANIMATION
  }
}

export const actions = {
  animateInMenu,
  animateOutMenu,
  finishAnimation
}

// ----------------------------------------------------------------------------
// Action Handlers
// ----------------------------------------------------------------------------

const ACTION_HANDLERS = {
  [ANIMATE_IN_MENU]: (state, action) => {
    return ({...state, animating: true, current: action.payload})
  },
  [ANIMATE_OUT_MENU]: state => {
    return ({...state, animating: true})
  },
  [FINISH_ANIMATION]: state => {
    return ({
      ...state,
      next: null,
      animating: false
    })
  }
}

// ----------------------------------------------------------------------------
// Reducer
// ----------------------------------------------------------------------------

const initialState = {
  current: null,
  next: null,
  animating: false
}

export default function menuReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
