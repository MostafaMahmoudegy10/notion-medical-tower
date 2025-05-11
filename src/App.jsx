import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Home  from './Pages/Home';
import About from './Pages/About';
import ClinicDetils from './Pages/ClinicDetils';
import Footer from './components/Footer';
function App() {

  return (
    <div className='bg-white'>
      <Header />
      <Routes>
        <Route path='/clinics/:id' element={<ClinicDetils />}/>
        <Route path='/clinics' element={<ClinicDetils />}/>
        <Route  path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
