(function(){
  'use strict';
  const key='rizki-color-theme';
  const choices=['light','dark','system'];
  const media=window.matchMedia('(prefers-color-scheme: dark)');
  const root=document.documentElement;
  let control;
  function readPreference(){try{const saved=localStorage.getItem(key);return choices.includes(saved)?saved:'system'}catch{return 'system'}}
  let preference=readPreference();
  function apply(){
    const resolved=preference==='system'?(media.matches?'dark':'light'):preference;
    root.dataset.theme=resolved;
    root.dataset.themePreference=preference;
    root.style.colorScheme=resolved;
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.setAttribute('content',resolved==='dark'?'#101b20':'#f4e9df');
    if(control)control.value=preference;
  }
  apply();
  function initialize(){
    control=document.getElementById('theme-select');
    if(!control)return;
    control.value=preference;
    control.addEventListener('change',()=>{
      preference=choices.includes(control.value)?control.value:'system';
      try{localStorage.setItem(key,preference)}catch{/* Theme selection still works when storage is unavailable. */}
      apply();
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});else initialize();
  media.addEventListener('change',()=>{if(preference==='system')apply()});
  window.addEventListener('storage',event=>{if(event.key===key||event.key===null){preference=readPreference();apply()}});
})();
