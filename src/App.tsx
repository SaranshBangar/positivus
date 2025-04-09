import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partner from "./components/Partners";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WorkingProcess from "./components/WorkingProcess";

function App() {
  return (
    <main className="md:px-[100px] px-5">
      <Header />
      <Hero />
      <Partner />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
