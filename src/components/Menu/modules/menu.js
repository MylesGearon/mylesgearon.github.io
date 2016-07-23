// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

export const ANIMATE = 'ANIMATE'
export const FINISH_ANIMATION = 'FINISH_ANIMATION'

// ----------------------------------------------------------------------------
// Actions
// ----------------------------------------------------------------------------

export function animate (nextMenuStyle) {
  return {
    type: ANIMATE,
    payload: nextMenuStyle
  }
}

export function finishAnimation () {
  return {
    type: FINISH_ANIMATION
  }
}

export const actions = {
  animate,
  finishAnimation
}

// ----------------------------------------------------------------------------
// Action Handlers
// ----------------------------------------------------------------------------

const ACTION_HANDLERS = {
  [ANIMATE]: (state, action) => {
    return ({...state, animating: true, next: action.payload})
  },
  [FINISH_ANIMATION]: state => {
    return ({
      current: state.next,
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
