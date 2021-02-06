import React from 'react';

const AlertDialogInformation = (props) => {
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
                      <h5 className="modal-title" id="exampleModalLabel">Aviso...</h5>
                  </div>
                  <div className="modal-body">
                    {props.mensagemCustomizada}
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={props.close} type="button" data-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
    );
}

export default AlertDialogInformation