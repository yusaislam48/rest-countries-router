import React from 'react';
import Box from '@material-ui/core/Box';

export default function Flex() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ maxWidth: 300 }}
      >
        <Box p={1} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 2
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 3
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 4
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 5
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 6
        </Box>
      </Box>
    </div>
  );
}
