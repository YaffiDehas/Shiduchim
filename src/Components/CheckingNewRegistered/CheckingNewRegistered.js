import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, useLocation } from "react-router-dom"
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    DataGridPro,
    GridColDef,
    GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowEditStopReasons,
} from '@mui/x-data-grid-pro';
import { deleteRegister } from '../../store/user/userActions';
import { LicenseInfo } from '@mui/x-license-pro';
import Header from '../Header/Header';
import ShowCandidate from '../ShowCandidate/ShowCandidate';
import './CheckingNewRegistered.css';
import data from '../../data';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert } from '@mui/material';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import ShowMatchMaker from '../ShowCandidate/ShowCandidate';

LicenseInfo.setLicenseKey('x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e');


const handleSaveClick = (id) => () => {
    // TODO: שמירת המועמד/השדכן בדאטה בייס וכן עדכון ברידקס של רשימת המועמדים
    console.log('save',id)
};

const handleDeleteClick = (id) => () => {
    // TODO: מחיקת המועמד השדכן שנרשם בדאטבה בייס כולל עדכון ברידדקס
    console.log('delete', id)
};





export default function CheckingNewRegistered() {
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const eventType = params.get("eventType");
    const [isVisibility,setIsVisibility] = React.useState(false);
    const [selected ,setSelected] = React.useState(false);

    const handleVisiblityClick = (id) => () => {
        setIsVisibility(true);
        setSelected(data[0]);
    }

    const handleCloseModal =() =>{
        setIsVisibility(false);
    }
    console.log(eventType);

    const rows = data
    // const rows = data.registers.filter((register) => register.userType === "candidate");
  
    const [rowModesModel, setRowModesModel] = React.useState({});
    const columns = [
        {field: 'id',
        headerName: 'ID',
        width: 150,
        editable: true,},
        {
            field: 'firstName',
            headerName: 'שם פרטי',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'שם משפחה',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'מייל',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'area',
            headerName: 'עיר',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'גיל',
            type: 'number',
            width: 90,
            editable: true,
        },
        {
            field: 'phone',
            headerName: 'טלפון',
            type: 'number',
            width: 110,
            editable: true,
        },
        // {
        //     field: "delete",
        //     headerName: "מחיקה ושליחת הודעה לנרשם",
        //     sortable: false,
        //     width: 190,
        //     disableClickEventBubbling: true,
    
        //     renderCell: (params) => {
        //         return (
        //             <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
        //                 <IconButton aria-label="favorite" onClick={(params) => handleDeleteRegister(params)}>
        //                     <DeleteIcon />
        //                 </IconButton>
        //             </div>
        //         );
        //     }
        // },
        // {
        //     field: "add",
        //     headerName: "אישור והוספה למאגר",
        //     sortable: false,
        //     width: 140,
        //     disableClickEventBubbling: true,
        //     renderCell: (params) => {
        //         return (
        //             <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
        //                 <IconButton aria-label="favorite" onClick={handleAddRegister}>
        //                     <DeleteIcon />
        //                 </IconButton>
        //             </div>
        //         );
        //     }
        // },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'אישור והוספה למאגר/מחיקה ושליחת הודעה',
            width: 500,
            cellClassName: 'actions',
            getActions: (id) => {
                return [
                    <GridActionsCellItem
                        icon={<SaveIcon />}
                        label="Save"
                        sx={{
                            color: 'primary.main',
                        }}
                        onClick={handleSaveClick(id)}
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                            icon={<VisibilityIcon />}
                            label="Visibility"
                            onClick={handleVisiblityClick(id)}
                            color="inherit"
                        />,
                ];
            },
        }
    ];
    return (
        <>
        <Header />
        <div className='CheckingNewRegistered'>
         {/* <h4>{userType && userType === "matchMaker" ? 'בדיקת שדכניות חדשות' : 'בדיקת מועמדים חדשים'}</h4> */}
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGridPro
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                />
            </Box>
        </div>
        <Dialog
            open={isVisibility}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            <Typography variant="h5" component="div">
                            {`${selected.firstName} ${selected.lastName}`}
                        </Typography>
                        
            </DialogTitle>
            <DialogTitle id="alert-dialog-title">
            <Typography variant="h6" component="div">
                            {`גיל:${selected.age}`}
                        </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <ShowCandidate show={isVisibility} handleClose={handleCloseModal} candidate={selected} />
                    {/* <ShowMatchMaker show={isVisibility} handleClose={handleCloseModal} matchMaker={selected}/> */}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal}>סגור</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}