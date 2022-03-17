import { Box, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Header, Footer} from "./pages/Header";
import News from "./pages/News";
import NewsRedux from "./pages/NewsRedux";
import store from "./redux/store";
import ThemeContext from "./Theme/ThemeContext";



function App() {
  return (
    <ThemeProvider theme={ThemeContext("light")}>
      <Provider store={store}>
        <BrowserRouter>
          <Box
            sx={{ maxWidth: "1920px", margin: "0 auto",  }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to={"/category/all"} />} />
              <Route path="/category/:category" element={<NewsRedux />} />
              <Route path="/category/:category/:id" element={<NewsRedux />} />
            </Routes>
          </Box>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
