import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
const state = {
    token : '',
    user : {}
}
const auth = {
    state,
    actions,
    mutations,
    getters
}
export default auth
