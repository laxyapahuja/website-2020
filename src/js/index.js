let designCardsDiv = document.getElementById('design-project-cards')
let filmCardsDiv = document.getElementById('film-project-cards')
let musicCardsDiv = document.getElementById('music-project-cards')
let codeCardsDiv = document.getElementById('code-project-cards')
let openSourceCardsDiv = document.getElementById('os-project-cards')

colors = ['#00FFF7', '#F1FF69', '#69FFB4', '#FF7A7A', '#FF7AF6', '#F5D2C3', '#D5A1F7', '#E77DAF', '#C1F59A', '#F980A2', '#DE6979', '#BF1FF4', '#2ECE21']

designCardsInnerHTML = ''
filmCardsInnerHTML = ''
musicCardsInnerHTML = ''
codeProjectsCardsInnerHTML = ''
openSourceCardsInnerHTML = ''

function inflator(project, boolean) {
    string = `<div style='width: 400px; background-color: white; height: 450px; border-radius: 20px; position: relative; box-shadow: 0px 9px 104px -69px rgb(0 0 0 / 50%);'>
                    <img src="${project.thumbnail}" width='400px' style='border-radius: 20px 20px 0px 0px;'>
                    <div style="padding-left: 15px; padding-right:15px;">
                    <h1 class="inter" style="margin-top: 10px; font-size: 25px;">${project.title} (${project.year})</h1>
                    <p class="helvetica" style="margin-top: 10px; font-size: 20px;">${project.description}</p>
                    <div id="links" style="position: absolute; display: flex; flex-direction: row; bottom: 0; margin-bottom: 25px; ">`.toString()
    if (project.project) {
        string = string + `<a href="${project.project}" target="_blank">
        <p class="inter" style="font-size: 25px; margin-right: 10px;">Project</p>
    </a>`.toString()
    }

    if (project.media) {
        string = string + `<a href="${project.media}" target="_blank">
        <p class="inter" style="font-size: 25px;">${boolean}</p>
    </a>`.toString()
    }
    string = string + `</div></div></div>`.toString()
    return string
}

art.design.forEach((project, index) => {
    designCardsInnerHTML = designCardsInnerHTML + inflator(project, 'Video')
})

art.films.forEach((project, index) => {
    filmCardsInnerHTML = filmCardsInnerHTML + inflator(project, 'Film')
})

art.music.forEach((project, index) => {
    musicCardsInnerHTML = musicCardsInnerHTML + inflator(project, 'Song')
})

code.projects.forEach((project, index) => {
    codeProjectsCardsInnerHTML = codeProjectsCardsInnerHTML + inflator(project, 'Live')
})

code.opensource.forEach((project, index) => {
    openSourceCardsInnerHTML = openSourceCardsInnerHTML + inflator(project, 'Live')
})

designCardsDiv.innerHTML = designCardsInnerHTML
filmCardsDiv.innerHTML = filmCardsInnerHTML
musicCardsDiv.innerHTML = musicCardsInnerHTML
codeCardsDiv.innerHTML = codeProjectsCardsInnerHTML
openSourceCardsDiv.innerHTML = openSourceCardsInnerHTML

function buttonClick() {
    var color = colors[Math.floor(Math.random() * colors.length)];
    elements = document.getElementsByClassName('funky');
    elementsbg = document.getElementsByClassName('funkybg');
    elementsblack = document.getElementsByClassName('black');
    var arr = Array.prototype.slice.call(elements)
    var arrbg = Array.prototype.slice.call(elementsbg)
    var arrblack = Array.prototype.slice.call(elementsblack)
    arrblack.forEach((element) => {
        element.style.color = '#FFFFFF'
    })
    arrbg.forEach((element) => {
        element.style.backgroundColor = color
    })
    arr.forEach((element) => {
        element.style.color = color
    })
    window.scrollTo(0, 0);
}