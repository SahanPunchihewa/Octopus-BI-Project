import { createContext, useState, useEffect } from "react";
import UserAPI from "./api/UserAPI";
import { makeToast } from "../components";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserProvider({children}) {

    const [user, SetUser] = useState({
        name: "",
        email: "",
        personalContact : "",
        homeContact: ""
    });



    return(
        <UserContext.Provider 
        value={{

        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;