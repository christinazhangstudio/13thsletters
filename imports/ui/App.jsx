import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import Welcome from "./Welcome";
import Navbar from './Navbar';
import Guide from "./Guide";
import theme from "../../client/theme";
import { useTracker } from 'meteor/react-meteor-data';
import { Tasks } from './tasks/Tasks';
import { Images } from './images/Images';
import { TransformedImages } from './images/TransformedImages';
import { LoginForm } from './auth/LoginForm';
import { TasksCollection } from '../db/TasksCollection';

import { Box, ChakraProvider, Container, Stack, Link } from '@chakra-ui/react';


export const App = () => {
  const user = useTracker(() => Meteor.user());

  const myGallery = cloudinary.galleryWidget({
    container: "#my-gallery",
    cloudName: 'dhdbgz6lu',
    mediaAssets: [{ tag: "13" }]
  });

  myGallery.render();

  const userFilter = user ? { userId: user._id } : {};

  const { message } = useTracker(() => {
    const array = TasksCollection.find(userFilter).fetch();
    if (!(array === undefined || array.length == 0)) {
      console.log(array)
      const randomIndex = Math.floor(Math.random() * array.length);
      const element = array[randomIndex];
      console.log(element.description)

      const mssg = element.description
      return { message: mssg }
    }

    return { message: "" }
  });

  var garble = require("garble")
  const copyMessage = message
  console.log(garble(copyMessage))
  const messageGarbled = garble(copyMessage)

  const transformedGallery = cloudinary.galleryWidget({
    container: "#transformed-gallery",
    cloudName: 'dhdbgz6lu',
    mediaAssets: [{ tag: "13" }],
    transformation: {
      transformation: [
        { overlay: { url: "https://res.cloudinary.com/dhdbgz6lu/image/upload/v1635082914/docs/psych.jpg" } },
        { effect: "displace", flags: "layer_apply", x: 10, y: 10 },
        { effect: "hue" },
        { effect: "cartoonify" },
        { overlay: { font_family: "Special Elite", font_size: 100, font_weight: "bold", text: message }, width: 1000, gravity: "center", effect: "colorize", color: "#f08", y: 300, x: 0 }
      ]
    }
  });

  transformedGallery.render();

  return (<ChakraProvider theme={theme}>
    <Navbar user={user} />
    <Welcome />
    <Container maxW="3xl" mb={8}>
      <Stack as={Box} spacing={{ base: 8 }}>
        {!user ? <LoginForm /> : <Tasks user={user} />}
        {!user ? null : <Images user={user} />}
      </Stack>
      <Box id="my-gallery" width="max-width:50%"></Box>
      <Stack as={Box} spacing={{ base: 8 }}>
        {!user ? null : <TransformedImages user={user} />}
      </Stack>
      <Link id="check"></Link>
      <Box id="transformed-gallery" width="max-width:50%"></Box>
    </Container>
    <Guide />
  </ChakraProvider>);
};
