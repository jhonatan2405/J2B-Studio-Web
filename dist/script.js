const installer='https://github.com/jhonatan2405/J2B-Studio-Modpacks/releases/download/client-v1.20.25/J2B-Studio-Client-Setup-1.20.25.exe';
document.querySelectorAll('.download').forEach(link=>{
  link.href=installer;
  link.removeAttribute('download');
});
document.querySelectorAll('.version').forEach(x=>x.textContent='v1.20.25');
document.querySelectorAll('.release').forEach(x=>x.textContent='v1.20.25 · Instalador oficial para Windows');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const glow=document.querySelector('.glow');addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const tilt=document.querySelector('.tilt');if(tilt&&matchMedia('(pointer:fine)').matches){tilt.parentElement.addEventListener('pointermove',e=>{const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`rotateY(${x*8-5}deg) rotateX(${-y*7+2}deg) translateY(-4px)`});tilt.parentElement.addEventListener('pointerleave',()=>tilt.style.transform='rotateY(-5deg) rotateX(2deg)')}
addEventListener('scroll',()=>document.querySelectorAll('.parallax').forEach(x=>x.style.transform=`translateY(${(scrollY-x.parentElement.offsetTop)*.1}px)`),{passive:true});
