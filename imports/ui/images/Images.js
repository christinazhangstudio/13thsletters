import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Spinner,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { useTracker } from 'meteor/react-meteor-data';
import { ImagesCollection } from '../../db/ImagesCollection';

const deleteImage = ({ _id }) => Meteor.call('images.remove', _id);

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dhdbgz6lu',
    uploadPreset: '13thsletters',
    showAdvancedOptions: true,  
    styles:{
        palette: {
          window: "#000",
          windowBorder: "#90A0B3",
          tabIcon: "#00C60F",
          menuIcons: "#00C60F",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link:  "#C600B7",
          action:  "#C600B7",
          inactiveTabIcon: "#00941E",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1"
        },
    }
  }, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
    }
  }
  )

  
export const Images = ({ user }) => {
    const userFilter = user ? { userId: user._id } : {};

    const { images, allCount, isLoading } = useTracker(() => {
        const noDataAvailable = { tasks: [], allCount: 0 };
        if (!Meteor.user()) {
          return noDataAvailable;
        }
        const handler = Meteor.subscribe('images');
    
        if (!handler.ready()) {
          return { ...noDataAvailable, isLoading: true };
        }
    
        const imagesData = TasksCollection.find(
          userFilter,
          {
            sort: { createdAt: -1 },
          }
        ).fetch();

        const all = ImagesCollection.find({}).count();

        return { images: imagesData, allCount: all };

    });
    const Header = () => (
        <Stack as={Box} textAlign="center" spacing={{ base: 8 }} py={{ base: 10 }}>
          <Heading fontWeight={600}>
            <Text
                fontSize="6xl"
                fontFamily="Metal Mania"
                bgGradient="linear(to-l, #675AAA,#9C00EF)"
                bgClip="text"
            >
              Send an Image
            </Text>
          </Heading>
        </Stack>
      );

    const EmptyImages = () => (
    <Stack justify="center" textAlign={'center'} direction="row">
      <Text color={useColorModeValue('black', 'white')} fontSize="xl" fontFamily="Special Elite">
        Hand a copy of your most treasured picture to 13th. It's CRITICAL you select "Advanced" and enter "13" as its tag, so that 13th can put it in her queue.
      </Text>
    </Stack>
    );


    if (allCount === 0) {
        return (
          <>
            <Header />
            <Button id="upload_widget" className="cloudinary-button" color="#7F4DC0"
            onClick={() =>  myWidget.open()}>
                Upload files
            </Button>
            <EmptyImages />

          </>
        );
      }


    return (
    <>
        <Header />
        <Button id="upload_widget" className="cloudinary-button" color="#7F4DC0"
        onClick={() =>  myWidget.open()}>
            Upload files
        </Button>

        {images.map(image => (
            <Image
              key={image._id}
              image={image}
              onDelete={deleteImage}
            />
          ))}
    </>
  );
};