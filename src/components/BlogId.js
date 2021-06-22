import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

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
  },
  img: {
      width: "100%",
      backgroundPosition: "center center"
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
    textAlign: 'left',
    // lineHeight: 5
  },
}));


const BlogId = ({ blog, blogContent, blogImage }) => {

    const classes = useStyles();
    // console.log(blog.featuredimage.name)



    return (
        <>
            
            <Container className={classes.cardGrid} maxWidth="md">
            
            <Grid item xs={12} md={12}>
                <img className={classes.img} src={`https://blogu-strapi.herokuapp.com${blogImage.url}`} alt='featured'></img>
                <Typography variant="h4" gutterBottom>
                    {blog.blogtitle}
                </Typography>
                <Divider />
                {/* {blogContent.map((content) => ( */}
                    <Markdown className={classes.markdown}>
                    {blogContent}
                    </Markdown>
                {/* ))} */}
            </Grid>

            </Container>
        </>

)}

export default BlogId;
