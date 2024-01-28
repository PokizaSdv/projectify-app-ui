import React from "react";
import { UserRole } from "../types/types";
import { useLocalStorage } from "../hooks";
import { Navigate } from "react-router-dom";

type AuthRouteProps = {
    component: React.ReactElement;
    userType: UserRole;
};

const Auth: React.FC<AuthRouteProps> = ({ component, userType }) => {
    const { getItem } = useLocalStorage();
    const userRole = getItem("userRole");
    const authToken = getItem("authToken");

    if (userRole && authToken) {
        const navigateTo =
            userType === "admin"
                ? "../admin/platform"
                : "../team-member/platform";
        return <Navigate to={navigateTo} />;
    } else {
        return component;
    }
};

export { Auth };
