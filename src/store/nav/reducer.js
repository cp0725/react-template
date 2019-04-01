import { SET_FOLD_STATUS} from './actionTypes'

const defaultState = {
  foldStatus: false,
}
const actionFun = {
  [SET_FOLD_STATUS](newState) {
    newState.foldStatus = !newState.foldStatus
    return newState
  }
}
export default (state = defaultState, action) => {
  // 不允许改变 state
  const newState = JSON.parse(JSON.stringify(state))
  return actionFun[action.type] ? actionFun[action.type](newState, action) : state
}