const rigth = document.getElementById("btn-right");
const left = document.getElementById("btn-left");
const header = document.querySelector('.ul-header');
const icon = document.querySelector('.header-icon');
const btn1 =document.getElementById("btn")
const teste = document.getElementById('header')
// let ta=false;
var largura = window.innerWidth || document.documentElement.clientWidth;

// if (window.scrollY > 100) {
//     icon.style.display = 'flex';
//     header.style.marginRight = '-90%';
//     header.style.backgroundImage = 'linear-gradient(to bottom right,#0f93a794,#69696d)';
// }else if(window.scrollY > -1 && largura <=800){
//     icon.style.display='flex';
//     header.style.marginRight='-90%';
//     console.log('correto')
// }
// else {
//     icon.style.display = 'none';
//     header.style.marginRight = '10%';
//     header.style.background = 'transparent';
// }
 function testeIcon(data){
    // console.log(data)
    if (window.scrollY > 100) {
        // console.log('c1')
        icon.style.display = 'flex';
        header.style.marginRight = '-100%';
        header.style.backgroundImage = 'linear-gradient(to bottom right,#0f93a794,#69696d)';
        teste.style.background='transparent'
    }else if(window.scrollY > -1 && data <=800){
        // console.log('c2')
        icon.style.display='flex';
        header.style.marginRight='-100%';
        header.style.backgroundImage = 'linear-gradient(to bottom right,#0f93a794,#69696d)';
        teste.style.background='transparent'
    }
    else {
        // console.log('c3')
        icon.style.display = 'none';
        header.style.marginRight = '10%';
        header.style.background = 'transparent';
        teste.style.background='transparent'
    }
 }

 btn1.addEventListener('click',()=>{
    // header.style.marginRight = '10%';
    // header.style.display='flex'
    if(header.style.marginRight=='10%'){
        header.style.marginRight = '-100%';
        teste.style.background='transparent'
        // header.style.background = 'transparent';
    }else{
        header.style.marginRight = '10%';
        header.style.background = 'transparent';
        teste.style.backgroundImage = 'linear-gradient(to bottom right,#0f93a794,#69696d)';

    }
   
 })

 function entrada(){
        icon.style.display = 'flex';
        header.style.marginRight = '10%';
 }

 function saida(){
        // icon.style.display = 'none';
        header.style.marginRight = '-100%';
        // header.style.display='none'
 }

async function loadData() {

    let data = await fetch(
        // "https://api-projects-one.vercel.app/projects"
        "http://localhost:3000/projects"
    )
        .then(response => response.json())

    loadProjects(data);
}

loadData();
testeIcon(largura);

function loadProjects(dados) {

    const containerProject = document.querySelector('.row');

    const contentHtml = dados.map((data, index) => {
        return `
    <div class="container-project" id="box${index}" onmouseenter="enterDescription('box${index}')" onmouseleave="outDescription('box${index}')">
         <div class="banner-main">
            <img src="${data.urlImage}" alt="image project" class="banner-main-img">
             <ul class="ul-banner-main">
              ${data.icons.map((icon) => {
            return `${icon === 'firebase' || icon ==='styled-components' ? `
                <li><img src="./assets/${icon}.svg" alt=""></li>`:
                `<li><i class="fa-brands ${icon}"></i></li>`} `
        }).join('')}
            </ul>
        </div>
        <div class="description">
            <h2>${data.title}</h2>
            <p>${data.description}</p>
         <div class="icons-description">
            <h3>Tecnologias :</h3>
             <ul>
                ${data.tech.map((icon) => {
            return `${`<li>${icon}</li>`}
                    `
                  })}
             </ul>
             <div class="links">

                ${data.urlDeploy != '' ? `
                <a class="btn-repo" href="https://react-themovies.netlify.app/" target="_blank">
                 <i class="fa-solid fa-arrow-up-right-from-square link-external"></i>
                </a>`: ''}

                <a class="btn-repo" href="${data.urlRepositorio}" target="_blank">
                  <i class="fab fa-github link-github"></i>
                </a>
            </div>
         </div>
        </div>
    </div>
        `
    }).join('')

    containerProject.innerHTML = contentHtml
}

window.addEventListener('resize', function(){
    var largura = window.innerWidth || document.documentElement.clientWidth;
    
  if(largura<=800 && window.scrollY>-1){
        icon.style.display = 'flex';
        header.style.marginRight = '-100%';
        header.style.backgroundImage = 'linear-gradient(to bottom right,#0f93a794,#69696d)';
        // console.log('correto 1')
   }else if(largura>=800 && window.scrollY>100){
    icon.style.display = 'flex';
    header.style.marginRight = '-90%';
    // console.log('correto 2')
   }
   else{
    icon.style.display='none';
    header.style.marginRight ='10%';
    header.style.background = 'transparent';
    // console.log('correto 2')
   }
})

window.addEventListener('scroll', function () {
    var largura = window.innerWidth || document.documentElement.clientWidth;
    // console.log(largura)

    testeIcon(largura);
    // if (window.scrollY > 100) {
    //     icon.style.display = 'flex';
    //     header.style.marginRight = '-90%';
    //     header.style.backgroundImage = 'linear-gradient(to bottom right,#0f93a794,#69696d)';
    // }else if(window.scrollY > -1 && largura <=800){
    //     icon.style.display='flex';
    //     header.style.marginRight='-90%';
    // }
    // else {
    //     icon.style.display = 'none';
    //     header.style.marginRight = '10%';
    //     header.style.background = 'transparent';
    // }
   
});


// function moveEnter() {
//     header.style.marginRight = '10%';
// }


function enterDescription(id) {

    const description = document.querySelector(`#${id} .description`);
    const main = document.querySelector(`#${id} .banner-main`);
    description.classList.add('description');

    description.style.display = "block";
    main.style.display = 'none';
    description.style.animation = "openDescription 500ms ease-in";

}
function outDescription(id) {

    const description = document.querySelector(`#${id} .description`);
    const main = document.querySelector(`#${id} .banner-main`);

    main.style.display = 'flex';
    description.style.animation = "closeDescription 500ms ease-out";

    setTimeout(() => {
        // console.log('saiu')
        description.style.display = 'none';
        main.style.display = 'flex';
    }, 400)

}

rigth.onclick = () => {
    document.getElementById("skills").scrollLeft += 60;
}
left.onclick = () => {
    document.getElementById("skills").scrollLeft -= 60;
}



