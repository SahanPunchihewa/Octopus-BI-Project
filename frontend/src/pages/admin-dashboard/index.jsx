import React from "react";
import AdminDashboard from "./AdminDashboard";
import { UserProvider } from "../../contexts/UserContext";

const index = () => {

    return(
        <>
            <UserProvider>
                <AdminDashboard/>
            </UserProvider>
        </>
    )
}

export default index;