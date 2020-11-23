import {
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
      <GridItem colSpan={2}>
        <Skeleton w="100%" h="300px" />
      </GridItem>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <GridItem colSpan={{ base: 3, md: 1 }}>
      <Heading fontSize="xl" px="0.5rem">
        Juros
      </Heading>
      <Flex
        bg="gray.50"
        borderRadius="0.5rem"
        boxShadow="sm"
        direction="column"
        alignItems="center"
        mt={1}
        p={2}
      >
        <StatGroup>
          <Stat>
            <StatLabel color="gray.400">
              Valor Total de Juros do Empréstimo
            </StatLabel>
            <StatNumber>{currencyFormat(data.totalAmountInTaxes)}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {data.monthlyInterest}%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Flex>
    </GridItem>
  )
}

export default Interest
