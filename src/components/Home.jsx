import { useState } from 'react'
import { SHOWCASE } from '../data/menuData'

function ShowcaseItem({ item }) {
  const [hovered, setHovered] = useState(false)
  const [err, setErr] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{position:'relative',overflow:'hidden',background:'rgba(0,26,51,0.06)'}}>
      <div style={{aspectRatio:'4/5',overflow:'hidden',position:'relative'}}>
        {!err ? (
          <img src={item.image} alt={item.name} onError={() => setErr(true)} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transform:hovered?'scale(1.05)':'scale(1)',transition:'transform 0.6s ease'}} />
        ) : (
          <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontStyle:'italic',color:'rgba(0,26,51,0.3)'}}>{item.name}</span>
          </div>
        )}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,10,26,0.7) 0%,transparent 55%)',opacity:hovered?1:0.85,transition:'opacity 0.3s'}} />
        <div style={{position:'absolute',bottom:'1.5rem',left:'1.5rem',right:'1.5rem'}}>
          <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(20px,2.2vw,24px)',fontWeight:400,color:'white',marginBottom:'0.25rem'}}>{item.name}</h3>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'14px',fontWeight:300,fontStyle:'italic',color:'rgba(255,255,255,0.8)',lineHeight:1.5}}>{item.detail}</p>
        </div>
      </div>
    </div>
  )
}

function NavCard({ title, sub, soon, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button onClick={soon ? undefined : onClick}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{textAlign:'left',background:hovered&&!soon?'#001a33':'transparent',border:'0.5px solid rgba(0,26,51,0.25)',padding:'2.5rem 2rem',cursor:soon?'default':'pointer',transition:'background 0.3s',display:'flex',flexDirection:'column',gap:'0.5rem',minHeight:'180px',justifyContent:'space-between',width:'100%'}}>
      <div>
        <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(26px,3vw,30px)',fontWeight:400,color:hovered&&!soon?'#00FFFF':'#001a33',lineHeight:1.1,marginBottom:'0.5rem',transition:'color 0.3s'}}>{title}</h3>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'15px',fontWeight:300,fontStyle:'italic',color:hovered&&!soon?'rgba(255,255,255,0.7)':'rgba(0,26,51,0.55)',transition:'color 0.3s'}}>{sub}</p>
      </div>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',fontWeight:300,letterSpacing:'0.2em',textTransform:'uppercase',color:soon?'rgba(0,26,51,0.4)':(hovered?'#00FFFF':'#001a33'),transition:'color 0.3s'}}>
        {soon ? 'Coming Soon' : 'View →'}
      </span>
    </button>
  )
}

export default function Home({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo(0,0) }
  return (
    <div>
      <section className="section-pad" style={{minHeight:'68vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',paddingTop:'6rem',paddingBottom:'4rem'}}>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(12px,1.5vw,15px)',fontWeight:300,letterSpacing:'0.4em',textTransform:'uppercase',color:'rgba(0,26,51,0.55)',marginBottom:'2.5rem'}}>Fairfax, Virginia</p>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(52px,11vw,140px)',fontWeight:300,lineHeight:0.92,letterSpacing:'0.02em',color:'#001a33',marginBottom:'2rem'}}>LAYERED.</h1>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(18px,2.5vw,22px)',fontWeight:300,fontStyle:'italic',color:'rgba(0,26,51,0.6)',lineHeight:1.7,maxWidth:'540px'}}>Specialty coffee, artisan pastry, and fine tea — each made with intention, served without compromise.</p>
      </section>

      <section className="section-pad" style={{paddingTop:'2rem',paddingBottom:'6rem',maxWidth:'1300px',margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',fontWeight:300,letterSpacing:'0.4em',textTransform:'uppercase',color:'rgba(0,26,51,0.5)',marginBottom:'1rem'}}>Our Craft</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(30px,4.5vw,52px)',fontWeight:300,color:'#001a33',lineHeight:1.1}}>A look at what we make</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,260px),1fr))',gap:'1.5rem'}}>
          {SHOWCASE.map(item => <ShowcaseItem key={item.id} item={item} />)}
        </div>
      </section>

      <section className="section-pad" style={{paddingTop:'2rem',paddingBottom:'7rem',maxWidth:'1300px',margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',fontWeight:300,letterSpacing:'0.4em',textTransform:'uppercase',color:'rgba(0,26,51,0.5)',marginBottom:'1rem'}}>Explore</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(30px,4.5vw,52px)',fontWeight:300,color:'#001a33',lineHeight:1.1}}>Our menus</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,260px),1fr))',gap:'1.5rem'}}>
          <NavCard title="Drinks" sub="Coffee, tea & signatures" soon onClick={() => go('drinks')} />
          <NavCard title="Desserts" sub="14 layered creations" onClick={() => go('desserts')} />
          <NavCard title="Pastry & Bread" sub="Fresh-baked daily" soon onClick={() => go('pastry')} />
        </div>
      </section>
    </div>
  )
}
