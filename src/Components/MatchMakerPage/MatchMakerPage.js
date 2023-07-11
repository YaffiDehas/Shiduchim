import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import rings2 from '../../assets/rings2.jpg';
import './MatchMakerPage.css';
import SendEmail from '../SendMail/SendMail';

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});
function MatchMakerPage() {
  const navigate = useNavigate();
  const [showSendMessagemodal, setShowSendMessageModal] = useState(false);

  // הודעה לבדיקת מועמדים לא רלוונטיים
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    setShowModal(!showModal);
}
const handleOpenUnRellevantCandidate = () => {
  navigate('/PersonalArea');
}

  const handleClick = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "matchMakingClosed":
        navigate('/CloseEngagedPage');
        break;
      case "personalArea":
        navigate('/PersonalArea');
        break;
      case "ClosedMatched":
        navigate('/CloseMatch');
        break;
      case "sendMessages":
        // navigate('/SendEmail');
        setShowSendMessageModal(true);
        break;
      case "showMessages":
        navigate('/SearchAndMatch');
        break;
      default:
        navigate('/login');
    }
  }

  const handleCloseModal = () => {
    setShowSendMessageModal(!showSendMessagemodal);
  }

  return (
    <>
      <div id="app">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
          <div className='actions'>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item>
                <Button variant="contained" onClick={handleClick} name="matchMakingClosed">שידוכים שנסגרו</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleClick} name="personalArea">אזור אישי</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleClick} name="ClosedMatched">הודעת סגירת שידוך</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleClick} name="sendMessages">שליחת הודעה למנהל</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleClick} name="showMessages">צפיה בכטיסי משתמשים</Button>
              </Grid>
            </Grid>
          </div>
          <ImageSrc style={{ backgroundImage: `url(${rings2})` }} />
        </Box>
        <SendEmail show={showSendMessagemodal} handleClose={handleCloseModal} />
      </div>
      {showModal && <Dialog
        open={showModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          האם ידוע/ה לך על מועמדים לא רלוונטים?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>לא ידוע לי</Button>
          <Button onClick={handleOpenUnRellevantCandidate} autoFocus>
            כן, אני רוצה לעדכן
          </Button>
        </DialogActions>
      </Dialog>
      }
    </>
  );
}

export default MatchMakerPage;
