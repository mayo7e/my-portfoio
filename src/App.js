
import React from 'react'

import Header from './components/header/Header'
import List from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Technologies from './components/technologies/Technologies'
import Hero from './components/hero/Hero'
import Timeline from './components/timeline/Timeline'
import Accomplishment from './components/accomplishments/Accomplishments'
import Footer from './components/footer/Footer'
import  switchLanguages  from './components/switchLanguage/switchLanguage'




import { ThemeProvider } from 'styled-components'
import { theme } from "./Themes/default"

import { Layout } from './layout/layout.styled'
import GlobalStyles from './styles/GlobalStyles'


// import Placedetails from './components/placeDetails/Placedetails'


const App = () => {

  
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Layout>
             <Header />
             <switchLanguages />
              <Hero />
              <Projects />
              <Technologies />
              <Timeline />
              <Accomplishment />
              <Footer />
      </Layout>
        
    </ThemeProvider>
  )
}

export default App
