var $=function(i){return document.getElementById(i)};
var flat=[];cats.forEach(function(c){flat.push(c);(c.children||[]).forEach(function(k){flat.push(k)})});
function catOf(id){for(var i=0;i<flat.length;i++)if(flat[i].id===id)return flat[i]}
function parentOf(id){for(var i=0;i<cats.length;i++){var c=cats[i];if(c.id===id)return c;for(var j=0;j<(c.children||[]).length;j++)if(c.children[j].id===id)return c}}
function renderGrid(id){
 var out=works.map(function(w,i){return {w:w,i:i}}).filter(function(o){return !id||o.w.cat===id||(o.w.cat||'').indexOf(id+'-')===0});
 $('grid').innerHTML=out.length?out.map(function(o){
  return '<a class="card" href="#work-'+(o.i+1)+'"><div class="ph"><img src="'+o.w.img+'" alt="'+o.w.title+'" loading="lazy" decoding="async"></div><div class="t lc">'+o.w.title+'</div><div class="y">'+o.w.year+'</div></a>';
 }).join(''):'<p class="empty">šajā sadaļā vēl nav darbu</p>';
}
function links(list,cur){return list.map(function(c){return '<a href="#c-'+c.id+'"'+(c.id===cur?' class="on"':'')+'>'+c.label+'</a>'}).join('')}
function renderSide(cur){
 var op=cur&&parentOf(cur);
 function li(c){return '<li><a href="#c-'+c.id+'"'+(c.id===cur?' class="on"':'')+'>'+c.label+'</a>'+(c.children&&op&&op.id===c.id?'<ul>'+c.children.map(li).join('')+'</ul>':'')+'</li>'}
 $('side').innerHTML='<ul>'+cats.map(li).join('')+'</ul>';
}
function crumb(id,last){
 var p=id&&parentOf(id),c=id&&catOf(id),parts=[['my creations','#creations']];
 if(c){if(p&&p.id!==c.id)parts.push([p.label,'#c-'+p.id]);parts.push([c.label,'#c-'+c.id])}
 if(last)return parts.map(function(x){return '<a href="'+x[1]+'">'+x[0]+'</a>'}).join('<i>/</i>')+'<i>/</i><b>'+last+'</b>';
 var e=parts.pop();return parts.map(function(x){return '<a href="'+x[1]+'">'+x[0]+'</a>'}).join('<i>/</i>')+(parts.length?'<i>/</i>':'')+'<b>'+e[0]+'</b>';
}
function renderMenu(cur,nav){
 function li(c){return '<li><a href="#c-'+c.id+'"'+(c.id===cur?' class="on"':'')+'>'+c.label+'</a>'+(c.children?'<ul>'+c.children.map(li).join('')+'</ul>':'')+'</li>'}
 $('menu').innerHTML='<a href="#creations"'+(nav==='creations'?' class="on"':'')+'>my creations</a><ul>'+cats.map(li).join('')+'</ul><a href="#about"'+(nav==='about'?' class="on"':'')+'>about me</a><a href="#contact"'+(nav==='contact'?' class="on"':'')+'>contact me</a>';
}
var burger=$('burger');
function menu(open){burger.setAttribute('aria-expanded',open);$('menu').hidden=!open;document.body.classList.toggle('lock',open)}
burger.addEventListener('click',function(){menu(burger.getAttribute('aria-expanded')!=='true')});
addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});
addEventListener('resize',function(){if(innerWidth>700)menu(false);pad()});
function pad(){document.documentElement.style.setProperty('--hh',$('hdr').offsetHeight+'px');document.querySelector('main').style.paddingTop=($('hdr').offsetHeight+10)+'px'}
var lastList='#creations';
var sceneIdx=Math.floor(Math.random()*scenes.length),prevView=null,ent=$('enter');
var idle=window.requestIdleCallback||function(f){setTimeout(f,1200)};
function load(u){var i=new Image();i.src=u}
function applyEnter(){
 var s=scenes[sceneIdx],u='url('+s.bg+')';
 ent.style.backgroundImage=u;$('stage').style.backgroundImage=u;
 ent.style.setProperty('--mpos',s.mpos);ent.style.setProperty('--mtop',s.mtop);
 var d=$('enter-d');d.style.left=s.x+'%';d.style.top=s.y+'%';d.style.width=s.w+'%';
 d.firstChild.src=s.btn;$('enter-m').firstChild.src=s.btn;
 idle(function(){load(s.page)});
}
function applyPage(){
 var s=scenes[sceneIdx],r=document.documentElement.style;
 $('bgfx').style.backgroundImage='url('+s.page+')';r.setProperty('--pageimg','url('+new URL(s.page,document.baseURI).href+')');r.setProperty('--bgop',s.op);
 idle(function(){load(scenes[(sceneIdx+1)%scenes.length].bg)});
}
function route(){
 var h=(location.hash||'#enter').slice(1),m=/^work-(\d+)$/.exec(h),view=h,nav=h,cur=null;
 if(/^c-/.test(h)){cur=h.slice(2);if(catOf(cur)){view=nav='creations'}else{cur=null;view=nav='creations';h='creations'}}
 if(m){var w=works[m[1]-1];if(!w){view=nav='creations'}else{view='work';nav='creations';$('back').href=lastList;$('crumb2').innerHTML=crumb(w.cat,w.title);
  $('w-img').loading='lazy';$('w-img').decoding='async';$('w-img').src=w.img;$('w-img').alt=w.title;$('w-title').textContent=w.title;$('w-tech').textContent=w.tech;$('w-year').textContent=w.year;$('w-desc').textContent=w.desc}}
 if(['enter','creations','about','contact','work'].indexOf(view)<0)view=nav='creations';
 if(view==='enter'&&prevView!==null&&prevView!=='enter')sceneIdx=(sceneIdx+1)%scenes.length;
 if(view==='enter')applyEnter();else applyPage();
 if(view==='creations'){lastList=cur?'#c-'+cur:'#creations';renderGrid(cur);renderSide(cur);$('crumb').innerHTML=crumb(cur)}
 renderMenu(cur,nav);menu(false);
 prevView=view;
 document.querySelectorAll('.view').forEach(function(v){v.classList.toggle('on',v.id===view)});
 $('site').hidden=(view==='enter');$('bgfx').hidden=(view==='enter');
 document.querySelectorAll('[data-nav]').forEach(function(a){a.toggleAttribute('aria-current',a.dataset.nav===nav);if(a.dataset.nav===nav)a.setAttribute('aria-current','page')});
 pad();scrollTo({top:0,left:0,behavior:'instant'});
}
addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');
 if(a&&a.getAttribute('href')===location.hash){e.preventDefault();scrollTo({top:0,left:0,behavior:'smooth'})}});
function sc(){$('hdr').classList.toggle('scrolled',scrollY>2);$('totop').classList.toggle('show',scrollY>400)}
addEventListener('scroll',sc,{passive:true});
addEventListener('hashchange',route);route();sc();
addEventListener('load',function(){setTimeout(function(){scrollTo({top:0,left:0,behavior:'instant'})},0)});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(pad);
$('totop').addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});
addEventListener('dragstart',function(e){if(e.target.tagName==='IMG')e.preventDefault()});
/* e-pasts: kopēt starpliktuvē */
var cb=$('copy-mail'),cs=$('copy-status'),ct1,ct2;
function say(msg,ok){clearTimeout(ct1);clearTimeout(ct2);cs.textContent=msg;cs.classList.add('show');cb.classList.toggle('done',!!ok);
 ct1=setTimeout(function(){cs.classList.remove('show');cb.classList.remove('done');ct2=setTimeout(function(){cs.textContent=''},300)},2400)}
function legacyCopy(t){var ta=document.createElement('textarea');ta.value=t;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;top:0;left:0;opacity:0';document.body.appendChild(ta);ta.select();var r=false;try{r=document.execCommand('copy')}catch(e){}document.body.removeChild(ta);return r}
cb.addEventListener('click',function(){
 var t=cb.dataset.copy;
 function fail(){var r=document.createRange();r.selectNodeContents(cb.firstChild);var s=getSelection();s.removeAllRanges();s.addRange(r);say('press ctrl / cmd + c to copy',false)}
 function ok(){say('email copied to clipboard',true)}
 if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(ok,function(){legacyCopy(t)?ok():fail()})}
 else{legacyCopy(t)?ok():fail()}
});
