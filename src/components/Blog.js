import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  img: {
    width: "100%",
    height: '10rem',
    backgroundPosition: 'center center',
  },
  btn: {
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
    margin: "1rem"
    
  }
}));

const Blog = ({blogs}) => {
  const classes = useStyles();


  return (

    <>
      { blogs.map(blog => (
        <Grid item key={blog._id} xs={12} sm={6} md={4}>
        <Card className={classes.root}>
        <CardHeader
         
          title={`${blog.blogtitle.substring(0, 30)}...`}
          subheader={blog.categories[0].categoryName}
        />
        <img className={classes.img} src={`https://blogu-strapi.herokuapp.com${blog.featuredimage.url}`} alt='img'></img>
        {/* <CardMedia
          className={classes.media}
          image={blog.featuredimage.url}
          title="Paella dish"
        /> */}
        {/* <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent> */}
        
        <RouterLink to={`/${blog.id}`} style={{textDecoration: 'none'}}>
          <Button className={classes.btn} variant="contained" color="secondary">
            Read More
          </Button>
        </RouterLink>
      </Card>
      </Grid>
      )) }
    </>
    
    
  );
}

export default Blog;
