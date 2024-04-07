import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './components/navigation.tsx'
import Carousel from './components/carousel.tsx'

ReactDOM.createRoot(document.getElementById("navigation")!).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById("carousel")!).render(
    <Carousel />
)
