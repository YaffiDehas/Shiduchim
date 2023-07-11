import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Modal.css';

export default function MyModal({ header, body, show , handleClose}) {
  return (
    <div>
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {header}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>סגור</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}