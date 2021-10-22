import MaterialSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Snackbar = ({ open, severity, message, onClose, ...props }:any) => {
  const handleClose = (event:any, reason:any) => {
    if (reason === 'clickaway') return;
    onClose(event);
  }

  return (
    <MaterialSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      {...props}
    >
      <Alert variant="filled" onClose={() => handleClose} severity={severity}>
        {message}
      </Alert>
    </MaterialSnackbar>
  );
}

export default Snackbar;
