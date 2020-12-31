import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import {
  HomeContainerGrid,
  WelcomeGrid,
  OptionGrid,
} from "../../components/common/style";

import "../../components/common/style.css";

const HomePage = () => {
  return (
    <HomeContainerGrid direction="row" container>
      <WelcomeGrid item xs={11} sm={10} md={8} className="welcome">
        Welcome
      </WelcomeGrid>
      <OptionGrid item xs={12} sm={9} md={6} className="options">
        <Link to="/stop-invert">
          <Button variant="outlined" color="primary" className="option-btn">
            Stop Invert
          </Button>
        </Link>
        <Link to="/start-invert">
          <Button variant="outlined" color="primary" className="option-btn">
            Start Invert
          </Button>
        </Link>
        <Link to="/slope">
          <Button variant="outlined" color="primary" className="option-btn">
            Slope
          </Button>
        </Link>
      </OptionGrid>
    </HomeContainerGrid>
  );
};

export default HomePage;
