// import Footer from "./components/page/Footer"
// import Gallery from "./components/page/Gallery"
import Header from "./components/page/Header"
import Headline from "./components/page/Headline"
import Presentation from "./components/page/Presentation"
import Services from "./components/page/Services"
// import Testimonials from "./components/page/Testimonials"

function App() {
  return (
    <>
      <Header />
      <main>
        <Headline />
        <Presentation />
        <Services />
        {/* <Testimonials />
        <Gallery /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
