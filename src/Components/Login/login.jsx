import { useState } from "react";
import { Box, Button, Divider, Input, Link, Typography } from "@mui/joy";
import { IoLogInSharp } from "react-icons/io5";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          margin: 0,
          padding: 0,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundBlendMode: "multiply",
          backgroundImage: `url("./bg.jpg")`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            background: "rgba(255,255,255,0.2)",
            borderRadius: "16px",
            height: "30rem",
            width: "24rem",
            placeSelf: "center",
            backdropFilter: "blur(3px)",
            border: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ placeSelf: "center", marginTop: "-3vh", marginBottom: "3vh" }}
          >
            <Typography level="h2" color="warning">
              {" "}
              Deploy_Desk
            </Typography>
          </Box>
          <Box>
            <Typography level="h4" color="primary" textAlign={"center"}>
              Welcome Back!
            </Typography>
            <Typography level="body-xs" color="primary" textAlign={"center"}>
              Login to continue
            </Typography>
          </Box>
          <Box>
            <Typography level="body-xs" sx={{ color: "whitesmoke" }}>
              Email:
            </Typography>
            <Input
              type="text"
              sx={{ width: "35ch" }}
              size="sm"
              placeholder="Enter Email..."
            />
          </Box>
          <br />
          <Box>
            <Typography level="body-xs" sx={{ color: "whitesmoke" }}>
              Password:
            </Typography>
            <Input
              type="password"
              sx={{ width: "35ch" }}
              size="sm"
              placeholder="Enter Password..."
            />
          </Box>
          <br />
          <Box
            sx={{ display: "flex", justifyContent: "flex-start", width: "78%" }}
          >
            <Link href={"#"}>
              <Typography level="body-xs" sx={{ color: "whitesmoke" }}>
                Forgot Password?
              </Typography>
            </Link>
          </Box>
          <br />
          <Box>
            <Button>
              Login <IoLogInSharp />
            </Button>
          </Box>
          <br />

          <Divider orientation="horizontal" sx={{ padding: "0 2vw" }}>
            OR
          </Divider>
          <br />
          <br />
          <Button>
            Login using SSO <IoLogInSharp />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
