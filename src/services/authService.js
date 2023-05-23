
class AuthService {
    static setToken(token) {
        try {   
            localStorage.setItem("token", token)
        } catch (e) {
            throw e
        }
    }

    static getToken() {
        try {
            return localStorage.getItem("token")
        } catch (e) {
            throw e
        }
    }

    static removeToken() {
        try {
            localStorage.removeItem("token")
        } catch (e) {
            throw e
        }
    }   
}

export default AuthService