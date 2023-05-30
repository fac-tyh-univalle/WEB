
class AuthService {
    static setAuthData(token, userData) {
        try {   
            localStorage.setItem("token", token)
            localStorage.setItem("userData", JSON.stringify(userData))
        } catch (e) {
            throw e
        }
    }

    static getAuthData() {
        try {
            const token = localStorage.getItem("token")
            if (!token) return null
            
            const userData = JSON.parse(localStorage.getItem("userData"))
            if (!userData) return null
            return {
                token,
                userData
            }
        } catch (e) {
            throw e
        }
    }

    static removeAuthData() {
        try {
            localStorage.removeItem("token")
            localStorage.removeItem("userData")
        } catch (e) {
            throw e
        }
    }   
}

export default AuthService