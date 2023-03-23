import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import getSubmissions from "./utility/getSubmissions";
import getAge from "./utility/getAge";
import Nav from "./Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const imageStyling = {
  height: "130px",
  width: "130px",
  objectFit: "cover",
  borderRadius: "25px",
};

export default function SubmissionPage() {
  let navigate = useNavigate();
  let { id } = useParams();
  let item = getItem();
  if (!item) return "Invalid Submission";

  return (
    <Stack
      spacing={0}
      borderRadius={5}
      height={"300px"}
      bgcolor="#fff"
      boxShadow={"20px 20px 50px #cbcbcb, -30px -30px 60px #ffffff"}
    >
      <Nav />
      <Stack
        bgcolor="#003145"
        color="#fff"
        direction={"row"}
        spacing={3}
        alignItems="center"
        p="50px 100px"
        justifyContent={"space-between"}
      >
        <Stack spacing={3}>
          <Stack direction="row" spacing={3} alignItems="center">
            <img style={imageStyling} src={item.image.url} />
            <Typography textTransform={"capitalize"} variant="h3">
              {item.title}
            </Typography>
          </Stack>
          <Typography>{item.summary}</Typography>

          <Stack direction="row" alignItems={"center"}>
            <Button
              onClick={makeLike}
              startIcon={item.liked ? <StarIcon /> : <StarBorderIcon />}
            ></Button>
            <Typography>{parseDate(item.uploadTime)}</Typography>
          </Stack>
        </Stack>

        <Stack spacing={5}>
          <Link to={"/edit/" + id}>
            <Button
              sx={{ padding: "10px 25px", color: "#fff", borderRadius: "15px" }}
              variant="outlined"
            >
              Edit
            </Button>
          </Link>
          <Button
            sx={{ padding: "10px 25px", color: "#fff", borderRadius: "15px" }}
            variant="outlined"
            onClick={() => {
              makeDelete();
            }}
          >
            Delete
          </Button>
        </Stack>
      </Stack>

      <Stack
        mt="50px"
        p="20px 100px"
        direction={"row"}
        justifyContent="space-between"
      >
        <Stack spacing={3}>
          <Typography variant="h5">Description</Typography>
          <Typography>{item.description}</Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography sx={{ opacity: 0.5 }} variant="h6">
            Hackathon
          </Typography>
          <Typography variant="h5">Oceanic Treasure Hunt</Typography>
          <Typography sx={{ opacity: 0.5 }}>
            {parseDate(item.startdatevalue)} - {parseDate(item.enddatevalue)}
          </Typography>

          <Link to={item.git}>
            <Button
              sx={{ padding: "10px 25px", color: "#111", borderRadius: "15px" }}
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </Link>

          <Link to={item.other}>
            <Button
              startIcon={<LaunchIcon />}
              sx={{ padding: "10px 25px", color: "#111", borderRadius: "15px" }}
              variant="outlined"
            >
              Other Link
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );

  function getItem() {
    let subs = getSubmissions();
    for (let sub of subs) {
      if (sub.id == id) return sub;
    }

    return null;
  }

  function makeDelete() {
    console.log("editt....");

    let items = getSubmissions();

    let i = null;
    items.map((itm, index) => {
      if (itm.id == id) {
        i = index;
      }
    });

    console.log(id);

    if (i !== null) {
      console.log(i);
      items.splice(i, 1);
      localStorage.setItem("submissions", JSON.stringify(items));
      navigate("/");
    }
  }

  function parseDate(str) {
    let date = new Date(str);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  function makeLike() {
    let submissions = getSubmissions();

    for (let itm of submissions) {
      if (itm.id == id) {
        if (itm.liked) {
          itm.liked = false;
        } else {
          itm.liked = true;
        }
      }
    }

    localStorage.setItem("submissions", JSON.stringify(submissions));
    window.location.reload();
  }
}
