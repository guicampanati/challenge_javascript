import { Box, Grid } from '@chakra-ui/react'
import Interest from './Interest'
import Installments from './Installments'
import Summary from './Summary'

function Content() {
  return (
    <Box
      w="100%"
      bg="gray.200"
      p={{ base: 2, md: 8 }}
      borderRadius={{ base: 20, md: 30 }}
    >
      <Grid templateColumns={'repeat(3, minmax(0, 1fr))'} gap={6}>
        <Summary />
        <Interest />
        <Installments />
      </Grid>
    </Box>
  )
}

export default Content
