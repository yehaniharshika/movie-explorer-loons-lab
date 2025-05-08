// components/SearchBar/SearchBar.tsx
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
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "800px",
        mx: "auto",
        mb: 6,
        gap: 2,
        px: 2,
      }}
    >
      <TextField
        fullWidth
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          fontFamily: "Montserrat, sans-serif",
          "& .MuiOutlinedInput-root": {
            fontFamily: "Montserrat, sans-serif",
            "& fieldset": {
              borderColor: "#ccc", // default
            },
            "&:hover fieldset": {
              borderColor: "#FF5722",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF5722",
              borderWidth: "2px",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="warning"
        sx={{
          px: 4,
          py: 1.5,
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
