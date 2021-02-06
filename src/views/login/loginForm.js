import { React, useState } from 'react';

import moneyImg from '../../money.jpg'

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
                  <div className="col-lg-6">
                    <img className="img-login"  alt="" src={moneyImg}/>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">SISO - Sistema Orçamentário</h1>
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
                        <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                        <hr/>
                        <button type="button" className="btn btn-warning btn-user btn-block" onClick={usuarios}>Cadastre-se</button>
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