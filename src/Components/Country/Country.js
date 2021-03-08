import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Country = (props) => {
    const {name, flag} = props.country; 
    
    const history = useHistory();
    const clickHandler = (name) =>{
        history.push(`/country/${name}`);
    }
    
    const classes = useStyles();
    return (
        <div className='col-md-3'>
        <Box
        display="flex"
        flexWrap="wrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ maxWidth: 300 }}
        >
        <Card className={classes.root}>
        {/* <Link to={`/country/${name}`}> */}
            <CardActionArea onClick={()=>clickHandler(name)}>
                <CardMedia
                className={classes.media}
                image={flag}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, officia? Consequatur delectus veniam quaerat nobis ipsa aliquam totam velit id?
                </Typography>
                </CardContent>
            </CardActionArea>
        {/* </Link> */}
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Link to={`/country/${name}`}>
                <Button size="small" color="primary">
                Learn More
                </Button>
                </Link>
            </CardActions>
        </Card>
        </Box>
        </div>
    );
};

export default Country;