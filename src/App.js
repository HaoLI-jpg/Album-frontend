import { CssBaseline, Container, Grid } from "@material-ui/core";
import React from "react";
import { Navbar, Upload, Posts } from "./components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <Navbar />
      </div>
      <Container>
        <Grid>
          <Routes>
            <Route exact path="/" element={<Posts />} />
            <Route exact path="/upload" element={<Upload />} />
          </Routes>
        </Grid>
      </Container>
    </>
  );
};

export default App;
