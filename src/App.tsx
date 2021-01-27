import React from 'react';

import GlobalStyle from './GlobalStyle'

import Index from './pages/Index/Index'

import light from './themes/light'
import dark from './themes/dark'
import usePersistState from './utils/usePersistState'

import {ThemeProvider} from 'styled-components'

function App() {

  const [theme, setTheme] = usePersistState('theme', light)


  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Index toggleTheme={handleTheme} />
    </ThemeProvider>
  );
}

export default App;
