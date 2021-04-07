import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 20,
    },
    media: {
        height: 200,
    },
});

export default function ChampTile({ champInfo }) {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={'http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/' + champInfo.id + '_0.jpg'}
                    title={champInfo.id}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {champInfo.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {champInfo.blurb}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
