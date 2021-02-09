import { React, useState } from 'react';

export default function ConsultaLancamentoForm({meses, tipos, buscar, cadastrar, home}) {
  const [ano, setAno] = useState("")
  const [mes, setMes] = useState("")
  const [tipo, setTipo] = useState("")
  const [descricao, setDescricao] = useState("")

  const optionsMeses = meses.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );

  const optionsTipos = tipos.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );

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
                    <h1 className="h4 text-gray-900 mb-4">Consulta Lançamentos</h1>
                  </div>
                  <form className="user" onSubmit={
                      (event) => {
                          event.preventDefault();
                          buscar({ano, mes, tipo, descricao});
                      }
                  }>
                    <div className="form-group">
                      <input type="text" className="form-control" 
                              id="exampleInputAno" 
                              aria-describedby="anoHelp" 
                              placeholder="Ano"
                              value={ano}
                              onChange={
                                  event => {
                                      setAno(event.target.value);
                                  }
                              }
                          required/>
                    </div>
                    <div className="form-group">
                      <select className="form-control"
                              aria-label="Select for mes" 
                              value={mes}
                              onChange={
                                      event => {
                                          setMes(event.target.value);
                                      }
                                  }
                              required>
                          {optionsMeses}
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" 
                        className="form-control" 
                        id="exampleInputDescricao" 
                        placeholder="Descrição"
                        value={descricao}
                        onChange={
                          event => {
                              setDescricao(event.target.value);
                          }
                        }/>
                    </div>
                    <div className="form-group">
                      <select className="form-control" 
                              aria-label="Select for tipo" 
                              value={tipo}
                              onChange={
                                      event => {
                                          setTipo(event.target.value);
                                      }
                                  }>
                          {optionsTipos}
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">Buscar</button>
                    <hr/>
                    <button type="button" className="btn btn-secondary btn-user btn-block" onClick={cadastrar}>Cadastrar</button>
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