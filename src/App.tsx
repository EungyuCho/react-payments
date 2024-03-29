import { Route, Routes } from 'react-router-dom'
import Styled from './App.style'
import CardContextProvider from './context/Card/CardContext'
import GlobalStyles from './GlobalStyles'
import CardCreate from './pages/CardCreate'
import CardList from './pages/CardList'
import CardSubmit from './pages/CardSubmit'

function App() {
  return (
    <>
      <GlobalStyles />
      <Styled.App>
        <CardContextProvider>
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/create" element={<CardCreate />} />
            <Route path="/submit" element={<CardSubmit />} />
          </Routes>
        </CardContextProvider>
      </Styled.App>
    </>
  )
}

export default App
