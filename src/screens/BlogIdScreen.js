import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from '../components/Markdown';
import BlogId from '../components/BlogId';

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


const BlogIdScreen = ({ match }) => {

    const [blog, setBlog] = useState([]);
    const [blogContent, setBlogContent] = useState('');
    const [blogImage, setBlogImage] = useState('');
    const classes = useStyles();
    const blogId = match.params.id;


    useEffect(() => {
        
        fetch(`https://blogu-strapi.herokuapp.com/blogs/${blogId}`).then((res) => {
            if(res.status === 400) {
                throw new Error("Bad Reponse from Server")
            }
            return res.json();
        }).then((data) => {
            setBlog(data);
            setBlogContent(data.blogcontent)
            setBlogImage(data.featuredimage)
            // console.log(blogs)
        })
    }, [blogId]);
    
    // console.log(blog)
    // console.log(blogContent)

    return (
        <>
            
            <Container className={classes.cardGrid} maxWidth="md">
            
            <Grid item xs={12} md={12}>
                <BlogId blog={blog} blogContent={blogContent} blogImage={blogImage} />
            </Grid>

            </Container>
        </>

)}

export default BlogIdScreen;
