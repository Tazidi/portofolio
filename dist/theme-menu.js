(function(){
 function initialize(){
  const menu=document.getElementById('theme-menu');
  const control=document.getElementById('theme-select');
  const summary=menu.querySelector('summary');
  const buttons=menu.querySelectorAll('[data-theme-choice]');
  function sync(){const preference=document.documentElement.dataset.themePreference||'system';buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.themeChoice===preference)))}
  buttons.forEach(button=>button.addEventListener('click',()=>{control.value=button.dataset.themeChoice;control.dispatchEvent(new Event('change',{bubbles:true}));sync();menu.open=false;summary.focus()}));
  document.addEventListener('click',event=>{if(!menu.contains(event.target))menu.open=false});
  menu.addEventListener('keydown',event=>{if(event.key==='Escape'){menu.open=false;summary.focus()}});
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme-preference']});
  sync();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});else initialize();
})();
