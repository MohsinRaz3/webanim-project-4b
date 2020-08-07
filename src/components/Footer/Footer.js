import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "bottom",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
}));

export const Footerr = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.footer}>
        <Typography variant="body2" color="textSecondary">
          {"© "} {new Date().getFullYear()} SixFour Creative LLC
        </Typography>
      </div>
    </div>
  );
};
