import axios from 'axios'

const { REACT_APP_API_URL } = process.env

const httpClient = axios.create({
    baseURL: REACT_APP_API_URL
})

class ApiService {
    
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl, objeto);
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(requestUrl);
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(requestUrl);
    }

    getWithAuthorization(url, usuarioLogado){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(requestUrl, {
            headers: {
                'Authorization': `Bearer ${usuarioLogado.accessToken}`,
                'usuarioId': usuarioLogado.id
            }
        });
    }

    postWithAuthorization(url, objeto, usuarioLogado){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, objeto, {
            headers: {
                'Authorization': `Bearer ${usuarioLogado.accessToken}`,
                'usuarioId': usuarioLogado.id
            }
        });
    }

    postWithAuthorizationWithoutBody(url, usuarioLogado){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, {}, {
            headers: {
                'Authorization': `Bearer ${usuarioLogado.accessToken}`,
                'usuarioId': usuarioLogado.id
            }
        });
    }

    putWithAuthorization(url, objeto, usuarioLogado){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl, objeto, {
            headers: {
                'Authorization': `Bearer ${usuarioLogado.accessToken}`,
                'usuarioId': usuarioLogado.id
            }
        });
    }

    deleteWithAuthorization(url, usuarioLogado){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(requestUrl, {
            headers: {
                'Authorization': `Bearer ${usuarioLogado.accessToken}`,
                'usuarioId': usuarioLogado.id
            }
        });
    }

}

export default ApiService;