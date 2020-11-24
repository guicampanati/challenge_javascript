import {
  Alert,
  AlertDescription,
  AlertIcon,
  Flex,
  GridItem,
  Heading,
  Skeleton,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { currencyFormat } from '../utils/currencyFormat'

function Interest() {
  const { loading, data, error } = useContext(AppContext)

  if (loading) {
    return (
      <GridItem colSpan={{ base: 3, md: 1 }}>
        <Skeleton w="100%" h="300px" />
      </GridItem>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  const { totalAmountInTaxes, monthlyInterest } = data
  if (
    typeof totalAmountInTaxes === 'undefined' ||
    typeof monthlyInterest === 'undefined'
  ) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>Erro ao carregar dados</AlertDescription>
      </Alert>
    )
  }

  return (
    <GridItem colSpan={{ base: 3, md: 1 }}>
      <Heading fontSize="xl" px={2}>
        Juros
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
        <StatGroup>
          <Stat>
            <StatLabel color="gray.400">
              Valor Total de Juros do Empréstimo
            </StatLabel>
            <StatNumber>{currencyFormat(totalAmountInTaxes)}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {monthlyInterest}%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Flex>
    </GridItem>
  )
}

export default Interest
