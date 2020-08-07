import React from "react";
import Typical from "react-typical";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    borderRadius: 20,
  },

  sideheader: {
    float: "left",
    marginLeft: 90,
    marginTop: 130,
  },
}));

export function Header() {
  const classes = useStyles();
  return (
    <div>
      <Grid >
        <div className={classes.sideheader}>
          <Typography
            variant="h6"
            text-align="left"
            style={{ color: "lightgreen" }}
          >
            HI, WE'RE JUNTO
          </Typography>

          <Typography variant="h4" text-align="left" texs>
            &nbsp; &nbsp; &nbsp; We're here to help you &nbsp; &nbsp; &nbsp;
          </Typography>
          <Typography variant="h4" text-align="left">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "outrank the competitions.",
                1000,
                "create badass content.",
                1000,
                "generate more leads.",
                1000,
                "look sexy online.",
                1000,
                "close more deals.",
                1000,
                "grow your businesses.",
                1000,
                "optimize conversations",
                1000,
              ]}
            />
          </Typography>

          <Button
            variant="contained"
            style={{ backgroundColor: "darkblue", color: "white" }}
            size="large"
            className={classes.margin}
          >
            let's make it happen
          </Button>
        </div>
      </Grid>
    </div>
  );
}
