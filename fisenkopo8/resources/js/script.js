
var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.win img,.ph img,.vet-hero-shot img,.vet-shot img,.ad-example img,.trio-shot img,.minions-shot img,.him-hero img,.him-shot img,.wedding-photo-card img').forEach(function(i){i.addEventListener('click',function(){li.src=i.src;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});

(function(){var p=document.getElementById('phone'),n=document.getElementById('nb');if(!p)return;
function play(){p.classList.remove('go','done');void p.offsetWidth;p.classList.add('go');setTimeout(function(){p.classList.add('done')},2100)}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){if(e[0].isIntersecting){play();io.disconnect()}},{threshold:.35});io.observe(p)}else{play()}
p.addEventListener('click',play);if(n){if('IntersectionObserver' in window){var o2=new IntersectionObserver(function(e){if(e[0].isIntersecting){n.classList.add('on');o2.disconnect()}},{threshold:.2});o2.observe(n)}else{n.classList.add('on')}}})();
;(function(){var k=document.getElementById('myskills');if(!k)return;if('IntersectionObserver' in window){var o=new IntersectionObserver(function(e){if(e[0].isIntersecting){k.classList.add('on');o.disconnect()}},{threshold:.2});o.observe(k)}else{k.classList.add('on')}})();



(function(){var t=document.getElementById('toTop');if(!t)return;function f(){t.classList.toggle('show',window.pageYOffset>700)}window.addEventListener('scroll',f,{passive:true});f()})();