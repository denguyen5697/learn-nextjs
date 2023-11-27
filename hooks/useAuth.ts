import axios from 'axios'
import { deleteCookie, getCookie } from 'cookies-next';
import { useContext } from 'react';
import { AuthenticationContext } from '../app/context/AuthContext';

export default function useAuth() {
    const { data, loading, error, setAuthState } = useContext(AuthenticationContext)
    const signIn = async ({ email, password }: { email: string; password: string }, handleClose: any) => {
        try {
            setAuthState({
                data: null,
                loading: true,
                error: null
            })
            const response = await axios.post("http://localhost:3000/api/auth/signin", {
                email,
                password
            })
            setAuthState({
                data: response.data,
                loading: false,
                error: null
            })
            handleClose()
        } catch (error: any) {
            console.log('error :', error);
            setAuthState({
                data: null,
                loading: false,
                error: error.response.data.errorMessage
            })
        }
    }
    const singUp = async ({ firstName, lastName, email, password, city, phone }:
        { email: string; password: string; firstName: string; lastName: string; city: string; phone: string }, handleClose: () => void) => {
        try {
            setAuthState({
                data: null,
                loading: true,
                error: null
            })
            const response = await axios.post("http://localhost:3000/api/auth/signup", {
                email,
                password,
                firstName,
                lastName,
                city,
                phone
            })
            setAuthState({
                data: response.data,
                loading: false,
                error: null
            })
            handleClose()
        } catch (error: any) {
            console.log('error :', error);
            setAuthState({
                data: null,
                loading: false,
                error: error.response.data.errorMessage
            })
        }
    }

    const logOut = () => {
        deleteCookie('jwt')
        setAuthState({
            data: null,
            loading: false,
            error: null
        })

    }



    return {
        signIn,
        singUp,
        logOut
    }
}