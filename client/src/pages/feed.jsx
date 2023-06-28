import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Grid,
  Avatar,
  Typography,
  ButtonGroup,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import Link from "@mui/material/Link";
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
///////////// IMPORTS //////////////

const feed = () => {
  const navigate = useNavigate();
  ///////////// STYLES //////////////
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 700,
    color: theme.palette.text.primary,
  }));
  return (
    <>
      <Box
        // sx={{
        //   flexGrow: 1,
        //   overflow: "hidden",
        //   px: 3,
        //   backgroundColor: "white",
        // }}
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          px: 3,
          backgroundColor: "white",
          position: "fixed", // Set the position to fixed
          top: 0, // Specify the desired vertical position
          left: 0, // Specify the desired horizontal position
          width: "100%", // Make the box span the entire width of the window
          height: "100%", // Make the box span the entire height of the window
        }}
      >
        <StyledPaper
          sx={{
            my: 2,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Profile Picture" src="{postThumbnail}" />
            </Grid>
            <Grid item xs>
              <Typography fontWeight={600}>
                <Link
                  href=""
                  underline="hover"
                  color="orange"
                  onClick={() => {}}
                >
                  {"postUser"}
                </Link>
              </Typography>
              <Typography fontWeight={100} onClick={() => {}}>
                {"posts"}
              </Typography>
              <Link
                fontWeight={100}
                sx={{ color: "#949391" }}
                href=""
                underline="hover"
                onClick={() => {}}
              >
                {`commentsCount comments`}
              </Link>
              <br></br>
              <Link
                fontSize={"small"}
                style={{ color: "#03a9f4" }}
                onClick={() => {}}
              >
                {"districtLabel"}
              </Link>
            </Grid>
            <ButtonGroup>
              <List>
                <ListItem>
                  <ListItemButton onClick={() => {}}>
                    <ArrowUpwardIcon
                      sx={{ color: "#D0DB61" }}
                    ></ArrowUpwardIcon>
                  </ListItemButton>
                  <p style={{ color: "#03a9f4" }}>{"votes"}</p>
                  <ListItemButton onClick={() => {}}>
                    <ArrowDownwardIcon
                      sx={{ color: "#D9381E" }}
                    ></ArrowDownwardIcon>
                  </ListItemButton>
                  {"deleteButton"}
                </ListItem>
              </List>
            </ButtonGroup>
          </Grid>
        </StyledPaper>
      </Box>
    </>
  );
};

export default feed;
