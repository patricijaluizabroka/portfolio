var $=function(i){return document.getElementById(i)};
var flat=[];cats.forEach(function(c){flat.push(c);(c.children||[]).forEach(function(k){flat.push(k)})});
function catOf(id){for(var i=0;i<flat.length;i++)if(flat[i].id===id)return flat[i]}
function parentOf(id){for(var i=0;i<cats.length;i++){var c=cats[i];if(c.id===id)return c;for(var j=0;j<(c.children||[]).length;j++)if(c.children[j].id===id)return c}}
function renderGrid(id){
 var out=works.map(function(w,i){return {w:w,i:i}}).filter(function(o){return !id||o.w.cat===id||(o.w.cat||'').indexOf(id+'-')===0});
 $('grid').innerHTML=out.length?out.map(function(o){
  return '<a class="card" href="#work-'+(o.i+1)+'"><div class="ph"><img src="'+o.w.img+'" alt="'+o.w.title+'"></div><div class="t lc">'+o.w.title+'</div><div class="y">'+o.w.year+'</div></a>';
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
function pad(){var nm=document.querySelector('.name');$('hdr').style.height=innerWidth>700?(nm.offsetHeight+50)+'px':'';document.documentElement.style.setProperty('--hh',$('hdr').offsetHeight+'px');document.querySelector('main').style.paddingTop=($('hdr').offsetHeight+22)+'px'}
var lastList='#creations';
var sceneIdx=Math.floor(Math.random()*scenes.length),prevView=null,ent=$('enter');
function showScene(){
 var s=scenes[sceneIdx],u='url('+s.bg+')';
 ent.style.backgroundImage=u;$('stage').style.backgroundImage=u;$('bgfx').style.backgroundImage='url('+s.page+')';document.documentElement.style.setProperty('--pageimg','url('+s.page+')');document.documentElement.style.setProperty('--bgop',s.op);
 ent.style.setProperty('--mpos',s.mpos);ent.style.setProperty('--mtop',s.mtop);
 var d=$('enter-d');d.style.left=s.x+'%';d.style.top=s.y+'%';d.style.width=s.w+'%';
 d.firstChild.src=s.btn;$('enter-m').firstChild.src=s.btn;
}
scenes.forEach(function(s){[s.bg,s.page].forEach(function(u){var i=new Image();i.src=u})});
function route(){
 var h=(location.hash||'#enter').slice(1),m=/^work-(\d+)$/.exec(h),view=h,nav=h,cur=null;
 if(/^c-/.test(h)){cur=h.slice(2);if(catOf(cur)){view=nav='creations'}else{cur=null;view=nav='creations';h='creations'}}
 if(m){var w=works[m[1]-1];if(!w){view=nav='creations'}else{view='work';nav='creations';$('back').href=lastList;$('crumb2').innerHTML=crumb(w.cat,w.title);
  $('w-img').src=w.img;$('w-img').alt=w.title;$('w-title').textContent=w.title;$('w-tech').textContent=w.tech;$('w-year').textContent=w.year;$('w-desc').textContent=w.desc}}
 if(['enter','creations','about','contact','work'].indexOf(view)<0)view=nav='creations';
 if(view==='enter'&&prevView!==null&&prevView!=='enter')sceneIdx=(sceneIdx+1)%scenes.length;
 showScene();
 if(view==='creations'){lastList=cur?'#c-'+cur:'#creations';renderGrid(cur);renderSide(cur);$('crumb').innerHTML=crumb(cur)}
 renderMenu(cur,nav);menu(false);
 prevView=view;
 document.querySelectorAll('.view').forEach(function(v){v.classList.toggle('on',v.id===view)});
 $('site').hidden=(view==='enter');$('bgfx').hidden=(view==='enter');
 document.querySelectorAll('[data-nav]').forEach(function(a){a.toggleAttribute('aria-current',a.dataset.nav===nav);if(a.dataset.nav===nav)a.setAttribute('aria-current','page')});
 pad();window.scrollTo(0,0);
}
addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');
 if(a&&a.getAttribute('href')===location.hash){e.preventDefault();scrollTo(0,0)}});
function sc(){$('hdr').classList.toggle('scrolled',scrollY>2)}
addEventListener('scroll',sc,{passive:true});
addEventListener('hashchange',route);route();sc();
addEventListener('load',function(){setTimeout(function(){scrollTo(0,0)},0)});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(pad);
