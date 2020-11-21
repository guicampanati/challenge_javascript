import { Flex } from '@chakra-ui/react'

function Layout({ children }) {
  return (
    <Flex
      minH="100vh"
      bg="#000B3C"
      direction={{ base: 'column', md: 'row' }}
      px={{ base: '0.75rem', md: '2rem' }}
      py="1.25rem"
    >
      {children}
    </Flex>
  )
}

export default Layout
