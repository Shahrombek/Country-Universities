import {
  Container,
  Grid,
  Typography,
  Box,
  Skeleton,
  Button,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getNewsByCategory } from "../../api";
import Paper from "@mui/material/Paper";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PublicIcon from "@mui/icons-material/Public";
import dataCategories from "./categories";

import {
  setCategory,
  setNewsByCategory,
} from "../../redux/actions/newsActions";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function NewsRedux() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { category } = params;

  const { news, loading, error } = useSelector((state) => state.news);

  console.log(news);

  useEffect(() => {
    setNewsByCategory(category);
  }, [category]);

  const changeCategory = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  // Tab
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{background: "rgb(0,0,0,0.05)"}}>
      <Container sx={{ py: 3, px: { xs: 4, sm: 6 },  }}>
      <Typography
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        Universities
      </Typography>
      <Box sx={{ width: "100%", textAlign: "center", my: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ mx: "auto", display: { xs: "inline", sm: "inline-block" } }}
        >
          {dataCategories.map((item, index) => {
            return (
              <Tab
                key={index}
                onClick={() => changeCategory(item.toLowerCase())}
                label={item}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>

        <Box sx={{ my: 4, flex: 1 }}>
          {error ? (
            <Typography color="error.main">Something went wrong</Typography>
          ) : (
            <Grid container spacing={3}>
              {loading
                ? dataCategories.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={300}
                        sx={{ borderRadius: 2 }}
                      />
                      <Skeleton
                        variant="text"
                        height={60}
                        sx={{ borderRadius: 2 }}
                      />
                    </Grid>
                  ))
                : news.map((item, index) => (
                    <Grid
                      key={item.name}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Paper
                        sx={{
                          height: { xs: "200px", sm: "250px" },
                          background: "white",
                          padding: "20px",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: { xs: "center", sm: "start" },
                            }}
                          >
                            <IconButton>
                              <TravelExploreIcon />
                            </IconButton>
                            <span>Country: {item.country}</span>
                          </Typography>
                          <Typography
                            sx={{
                              height: { xs: "30px", sm: "90px" },
                              textAlign: { xs: "center", sm: "start" },
                              py: 3,
                              fontSize: { xs: "16px", sm: "18px" },
                              fontWeight: "bold",
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>

                        <Typography  sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: { xs: "center", sm: "start" },
                              mb:2
                            }}>
                          <PublicIcon sx={{color: 'secondary.main', mr:1}} /> <span>{item.domains}</span>
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: {xs: 'space-around', sm:"space-between"},
                          }}
                        >
                          <Button
                            sx={{
                              textTransform: "capitalize",
                              background: "rgb(36, 153, 239)",
                              "&:hover": { background: "rgb(36, 153, 239)" },
                              borderRadius: "15px",
                              width: "138px !important",
                              p: "4px",
                            }}
                          >
                            <a
                              style={{ textDecoration: "none", color: "white" }}
                              href={item.web_pages}
                            >
                              Go to Website
                            </a>
                          </Button>
                          <Button
                            sx={{
                              color: "white",
                              minWidth: "50px",
                              textTransform: "capitalize",
                              background: "rgb(36, 153, 239)",
                              "&:hover": { background: "rgb(36, 153, 239)" },
                              borderRadius: "15px",
                              p: "4px 8px",
                            }}
                          >
                            {item.alpha_two_code}
                          </Button>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
    </Box>
  );
}

{
  /* <Box sx={{ width: 220, overflow: "hidden", mr: 2 }}>
          <List>
            {dataCategories.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => changeCategory(item.toLowerCase())}
                >
                  <ListItemIcon>
                    <PublicIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box> */
}
