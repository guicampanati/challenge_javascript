import {
  CircularProgress,
  Flex,
  GridItem,
  Heading,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { currencyFormat } from '../utils/currencyFormat'

function Info() {
  const { loading, data, error } = useContext(AppContext)

  if (loading) {
    return (
      <GridItem colSpan={2}>
        <Skeleton w="100%" h="300px" />
      </GridItem>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <GridItem
      colSpan={2}
      bg="gray.50"
      borderRadius="0.5rem"
      boxShadow="lg"
      p="1.5rem"
    >
      <Heading fontSize="xl" px="0.5rem">
        Info
      </Heading>

      <Flex direction="column" alignItems="center" mt="1rem">
        <Flex alignItems="baseline">
          <Text fontSize="2xl" fontWeight="700">
            {currencyFormat(data.amountPayd)}
          </Text>
          <Text fontSize="sm" fontWeight="600" color="gray.400">
            Pago
          </Text>
        </Flex>
        <Flex alignItems="baseline">
          <Text fontSize="2xl" fontWeight="700">
            {currencyFormat(data.amountTaken)}
          </Text>
          <Text fontSize="sm" fontWeight="600" color="gray.400">
            Emprestado
          </Text>
        </Flex>

        <CircularProgress color="#A50024" capIsRound value={30} size="120px" />

        <Text fontSize="2xl" fontWeight="700">
          {currencyFormat(data.totalAmountInTaxes)}
        </Text>
        <Text fontSize="sm" fontWeight="600" color="gray.400">
          Valor Total de Juros do Empréstimo
        </Text>

        <Text fontSize="2xl" fontWeight="700">
          {data.monthlyInterest}%
        </Text>
        <Text fontSize="sm" fontWeight="600" color="gray.400">
          Taxa de Juros Mensal
        </Text>
      </Flex>
    </GridItem>
  )
}

export default Info
