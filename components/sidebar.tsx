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
import Link from "next/link";

type Props = {};

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];
const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const Sidebar: React.VFC<Props> = (props: Props) => {
  return (
    <Box as="aside" w="100%" height="100%" px="0.31rem" color="gray.100">
      <Box py={4}>
        <Box w={30} mb={4} px={4}>
          <Image
            src="/traxlogo.svg"
            height={60}
            width={120}
            layout="fixed"
            color="white"
          />
        </Box>
        <Box mb={4}>
          <List spacing="2">
            {navMenu.map((item) => (
              <ListItem px={4} fontSize="md" key={item.name}>
                <LinkBox>
                  <Link href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={item.icon} color="white" mr={4} />
                      {item.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.100" />
        <Box mt={4}>
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem key={item.name} px={4} fontSize="md">
                <LinkBox>
                  <Link href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={item.icon} color="white" mr={4} />
                      {item.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
