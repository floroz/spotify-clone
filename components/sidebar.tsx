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
import { SkeletonText } from "@chakra-ui/react";
import { usePlaylistQuery } from "../hooks/queries";
import { ROUTES } from "../lib/constants/routes";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: ROUTES.home,
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: ROUTES.library,
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

const ScrollableSidebar: React.VFC = () => {
  const { data, status } = usePlaylistQuery({
    retry: 1,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });

  const renderPlaylist = () => {
    if (status === "loading") {
      return (
        <Box w="50%">
          <SkeletonText noOfLines={20} spacing={3} />
        </Box>
      );
    }

    if (status === "error") {
      return <Box>Error</Box>;
    }

    if (!data || !data?.length) {
      return <Box>No Playlist</Box>;
    }

    return data.map((playlist) => (
      <ListItem key={playlist.id}>
        <LinkBox>
          <Link href={`${ROUTES.playlist}/${playlist.name}`} passHref>
            <LinkOverlay>{playlist.name}</LinkOverlay>
          </Link>
        </LinkBox>
      </ListItem>
    ));
  };

  return (
    <Box h="66%" overflowY="auto" p={4}>
      <List spacing={2}>{renderPlaylist()}</List>
    </Box>
  );
};

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
