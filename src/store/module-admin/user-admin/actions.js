import UserService from "@/services/user.service";
import Cookies from "js-cookie";
export const actions = {
    async login({commit}, payload) {
        try {
            const response = await UserService.login(payload)
            if (response.data.access_token){
                Cookies.set('token',response.data.access_token)
            }
            commit('SET_TOKEN', response.data.access_token)
        } catch (e) {
            console.log(e)
        }
    },
    async logout({commit}) {
        try {
            await UserService.logout()
            Cookies.remove('token');
            commit('RESET_USER')
        } catch (e) {
            console.log(e)
        }
    },
    async register({ commit }, payload) {
        try {
            await UserService.register(payload)
        } catch (e) {
            console.log(e)
        }
    },
    async userProfile({commit}) {
        try {
            const response = await UserService.getUserProfile()
            commit('SET_USER', response.data)
        } catch (e) {
            console.log(e)
        }
    }
}