const installer='downloads/J2B-Studio-Client-Setup-1.20.9.exe';
document.querySelectorAll('.download').forEach(link=>{
  link.href=installer;
  link.download='J2B-Studio-Client-Setup-1.20.9.exe';
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const glow=document.querySelector('.glow');addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const tilt=document.querySelector('.tilt');if(matchMedia('(pointer:fine)').matches){tilt.parentElement.addEventListener('pointermove',e=>{const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`rotateY(${x*8-5}deg) rotateX(${-y*7+2}deg) translateY(-4px)`});tilt.parentElement.addEventListener('pointerleave',()=>tilt.style.transform='rotateY(-5deg) rotateX(2deg)')}
addEventListener('scroll',()=>document.querySelectorAll('.parallax').forEach(x=>x.style.transform=`translateY(${(scrollY-x.parentElement.offsetTop)*.1}px)`),{passive:true});
