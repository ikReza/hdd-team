import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import { find_stop_invert } from "./calculation";

const FlowCalculation = () => {
  const [startInvert, setStartInvert] = useState("");
  const [conduitSlope, setConduitSlope] = useState("");
  const [conduitLength, setConduitLength] = useState("");
  const [ans, setAns] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let stop_invert = find_stop_invert(
      startInvert,
      conduitSlope,
      conduitLength
    );
    setAns(stop_invert);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Start Invert"
          placeholder="enter start invert value(m)"
          type="number"
          required
          value={startInvert}
          onChange={(e) => setStartInvert(e.target.value)}
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Conduit Slope"
          placeholder="enter conduit slope value(m)/1km"
          type="number"
          required
          value={conduitSlope}
          onChange={(e) => setConduitSlope(e.target.value)}
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Conduit Length"
          placeholder="enter conduit length value(m)"
          type="number"
          required
          value={conduitLength}
          onChange={(e) => setConduitLength(e.target.value)}
        />
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
        <h2>Stop Invert: {ans}</h2>
      </form>
    </div>
  );
};

export default FlowCalculation;
