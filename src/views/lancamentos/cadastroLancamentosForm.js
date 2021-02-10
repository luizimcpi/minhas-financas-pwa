import { React, useEffect, useState } from 'react';

const CadastroLancamentosForm = (props) => {
  
  const [id, setId] = useState("")
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")
  const [mes, setMes] = useState("")
  const [ano, setAno] = useState("")
  const [tipo, setTipo] = useState("")
  const [status, setStatus] = useState("")
  const [atualizando, setAtualizando] = useState("")

  useEffect(() => {
    setId(props.lancamentoAtualizar.id)
    setDescricao(props.lancamentoAtualizar.descricao)
    setValor(props.lancamentoAtualizar.valor)
    setMes(props.lancamentoAtualizar.mes)
    setAno(props.lancamentoAtualizar.ano)
    setTipo(props.lancamentoAtualizar.tipo)
    setStatus(props.lancamentoAtualizar.status)
    setAtualizando(props.lancamentoAtualizar.atualizando)
  }, [
        props.lancamentoAtualizar.id,
        props.lancamentoAtualizar.descricao, 
        props.lancamentoAtualizar.valor, 
        props.lancamentoAtualizar.mes, 
        props.lancamentoAtualizar.ano, 
        props.lancamentoAtualizar.tipo,
        props.lancamentoAtualizar.status,
        props.lancamentoAtualizar.atualizando
      ]);

  const optionsMeses = props.meses.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );

  const optionsTipos = props.tipos.map((option, index) =>
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
                    <h1 className="h4 text-gray-900 mb-4">{atualizando ? 'Atualização de Lançamento' : 'Cadastro de Lançamentos'}</h1>
                  </div>
                  <form className="user" onSubmit={
                      (event) => {
                        event.preventDefault();
                        if(atualizando){
                          props.atualizar({descricao, valor, mes, ano, tipo, status, id})
                        } else {
                          props.cadastrar({descricao, valor, mes, ano, tipo});
                        }
                      }
                  }>
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
                        } 
                      required/>
                    </div>
                    <div className="form-group">
                      <input type="text" 
                        className="form-control" 
                        id="exampleInputValor" 
                        placeholder="Valor"
                        value={valor}
                        onChange={
                          event => {
                              setValor(event.target.value.replace(',', '.'));
                          }
                        }
                      required />
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
                              aria-label="Select for tipo" 
                              value={tipo}
                              onChange={
                                      event => {
                                          setTipo(event.target.value);
                                      }
                                  }
                              required>
                          {optionsTipos}
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" 
                        className="form-control" 
                        aria-describedby="statusHelp" 
                        id="exampleInputStatus" 
                        placeholder="Status"
                        value={status}
                        disabled/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">{atualizando ? 'Atualizar' : 'Cadastrar'}</button>
                    <hr/>
                    <button type="button" className="btn btn-danger btn-user btn-block" onClick={props.cancelar}>Cancelar</button>
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

export default CadastroLancamentosForm;