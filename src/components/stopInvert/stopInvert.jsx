import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { ContainerGrid, FormContainer } from "../common/style";
import { find_stop_invert } from "../common/calculation";
import Header from "../header/header";

const StopInvert = () => {
  const [startInvert, setStartInvert] = useState("");
  const [conduitSlope, setConduitSlope] = useState("");
  const [conduitLength, setConduitLength] = useState("");
  const [ans, setAns] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let stop_invert = find_stop_invert(
      startInvert,
      conduitSlope,
      conduitLength
    );
    setAns(stop_invert);
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
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                type="submit"
              >
                Submit
              </Button>
              <h2>Stop Invert: {ans}</h2>
            </FormContainer>
          </form>
        </Grid>
      </ContainerGrid>
    </>
  );
};

export default StopInvert;
