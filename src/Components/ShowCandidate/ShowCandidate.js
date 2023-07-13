import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import './ShowCandidate.css';

export default function ShowCandidate(props) {
    const { candidate, show, handleClose } = props;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal
            keepMounted
            open={show}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Card sx={{ maxWidth: 345, margin: 2, minWidth: 200, maxWidth: 500 }}>
                    <CardHeader>
                        <Typography variant="h5" component="div">
                            {`${candidate.firstName} ${candidate.lastName}`}
                        </Typography>
                        <Typography variant="h6" component="div">
                            {`גיל:${candidate.age}`}
                        </Typography>
                    </CardHeader>
                    <CardContent>
                        <Grid container columns={{ md: 12 }}>
                            {candidate.gender && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מין:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.gender}
                                </Typography>
                            </Grid>}
                            {candidate.familyStatus && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מצב משפחתי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.familyStatus}
                                </Typography>
                            </Grid>}
                            {candidate.bornDate && <Grid item xs={2} sm={4} md={4}>
                                <Typography>תאריך לידה:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.bornDate.toString()}
                                </Typography>
                            </Grid>}
                            {candidate.city && <Grid item xs={2} sm={4} md={4}>
                                <Typography>`עיר:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.city}
                                </Typography>
                            </Grid>}
                            {candidate.countryBirth && <Grid item xs={2} sm={4} md={4}>
                                <Typography>ארץ לידה:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.countryBirth}
                                </Typography>
                            </Grid>}
                            {candidate.phone && <Grid item xs={2} sm={4} md={4}>
                                <Typography>טלפון:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.phone}
                                </Typography>
                            </Grid>}
                            {candidate.email && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מייל:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.email}
                                </Typography>
                            </Grid>}
                            {candidate.characters && <Grid item xs={2} sm={4} md={4}>
                                <Typography>תכונות אופי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.characters}
                                </Typography>
                            </Grid>}
                            {candidate.colorSkin && <Grid item xs={2} sm={4} md={4}>
                                <Typography>גוון עור:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.colorSkin}
                                </Typography>
                            </Grid>}
                            {candidate.height && <Grid item xs={2} sm={4} md={4}>
                                <Typography>גובה:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.height.toString()}
                                </Typography>
                            </Grid>}
                            {candidate.bodyStracture && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מבנה גוף:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.bodyStracture}
                                </Typography>
                            </Grid>}
                            {candidate.healthCondition && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מצב בריאותי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.healthCondition}
                                </Typography>
                            </Grid>}
                            {candidate.economicSituation && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מצב כלכלי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.economicSituation}
                                </Typography>
                            </Grid>}
                            {candidate.clothingStyle && <Grid item xs={2} sm={4} md={4}>
                                <Typography>סגנון לבוש:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.clothingStyle}
                                </Typography>
                            </Grid>}
                            {candidate.look && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מראה כללי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.look}
                                </Typography>
                            </Grid>}
                            {candidate.headdress && <Grid item xs={2} sm={4} md={4}>
                                <Typography>כיסוי ראש:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.headdress}
                                </Typography>
                            </Grid>}
                            {candidate.sector && <Grid item xs={2} sm={4} md={4}>
                                <Typography>שיוך מגזרי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.sector}
                                </Typography>
                            </Grid>}
                            {candidate.origin && <Grid item xs={2} sm={4} md={4}>
                                <Typography>עידה:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.origin}
                                </Typography>
                            </Grid>}
                            {candidate.commitMoney && <Grid item xs={2} sm={4} md={4}>
                                <Typography>התחיבות כספית:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.commitMoney.toString()}
                                </Typography>
                            </Grid>}
                            {candidate.requireMoney && <Grid item xs={2} sm={4} md={4}>
                                <Typography>דרישה כספית:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.requireMoney.toString()}
                                </Typography>
                            </Grid>}
                            {candidate.yeshivaOrSeminar && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מקוםלימודים/עבודה:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.yeshivaOrSeminar}
                                </Typography>
                            </Grid>}
                            {candidate.doingToday && <Grid item xs={2} sm={4} md={4}>
                                <Typography>עובד/לומד:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.doingToday}
                                </Typography>
                            </Grid>}
                            {candidate.fatherName && <Grid item xs={2} sm={4} md={4}>
                                <Typography>שם האב:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.fatherName}
                                </Typography>
                            </Grid>}
                            {candidate.fatherDoing && <Grid item xs={2} sm={4} md={4}>
                                <Typography>עיסוק האב:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.fatherDoing}
                                </Typography>
                            </Grid>}
                            {candidate.motherName && <Grid item xs={2} sm={4} md={4}>
                                <Typography>שם האם:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.motherName}
                                </Typography>
                            </Grid>}
                            {candidate.motherDoing && <Grid item xs={2} sm={4} md={4}>
                                <Typography>עיסוק האם:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.motherDoing}
                                </Typography>
                            </Grid>}
                            {candidate.mozaAv && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מוצא אב:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.mozaAv}
                                </Typography>
                            </Grid>}
                            {candidate.mozaEm && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מוצא אם:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.mozaEm}
                                </Typography>
                            </Grid>}
                            {candidate.siblings && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מס' אחים ואחיות:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.siblings}
                                </Typography>
                            </Grid>}
                            {candidate.parentStatus && <Grid item xs={2} sm={4} md={4}>
                                <Typography>סטטוס הורים:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.parentStatus}
                                </Typography>
                            </Grid>}
                            {candidate.halachaMethod && <Grid item xs={2} sm={4} md={4}>
                                <Typography>שיטה הלכתית:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.halachaMethod}
                                </Typography>
                            </Grid>}
                            <Grid container><Typography variant="h6" component="div">דרישות מבן/בת הזןג:</Typography></Grid>
                            {candidate.drishotSector && <Grid item xs={2} sm={4} md={4}>
                                <Typography>שיוך מגזרי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.drishotSector}
                                </Typography>
                            </Grid>}
                            {candidate.drishotLook && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מראה כללי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.drishotLook}
                                </Typography>
                            </Grid>}
                            {candidate.drishotCharacters && <Grid item xs={2} sm={4} md={4}>
                                <Typography>תכונות אופי:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.drishotCharacters}
                                </Typography>
                            </Grid>}
                            {candidate.drishotFavoriteMoza && <Grid item xs={2} sm={4} md={4}>
                                <Typography>ארץ מוצא מועדף:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.drishotFavoriteMoza}
                                </Typography>
                            </Grid>}
                            {candidate.drishotNotMoza && <Grid item xs={2} sm={4} md={4}>
                                <Typography>לא ממוצא:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.drishotNotMoza}
                                </Typography>
                            </Grid>}
                            {candidate.fromAge && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מגיל:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.fromAge.toString()}
                                </Typography>
                            </Grid>}
                            {candidate.mostAge && <Grid item xs={2} sm={4} md={4}>
                                <Typography>עד גיל:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.mostAge.toString()}
                                </Typography>
                            </Grid>}
                            {candidate.fromHeight && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מגובה:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.fromHeight.toFixed(2)}
                                </Typography>
                            </Grid>}
                            {candidate.mostHeight && <Grid item xs={2} sm={4} md={4}>
                                <Typography>עד גובה:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.mostHeight.toFixed(2)}
                                </Typography>
                            </Grid>}
                            <Grid container><Typography variant="h6" component="div">פרטים נוספים:</Typography></Grid>
                            {candidate.casherPhone && <Grid item xs={2} sm={4} md={4}>
                                <Typography>פלאפון כשר:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.casherPhone}
                                </Typography>
                            </Grid>}
                            {candidate.licence && <Grid item xs={2} sm={4} md={4}>
                                <Typography>רשיון:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.licence}
                                </Typography>
                            </Grid>}
                            {candidate.smoking && <Grid item xs={2} sm={4} md={4}>
                                <Typography>מעשן:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.smoking}
                                </Typography>
                            </Grid>}
                            {candidate.recomendedPeople && candidate.recomendedPeople.length >= 1 && <Grid container><Typography variant="h6" component="div">מחותנים:</Typography></Grid>}
                            {candidate.recomendedPeople && candidate.recomendedPeople.length >= 1 && candidate.recomendedPeople.map((recomended, index) => {
                                return (
                                    <Grid container key={index}>
                                        <Typography>מחותן {index + 1}:</Typography>
                                        {recomended.recommendName && <Grid item >
                                            <Typography>שם:</Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                                {recomended.recommendName}
                                            </Typography>
                                        </Grid>}
                                        {recomended.recommendPhone && <Grid item >
                                            <Typography>טלפון:</Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                                {recomended.recommendPhone}
                                            </Typography>
                                        </Grid>}
                                        {recomended.recommendRelative && <Grid>
                                            <Typography>קרבה:</Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                                {recomended.recommendRelative}
                                            </Typography>
                                        </Grid>}
                                    </Grid>
                                );
                            })}
                            {candidate.inLaws && candidate.inLaws.length >= 1 && <Grid container><Typography variant="h6" component="div">מקורות לבירורים:</Typography></Grid>}
                            {candidate.inLaws && candidate.inLaws.length >= 1 && candidate.inLaws.map((inLaw, index) => {
                                return (
                                    <Grid container key={index}>
                                        <Typography>מקור {index + 1}:</Typography>
                                        {inLaw.fatherInLawName && <Grid>
                                            <Typography>שם:</Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                                {inLaw.fatherInLawName}
                                            </Typography>
                                        </Grid>}
                                        {inLaw.fatherInLawPhone && <Grid>
                                            <Typography>טלפון:</Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                                {inLaw.fatherInLawPhone}
                                            </Typography>
                                        </Grid>}
                                        {inLaw.fatherInLawCity && <Grid>
                                            <Typography>עיר:</Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                                {inLaw.fatherInLawCity}
                                            </Typography>
                                        </Grid>}
                                    </Grid>);
                            })}
                            <Grid container><Typography variant="h6" component="div">פרטי ממלא השאלון:</Typography></Grid>
                            {candidate.fillQuestionarieName && <Grid>
                                <Typography>שם ממלא הטופס:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.fillQuestionarieName}
                                </Typography>
                            </Grid>}
                            {candidate.fillQuestionariePhone && <Grid item xs={2} sm={4} md={4}>
                                <Typography>טלפון ממלא הטופס:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.fillQuestionariePhone}
                                </Typography>
                            </Grid>}
                            {candidate.fillQuestionarieRelative && <Grid item xs={2} sm={4} md={4}>
                                <Typography>קרבה למועמד:</Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {candidate.fillQuestionarieRelative}
                                </Typography>
                            </Grid>}
                        </Grid>
                    </CardContent>
                </Card >
            </Box>
        </Modal >
    );
}