import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { productDetailsActions } from "../redux/slices/productSlice";
function PaginationC() {
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      primary: {
        light: "#f0c14b",
        main: "#f0c14b",
        dark: "#f0c14b",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack className="home__pagination">
          <Pagination
            count={13}
            color="primary"
            onChange={(event, page) =>
              dispatch(productDetailsActions.showProducts(page))
            }
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default PaginationC;
