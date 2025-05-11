import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

interface LoginPopupProps {
  setShowLogin: (show: boolean) => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({
  setShowLogin,
  setIsLoggedIn,
}) => {
  const [currState, setCurrState] = useState<"Login" | "Sign Up">("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (currState === "Sign Up" && !data.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!data.email.trim() || !data.password.trim()) {
      setMessage("Email and password are required.");
      return;
    }

    if (currState === "Sign Up") {
      localStorage.setItem("user", JSON.stringify(data));
      setMessage("Account created successfully!");
      setTimeout(() => {
        setCurrState("Login");
        setMessage("");
        setData({ name: "", email: "", password: "" });
      }, 1000);
    } else {
      const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
      if (
        data.email === savedUser.email &&
        data.password === savedUser.password
      ) {
        setMessage("Login successful!");
        setIsLoggedIn(true);
        setTimeout(() => {
          setShowLogin(false);
          Swal.fire({
            title: "✅ Login Successful!",
            icon: "success",
            confirmButtonText: "OK",
            background: "black",
            color: "white",
            confirmButtonColor: "red",
            width: "450px",
          });
        }, 1000);
      } else {
        setMessage("Invalid email or password!");
      }
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
        fontFamily: "Montserrat",
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          padding: 3,
          borderRadius: 2,
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: 2,
          borderColor: "red",
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
            {currState}
          </Typography>
          <IconButton onClick={() => setShowLogin(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {message && (
          <Alert
            severity={
              message.includes("successfully") || message.includes("successful")
                ? "success"
                : "error"
            }
            sx={{
              fontFamily: "Montserrat",
              backgroundColor: message.includes("success") ? "#2e7d32" : "#c62828",
              color: "white",
            }}
          >
            {message}
          </Alert>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {currState === "Sign Up" && (
            <TextField
              name="name"
              placeholder="Your Name"
              onChange={onChangeHandler}
              value={data.name}
              fullWidth
              sx={textFieldStyles}
              InputProps={{ style: { color: "white" } }}
            />
          )}

          <TextField
            name="email"
            placeholder="Your Email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            fullWidth
            sx={textFieldStyles}
            InputProps={{ style: { color: "white" } }}
          />

          <TextField
            name="password"
            placeholder="Password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            fullWidth
            sx={textFieldStyles}
            InputProps={{ style: { color: "white" } }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "red",
              color: "white",
              marginTop: 1,
              "&:hover": { backgroundColor: "#a60000" },
            }}
          >
            {currState === "Sign Up" ? "Create account" : "Login"}
          </Button>

          <Typography sx={{ fontFamily: "Montserrat", marginTop: 1 }}>
            {currState === "Login" ? (
              <>
                Create a new account?{" "}
                <span
                  onClick={() => {
                    setCurrState("Sign Up");
                    setMessage("");
                  }}
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Click here
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setCurrState("Login");
                    setMessage("");
                  }}
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Login here
                </span>
              </>
            )}
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

const textFieldStyles = {
  marginBottom: 2,
  fontFamily: "Montserrat, sans-serif",
  "& .MuiOutlinedInput-root": {
    fontFamily: "Montserrat, sans-serif",
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
      borderWidth: "2px",
    },
  },
  input: {
    color: "white",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#aaa",
  },
};

export default LoginPopup;
