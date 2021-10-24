import React from 'react';
import { Box, Button, HStack, Stack, Checkbox } from '@chakra-ui/react';

export const Image = ({ image, onDelete }) => (
  <HStack mt={4}>
    <Box w="80%">
        {image.thumbnail}
    </Box>
    <Stack w="100%" justify="flex-end" direction="row">
      <Button
        colorScheme="red"
        variant="outline"
        size="xs"
        onClick={() => onDelete(image)}
      >
        Remove
      </Button>
    </Stack>
  </HStack>
);
