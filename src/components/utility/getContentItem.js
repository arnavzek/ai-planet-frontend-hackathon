import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Outlet, Link } from "react-router-dom";
import getAge from "./getAge";

const imageStyling = {
  height: "130px",
  width: "130px",
  objectFit: "cover",
  borderRadius: "25px",
};

export default function getContentItem({ item, key }) {
  return (
    <Grid key={key} item xs={4}>
      <Link
        to={"/submission/" + item.id}
        style={{ textDecoration: "none", color: "#111" }}
      >
        <Stack
          spacing={3}
          borderRadius={5}
          height={"300px"}
          bgcolor="#fff"
          p={3}
          boxShadow={"20px 20px 50px #cbcbcb, -30px -30px 60px #ffffff"}
        >
          <Stack direction={"row"} spacing={3} alignItems="center">
            <img style={imageStyling} src={item.image.url} />
            <Typography textTransform={"capitalize"} variant="h3">
              {item.title}
            </Typography>
          </Stack>
          <Typography>{item.description}</Typography>
          <Typography>{getAge(item.uploadTime)}</Typography>
        </Stack>
      </Link>
    </Grid>
  );
}
