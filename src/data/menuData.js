// LAYERED. Cafe menu data.
// PASTRIES: all 14 appear on the Dessert Menu page (text only).
// The 7 with `image` also appear on the Home showcase.

export const PASTRIES = [
  { id:1,  name:'San Sebastián Cheesecake', detail:'Crustless Basque cheesecake. Caramelised top, silky centre.', tags:['GF*','DAIRY','NF'], image:null },
  { id:2,  name:'Ube Cheesecake', detail:'Filipino purple yam meets French-style cheesecake.', tags:['GF*','NF**','DAIRY'], image:null },
  { id:3,  name:'Mango', detail:'Mango cream and fruit insert in a GF joconde sponge.', tags:['GF*','DAIRY','ALMOND'], image:'/images/mango.jpeg' },
  { id:4,  name:'Strawberry', detail:'Mascarpone vanilla cream, strawberry compote, sablé.', tags:['DAIRY','ALMOND','GLUTEN'], image:null },
  { id:5,  name:'Raspberry', detail:'White chocolate-lime cream with a gooey raspberry core.', tags:['DAIRY','ALMOND','GLUTEN'], image:null },
  { id:6,  name:'Lemon', detail:'Lemon mint centre, whipped lemon cream, sablé cookie.', tags:['DAIRY','ALMOND','GLUTEN'], image:'/images/lemon.jpeg' },
  { id:7,  name:'Café Au Lait', detail:'Coffee cream, cappuccino layer, chocolate sponge.', tags:['NF**','DAIRY','GLUTEN'], image:null },
  { id:8,  name:'Rocher', detail:'Salted caramel, sea salt, hazelnut cream, GF biscuit.', tags:['GF*','DAIRY','NUTS'], image:'/images/rocher.jpeg' },
  { id:9,  name:'Chocovick', detail:'Milk chocolate crémeux, dark-milk mousse, sponge, crisps.', tags:['NF**','DAIRY','GLUTEN'], image:null },
  { id:10, name:'Vanilla Brûlée', detail:'Crème brûlée, vanilla mousse, GF vanilla sponge.', tags:['GF*','DAIRY','ALMOND'], image:'/images/vanilla_brulee.jpeg' },
  { id:11, name:'Yuzu & Limoncello', detail:'Yuzu curd, ricotta cream, limoncello-soaked ladyfingers.', tags:['NF','DAIRY','GLUTEN','ALC'], image:'/images/yuzu.jpeg' },
  { id:12, name:'Matcha Jasmine', detail:'Jasmine cream, strawberry insert, matcha sponge.', tags:['GF*','DAIRY','ALMOND'], image:'/images/matcha_jasmine.jpeg' },
  { id:13, name:'Pistachio', detail:'Pistachio praline, Dubai crunch, cream, sponge.', tags:['DAIRY','NUTS'], image:'/images/pistachio.jpeg' },
  { id:14, name:'Orange', detail:'Orange cream, clementine, orange coulis, cocoa base.', tags:['DAIRY','GLUTEN'], image:null },
]

export const SHOWCASE = PASTRIES.filter(p => p.image)

export const TAG_LEGEND = [
  { code:'GF*',    desc:'Gluten-free — cross-contamination possible' },
  { code:'NF**',   desc:'Nut-free — cross-contamination possible' },
  { code:'DAIRY',  desc:'Contains dairy' },
  { code:'GLUTEN', desc:'Contains gluten' },
  { code:'ALMOND', desc:'Contains almond flour' },
  { code:'NUTS',   desc:'Contains nuts' },
  { code:'ALC',    desc:'Contains alcohol' },
  { code:'NF',     desc:'Nut-free' },
]
