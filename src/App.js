import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout'
import { useFetch } from './hooks/useFetch'

function App() {
  const { loading, data, error } = useFetch(
    'http://www.mocky.io/v2/5c923b0932000029056bce39'
  )

  if (loading) {
    return <div>carregando...</div>
  }

  if (error) {
    return <div>error ao carregar</div>
  }

  return (
    <ChakraProvider>
      <Layout>
        <div>userId: {data.UserId}</div>
        <div>amountPayd: {data.amountPayd}</div>
        <div>amountTaken: {data.amountTaken}</div>
        <div>monthlyInterest: {data.monthlyInterest}</div>
        <div>totalAmountInTaxes: {data.totalAmountInTaxes}</div>
        <ul>
          {data.installments.map((installment) => (
            <li>
              {installment.formatedValue} -{' '}
              {installment.payd ? 'pago' : 'não pago'} - {installment.dueDate}
            </li>
          ))}
        </ul>
      </Layout>
    </ChakraProvider>
  )
}

export default App
