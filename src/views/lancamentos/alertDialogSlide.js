import React from 'react';

const AlertDialogSlide = (props) => {

  return (
    <div className="modal fade show" 
         id="infoModal" 
         tabIndex="-1" 
         aria-labelledby="exampleModalLabel" 
         aria-modal="true" role="dialog"
         style={{ display: props.open ? 'block': 'none'}}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Exclusão de Lançamento...</h5>
          </div>
          <div className="modal-body">
            Deseja mesmo excluir o lançamento: {props.lancamentoInfo.descricao} ?
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={props.deletarAction} type="button" data-dismiss="modal">Sim</button>
            <button className="btn btn-danger" onClick={props.cancelarAction} type="button" data-dismiss="modal">Cancelar</button>
          </div>
      </div>
    </div>
    </div>
  );
}

export default AlertDialogSlide