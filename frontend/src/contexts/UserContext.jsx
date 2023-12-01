import { createContext, useState, useEffect } from "react";
import UserAPI from "./api/UserAPI";
import { makeToast } from "../components";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserProvider({ children }) {

    const [users, setUsers] = useState([])
    const [user, SetUser] = useState({
        name: "",
        email: "",
        personalContact: "",
        homeContact: ""
    });

    // get all users
    useEffect(() => {
        UserAPI.getAll().then((response) => {
            setUsers(response.data);
        });
    }, []);


    // Delete User
    const deleteUser = (id) => {
        UserAPI.deleteUser(id).then(() => {
            setUsers(users.filter((users) => users.id !== id));
            makeToast({ type: "success", message: "User deleted successful" });
        });
    };

    // Create User
    const UserRegister = async (values) => {
        UserAPI.register(values)
            .then((response) => {
                setUsers([...users, response.data]);
                makeToast({ type: "success", message: "Registration Successful" });
                window.location.href = "/user/login";
            })
            .catch((err) => {           
                console.log(err.response.data);
                makeToast({ type: "error", message: "Email already exists" });
            });
    };


    return (
        <UserContext.Provider
            value={{
                user,
                users,
                setUsers,
                SetUser,
                deleteUser,
                UserRegister,

            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;