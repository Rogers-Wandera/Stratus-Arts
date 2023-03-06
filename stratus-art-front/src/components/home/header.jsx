import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import ProductsMenu from "./shared/menu";
import ProductAdvert from "./shared/slider";
// import LeftMenu from "./shared/leftmenu";

export default function Header() {
  return (
    <Box sx={{ margin: "1rem 1rem" }}>
      <Grid container spacing={3}>
        {/* <Grid item xs>
            <ProductsMenu />
        </Grid> */}
        <Grid item xs={12} md={12}>
          <ProductAdvert />
        </Grid>
        {/* <Grid item xs>
          <LeftMenu />
        </Grid> */}
      </Grid>
    </Box>
  );
}
