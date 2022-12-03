import React from "react"

export const AuthContext = React.createContext()

export const AuthProvider  = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const logIn = (email, password) => {
        if (email !== 'valid@gmail.com' && password !== "123456") {
            return alert ("неправильный пароль или логин")}

        setIsLoggedIn(true)
    }

    const logOut =() => {
        setIsLoggedIn(false)
    }
        
    return (
        <AuthContext.Provider value ={{ logIn, logOut, isLoggedIn}}>
            {children}
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