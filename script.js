 let $ = 10650.34;

 let yevro = 11650.03;

 let bilet = 500;
 let mehmonxona = 250;

 let aylanish = 120;

 let jami = $*(bilet + mehmonxona) + aylanish*yevro;
 let ism = prompt('ismingizni kiriting');
 let answer = prompt('mablag\'ni kiriting', 0) -0;
 let heading = document.querySelector('#heading');

 if(answer> 0){
     if ( answer<jami){
        heading.textContent = (ism +' bu safar uchun mablag\'ingiz yetarlimas , iltimos ozroq sabr qiling 😢')

     }else
      heading.textContent = (ism +' safaringiz baxatar bo\'lsin. Maroqli hordiq tilaymiz🎉')

 }