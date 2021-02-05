import React from 'react';

const AlertLoading = (props) => {

  if(props.open){
    return (
        <div className="modal fade show" 
        id="logoutModal" 
        tabIndex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-modal="true" role="dialog"
        style={{display: "block"}}>
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Carregando...</h5>
                  </div>
                  <div className="modal-body">
                    <div className="spinner-border text-primary" role="status">
                      <center><span className="sr-only">Loading...</span></center>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}


export default AlertLoading