import LocalStorageService from './localStorageService'
import jwt from 'jsonwebtoken'

export const USUARIO_LOGADO = '_usuario_logado'
export const TOKEN = 'accessToken'

export default class AuthService {

    static isUsuarioAutenticado(){
        const token = LocalStorageService.obterItem(TOKEN)
        if(!token){
            return false
        }
        const decodedToken = jwt.decode(token)
        const expirationDate = decodedToken.exp
   
        const isTokenInvalido = Date.now() >= (expirationDate * 1000)
    
        return !isTokenInvalido
    }

    static removerUsuarioAutenticado(){
        LocalStorageService.removerItem(USUARIO_LOGADO)
        LocalStorageService.removerItem(TOKEN)
    }

    static logar(usuario, token){
        LocalStorageService.adicionarItem(USUARIO_LOGADO, usuario)
        LocalStorageService.adicionarItem(TOKEN, token)
    }

    static obterUsuarioAutenticado(){
        return LocalStorageService.obterItem(USUARIO_LOGADO)
    }

    static refreshSession(){
        const token = LocalStorageService.obterItem(TOKEN)
        const usuario = AuthService.obterUsuarioAutenticado()
        AuthService.logar(usuario, token)
        return usuario
    }

}