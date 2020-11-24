import {
  Alert,
  AlertDescription,
  AlertIcon,
  Badge,
  Box,
  Button,
  GridItem,
  Heading,
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
      <GridItem colSpan={3}>
        <Skeleton w="100%" h="300px" />
      </GridItem>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  const { installments } = data
  if (installments === 'undefined') {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>Erro ao carregar dados</AlertDescription>
      </Alert>
    )
  }

  return (
    <GridItem colSpan={3} position="relative" overflowX="auto">
      <Heading fontSize="xl" px={2}>
        Parcelas
      </Heading>

      <Box
        as="table"
        w="100%"
        bg="gray.50"
        borderRadius={10}
        boxShadow="sm"
        mt={1}
        textAlign="center"
      >
        <thead>
          <tr>
            <th>
              <Text fontWeight="500" casing="uppercase" py={4}>
                valor
              </Text>
            </th>
            <th>
              <Text fontWeight="500" casing="uppercase" py={4}>
                vencimento
              </Text>
            </th>
            <th>
              <Text fontWeight="500" casing="uppercase" py={4}>
                status
              </Text>
            </th>
            <th>
              <Text fontWeight="500" casing="uppercase" py={4}>
                ação
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {installments.map((inst, index) => (
            <Box as="tr" key={index}>
              <Box as="td" py={6}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="gray.500"
                  fontWeight="600"
                >
                  {currencyFormat(inst.value)}
                </Text>
              </Box>

              <Box as="td" py={6}>
                <Text fontSize="sm" fontWeight="600" color="gray.500" mt={1}>
                  {inst.dueDate}
                </Text>
              </Box>

              <Box as="td" py={6}>
                {inst.payd ? (
                  <Badge colorScheme="green">PAGO</Badge>
                ) : (
                  <Badge colorScheme="red">PENDENTE</Badge>
                )}
              </Box>

              <Box as="td" py={6}>
                {!inst.payd ? (
                  <Button size="xs" colorScheme="green" variant="outline">
                    Pagar
                  </Button>
                ) : null}
              </Box>
            </Box>
          ))}
        </tbody>
      </Box>
    </GridItem>
  )
}

export default Installments
