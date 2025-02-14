import {
  Alert,
  AlertDescription,
  AlertIcon,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  GridItem,
  Heading,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react'
import AppContext from '../AppContext'
import { currencyFormat } from '../utils/currencyFormat'
import { percentage } from '../utils/percentage'

function Summary() {
  const { loading, data, error } = useContext(AppContext)

  if (loading) {
    return (
      <GridItem colSpan={{ base: 3, md: 2 }}>
        <Skeleton w="100%" h="300px" />
      </GridItem>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  const { amountPayd, amountTaken } = data
  if (typeof amountPayd === 'undefined' || typeof amountTaken === 'undefined') {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>Erro ao carregar dados</AlertDescription>
      </Alert>
    )
  }

  return (
    <GridItem colSpan={{ base: 3, md: 2 }}>
      <Heading fontSize="xl" px={2}>
        Resumo
      </Heading>
      <Flex
        bg="gray.50"
        borderRadius={10}
        boxShadow="sm"
        direction="column"
        alignItems="center"
        mt={1}
        px={2}
        py={8}
      >
        <CircularProgress
          color="#A50024"
          capIsRound
          value={percentage(amountPayd, amountTaken)}
          size="120px"
          mb={4}
        >
          <CircularProgressLabel>
            {percentage(amountPayd, amountTaken)}%
          </CircularProgressLabel>
        </CircularProgress>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          w="100%"
          alignItems="center"
          justifyContent="space-around"
        >
          <Flex alignItems="baseline">
            <Text fontSize="2xl" fontWeight="700">
              {currencyFormat(amountPayd)}
            </Text>
            <Text fontSize="sm" fontWeight="600" color="gray.400" ml={1} mr={2}>
              Pago
            </Text>
          </Flex>

          <Flex alignItems="baseline">
            <Text fontSize="2xl" fontWeight="700">
              {currencyFormat(amountTaken)}
            </Text>
            <Text fontSize="sm" fontWeight="600" color="gray.400" ml={1}>
              Emprestado
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  )
}

export default Summary
