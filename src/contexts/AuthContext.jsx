import React, { useState, createContext } from "react"

export const AuthContext = createContext()

export const AuthProvider  = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    const logIn = (email, password) => new Promise ((resolve, reject) => {
        if (email !== 'valid@gmail.com' || password !== '123456') return reject('fail')
        resolve('success')
        setLoggedIn(true)
    })

    const logOut =() => {
        setLoggedIn(false)
    }
        

    const providerVariables ={
        isLoggedIn, logIn, logOut
    }

    return (
        <AuthContext.Provider value={providerVariables}>
            {{children}}
        </AuthContext.Provider>
    )

}

export const WithAuth = (WrappComponent) => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {(value) => <WrappComponent {...value} {...this.props}/>}
                </AuthContext.Consumer>
            )
        }
    }
}