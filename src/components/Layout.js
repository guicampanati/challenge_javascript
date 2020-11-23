import { Flex } from '@chakra-ui/react'

function Layout({ children }) {
  return (
    <Flex
      minH="100vh"
      bg="#000B3C"
      direction={{ base: 'column', md: 'row' }}
      px={{ base: 3, md: 8 }}
      py={5}
    >
      {children}
    </Flex>
  )
}

export default Layout
