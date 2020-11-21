import { Box, Grid } from '@chakra-ui/react'
import Info from './Info'
import Installments from './Installments'

function Content() {
  return (
    <Box
      w="100%"
      bg="gray.200"
      p={{ base: '1.25rem', md: '2rem' }}
      borderRadius={{ base: '20px', md: '30px' }}
    >
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(3, 1fr)' }}
        gap="1.5rem"
      >
        <Info />

        <Installments />
      </Grid>
    </Box>
  )
}

export default Content
