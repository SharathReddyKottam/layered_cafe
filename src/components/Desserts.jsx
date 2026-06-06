import { PASTRIES, TAG_LEGEND } from '../data/menuData'

function Item({ item }) {
  return (
    <div style={{padding:'1.5rem 0',borderBottom:'0.5px solid rgba(0,26,51,0.12)'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(20px,2.4vw,23px)',fontWeight:400,color:'#001a33',marginBottom:'0.35rem'}}>{item.name}</h3>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'16px',fontWeight:300,color:'rgba(0,26,51,0.6)',lineHeight:1.6,marginBottom:'0.6rem'}}>{item.detail}</p>
      <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
        {item.tags.map(t => (
          <span key={t} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'11px',fontWeight:300,letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(0,26,51,0.4)'}}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Desserts() {
  return (
    <section className="section-pad" style={{paddingTop:'5rem',paddingBottom:'7rem',maxWidth:'1200px',margin:'0 auto'}}>
      <div style={{textAlign:'center',marginBottom:'4rem'}}>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',fontWeight:300,letterSpacing:'0.4em',textTransform:'uppercase',color:'rgba(0,26,51,0.5)',marginBottom:'1rem'}}>The Dessert Menu</p>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(40px,7vw,80px)',fontWeight:300,color:'#001a33',lineHeight:1.05,marginBottom:'1rem'}}>Signature <em style={{fontStyle:'italic'}}>Entremets</em></h1>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',fontWeight:300,fontStyle:'italic',color:'rgba(0,26,51,0.55)',maxWidth:'520px',margin:'0 auto',lineHeight:1.6}}>Layered mousse cakes, made fresh each morning and available until sold out.</p>
      </div>

      <div className="menu-cols">
        {PASTRIES.map(item => <Item key={item.id} item={item} />)}
      </div>

      <div style={{marginTop:'4rem',paddingTop:'3rem',borderTop:'0.5px solid rgba(0,26,51,0.15)'}}>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'12px',fontWeight:300,letterSpacing:'0.3em',textTransform:'uppercase',color:'rgba(0,26,51,0.5)',marginBottom:'1.25rem'}}>Key</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:'0.75rem 2rem'}}>
          {TAG_LEGEND.map(({code,desc}) => (
            <span key={code} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'14px',fontWeight:300,color:'rgba(0,26,51,0.55)'}}><strong style={{fontWeight:600,letterSpacing:'0.06em'}}>{code}</strong> — {desc}</span>
          ))}
        </div>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'14px',fontWeight:300,fontStyle:'italic',color:'rgba(0,26,51,0.45)',marginTop:'1.5rem',lineHeight:1.7}}>Please inform your server of any dietary requirements before ordering. Cross-contamination is possible in our kitchen.</p>
      </div>
    </section>
  )
}
