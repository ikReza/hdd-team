import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";

export const ContainerGrid = styled(Grid)`
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Paper)`
  margin-bottom: 2vh;
  padding: 3vh 3vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// Home Page

export const HomeContainerGrid = styled(Grid)`
  height: 90vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const WelcomeGrid = styled(Grid)`
  height: 60vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const OptionGrid = styled(Grid)`
  height: 30vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
