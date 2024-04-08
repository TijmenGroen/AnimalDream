import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './components/navigation.tsx'
import Carousel from './components/carousel.tsx'
import About from './components/about.tsx'
import ProductBody from './components/productBody.tsx'

window.onload = () => {
  console.log("loaded main")
}

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

ReactDOM.createRoot(document.getElementById("productBody")!).render(
  <React.StrictMode>
    <ProductBody />
  </React.StrictMode>,
)