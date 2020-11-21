import {
  Badge,
  Flex,
  GridItem,
  Heading,
  List,
  ListItem,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { currencyFormat } from '../utils/currencyFormat'

function Installments() {
  const { loading, data, error } = useContext(AppContext)

  if (loading) {
    return (
      <GridItem colSpan={{ base: 2, xl: 1 }}>
        <Skeleton w="100%" h="300px" />
      </GridItem>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <GridItem
      colSpan={{ base: 2, xl: 1 }}
      bg="gray.50"
      borderRadius="0.5rem"
      boxShadow="lg"
      p="1.5rem"
    >
      <Heading fontSize="xl" px="0.5rem">
        Parcelas
      </Heading>
      <List mt="1rem" spacing="2rem">
        {data.installments.map((inst, index) => (
          <ListItem key={index} bg="white" borderRadius="10px" p="1rem">
            <Flex alignItems="center" justifyContent="space-between">
              <Flex direction="column" alignItems="center">
                {inst.payd ? (
                  <Badge colorScheme="green">PAGO</Badge>
                ) : (
                  <Badge colorScheme="red">PENDENTE</Badge>
                )}
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="gray.400"
                  mt="0.25rem"
                >
                  {inst.dueDate}
                </Text>
              </Flex>

              <Text fontSize="xl" fontWeight="600">
                {currencyFormat(inst.value)}
              </Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </GridItem>
  )
}

export default Installments
