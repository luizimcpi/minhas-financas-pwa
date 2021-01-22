import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = (props) => {

  return (
    <div>
      <Dialog
          open={props.open}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">{"Exclusão de Lançamento"}</DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              Deseja mesmo excluir o lançamento: {props.lancamentoInfo.descricao} ?
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={props.deletarAction} color="secondary">
              Sim
          </Button>
          <Button onClick={props.cancelarAction} color="primary">
              Não
          </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}

export default AlertDialogSlide