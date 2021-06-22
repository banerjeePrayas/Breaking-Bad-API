import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Blog from './Blog'

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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));


const BlogList = () => {

    const [blogs, setBlogs] = useState([]);
    const classes = useStyles();


    useEffect(() => {
        
        fetch('https://blogu-strapi.herokuapp.com/blogs').then((res) => {
            if(res.status === 400) {
                throw new Error("Bad Reponse from Server")
            }
            return res.json();
        }).then((data) => {
            setBlogs(data);
            // console.log(blogs)
        })
    }, []);
    
    // console.log(blogs)

    return (
        <>
            
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                
                    <Blog blogs={blogs} />
                </Grid>

            </Container>
        </>

)}

export default BlogList;
