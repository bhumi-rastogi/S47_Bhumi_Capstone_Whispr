import React, { useState } from "react";
import { Avatar,Container, Paper, Typography, TextField, Button, IconButton,Stack } from "@mui/material";
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import {VisuallyHiddenInput} from '../components/styles/StyledComponents';
import {useInputValidation} from '6pp'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev)=> !prev);

const name = useInputValidation("");
const bio = useInputValidation("");
const username = useInputValidation("");
const password = useInputValidation("")

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>

              <Typography textAlign={"center"} 
              m={"1rem"}>
                OR
              </Typography>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">
              Sign Up
            </Typography>
            <form
              style={{
                width: "100%",
                marginTop: "0rem",//change
              }}
            >

            <Stack 
            position={"relative"} 
            width={"10rem"}
            margin={"auto"}
            >

              <Avatar sx={{
                width: "10rem",
                height: "10rem",
                objectFit: "contain",
              }}/>


              <IconButton
              sx={{
                position: "absolute",
                bottom: "0",
                rigth:"0",
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)",
                ":hover":{
                  bgcolor: "rgba(0,0,0,0.7)"
                },
              }}
              component="label"
              >
                <>
                <CameraAltIcon/>
                <VisuallyHiddenInput type="file" />
                </>
              </IconButton>
            </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign UP
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
