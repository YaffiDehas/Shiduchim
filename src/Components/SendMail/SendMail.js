import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/material/TextField/TextField';
import { saveMessage } from '../../store/manager/managerActions';
import './SendMail.css';

export default function SendEmail({ show, handleClose }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.manager);
    const [message, setMessage] = React.useState({
        subject: '',
        body: ''
    });

    const handleChangeSubject = (e) => {
        setMessage({ ...message, subject: e.target.value });
    }
    const addEmoji = (emoji) => () => {
        const newbody = message.body + emoji;
        setMessage({ ...message, body: newbody });
    }

    const handleCloseModal =() => {
        handleClose();
    }

    const handleChangeBody = (e) => {
        setMessage({ ...message, body: e.target.value });
    }

    const handleSendEmail = () => {
        if (!data.messages) {
            dispatch(saveMessage([{ id: 0, from: "yufi@sjdls", ...message }]));
        } else {
            const messages = data.messages;
            messages.push({ id: messages.length, from: "ndkwn@jklj", ...message });
            // TODO: שמירת ההודעה למנהל
            dispatch(saveMessage(messages));
            handleClose(false);
        }
    }
    return (
        <Dialog
            open={show}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <TextField
                    label="נושא"
                    name="subject"
                    onChange={handleChangeSubject}
                    variant="outlined"
                    margin="normal" />
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Textarea
                        placeholder="הקלד כאן את גוף ההודעה...."
                        value={message.body}
                        onChange={handleChangeBody}
                        minRows={2}
                        maxRows={4}
                        startDecorator={
                            <Box sx={{ display: 'flex', gap: 0.5 }}>
                                <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                                    👍
                                </IconButton>
                                <IconButton variant="outlined" color="neutral" onClick={addEmoji('👌')}>
                                    👌
                                </IconButton>
                                <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                                    😍
                                </IconButton>
                                <IconButton variant="outlined" color="neutral" onClick={addEmoji('😂')}>
                                    😂
                                </IconButton>
                                <IconButton variant="outlined" color="neutral" onClick={addEmoji('😭')}>
                                    😭
                                </IconButton>
                                <IconButton variant="outlined" color="neutral" onClick={addEmoji('❤️')}>
                                    ❤️
                                </IconButton>
                            </Box>
                        }
                        endDecorator={
                            <Typography level="body3" sx={{ ml: 'auto' }}>
                                {message.body.length} character(s)
                            </Typography>
                        }
                        sx={{ minWidth: 300 }}
                    />          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal}>סגור</Button>
                <Button onClick={handleSendEmail} autoFocus>
                    שלח
                </Button>
            </DialogActions>
        </Dialog>
    );
}