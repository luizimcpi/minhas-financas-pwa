import ApiService from './apiService'
import ErroValidacao from '../exception/erroValidacao'

class UsuarioService extends ApiService {
    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }

    obterSaldoPorUsuario(usuarioLogado){
        return this.getWithAuthorization(`/saldo`, usuarioLogado)
    }

    salvar(usuario){
        return this.post('/', usuario)
    }

    validar(usuario){
        const erros = []

        if(!usuario.nome){
            erros.push('O campo nome é obrigatório.')
        }
        const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        if(!usuario.email){
            erros.push('O campo email é obrigatório.')
        }
        else if(!usuario.email.match(emailPattern)){
            erros.push('Informe um email válido.')
        }

        if(usuario.senha.length < 8){
            erros.push('Sua senha deve conter no mínimo 8 caracteres.')
        }

        if(!usuario.senha || !usuario.senhaRepeticao){
            erros.push('Digite a senha e a confirmação.')
        }else if(usuario.senha !== usuario.senhaRepeticao){
            erros.push('As senhas digitadas não são iguais.')
        }
        
        if(erros && erros.length > 0){
            throw new ErroValidacao(erros)
        }
    }
}

export default UsuarioService;