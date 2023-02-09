import React from "react";
import { Button } from "@material-ui/core";

const Hints = ({ handleHintClick, hints }) => {
  return (
    <div>
      {/* if hints > 0, show button, else show no more hints left */}
      {hints > 0 ? (
        <Button variant="contained" color="primary" onClick={handleHintClick}>
          Hint ({hints})
        </Button>
      ) : (
        <p>No more hints left</p>
      )}
    </div>
  );
};

export default Hints;
