import React from 'react'
import { Box } from '@chakra-ui/react'

function Layout({ children }) {
  return (
    <Box mt={8} mx="auto" maxW="800px" w="100%">
      {children}
    </Box>
  )
}

export default Layout
