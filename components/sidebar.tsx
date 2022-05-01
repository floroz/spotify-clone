import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
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

const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Logo: React.VFC = () => (
  <Box w={30} mb={4} px={4}>
    <Image
      src="/traxlogo.svg"
      height={60}
      width={120}
      layout="fixed"
      color="white"
    />
  </Box>
);

const NavMenu: React.VFC = () => (
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
);

const MusicMenu: React.VFC = () => (
  <Box my={4}>
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
);

const ScrollableSidebar: React.VFC = () => (
  <Box h="66%" overflowY="auto" p={4}>
    <List spacing={2}>
      {playlist.map((name) => (
        <ListItem key={name}>
          <LinkBox>
            <Link href="/" passHref>
              <LinkOverlay>{name}</LinkOverlay>
            </Link>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  </Box>
);

const Sidebar: React.VFC = () => {
  return (
    <Box as="aside" w="100%" height="100%" px="0.31rem" py={4} color="gray.100">
      <Logo />
      <NavMenu />
      <MusicMenu />
      <Divider color="gray.100" />
      <ScrollableSidebar />
    </Box>
  );
};

export default Sidebar;
