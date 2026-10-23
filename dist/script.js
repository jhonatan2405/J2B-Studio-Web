const repo='jhonatan2405/J2B-Studio-Modpacks';
const bundled={version:'1.20.26',url:`https://github.com/${repo}/releases/download/client-v1.20.26/J2B-Studio-Client-Setup-1.20.26.exe`};
function applyRelease(info){
  if(!info||!info.version||!info.url)return;
  document.querySelectorAll('.download').forEach(link=>{link.href=info.url;link.target='_blank';link.rel='noopener noreferrer';});
  document.querySelectorAll('.version').forEach(label=>label.textContent=`v${info.version}`);
  document.querySelectorAll('.release').forEach(label=>label.textContent=`v${info.version} · Instalador para Windows`);
}
applyRelease(bundled);
fetch(`https://github.com/${repo}/releases/download/client-channel/client-update.json?site=12026`,{cache:'no-store'})
  .then(r=>{if(!r.ok)throw new Error('Canal no disponible');return r.json()})
  .then(applyRelease)
  .catch(()=>{});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const glow=document.querySelector('.glow');addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const tilt=document.querySelector('.tilt');if(tilt&&matchMedia('(pointer:fine)').matches){tilt.parentElement.addEventListener('pointermove',e=>{const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`rotateY(${x*8-5}deg) rotateX(${-y*7+2}deg) translateY(-4px)`});tilt.parentElement.addEventListener('pointerleave',()=>tilt.style.transform='rotateY(-5deg) rotateX(2deg)')}