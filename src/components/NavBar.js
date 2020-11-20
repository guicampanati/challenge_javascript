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
      pr="1.25rem"
    >
      <Logo />

      <Divider my="1.5rem" />

      <Box bg="gray.50" mb="2.5rem" p="1rem" borderRadius="9999px">
        <AtSignIcon w={6} h={6} color="#000B3C" />
      </Box>
      <EmailIcon w={6} h={6} mb="2.5rem" color="white" />
      <SettingsIcon w={6} h={6} mb="2.5rem" color="white" />
    </Flex>
  )
}

export default NavBar
