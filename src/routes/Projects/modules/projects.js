// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const SHOW_STACK = 'SHOW_STACK'
export const HIDE_STACK = 'HIDE_STACK'

// ----------------------------------------------------------------------------
// Actions
// ----------------------------------------------------------------------------

export function updateImage (ind) {
  return {
    type: UPDATE_IMAGE,
    payload: ind
  }
}

export function showStack () {
  return {
    type: SHOW_STACK
  }
}

export function hideStack () {
  return {
    type: HIDE_STACK
  }
}

export const actions = {
  updateImage,
  showStack,
  hideStack
}

// ----------------------------------------------------------------------------
// Action Handlers
// ----------------------------------------------------------------------------

const ACTION_HANDLERS = {
  [UPDATE_IMAGE]: (state, action) => {
    return ({...state, currentImage: action.payload})
  },
  [SHOW_STACK]: state => {
    return ({...state, stackVisible: true})
  },
  [HIDE_STACK]: state => {
    return ({...state, stackVisible: false})
  }
}

// ----------------------------------------------------------------------------
// Reducer
// ----------------------------------------------------------------------------

const initialState = {
  currentImage: 0,
  stackVisible: false
}

export default function zenReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
