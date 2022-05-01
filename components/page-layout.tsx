import { Box } from "@chakra-ui/layout";
import React from "react";
import Sidebar from "./sidebar";

type Props = {};

const sidebarWidth = "21.875rem";
const playbarHeigh = "6.25rem";

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box w="100vw" height="100vh" backgroundColor="black">
      <Box
        as="aside"
        position="absolute"
        top="0"
        width={sidebarWidth}
        left="0"
        height={`calc(100vh - ${playbarHeigh})`}
      >
        <Sidebar />
      </Box>
      <Box
        as="main"
        ml={sidebarWidth}
        mb={playbarHeigh}
        backgroundColor="blue"
        height={`calc(100vh - ${playbarHeigh})`}
      >
        {children}
      </Box>
      <Box
        position="absolute"
        left="0"
        bottom="0"
        height={playbarHeigh}
        w="100vw"
        zIndex="docked"
        backgroundColor="green"
      >
        Player
      </Box>
    </Box>
  );
};

export default PageLayout;
