'use client'

import axios from 'axios'
import { getCookie } from 'cookies-next'
import React, { createContext, useEffect, useState } from 'react'

interface User {
  firstName: string
  lastName: string
  email: string
  city: string
  phone: string
}
interface State {
  loading: boolean
  error: string | null
  data: User | null
}
interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>
}
export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {}
})

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null
  })

  const fetchUser = async () => {
    try {
      setAuthState({
        loading: true,
        data: null,
        error: null
      })

      const jwt = getCookie('jwt')

      if (!jwt) {
        return setAuthState({
          loading: false,
          data: null,
          error: null
        })
      }

      const res = await axios.get('http://localhost:3002/api/auth/me', {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
      console.log({ res })
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

      setAuthState({
        data: res.data,
        loading: false,
        error: null
      })
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.errorMessage
      })
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthContext
