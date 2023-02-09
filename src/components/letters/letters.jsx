import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  lettersContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  letterButton: {
    margin: theme.spacing(0.5),
    fontSize: "1rem",
  },
}));

const Letters = ({ handleLetterClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.lettersContainer}>
      {/* use Array.keys to create an array of indexes */}
      {[...Array(26).keys()].map((index) => (
        <Button
          key={index}
          className={classes.letterButton}
          variant="contained"
          color="primary"
          // use String.fromCharCode to convert the index to a letter
          onClick={() => handleLetterClick(String.fromCharCode(index + 97))}
        >
          {String.fromCharCode(index + 97)}
        </Button>
      ))}
    </div>
  );
};

export default Letters;
