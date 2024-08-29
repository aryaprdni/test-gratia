/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Route, Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated } = useAuthStore(state => ({
        isAuthenticated: state.isAuthenticated,
    }));

    return isAuthenticated() ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
