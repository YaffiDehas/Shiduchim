import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { addFavoritedCandidate } from '../../store/matchMaker/matchMakerActions';
import './SearchedCard.css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function SearchedCard(props) {
    const dispatch = useDispatch();
    const matchMaker = useSelector((state) => state.matchMaker);
    const { candidate } = props;
    const moreDetails = { ...candidate, firstName: "", lastName: "", age: "" }
    const [expanded, setExpanded] = React.useState(false);
    const [addFavorited, setAddFavorited] = React.useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddToFavorite = () => {
        // TODO: שמירת מועמד באזור אישי של שדכנית
        console.log('props', props);
        console.log(matchMaker)
        const favoritedList = matchMaker.faoritedCandidates;
        const isExist = favoritedList && favoritedList.find((favorited) => {
            return (favorited.firstName === candidate.firstName && favorited.lastName === candidate.lastName)
        });
        if (!isExist) {
            if (!favoritedList)
                dispatch(addFavoritedCandidate([candidate]));
            else {
                favoritedList.push(candidate);
                dispatch(addFavoritedCandidate(favoritedList));
            }
        } else {
            const newFavoritedList = favoritedList.filter((fovorited) => (favoritedList.firstName !== candidate.firstName && fovorited.lastName !== candidate.lastName))
            dispatch(addFavoritedCandidate(newFavoritedList));
        }
        setAddFavorited(!isExist);
    };

    return (
        <Card sx={{ maxWidth: 345, margin: 2, minWidth: 200, maxWidth: 300 }}>
            <CardHeader
                action={
                    <>
                        <IconButton aria-label="favorite" onClick={handleAddToFavorite}>
                            {addFavorited ? <FavoriteIcon /> :
                                <FavoriteBorderIcon />}
                        </IconButton>
                        {/* <IconButton aria-label="favorite" onClick={handleAddToFavorite}>
                                <ContactMailIcon />
                        </IconButton> */}
                        <IconButton aria-label="favorite" onClick={handleAddToFavorite}>
                                <DeleteIcon />
                        </IconButton>
                    </>
                }
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {`${candidate.firstName} ${candidate.lastName}`}
                </Typography>
                <Typography variant="h6" component="div">
                    {`גיל:${candidate.age}`}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מין:${candidate.gender}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מצהב משפחתי:${candidate.familyStatus}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`תאריך לידה:${candidate.bornDate}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`עיר:${candidate.city}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`ארץ לידה:${candidate.countryBirth}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`טלפון:${candidate.phone}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מייל:${candidate.email}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`תכונות אופי:${candidate.characters}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`גוון עור:${candidate.colorSkin}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`גובה:${candidate.height}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מבנה גוף:${candidate.bodyStracture}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מצב בריאותי:${candidate.healthCondition}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מצב כלכלי:${candidate.economicSituation}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`סגנון לבוש:${candidate.clothingStyle}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מראה כללי:${candidate.look}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`כיסוי ראש:${candidate.headdress}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`שיוך מגזרי:${candidate.sector}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`עידה:${candidate.origin}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`התחיבות כספית:${candidate.commitMoney}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`דרישה כספית:${candidate.requireMoney}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מקוםלימודים/עבודה:${candidate.yeshivaOrSeminar}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`עובד/לומד:${candidate.doingToday}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`שם האב:${candidate.fatherName}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`עיסוק האב:${candidate.fatherDoing}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`שם האם:${candidate.motherName}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`עיסוק האם:${candidate.motherDoing}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מוצא אב:${candidate.mozaAv}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מוצא אם:${candidate.mozaEm}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`מס' אחים ואחיות:${candidate.siblings}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`סטטוס הורים:${candidate.parentStatus}`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {`שיטה הלכתית:${candidate.halachaMethod}`}
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}