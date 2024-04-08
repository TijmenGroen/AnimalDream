import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './components/navigation.tsx'
import Carousel from './components/carousel.tsx'
import About from './components/about.tsx'

ReactDOM.createRoot(document.getElementById("navigation")!).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById("carousel")!).render(
    <Carousel />
)

ReactDOM.createRoot(document.getElementById("about")!).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
)