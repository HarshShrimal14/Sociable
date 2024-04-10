import React , { useState , useEffect} from "react";  
import { Container , AppBar , Typography , Grow , Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import sociable from "./images/sociable.png"
import Posts from "./components/Posts/Posts"
import Forms from "./components/Forms/Forms"
import useStyles from "./styles"
import {getPosts} from "./actions/posts"

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  
    return (
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Sociable</Typography>
          <img className={classes.image} src={sociable} alt="icon" height="40" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Forms currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );
  };
  
  export default App;

