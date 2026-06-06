import { useState, useEffect } from 'react'

const JOTFORM = 'https://form.jotform.com/260614987562063'

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Home',          page: 'home' },
    { label: 'Drinks',        page: 'drinks' },
    { label: 'Desserts',      page: 'desserts' },
    { label: 'Pastry',        page: 'pastry' },
    { label: 'Meet the Chef', page: 'chef' },
  ]

  const go = (p) => { setPage(p); setOpen(false); window.scrollTo(0,0) }

  return (
    <nav style={{position:'sticky',top:0,zIndex:100,background:'#00FFFF',borderBottom:scrolled||open?'0.5px solid rgba(0,26,51,0.15)':'0.5px solid transparent',transition:'border-color 0.3s'}}>
      <div className="section-pad" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'72px'}}>
        <button onClick={() => go('home')} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'24px',fontWeight:400,letterSpacing:'0.14em',color:'#001a33',background:'none',border:'none',cursor:'pointer',padding:0}}>LAYERED.</button>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{gap:'2.25rem',listStyle:'none',alignItems:'center'}}>
          {links.map(({ label, page: p }) => {
            const isActive = page === p
            return (
              <li key={label}>
                <button onClick={() => go(p)} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'16px',fontWeight:300,letterSpacing:'0.06em',background:'none',border:'none',cursor:'pointer',color:isActive?'#001a33':'rgba(0,26,51,0.5)',borderBottom:isActive?'0.5px solid #001a33':'0.5px solid transparent',paddingBottom:'2px',transition:'color 0.2s'}}
                  onMouseEnter={e => e.currentTarget.style.color='#001a33'}
                  onMouseLeave={e => e.currentTarget.style.color=isActive?'#001a33':'rgba(0,26,51,0.5)'}
                >{label}</button>
              </li>
            )
          })}
          <li>
            <button onClick={() => window.open(JOTFORM,'_blank')} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'14px',fontWeight:300,letterSpacing:'0.12em',textTransform:'uppercase',color:'#00FFFF',background:'#001a33',border:'none',cursor:'pointer',padding:'10px 20px'}}>Bulk Order</button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(!open)} style={{flexDirection:'column',gap:'5px',background:'none',border:'none',cursor:'pointer',padding:'8px'}}>
          <span style={{width:'24px',height:'1.5px',background:'#001a33',transform:open?'rotate(45deg) translate(4px,5px)':'none',transition:'transform 0.3s'}} />
          <span style={{width:'24px',height:'1.5px',background:'#001a33',opacity:open?0:1,transition:'opacity 0.2s'}} />
          <span style={{width:'24px',height:'1.5px',background:'#001a33',transform:open?'rotate(-45deg) translate(4px,-5px)':'none',transition:'transform 0.3s'}} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="section-pad" style={{display:'flex',flexDirection:'column',gap:'1.25rem',paddingTop:'1.5rem',paddingBottom:'2rem',borderTop:'0.5px solid rgba(0,26,51,0.1)'}}>
          {links.map(({ label, page: p }) => (
            <button key={label} onClick={() => go(p)} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:300,letterSpacing:'0.04em',background:'none',border:'none',cursor:'pointer',color:page===p?'#001a33':'rgba(0,26,51,0.55)',textAlign:'left',padding:0}}>{label}</button>
          ))}
          <button onClick={() => window.open(JOTFORM,'_blank')} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'14px',fontWeight:300,letterSpacing:'0.14em',textTransform:'uppercase',color:'#00FFFF',background:'#001a33',border:'none',cursor:'pointer',padding:'12px 0',marginTop:'0.5rem',width:'100%'}}>Bulk Order</button>
        </div>
      )}
    </nav>
  )
}
