import * as types from '../constants/ActionTypes'

const Peers = (state = {}, action) => {
  switch (action && action.type) {
    case types.PEER_ADD:
      return {
        ...state,
        [action.payload.userId]: {
          peerObject: action.payload.peer
        }
      } 
    case types.PEER_REMOVE:
      let newState = Object.assign({}, state)
      delete newState[action.payload.userId]
      return newState
    case types.PEER_REMOVE_ALL:
        return {}
    case types.PEER_UPDATE:
      let newUpdatedState = Object.assign({}, state)
      newUpdatedState[action.payload.userId] = {
        ...state[action.payload.userId],
        username: action.payload.username,
        publicKey: action.payload.publicKey,
        sharedSecret: action.payload.sharedSecret
      }
      return newUpdatedState
    default:
      return state
  }
}

export default Peers