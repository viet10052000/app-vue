import axios from 'axios';
import authHeader from "@/services/auth-header";
import Cookies from 'js-cookie';
const login = (user) => {
  return axios.post('auth/login',user)
}

const register = (user) => {
  return axios.post('auth/register',user)
}

const logout = () => {
  return axios.get('auth/logout',{ headers: authHeader() })
}


const getUserProfile = () => {
   return axios.get('auth/user-profile', { headers: authHeader() });
}
const UserService = {
  login,
  logout,
  register,
  getUserProfile
}
export default UserService