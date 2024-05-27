import { Box, Button, Grid, GridItem, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroCard from "./components/HeroCard";
import ButtonIcon from "./components/ButtonIcon";

function App() {
  const toast = useToast();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Stack>
          <HeroCard />
          <ButtonIcon />
          <Button
            onClick={() =>
              toast({
                position: "top",
                render: () => (
                  <Box color="white" p={10} bg="red.500">
                    Alert
                    <br />
                    <br />
                    More info comingsoon1
                  </Box>
                ),
              })
            }
          >
            Show Toast
          </Button>
        </Stack>
      </GridItem>
      <p>not final product</p>
    </Grid>
  );
}

export default App;
