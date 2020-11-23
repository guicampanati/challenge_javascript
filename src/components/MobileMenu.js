import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/react'
import Logo from './Logo'

function MobileMenu() {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      marginBottom={6}
      borderBottom="1px"
      borderColor="gray.600"
    >
      <Flex alignItems="center" justifyContent="space-between" pb={4}>
        <Logo full />
        <HamburgerIcon w={8} h={8} color="gray.50" />
      </Flex>
    </Box>
  )
}

export default MobileMenu
