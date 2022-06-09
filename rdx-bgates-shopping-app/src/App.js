import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componets/Navbar/İndex";
import Card from "./componets/Card";
import { Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Center>
        <Box w="1000px" background="blue">
          <Navbar />
          <Card />
        </Box>
      </Center>
    </div>
  );
}

export default App;
