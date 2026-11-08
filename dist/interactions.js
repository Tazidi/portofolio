// All logos are bundled locally. The text labels remain visible on every device.
const toolkit=[
 ['python','Python','Data & AI','Data processing, machine learning experiments, and computer vision.','#78b8e4'],
 ['tensorflow','TensorFlow','Deep Learning','Deep learning model development and deployment with TensorFlow Lite.','#ffad56'],
 ['keras','Keras','Deep Learning','Building and training image classification models with transfer learning.','#ef7777'],
 ['scikitlearn','Scikit-learn','Machine Learning','Data preprocessing, algorithm comparison, and model evaluation.','#f1b66c'],
 ['opencv','OpenCV','Computer Vision','Image processing, thresholding, morphology, and contour detection.','#95d88d'],
 ['laravel','Laravel','Web Development','Web application and geographic information system development.','#ff817b'],
 ['flutter','Flutter','Mobile Development','The iHoya Android application and TensorFlow Lite model integration.','#71cafa'],
 ['javascript','JavaScript','Web Development','Interactive interfaces and web application development.','#f3db63'],
 ['dart','Dart','Mobile Development','Mobile application development with Flutter.','#70d5df'],
 ['git','Git','Version Control','Code version control throughout the software development process.','#f58c72'],
 ['github','GitHub','Collaboration','Code repository management and collaborative project development.','#e2e8dd'],
 ['docker','Docker','Development Tools','Supporting software development and deployment workflows.','#80c6f8'],
 ['mysql','MySQL','Database','Relational data management for applications.','#8bc7de'],
 ['postgresql','PostgreSQL','Database','Data management using relational databases.','#96bde8'],
 ['firebase','Firebase','Backend Services','Data management to support application development.','#ffd675'],
 ['amazonwebservices','AWS','Cloud','Cloud technology to support deployment and development.','#ffc270']
];
const toolkitRoot=document.querySelector('#toolkit-explorer');
toolkitRoot.innerHTML=`<div class="toolkit-intro"><span class="eyebrow"><span class="dot"></span> MY EVERYDAY TOOLBOX</span><p>Hover, focus, or select a technology to explore it.</p></div><div class="toolkit-board">${toolkit.map(([id,name,category,description,color])=>`<button class="tool" data-tool="${id}" style="--tool-color:${color}" aria-pressed="false" aria-describedby="tool-description"><span class="tool-icon"><img src="assets/logos/${id}.svg" alt="" width="36" height="36" loading="lazy"></span><span>${name}</span><span class="tool-plus" aria-hidden="true">↗</span></button>`).join('')}</div><div class="tool-inspector"><div class="inspector-icon"><img id="tool-active-icon" src="assets/logos/python.svg" alt="" width="42" height="42"></div><div><span id="tool-category">Data & AI</span><h3 id="tool-name">Python</h3><p id="tool-description">${toolkit[0][3]}</p></div><span class="inspector-deco" aria-hidden="true">{ }</span></div>`;
function showTool(id){const tool=toolkit.find(t=>t[0]===id);if(!tool)return;document.querySelector('#tool-active-icon').src=`assets/logos/${id}.svg`;document.querySelector('#tool-name').textContent=tool[1];document.querySelector('#tool-category').textContent=tool[2];document.querySelector('#tool-description').textContent=tool[3];document.querySelector('.tool-inspector').style.setProperty('--tool-color',tool[4]);document.querySelectorAll('[data-tool]').forEach(b=>{const active=b.dataset.tool===id;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active))})}
toolkitRoot.addEventListener('pointerover',e=>{if(e.pointerType==='touch')return;const b=e.target.closest('[data-tool]');if(b)showTool(b.dataset.tool)});
toolkitRoot.addEventListener('focusin',e=>{const b=e.target.closest('[data-tool]');if(b)showTool(b.dataset.tool)});
toolkitRoot.addEventListener('click',e=>{const b=e.target.closest('[data-tool]');if(b)showTool(b.dataset.tool)});showTool('python');

const skillIcons=[['tensorflow','keras','scikitlearn'],['opencv','python'],['laravel','flutter','javascript'],['git','docker','postgresql']];
document.querySelectorAll('.skill-grid article').forEach((card,i)=>{const strip=document.createElement('div');strip.className='category-logos';strip.innerHTML=skillIcons[i].map(id=>`<img src="assets/logos/${id}.svg" alt="${toolkit.find(t=>t[0]===id)[1]}" width="26" height="26" loading="lazy">`).join('');card.prepend(strip)});
const projectLogos={sisiraja:['laravel','javascript'],ihoya:['tensorflow','flutter','dart'],salary:['python','scikitlearn'],vehicles:['opencv','python'],cats:['tensorflow','keras','python']};
function decorateProjects(){document.querySelectorAll('.project-card').forEach(card=>{if(card.querySelector('.project-stack'))return;const stack=document.createElement('div');stack.className='project-stack';stack.innerHTML=projectLogos[card.dataset.project].map(id=>`<span><img src="assets/logos/${id}.svg" alt="" width="16" height="16">${toolkit.find(t=>t[0]===id)[1]}</span>`).join('');card.append(stack)})}
decorateProjects();new MutationObserver(decorateProjects).observe(document.querySelector('#project-grid'),{childList:true});

// Pointer effects preserve the native cursor and only run for a fine pointer.
const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const hero=document.querySelector('.hero');
let pendingFrame=0;
document.addEventListener('pointermove',e=>{if(!finePointer.matches||reducedMotion.matches||e.pointerType==='touch')return;if(pendingFrame)cancelAnimationFrame(pendingFrame);const target=e.target;const x=e.clientX,y=e.clientY;pendingFrame=requestAnimationFrame(()=>{pendingFrame=0;const card=target.closest('.project-card,.hero-visual,.tool,.skill-grid article');if(card){const r=card.getBoundingClientRect();const px=Math.max(0,Math.min(1,(x-r.left)/r.width));const py=Math.max(0,Math.min(1,(y-r.top)/r.height));card.style.setProperty('--mx',`${px*100}%`);card.style.setProperty('--my',`${py*100}%`);card.style.setProperty('--rx',`${(0.5-py)*5}deg`);card.style.setProperty('--ry',`${(px-0.5)*7}deg`)}if(target.closest('.hero')){const r=hero.getBoundingClientRect();hero.style.setProperty('--hx',`${x-r.left}px`);hero.style.setProperty('--hy',`${y-r.top}px`)}})},{passive:true});
document.addEventListener('pointerout',e=>{const card=e.target.closest('.project-card,.hero-visual,.tool,.skill-grid article');if(card&&!card.contains(e.relatedTarget)){card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg')}});
const progress=document.querySelector('#scroll-progress');let scrollFrame=0;
function updateProgress(){scrollFrame=0;const total=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform=`scaleX(${total>0?window.scrollY/total:0})`}
window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateProgress)},{passive:true});window.addEventListener('resize',updateProgress);updateProgress();
const observedSections=document.querySelectorAll('main section[id]');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;document.querySelectorAll('nav a').forEach(a=>{const active=a.getAttribute('href')===`#${entry.target.id}`;a.classList.toggle('current',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}},{rootMargin:'-15% 0px -55% 0px'});observedSections.forEach(s=>observer.observe(s))}

const tickerToggle=document.querySelector('.ticker-toggle');
tickerToggle.addEventListener('click',()=>{const paused=tickerToggle.getAttribute('aria-pressed')!=='true';document.querySelector('.ticker').classList.toggle('ticker-paused',paused);tickerToggle.setAttribute('aria-pressed',String(paused));tickerToggle.setAttribute('aria-label',paused?'Resume scrolling text':'Pause scrolling text');tickerToggle.textContent=paused?'▶':'Ⅱ'});
