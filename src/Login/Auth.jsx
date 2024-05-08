import { createContext, useState } from "react";
export const Auth = createContext();
import * as UserAPI from '../apis/userApi'

// eslint-disable-next-line react/prop-types
export default function Authenticate({ children }) {
    const [user, setUser] = useState(null);

    const login = async ({emailLogin},{passwordLogin}) => {
        try {
            const response = await UserAPI.getUserById({emailLogin},{passwordLogin})
            setUser(response.data)
            console.log(response.data)

        }catch (error) {
            setUser(null);
            console.log(error)
        }
    }
    
    const logout = () => {
        setUser(null);
    }
    return <Auth.Provider value={{user , login , logout}}>{children}</Auth.Provider>;
}