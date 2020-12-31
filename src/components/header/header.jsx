import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="header-container">
          <div className="header-icon">
            <IconButton edge="start">
              <Link to="/">
                <Home className="home-icon" fontSize="large" />
              </Link>
            </IconButton>
          </div>
          {/* <Typography variant="h6">HDD</Typography> */}
          <div className="header-options">
            <Link to="/start-invert">
              <Button size="small" variant="contained">
                Start Invert
              </Button>
            </Link>
            <Link to="/stop-invert">
              <Button size="small" variant="contained">
                Stop Invert
              </Button>
            </Link>
            <Link to="/slope">
              <Button size="small" variant="contained">
                Slope
              </Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
