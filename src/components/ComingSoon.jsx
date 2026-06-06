export default function ComingSoon({ title, sub, setPage }) {
  return (
    <section className="section-pad" style={{minHeight:'68vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',paddingTop:'6rem',paddingBottom:'6rem'}}>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',fontWeight:300,letterSpacing:'0.4em',textTransform:'uppercase',color:'rgba(0,26,51,0.5)',marginBottom:'2rem'}}>{title}</p>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(44px,9vw,100px)',fontWeight:300,fontStyle:'italic',color:'#001a33',lineHeight:1.0,marginBottom:'2rem'}}>Coming Soon</h1>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(18px,2.5vw,20px)',fontWeight:300,color:'rgba(0,26,51,0.6)',lineHeight:1.7,maxWidth:'480px',marginBottom:'3.5rem'}}>{sub}</p>
      <button onClick={() => { setPage('home'); window.scrollTo(0,0) }} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'15px',fontWeight:300,letterSpacing:'0.25em',textTransform:'uppercase',color:'#001a33',background:'none',border:'none',cursor:'pointer',borderBottom:'0.5px solid #001a33',paddingBottom:'6px'}}>Back to Home</button>
    </section>
  )
}
