import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import React from "react";
import {
  MdSearch,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import Image from "next/image";

type Props = {};

const Sidebar: React.VFC<Props> = (props: Props) => {
  return (
    <Box as="aside" w="100%" height="100%" px="5px" color="gray">
      <Box py="20px">
        <Box w="120px" mb="20px" px="20">
          <Image
            src="/traxlogo.svg"
            height={60}
            width={120}
            layout="fixed"
            color="white"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
