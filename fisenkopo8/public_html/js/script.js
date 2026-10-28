var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.win img,.ph img,.vet-hero-shot img,.vet-shot img,.ad-example img,.trio-shot img,.minions-shot img,.him-hero img,.him-shot img,.wedding-photo-card img,.cookie-shot img').forEach(function(i){i.addEventListener('click',function(){li.src=i.src;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});


(function(){var p=document.getElementById('phone'),n=document.getElementById('nb');if(!p)return;
function play(){p.classList.remove('go','done');void p.offsetWidth;p.classList.add('go');setTimeout(function(){p.classList.add('done')},2100)}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){if(e[0].isIntersecting){play();io.disconnect()}},{threshold:.35});io.observe(p)}else{play()}
p.addEventListener('click',play);if(n){if('IntersectionObserver' in window){var o2=new IntersectionObserver(function(e){if(e[0].isIntersecting){n.classList.add('on');o2.disconnect()}},{threshold:.2});o2.observe(n)}else{n.classList.add('on')}}})();
;(function(){var k=document.getElementById('myskills');if(!k)return;if('IntersectionObserver' in window){var o=new IntersectionObserver(function(e){if(e[0].isIntersecting){k.classList.add('on');o.disconnect()}},{threshold:.2});o.observe(k)}else{k.classList.add('on')}})();


(function(){var t=document.getElementById('toTop');if(!t)return;function f(){t.classList.toggle('show',window.pageYOffset>700)}window.addEventListener('scroll',f,{passive:true});f()})();

/* Notebook intro: fit handwriting to the page, run on load, replay on click */
(function(){
var nb=document.getElementById('nbk');if(!nb)return;
var mq=window.matchMedia('(min-width:761px)'),timers=[],io=null;
function fit(){var pg=nb.querySelector('.nbk-pg');if(pg&&pg.clientWidth)nb.style.setProperty('--cq',(pg.clientWidth/100)+'px');[].forEach.call(nb.querySelectorAll('.fit'),function(el){el.style.fontSize='';var max=el.parentElement.clientWidth,w=el.offsetWidth;if(max&&w>max){el.style.fontSize=(parseFloat(getComputedStyle(el).fontSize)*max/w*.97)+'px'}})}
function start(){
  timers.forEach(clearTimeout);timers=[];if(io){io.disconnect();io=null}
  nb.classList.remove('go','go2');void nb.offsetWidth;nb.classList.add('go');
  if(mq.matches||!('IntersectionObserver' in window)){timers.push(setTimeout(function(){nb.classList.add('go2')},mq.matches?900:300))}
  else{io=new IntersectionObserver(function(e){if(e[0].isIntersecting){nb.classList.add('go2');io.disconnect();io=null}},{threshold:.4});io.observe(nb.querySelector('.nbk-r'))}
}
function boot(){fit();start()}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
window.addEventListener('resize',fit);window.addEventListener('orientationchange',function(){setTimeout(fit,250)});
nb.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('a'))return;start()});
setTimeout(function(){if(!nb.classList.contains('go'))nb.classList.add('go','go2')},2500);
})();
/* Gentle reveal of the other blocks while scrolling */
(function(){
if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var sel='#projects h2,#projects .pj-lead,#projects .pjump,.pj.wine .in>div,.pj.sun .in>div,.trio-gallery-title,.trio-shot,.minions-gallery-title,.minions-shot,.vet-banner,.vet-function-panel,.vet-gallery-title,.vet-shot,.him-banner,.him-admin-title,.him-shot,.wedding-project,.wedding-photo-card,.cookie-project,.cookie-shot,.role-card,.ad .card,.ad-examples-head,.ad-example,#work h2,#work .paper li,.edu,#contacts h2,#contacts .lead,.contact-row';
var els=[].slice.call(document.querySelectorAll(sel));
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in-view');io.unobserve(t);setTimeout(function(){t.style.transitionDelay=''},1400)}})},{threshold:.08,rootMargin:'0px 0px -6% 0px'});
els.forEach(function(el,i){if(el.classList.contains('rv'))return;el.classList.add('rv');var sib=[].indexOf.call(el.parentNode.children,el);el.style.transitionDelay=((sib%4)*90)+'ms';io.observe(el)});
})();