/* Character tab, 3D person avatars, separate pages with logos, language switch.
   Loaded AFTER the main script in index.html. */
(function(){
const ZOD=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],ZS='♈♉♊♋♌♍♎♏♐♑♒♓';
const HS=['short','long','bob','curly','bun','bald'],G={F:'Female',M:'Male',N:'Non-binary'};
const P={skin:['#fde0c8','#f5c6a0','#e0a578','#c68642','#8d5524','#5a3825'],eyes:['#4a2c1a','#2f7fd1','#3a9d5d','#7a8b3a','#6b6f7a','#8a4fd6'],
 lips:['#d9718a','#c0425a','#e8a0a0','#a8434b','#7a3b3b','#f06292'],brows:['#2b1d14','#5a3825','#9c6b3a','#caa05a','#555555','#7a3b9c'],
 hair:['#2b1d14','#5a3825','#9c6b3a','#e6c47a','#c8c8d0','#d6457b','#7c4dff','#2fb585']};
S.ch=Object.assign({done:false,name:'',kind:'animal',gender:'F',age:'',zodiac:'',skin:P.skin[1],eyes:P.eyes[0],lips:P.lips[0],brows:P.brows[0],hair:P.hair[1],style:'long'},S.ch||{});

/* ---- pages: each tab has its own address (index.html#diary) and logo ---- */
const NT=[['today','Today','🏠'],['character','Character','🧸'],['diary','Diary','📔'],['charts','Charts','📈'],['tests','Tests','🧠'],['set','Settings','⚙️']];
TABS.length=0;NT.forEach(x=>TABS.push(x));
const ico=document.querySelector('link[rel=icon]'),pg=document.createElement('h2');pg.style.margin='4px 4px 10px';$('view').before(pg);
function go(x){if(location.hash.slice(1)==x)route();else location.hash=x}
function route(){let x=location.hash.slice(1);if(!NT.some(n=>n[0]==x))x='today';if(!S.ch.done)x='character';tab=x;testOpen=null;tabs();render()}
tabs=function(){$('tabs').innerHTML=NT.map(n=>`<button class="tab ${tab==n[0]?'on':''}" data-t="${n[0]}" ${!S.ch.done&&n[0]!='character'?'disabled':''}>${n[2]} ${tr(n[1])}</button>`).join('')};
$('tabs').onclick=e=>{const b=e.target.closest('button');if(b&&!b.disabled)go(b.dataset.t)};
const _r=render;
render=function(){
 if(tab=='character')charView();else if(tab=='today')todayView();else _r();
 const n=NT.find(x=>x[0]==tab);pg.textContent=n[2]+' '+tr(n[1]);document.title=tr(n[1])+' · Mood Companion';
 ico.href='data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#7c4dff"/><text x="50" y="70" font-size="56" text-anchor="middle">${n[2]}</text></svg>`);
};

/* ---- 3D-style person ---- */
function human(h,cl,mood,cc,p){
 const sk=h.skin,hc=h.hair,st=h.style,g=(id,c,a,b)=>`<radialGradient id="${id}${p}" cx=".35" cy=".28" r=".9"><stop offset="0" stop-color="${sh(c,.38)}"/><stop offset=".6" stop-color="${c}"/><stop offset="1" stop-color="${sh(c,-.32)}"/></radialGradient>`;
 const A=`url(#a${p})`,H=`url(#h${p})`,C=`url(#c${p})`;
 let s=`<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg"><defs>${g('a',sk)}${g('h',hc)}${g('c',cc)}<radialGradient id="w${p}"><stop offset="0" stop-color="#000" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="100" cy="212" rx="70" ry="9" fill="url(#w${p})"/>`;
 if(st=='long')s+=`<path d="M40 96Q32 190 56 198L144 198Q168 190 160 96Z" fill="${H}"/>`;
 if(st=='bob')s+=`<path d="M40 96Q34 148 52 158L148 158Q166 148 160 96Z" fill="${H}"/>`;
 if(st=='bun')s+=`<circle cx="100" cy="30" r="22" fill="${H}"/>`;
 if(st=='curly')for(const[x,y,r]of[[46,82,24],[154,82,24],[60,50,26],[140,50,26],[100,36,28],[38,114,18],[162,114,18]])s+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${H}"/>`;
 s+=`<rect x="87" y="140" width="26" height="36" rx="10" fill="${sh(sk,-.15)}"/><path d="M38 220Q40 168 100 164Q160 168 162 220Z" fill="${C}"/><path d="M84 166Q100 186 116 166" fill="${sh(sk,-.15)}"/>`;
 s+=`<circle cx="42" cy="104" r="11" fill="${A}"/><circle cx="158" cy="104" r="11" fill="${A}"/><ellipse cx="100" cy="96" rx="58" ry="60" fill="${A}"/><ellipse cx="76" cy="62" rx="22" ry="9" fill="#fff" opacity=".25" transform="rotate(-22 76 62)"/>`;
 if(st!='bald'){const fr=st=='long'||st=='bob';s+=fr?`<path d="M40 96Q36 32 100 32Q164 32 160 96Q132 50 100 62Q68 50 40 96Z" fill="${H}"/>`:`<path d="M42 90Q38 32 100 32Q162 32 158 90Q146 58 100 56Q54 58 42 90Z" fill="${H}"/>`}
 const by=mood<=1;
 s+=`<path d="${by?'M58 80Q75 76 92 68M142 80Q125 76 108 68':'M58 78Q75 68 92 76M142 78Q125 68 108 76'}" fill="none" stroke="${h.brows}" stroke-width="5" stroke-linecap="round"/>`;
 for(const x of[76,124])s+=`<ellipse cx="${x}" cy="94" rx="13" ry="10.5" fill="#fff" stroke="${sh(sk,-.2)}"/><circle cx="${x}" cy="95" r="7.5" fill="${h.eyes}"/><circle cx="${x}" cy="95" r="3.6" fill="#111"/><circle cx="${x+3}" cy="91.5" r="2.6" fill="#fff"/><circle cx="${x-2.5}" cy="98" r="1.3" fill="#fff"/>`;
 if(h.gender=='F')s+=`<path d="M62 90L56 86M64 85L60 79M138 90L144 86M136 85L140 79" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>`;
 s+=`<path d="M100 98Q95 112 101 115" fill="none" stroke="${sh(sk,-.3)}" stroke-width="3" stroke-linecap="round"/>`;
 s+=`<ellipse cx="62" cy="116" rx="10" ry="6" fill="#ff8fa8" opacity="${mood>=3?.5:.25}"/><ellipse cx="138" cy="116" rx="10" ry="6" fill="#ff8fa8" opacity="${mood>=3?.5:.25}"/>`;
 const M=['M88 138Q100 126 112 138','M90 135Q100 129 110 135','M91 131H109','M88 128Q100 141 112 128','M85 126Q100 150 115 126Z'];
 s+=`<path d="${M[mood]}" fill="${mood==4?'#fff':'none'}" stroke="${h.lips}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>`;
 if(mood==0)s+='<path d="M64 108Q60 120 66 124Q71 118 64 108" fill="#6ab7ff"/>';
 if(cl.glasses=='round')s+='<g fill="#fff" fill-opacity=".15" stroke="#222" stroke-width="3.5"><circle cx="76" cy="94" r="17"/><circle cx="124" cy="94" r="17"/><path d="M93 94H107"/></g>';
 if(cl.glasses=='sun')s+='<g fill="#111"><rect x="56" y="80" width="40" height="26" rx="10"/><rect x="104" y="80" width="40" height="26" rx="10"/><rect x="94" y="86" width="12" height="4"/></g>';
 if(cl.glasses=='heart')s+='<g fill="#e0457b" stroke="#b32c5c" stroke-width="2"><path d="M76 108C56 94 60 80 76 86C92 80 96 94 76 108Z"/><path d="M124 108C104 94 108 80 124 86C140 80 144 94 124 108Z"/></g>';
 return s+'</svg>';
}
const avatar=(m,p)=>S.ch.kind=='human'?human(S.ch,S.clothes,m,S.cc,p):pet(S.animal,S.clothes,m,S.cc,S.color,p);
const info=()=>{const h=S.ch;return[tr(G[h.gender]),h.age&&h.age+' '+tr('years old'),h.zodiac&&ZS[ZOD.indexOf(h.zodiac)]+' '+tr(h.zodiac)].filter(Boolean).join(' · ')};

function todayView(){
 const d=day(),h=S.ch,v=$('view');
 v.innerHTML=`<div class="card stage"><h2>${esc(h.name||tr('Your companion'))}</h2>${avatar(d.mood,'m')}<div style="font-size:20px"><b>${MOODN[d.mood]}</b> ${FACES[d.mood]}</div><div class="mu">${esc(info())}</div><p class="mu">${tr('Change the mood with the faces at the top.')}</p><button class="p" id="ec">${tr('Edit character')}</button></div>`;
 v.onclick=null;$('ec').onclick=()=>go('character');
}

/* ---- Character tab ---- */
const sw=(p,l)=>`<div class="mu" style="margin-top:8px">${tr(l)}</div><div>${P[p].map(c=>`<button class="sw ${S.ch[p]==c?'on':''}" data-p="${p}" data-v="${c}" style="background:${c}"></button>`).join('')}</div>`;
const cl=(k,l)=>`<div class="mu" style="margin-top:8px">${tr(l)}</div><div>${CLOTHES[k].map(o=>`<button class="opt ${S.clothes[k]==o?'on':''}" data-c="${k}" data-o="${o}">${tr(o=='none'?'None':o)}</button>`).join('')}</div>`;
const ccRow=()=>`<div class="mu" style="margin-top:8px">${tr('Clothes colour')}</div><div>${CCOL.map(x=>`<button class="sw ${S.cc==x?'on':''}" data-sc="${x}" style="background:${x}"></button>`).join('')}</div>`;
function charView(){
 const h=S.ch,v=$('view'),hum=h.kind=='human',d=day();
 const ctl=hum?`<div class="mu" style="margin-top:8px">${tr('Hairstyle')}</div><div>${HS.map(x=>`<button class="opt ${h.style==x?'on':''}" data-hs="${x}">${tr(x)}</button>`).join('')}</div>`+sw('hair','Hair')+sw('skin','Skin')+sw('eyes','Eyes')+sw('lips','Lips')+sw('brows','Eyebrows')+cl('glasses','Glasses')+ccRow()
  :`<div class="pets" style="margin-top:8px">${Object.keys(ANIMALS).map(k=>`<button data-a="${k}" class="${S.animal==k?'on':''}">${pet(k,{hat:'none',glasses:'none',neck:'none'},3,S.cc,S.color,'t'+k)}<div>${tr(ANIMALS[k].n)}</div></button>`).join('')}</div>
   <div class="mu" style="margin-top:8px">${tr('Fur colour')}</div><div><button class="sw ${!S.color?'on':''}" data-f="" style="background:linear-gradient(135deg,#f0a45d,#9a9aa8)"></button>${COLORS.map(x=>`<button class="sw ${S.color==x?'on':''}" data-f="${x}" style="background:${x}"></button>`).join('')}</div>`+cl('hat','Hat')+cl('glasses','Glasses')+cl('neck','Neck / body')+ccRow();
 v.innerHTML=`${h.done?'':`<div class="card"><b>${tr('Welcome! Create your character first. It will be your daily companion.')}</b></div>`}
 <div class="two"><div class="card stage" style="align-self:start;position:sticky;top:150px">${avatar(d.mood,'m')}<div><b>${esc(h.name)}</b></div><div class="mu">${esc(info())}</div></div>
 <div class="card"><div class="grid">
  <div><label>${tr('Name')}</label><input id="cn" value="${esc(h.name)}" maxlength="20" style="width:100%"></div>
  <div><label>${tr('Age')}</label><input id="ca" type="number" min="1" max="120" value="${esc(h.age)}" style="width:100%"></div>
  <div><label>${tr('Gender')}</label><select id="cg" style="width:100%">${Object.keys(G).map(k=>`<option value="${k}" ${h.gender==k?'selected':''}>${tr(G[k])}</option>`).join('')}</select></div>
  <div><label>${tr('Zodiac sign')}</label><select id="cz" style="width:100%"><option value="">${tr('Not chosen')}</option>${ZOD.map((z,i)=>`<option value="${z}" ${h.zodiac==z?'selected':''}>${ZS[i]} ${tr(z)}</option>`).join('')}</select></div></div>
  <div class="mu" style="margin-top:10px">${tr('Type')}</div><div><button class="opt ${hum?'':'on'}" data-k="animal">🐾 ${tr('Animal')}</button><button class="opt ${hum?'on':''}" data-k="human">🧑 ${tr('Person')}</button></div>
  ${ctl}<button class="p" id="cs" style="margin-top:14px">${tr('Save character')}</button></div></div>`;
 v.onclick=e=>{const b=e.target.closest('button');if(!b)return;const q=b.dataset;
  if(q.k)h.kind=q.k;else if(q.a)S.animal=q.a;else if(q.f!==undefined)S.color=q.f||null;else if(q.c)S.clothes[q.c]=q.o;else if(q.sc)S.cc=q.sc;else if(q.hs)h.style=q.hs;else if(q.p)h[q.p]=q.v;
  else if(b.id=='cs'){if(!h.name.trim()){alert(tr('Please enter a name.'));return}h.done=true;save();go('today');return}else return;
  save();charView()};
 $('cn').oninput=e=>{h.name=e.target.value;save()};$('ca').oninput=e=>{h.age=e.target.value;save()};
 $('cg').onchange=e=>{h.gender=e.target.value;save();charView()};$('cz').onchange=e=>{h.zodiac=e.target.value;save();charView()};
}

/* ---- boot ---- */
document.querySelector('.top .row .row').insertAdjacentHTML('beforeend','<select id="lang">'+['en',...LC].map(c=>`<option value="${c}">${LN[c]}</option>`).join('')+'</select>');
$('lang').onchange=e=>setLang(e.target.value);
window.addEventListener('hashchange',route);
setLang(LANG);route();
})();
