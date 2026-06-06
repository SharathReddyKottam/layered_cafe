const JOTFORM = 'https://form.jotform.com/260614987562063'

export default function Footer({ setPage }) {
  const lk = {fontFamily:"'Cormorant Garamond',serif",fontSize:'16px',fontWeight:300,color:'rgba(0,26,51,0.55)',textDecoration:'none',display:'block',marginBottom:'0.6rem',cursor:'pointer',background:'none',border:'none',textAlign:'left',padding:0}
  const go = (p) => { setPage(p); window.scrollTo(0,0) }
  return (
    <footer className="section-pad" style={{borderTop:'0.5px solid rgba(0,26,51,0.15)',paddingTop:'5rem',paddingBottom:'3rem',maxWidth:'1300px',margin:'0 auto'}}>
      <div className="footer-cols" style={{marginBottom:'4rem'}}>
        <div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'30px',fontWeight:400,letterSpacing:'0.1em',color:'#001a33',marginBottom:'1.5rem'}}>LAYERED.</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'16px',fontWeight:300,color:'rgba(0,26,51,0.6)',lineHeight:2.0}}>3924 Blenheim Boulevard<br/>Fairfax, VA 22030<br/>Open Daily · 7:00 am – 9:00 pm</p>
        </div>
        <div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'12px',fontWeight:300,letterSpacing:'0.3em',textTransform:'uppercase',color:'rgba(0,26,51,0.45)',marginBottom:'1.25rem'}}>Explore</p>
          <button onClick={() => go('home')} style={lk}>Home</button>
          <button onClick={() => go('desserts')} style={lk}>Desserts</button>
          <button onClick={() => go('drinks')} style={lk}>Drinks</button>
          <button onClick={() => go('chef')} style={lk}>Meet the Chef</button>
        </div>
        <div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'12px',fontWeight:300,letterSpacing:'0.3em',textTransform:'uppercase',color:'rgba(0,26,51,0.45)',marginBottom:'1.25rem'}}>Connect</p>
          <a href={JOTFORM} target="_blank" rel="noreferrer" style={lk}>Bulk Order</a>
          <a href="https://instagram.com/by_layered" target="_blank" rel="noreferrer" style={lk}>@by_layered</a>
        </div>
      </div>
      <div style={{borderTop:'0.5px solid rgba(0,26,51,0.12)',paddingTop:'2rem',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem'}}>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',fontWeight:300,color:'rgba(0,26,51,0.4)'}}>© 2025 LAYERED. Cafe</p>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',fontWeight:300,letterSpacing:'0.08em',textTransform:'uppercase',color:'rgba(0,26,51,0.35)'}}>Fairfax, Virginia</p>
      </div>
    </footer>
  )
}
