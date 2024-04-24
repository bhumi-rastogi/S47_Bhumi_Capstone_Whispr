import { Grid } from "@mui/material";
import React from "react";

const AppLayout = () => (WrappedaComponent) => {
  return (props) => {
    return(
    <>
    <Title/>
      <Header/>
      <Grid container height={"calc(100vh - 4rem)"}>
        <Grid item xs={4} height={"100%"} bgcolor="primary.main">
          First
          </Grid>
        <Grid item xs={4} height={"100%"} bgcolor="primary.main">
          <WrappedaComponent{...props}/>
        </Grid>
        <Grid item xs={4} height={"100%"} bgcolor="primary.main">
          Third
        </Grid>
      </Grid>
    </>
    );
  };
};

export default AppLayout;
