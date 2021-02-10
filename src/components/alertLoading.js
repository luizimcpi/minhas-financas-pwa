import React from 'react';

const AlertLoading = (props) => {

    return (
        <div className="modal fade show" 
          id="loadingModal" 
          tabIndex="-1" 
          aria-labelledby="exampleModalLabel" 
          aria-modal="true" role="dialog"
          style={{ display: props.open ? 'block': 'none'}}>
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Carregando...</h5>
                  </div>
                  <div className="modal-body">
                  <div className="d-flex justify-content-center">
                      <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
}


export default AlertLoading