import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/react'
import Logo from './Logo'

function MobileMenu() {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      marginBottom="1.5rem"
      borderBottom="1px"
      borderColor="gray.600"
    >
      <Flex alignItems="center" justifyContent="space-between" pb="1rem">
        <Logo full />
        <HamburgerIcon w={8} h={8} color="gray.50" />
      </Flex>
    </Box>
  )
}

export default MobileMenu
