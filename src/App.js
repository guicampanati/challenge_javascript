import { createContext } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout'
import { useFetch } from './hooks/useFetch'

const AppContext = createContext()

function App() {
  const { loading, data, error } = useFetch(
    'http://www.mocky.io/v2/5c923b0932000029056bce39'
  )

  return (
    <ChakraProvider>
      <AppContext.Provider value={{ loading, data, error }}>
        <Layout></Layout>
      </AppContext.Provider>
    </ChakraProvider>
  )
}

export default App
