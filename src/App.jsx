import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Desserts from './components/Desserts'
import ComingSoon from './components/ComingSoon'
import MeetTheChef from './components/MeetTheChef'
import Footer from './components/Footer'

export default function App() {
  const [page, setPage] = useState('home')
  return (
    <div style={{minHeight:'100vh',background:'#00FFFF'}}>
      <Navbar page={page} setPage={setPage} />
      {page === 'home'     && <Home setPage={setPage} />}
      {page === 'desserts' && <Desserts />}
      {page === 'drinks'   && <ComingSoon title="Drinks Menu" sub="Our full coffee, tea, and signature drinks menu is being finalised. Check back soon." setPage={setPage} />}
      {page === 'pastry'   && <ComingSoon title="Pastry & Bread" sub="Our fresh-baked bread and pastry selection is on its way. Check back soon." setPage={setPage} />}
      {page === 'chef'     && <MeetTheChef setPage={setPage} />}
      <Footer setPage={setPage} />
    </div>
  )
}
