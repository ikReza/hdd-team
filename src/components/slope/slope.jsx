import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

import { ContainerGrid, FormContainer } from "../common/style";
import { find_slope } from "../common/calculation";
import Header from "../header/header";

const Slope = () => {
  const [startInvert, setStartInvert] = useState("");
  const [stopInvert, setStopInvert] = useState("");
  const [conduitLength, setConduitLength] = useState("");
  const [ans, setAns] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setAns(find_slope);
  };
  return (
    <>
      <Header />
      <ContainerGrid container>
        <Grid item xs={10} sm={6} md={4}>
          <form onSubmit={handleSubmit}>
            <FormContainer elevation={5}>
              <TextField
                fullWidth
                margin="dense"
                variant="outlined"
                label="Start Invert"
                placeholder="enter start invert value(m) of conduit"
                type="number"
                required
                value={startInvert}
                onChange={(e) => setStartInvert(e.target.value)}
              />
              <TextField
                fullWidth
                margin="dense"
                variant="outlined"
                label="Stop Invert"
                placeholder="enter stop invert value(m) of conduit"
                type="number"
                required
                value={stopInvert}
                onChange={(e) => setStopInvert(e.target.value)}
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
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
              >
                Submit
              </Button>
              {ans ? <h2>Slope: {ans}m/km</h2> : <h2>Slope: {ans}</h2>}
            </FormContainer>
          </form>
        </Grid>
      </ContainerGrid>
    </>
  );
};

export default Slope;
