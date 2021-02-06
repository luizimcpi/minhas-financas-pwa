import { React, useState } from 'react';
  
export default function UsuarioForm({cadastrar, voltar}) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaRepeticao, setSenhaRepeticao] = useState("")

  return (
    <div className="container">
    <div className="row justify-content-center">

      <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Cadastro de Usuário</h1>
                  </div>
                  <form className="user" onSubmit={
                    (event) => {
                        event.preventDefault();
                        cadastrar({nome, email, senha, senhaRepeticao});
                    }
                  }>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-user" 
                              id="exampleInputNome" 
                              aria-describedby="nomeHelp" 
                              placeholder="Nome..."
                              value={nome}
                              onChange={
                                  event => {
                                      setNome(event.target.value);
                                  }
                              }
                          required/>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" 
                              id="exampleInputEmail" 
                              aria-describedby="emailHelp" 
                              placeholder="Email..."
                              value={email}
                              onChange={
                                  event => {
                                      setEmail(event.target.value);
                                  }
                              }
                          />
                    </div>
                    <div className="form-group">
                      <input type="password" 
                        className="form-control form-control-user" 
                        id="exampleInputPassword" 
                        placeholder="Senha"
                        value={senha}
                            onChange={
                                event => {
                                    setSenha(event.target.value);
                                }
                      } required/>
                    </div>
                    <div className="form-group">
                      <input type="password" 
                        className="form-control form-control-user" 
                        id="exampleInputConfirmationPassword" 
                        placeholder="Confirmação de Senha"
                        value={senhaRepeticao}
                            onChange={
                                event => {
                                    setSenhaRepeticao(event.target.value);
                                }
                      } required/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">Cadastrar</button>
                    <hr/>
                    <button type="button" className="btn btn-danger btn-user btn-block" onClick={voltar}>Cancelar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    </div>
  );
}