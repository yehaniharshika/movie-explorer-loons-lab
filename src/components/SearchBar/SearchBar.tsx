import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, InputAdornment, Button } from "@mui/material";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: { xs: "100%", sm: "95%", md: "850px" },
        mx: "auto",
        mb: { xs: 2, sm: 4 },
        px: { xs: 1, sm: 2 },
        py: { xs: 1.5, sm: 2 },
        gap: { xs: 1.5, sm: 2 },
        backgroundColor: "#121212",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <TextField
        fullWidth
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#ffffffcc" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          input: {
            color: "#ffffff",
            fontSize: {
              xs: "0.85rem",
              sm: "0.95rem",
              md: "1rem",
            },
          },
          "& .MuiOutlinedInput-root": {
            fontFamily: "Montserrat, sans-serif",
            backgroundColor: "#1e1e1e",
            "& fieldset": {
              borderColor: "#555",
            },
            "&:hover fieldset": {
              borderColor: "#c23616",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF5722",
              borderWidth: "2px",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#bbbbbb",
            fontFamily: "Montserrat, sans-serif",
            fontSize: {
              xs: "0.8rem",
              sm: "0.9rem",
            },
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="warning"
        sx={{
          width: { xs: "100px", sm: "auto" },
          minWidth: { xs: "100px", sm: "100px", md: "120px" },
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1, sm: 1.2, md: 1.5 },
          textTransform: "none",
          fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
          fontWeight: 600,
          fontFamily: "Montserrat, sans-serif",
          backgroundColor: "#c23616",
          color: "#fff",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
