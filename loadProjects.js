
async function loadData() {

    let data = await fetch(
        "https://api-projects-one.vercel.app/projects"
    ).then(response =>  response.json())

    loadProjects(data);
}


function loadProjects(dados) {
    
    const svgs =['firebase', 'styled-components', 'database', 'docker', 'material','mongo', 'postgre', 'typescript']
   
    const containerProject = document.querySelector('.row');

    const contentHtml = dados.map((data, index) => {

    return `
    <div class="container-project" id="box${index}" onclick="btnDescription(id)" onmouseenter="enterDescription(id)" onmouseleave="outDescription(id)">
         <div class="banner-main">
            <img src="${data.urlImage}" alt="imagem projeto" class="banner-main-img"/>
            <ul class="ul-banner-main">
            ${data.icons.map((icon) => {
                return `${svgs.includes(icon) ? `
                    <li><img src="./assets/${icon}.svg" alt="icon-svg"/></li>` :
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
            return `${`<li>${icon}</li>`}`
                    })}
             .</ul>
             <div class="links">

                ${data.urlDeploy != '' ? `
                <a class="btn-repo" href="${data.urlDeploy}" target="_blank">
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
    }).join('');

    containerProject.innerHTML = contentHtml;
}

loadData();

function checkDevice() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}


function btnDescription(id) {
    const description = document.querySelector(`#${id} .description`);
    const main = document.querySelector(`#${id} .banner-main`);
    const display = window.getComputedStyle(description, null).display;

    const res = checkDevice();
    
    if (res) {
        if (display == "none") {
           
            description.style.display = "block";
            main.style.display = 'none';
            description.style.animation = "openDescription 500ms ease-in";
        } else {
            
            main.style.display = 'flex';
            description.style.animation = "closeDescription 500ms ease-out";
           
            setTimeout(() => {
                description.style.display = 'none';
                main.style.display = 'flex';
            }, 400)
        }
    }   
}


function enterDescription(id) {
    const description = document.querySelector(`#${id} .description`);
    const main = document.querySelector(`#${id} .banner-main`);

    const res = checkDevice()
    if (!res) {
       
        setTimeout(() => {
            description.style.display = "block";
            main.style.display = 'none';
            description.style.animation = "openDescription 500ms linear";
        }, 400)
    }
}

function outDescription(id) {

    const description = document.querySelector(`#${id} .description`);
    const main = document.querySelector(`#${id} .banner-main`);

    main.style.display = 'flex';
    description.style.animation = "closeDescription 500ms linear";

    setTimeout(() => {
        description.style.display = 'none';
        main.style.display = 'flex';
    }, 400)

}
