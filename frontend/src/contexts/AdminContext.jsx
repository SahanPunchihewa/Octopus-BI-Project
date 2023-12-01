import { createContext, useState, useEffect } from "react";
import AdminAPI from "./api/AdminAPI";
import { makeToast } from "../components";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

export function AdminProvider ({children}) {
    const [admins, setAdmins] = useState([]);
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        password : "",
    });

    const AdminLogin = (values) => {
        AdminAPI.login(values)
          .then((response) => {
            localStorage.setItem("uId", response.data.id);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("email", response.data.email);    
            makeToast({ type: "success", message: "Login Successful" });
            window.location.href = "/admin";
          })
          .catch((err) => {
            makeToast({ type: "error", message: "Invalid Email or Password" });
          });
      };



    return(
        <AdminContext.Provider
            value={{
                admin,
                setAdmin,
                AdminLogin
            }}
        >
            {children}
        </AdminContext.Provider>
    )
};

export default AdminContext