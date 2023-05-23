
class AuthService {
    static setToken(token) {
        try {   
            localStorage.setItem("token", token)
        } catch (e) {
            throw e
        }
    }

    static async getToken() {
        try {
            return localStorage.getItem("token")
        } catch (e) {
            throw e
        }
    }

    static async removeToken() {
        try {
            localStorage.removeItem("token")
        } catch (e) {
            throw e
        }
    }   
}

export default AuthService