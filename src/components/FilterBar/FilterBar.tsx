import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

interface FilterBarProps {
  selectedGenre: string;
  selectedYear: string;
  selectedRating: string;
  setSelectedGenre: (genre: string) => void;
  setSelectedYear: (year: string) => void;
  setSelectedRating: (rating: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedGenre,
  selectedYear,
  selectedRating,
  setSelectedGenre,
  setSelectedYear,
  setSelectedRating,
}) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const borderColor = isDarkMode ? "#aaaaaa" : "#1C1C1E";

  return (
    <Box
      display="flex"
      gap={2}
      mt={2}
      flexWrap="wrap"
      justifyContent="center"
      sx={{ px: { xs: 1, sm: 3 } }}
    >
      {/* Genre Filter */}
      <FormControl sx={{ minWidth: { xs: 100, sm: 120 }, width: { xs: "100%", sm: "auto" } }}>
        <InputLabel
          id="genre-label"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: isDarkMode ? "#ffffff" : "#1C1C1E",
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          Genre
        </InputLabel>
        <Select
          labelId="genre-label"
          value={selectedGenre}
          onChange={(e: SelectChangeEvent) => setSelectedGenre(e.target.value)}
          label="Genre"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: isDarkMode ? "#ffffff" : "#1C1C1E",
            fontSize: { xs: "0.8rem", sm: "1rem" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: borderColor,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
              borderWidth: "2px",
            },
          }}
        >
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="">All</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="28">Action</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="35">Comedy</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="18">Drama</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="27">Horror</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="10749">Romance</MenuItem>
        </Select>
      </FormControl>

      {/* Year Filter */}
      <FormControl sx={{ minWidth: { xs: 100, sm: 120 }, width: { xs: "100%", sm: "auto" } }}>
        <InputLabel
          id="year-label"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: isDarkMode ? "#ffffff" : "#1C1C1E",
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          Year
        </InputLabel>
        <Select
          labelId="year-label"
          value={selectedYear}
          onChange={(e: SelectChangeEvent) => setSelectedYear(e.target.value)}
          label="Year"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: isDarkMode ? "#ffffff" : "#1C1C1E",
            fontSize: { xs: "0.8rem", sm: "1rem" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: borderColor,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
              borderWidth: "2px",
            },
          }}
        >
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="">All</MenuItem>
          {[...Array(20)].map((_, i) => {
            const year = `${2010 - i}`;
            return (
              <MenuItem
                key={year}
                value={year}
                sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }}
              >
                {year}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      {/* Rating Filter */}
      <FormControl sx={{ minWidth: { xs: 100, sm: 120 }, width: { xs: "100%", sm: "auto" } }}>
        <InputLabel
          id="rating-label"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: isDarkMode ? "#ffffff" : "#1C1C1E",
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          Rating
        </InputLabel>
        <Select
          labelId="rating-label"
          value={selectedRating}
          onChange={(e: SelectChangeEvent) => setSelectedRating(e.target.value)}
          label="Rating"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: isDarkMode ? "#ffffff" : "#1C1C1E",
            fontSize: { xs: "0.8rem", sm: "1rem" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: borderColor,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
              borderWidth: "2px",
            },
          }}
        >
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="">All</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="9">9+</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="8">8+</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="7">7+</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="6">6+</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="6">5+</MenuItem>
          <MenuItem sx={{ fontFamily: "Montserrat, sans-serif", fontSize: { xs: "0.8rem", sm: "1rem" } }} value="6">4+</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
