import React from "react";
import "./Hero.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 36,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <div className="hero">
      <div className="title">
        <p className="arrow">
          <ArrowBackIosIcon />
          Back to all courses
        </p>
      </div>
      <div className="content">
        <div className="left">
          <h1>Logic</h1>
          <h2>
            Stretch your analytic muscles with knights, knaves, logic gates, and
            more!
          </h2>
          <div>
            <p>
              The beginning of our introductory math journey is Logic. Through
              these challenging problem solving exercises, you'll construct the
              critical thinking skills that are the basis for mathematical
              reasoning.
            </p>
            <p>
              You'll use limited information to make predictions – eliminating
              the impossible to uncover the truth. This course builds up to some
              truly mind-bending challenges! <button>Read more</button>
            </p>
          </div>
          <button>View prerequisites and next steps</button>
        </div>
        <div className="right">
          <Card className={classes.root}>
            <CardContent>
              <span className="logic-img">
                <img
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
                  alt=""
                />
              </span>
              <div className="text">
                <div>
                  <Typography variant="h5" component="h3">
                    37
                  </Typography>

                  <Typography variant="body2" component="p">
                    Interactive quizzes
                  </Typography>
                </div>
                <div>
                  <Typography variant="h5" component="h3">
                    265+
                  </Typography>

                  <Typography variant="body2" component="p">
                    Concepts and exercises
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button className="card-btn" fullWidth={true} size="small">
                Start Course
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
