import {Navigate} from 'react-router-dom';
import {jwtDecode} from "jwt-decode";
import api from "../api";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants";
import {useState} from "react";

function ProtectedRoute({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const refreshToken = async () => {
    }

    const auth = async () => {
    }

    if (isAuthenticated === null) {
        return <div>Loading...</div>
    }
    return isAuthenticated ? children : <Navigate to="/login"/>
}
