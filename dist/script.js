const repo='jhonatan2405/J2B-Studio-Modpacks';
const fallback=`https://github.com/${repo}/releases/download/client-v1.20.9/J2B-Studio-Client-Setup-Latest.exe`;

fetch(`https://api.github.com/repos/${repo}/releases?per_page=30&site=1209`,{
  cache:'no-store',
  headers:{Accept:'application/vnd.github+json'}
})
  .then(r=>{if(!r.ok)throw new Error(`GitHub ${r.status}`);return r.json()})
  .then(releases=>{
    const release=releases.find(r=>/^client-v/i.test(r.tag_name||'')&&r.assets.some(a=>/\.exe$/i.test(a.name)));
    if(!release)throw new Error('No se encontró una publicación del cliente');
    const installer=release.assets.find(a=>/^J2B-Studio-Client-Setup-Latest\.exe$/i.test(a.name))
      ||release.assets.find(a=>/^J2B-Studio-Client-Setup-.*\.exe$/i.test(a.name))
      ||release.assets.find(a=>/\.exe$/i.test(a.name));
    const version=(release.tag_name||'').replace(/^client-v/i,'v');
    document.querySelectorAll('.download').forEach(link=>link.href=installer.browser_download_url);
    document.querySelectorAll('.version').forEach(label=>label.textContent=version);
    document.querySelectorAll('.release').forEach(label=>label.textContent=`${version} · Instalador para Windows`);
  })
  .catch(()=>document.querySelectorAll('.download').forEach(link=>link.href=fallback));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const glow=document.querySelector('.glow');addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const tilt=document.querySelector('.tilt');if(matchMedia('(pointer:fine)').matches){tilt.parentElement.addEventListener('pointermove',e=>{const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`rotateY(${x*8-5}deg) rotateX(${-y*7+2}deg) translateY(-4px)`});tilt.parentElement.addEventListener('pointerleave',()=>tilt.style.transform='rotateY(-5deg) rotateX(2deg)')}
addEventListener('scroll',()=>document.querySelectorAll('.parallax').forEach(x=>x.style.transform=`translateY(${(scrollY-x.parentElement.offsetTop)*.1}px)`),{passive:true});
