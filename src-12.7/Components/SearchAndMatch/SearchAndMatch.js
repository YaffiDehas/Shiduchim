import { React, useState } from "react"
import axios from "axios";
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import SearchedCard from "../SearchedCard/SearchedCard";
import './SearchAndMatch.css';
import Header from "../Header/Header";

const SearchAndMatch = () => {
    const [formValues, setFormValues] = useState({});
    const [matches, setMatches] = useState([]);

    const currentUser = useSelector((state) => state.user.currentUser);
    const candidates = useSelector((state) => state.user.candidates);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = () => {

        // TODO: שליחת פרטי סינון מועמדים 
        axios.post(`http://localhost:5000/api/shiduchim/${currentUser.role}/filter-candidates`, formValues, {
            headers: { 'x-access-token': currentUser.token }
        }).then(resp => {
            if(resp.status === 200){
                setMatches(resp.data.filteredCandidates)
            }

        }).catch(err => {
            console.error('Error retrieving messages:', err);
        })
    }


    return (
        <>
            <Header />
            <div className="searchAndMatchPage">
                <Typography variant="h4" component="div">
                    חיפוש ומציאת התאמות
                </Typography>
                <form>
                    <Grid container spacing={2}>
                        <Grid item>
                            <TextField
                                label="שיוך מגזרי"
                                name="sector"
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="מגיל"
                                name="fromAge"
                                type="number"
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='עד גיל'
                                name='mostAge'
                                type="number"
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='מעמד(עובד/לומד)'
                                name='Status'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='מגובה'
                                name='fromHeight'
                                onChange={handleChange}
                                type="number"
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='עד גובה'
                                name='mostHeight'
                                onChange={handleChange}
                                type='number'
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='מראה כללי'
                                name='look'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='גוון עור'
                                name='colorSkin'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='ארץ לידה'
                                name='countryBirth'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='ארץ מוצא מועדף'
                                name='drishotFavoriteMoza'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='לא ממוצא'
                                name='drishotNotMoza'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='עיר'
                                name='city'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='תכונות אופי'
                                name='characters'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='כיסוי ראש'
                                name='headdress'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='מצב בריאותי'
                                name='healthCondition'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        {/* <Grid container> */}
                        <Grid item>
                            <TextField
                                label='שיטה הלכתית'
                                name='halachaMethod'
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button id="filter" onClick={handleSubmit} variant="contained">סנן</Button>
                    </Grid>
                </form>
            </div>
            <Grid container>
                {matches.length === 0 ?
                    candidates.map(cand => <SearchedCard candidate={cand} />)
                    :
                    matches.map((person) => <SearchedCard candidate={person} />)
                }

            </Grid>
        </>
    );
}
export default SearchAndMatch;