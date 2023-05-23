import PocketBase from 'pocketbase';

class PocketBaseService{
    static pb = new PocketBase('https://magnificent-painter.pockethost.io')

    static async login(username, password) {
        try {
            username = username.trim()

            if (!username || !password) throw new Error("Usuario/contrasena incorrectos." )

            const authData = await this.pb.collection("users").authWithPassword(username, password)

            if (authData) {
                return authData
            } else {
                throw new Error("Usuario/contrasena incorrectos.")
            }

        } catch (e) {
            throw e
        }
    }
}

export default PocketBaseService