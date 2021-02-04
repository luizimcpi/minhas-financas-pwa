import { React, useState } from 'react';

export default function LoginForm({entrar, usuarios}) {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  
  return (

      <div className="container">
        <div className="row justify-content-center">

          <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Minhas Finanças</h1>
                      </div>
                      <form className="user" onSubmit={
                      (event) => {
                          event.preventDefault();
                          entrar({email, senha});
                      }
                  }>
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
                          }/>
                        </div>
                        <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                        <hr/>
                      </form>
                      <button type="button" class="btn btn-secondary btn-user btn-block" onClick={usuarios}>Cadastre-se</button>
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