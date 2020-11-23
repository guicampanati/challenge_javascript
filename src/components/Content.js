import { Box, Grid } from '@chakra-ui/react'
import Interest from './Interest'
import Installments from './Installments'
import Summary from './Summary'

function Content() {
  return (
    <Box
      w="100%"
      bg="gray.200"
      p={{ base: '1.25rem', md: '2rem' }}
      borderRadius={{ base: '20px', md: '30px' }}
    >
      <Grid templateColumns={'repeat(3, minmax(0, 1fr))'} gap="1.5rem">
        <Summary />
        <Interest />
        <Installments />
      </Grid>
    </Box>
  )
}

export default Content
