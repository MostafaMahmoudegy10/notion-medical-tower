import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Home  from './Pages/Home';
import About from './Pages/About';
import ClinicDetils from './Pages/ClinicDetils';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Clincs from './Pages/Clincs';
import Error from './Pages/Error';

function App() {

  return (
    <div className='bg-white'>
      <Header />
      <Routes>
        <Route path='/clinics/:id' element={<ClinicDetils />}/>
        <Route path='/clinics' element={<Clincs />}/>
        <Route  path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
