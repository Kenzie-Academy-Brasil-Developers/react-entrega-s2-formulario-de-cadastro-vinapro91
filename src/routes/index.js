import { Route, Switch } from "react-router";
import Register from "../pages/Register";
import Home from "../pages/Home";

import { useState } from "react";
import { Container, Typography } from "@material-ui/core";
const Routes = () => {
  const [isLogeed, setIsLogeed] = useState(false);
  return (
    <Switch>
      <Route exact path="/">
        <Register setIsLogeed={setIsLogeed} />
      </Route>
      <Route path="/home/:id">
        {isLogeed ? (
          <Home />
        ) : (
          <Container
            sx={{
              border: "black solid 1px",
              backgroundColor: "rgba( 255, 255, 255, 0.55 )",
              backdropFilter: "blur( 10px )",
              color: "red",
              fontSize: "45px",
            }}
            color="primary"
          >
            <Typography>
              Não Autorizado, Click em Login para entrar no sistema!
            </Typography>
          </Container>
        )}
      </Route>
    </Switch>
  );
};

export default Routes;
