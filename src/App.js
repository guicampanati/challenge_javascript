import { ChakraProvider } from '@chakra-ui/react'
import AppContext from './AppContext'
import Content from './components/Content'
import Layout from './components/Layout'
import MobileMenu from './components/MobileMenu'
import NavBar from './components/NavBar'
import { useFetch } from './hooks/useFetch'

function App() {
  const state = useFetch('http://www.mocky.io/v2/5c923b0932000029056bce39')

  return (
    <ChakraProvider>
      <AppContext.Provider value={state}>
        <Layout>
          <MobileMenu />
          <NavBar />
          <Content />
        </Layout>
      </AppContext.Provider>
    </ChakraProvider>
  )
}

export default App
