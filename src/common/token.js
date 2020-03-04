/* const jwtDecode = require('jwt-decode'); */
import {AsyncStorage} from 'react-native';

export class Token {

    async decode() {
        try {
            /* return jwtDecode(await AsyncStorage.getItem('@auth:token')); */
            return true
        } catch (e) {
            return undefined;
        }
    }

    async isTokenValid() {
        try {
            /* return jwtDecode(await AsyncStorage.getItem('@auth:token')) !== undefined; */
            return true
        } catch (e) {
            return false;
        }
    };

    async getToken() {
        return await AsyncStorage.getItem('@auth:token');
    }

    async setToken(token) {
        return await AsyncStorage.setItem('@auth:token', token);
    }

    async destroyToken() {
        await AsyncStorage.removeItem('@auth:token');
    }
}

export default new Token();