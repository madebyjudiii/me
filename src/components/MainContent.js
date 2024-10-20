import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SitemarkIcon from "./SitemarkIcon";
import { FacebookRounded, Instagram } from "@mui/icons-material";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

function Author({ icon, social, account }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AvatarGroup max={3}>{icon}</AvatarGroup>
        <Typography variant="caption">{social}</Typography>
      </Box>
      <Typography variant="caption">{account}</Typography>
    </Box>
  );
}

export function Search() {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "25ch" } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const cardData = [
    {
      icon: <FacebookRounded sx={{ color: "#169cff" }} />,
      social: "Facebook",
      account: "Made by Judiii",
      url: "https://www.facebook.com/madebyjudiii",
    },
    {
      icon: <Instagram sx={{ color: "#833ab4" }} />,
      social: "Instagram",
      account: "Stichet by Judiii",
      url: "https://www.instagram.com/stichetbyjudiii/",
    },
    {
      icon: (
        <svg
          style={{
            height: "24px",
            fill: useTheme().palette.mode === "light" ? "#000000" : "#ffffff",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
        </svg>
      ),
      social: "Tiktok",
      account: "Made by Judiii",
      url: "https://www.tiktok.com/@madebyjudiii",
    },
  ];

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/logo.png" style={{height: "100px"}} />
        <Typography sx={{ marginTop: "24px" }}>
          Stay in the loop with my latest crochet
        </Typography>
      </div>
      <Grid container spacing={2} columns={12}>
        {cardData.map((card, idx) => (
          <Grid size={{ xs: 12, md: 6 }} key={idx}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(0)}
              onBlur={handleBlur}
              onClick={() => window.open(card.url, "_blank")}
              tabIndex={0}
              className={focusedCardIndex === 0 ? "Mui-focused" : ""}
            >
              <Author {...card} />
            </SyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
