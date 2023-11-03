import PocketBase from 'pocketbase';

class PocketBaseService{
    static pb = new PocketBase('https://boring-carpenter.pockethost.io')

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

    static async getAll(collectionName, id) {
        try {
            const data = await this.pb.collection(collectionName).getFullList()
            return data
        } catch (e) {
            throw e
        }
    }

    static async getOne(collectionName, id) {
        try {
            const data = await this.pb.collection(collectionName).getOne(id)
            return data
        } catch (e) {
            throw e
        }
    }

    static async createItem(collectionName, data) {
        try {
          const newRecord = await this.pb.collection(collectionName).create(data);
          return newRecord;
        } catch (e) {
          throw e;
        }
    }
    
    static async updateItem(collectionName, id, data) {
        try {
          const updatedRecord = await this.pb.collection(collectionName).update(id, data);
          return updatedRecord;
        } catch (e) {
          throw e;
        }
    }
    

}

export default PocketBaseService