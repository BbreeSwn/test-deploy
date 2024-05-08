import axios from './axios.config'

export const getUserById = async ({emailLogin},{passwordLogin}) => {
    return await axios.post(`/auth/login`,{email:emailLogin,password:passwordLogin})
}