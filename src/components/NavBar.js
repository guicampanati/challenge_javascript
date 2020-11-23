import { AtSignIcon, EmailIcon, SettingsIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex } from '@chakra-ui/react'
import Logo from './Logo'

function NavBar() {
  return (
    <Flex
      as="nav"
      alignItems="center"
      display={{ base: 'none', md: 'flex' }}
      direction="column"
      pr={5}
    >
      <Logo />

      <Divider my={6} />

      <Box bg="gray.50" mb={10} p={4} borderRadius="9999px">
        <AtSignIcon w={6} h={6} color="#000B3C" />
      </Box>
      <EmailIcon w={6} h={6} mb={10} color="white" />
      <SettingsIcon w={6} h={6} mb={10} color="white" />
    </Flex>
  )
}

export default NavBar
