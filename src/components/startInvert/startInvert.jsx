import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

import { ContainerGrid, FormContainer } from "../common/style";
import { find_start_invert } from "../common/calculation";
import Header from "../header/header";

const StartInvert = () => {
  const [stopInvert, setStopInvert] = useState("");
  const [conduitSlope, setConduitSlope] = useState("");
  const [conduitLength, setConduitLength] = useState("");
  const [ans, setAns] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setAns(find_start_invert(stopInvert, conduitSlope, conduitLength));
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
                label="Stop Invert"
                placeholder="enter stop invert value(m)"
                type="number"
                required
                value={stopInvert}
                onChange={(e) => setStopInvert(e.target.value)}
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
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
              >
                Submit
              </Button>
              <h2>Start Invert: {ans}</h2>
            </FormContainer>
          </form>
        </Grid>
      </ContainerGrid>
    </>
  );
};

export default StartInvert;
