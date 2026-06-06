import { useState } from 'react'

const PHILOSOPHY = [
  {heading:'No shortcuts',body:'Butter is creamed by hand. Sponges are weighed to the gram. Custards are made fresh each morning. If it takes longer to do it properly, it takes longer.'},
  {heading:'Layers with intention',body:'Every component exists for a reason — textural contrast, flavour balance, visual depth. Nothing is added for aesthetics alone.'},
  {heading:'Allergen transparency',body:'We track every allergen across every item. Gluten-free and nut-free options are made with care, and we are honest about cross-contamination risk.'},
  {heading:'Seasonal rotation',body:'The menu changes with what is available and what is excellent. A dessert that cannot be made well right now is not on the menu right now.'},
]

export default function MeetTheChef({ setPage }) {
  const [imgErr, setImgErr] = useState(false)
  return (
    <div>
      <section className="section-pad" style={{paddingTop:'6rem',paddingBottom:'5rem',maxWidth:'1100px',margin:'0 auto'}}>
        <div className="chef-cols">
          <div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',fontWeight:300,letterSpacing:'0.4em',textTransform:'uppercase',color:'rgba(0,26,51,0.5)',marginBottom:'1.5rem'}}>The Person Behind Every Layer</p>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(44px,7vw,90px)',fontWeight:300,lineHeight:1.0,color:'#001a33',marginBottom:'2rem'}}>Meet <em style={{fontStyle:'italic'}}>Elena</em></h1>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(19px,2.5vw,21px)',fontWeight:300,fontStyle:'italic',color:'rgba(0,26,51,0.65)',lineHeight:1.7,marginBottom:'2rem'}}>"I make the same dessert the same way every morning. That consistency is not routine — it is respect."</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',fontWeight:300,color:'rgba(0,26,51,0.6)',lineHeight:2.0}}>Elena is originally from Russia and trained under a Michelin-starred chef in France. She brings that same rigour to every dessert at LAYERED. as Head Chef — responsible for the entire dessert programme, developed and refined recipe by recipe in our kitchen.</p>
          </div>
          <div style={{aspectRatio:'3/4',overflow:'hidden',background:'rgba(0,26,51,0.06)'}}>
            {!imgErr ? (
              <img src="/images/elena.jpeg" alt="Elena — Head Chef" onError={() => setImgErr(true)} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            ) : (
              <div style={{width:'100%',height:'100%',minHeight:'440px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'48px',fontWeight:300,fontStyle:'italic',color:'rgba(0,26,51,0.25)'}}>E</span>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'13px',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(0,26,51,0.3)'}}>elena.jpeg</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{paddingTop:'4rem',paddingBottom:'7rem',maxWidth:'1100px',margin:'0 auto'}}>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,4vw,46px)',fontWeight:300,color:'#001a33',marginBottom:'3rem',textAlign:'center'}}>How we think about <em style={{fontStyle:'italic'}}>dessert</em></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))',gap:'3rem 4rem'}}>
          {PHILOSOPHY.map(({heading,body}) => (
            <div key={heading}>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'24px',fontWeight:400,color:'#001a33',marginBottom:'0.75rem'}}>{heading}</h3>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'16px',fontWeight:300,color:'rgba(0,26,51,0.6)',lineHeight:1.85}}>{body}</p>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'5rem'}}>
          <button onClick={() => { setPage('desserts'); window.scrollTo(0,0) }} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'15px',fontWeight:300,letterSpacing:'0.25em',textTransform:'uppercase',color:'#001a33',background:'none',border:'none',cursor:'pointer',borderBottom:'0.5px solid #001a33',paddingBottom:'6px'}}>View the Desserts</button>
        </div>
      </section>
    </div>
  )
}
