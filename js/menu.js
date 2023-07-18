const menu = document.querySelector('.menu a')
const popMenu = document.querySelector('.popMenu')
const secao = document.querySelectorAll('.sessao')
const link = document.querySelectorAll('.popMenu li a')
const closeMenu = document.querySelectorAll('.popMenu p')
const up = document.querySelector('#down')
const down = document.querySelector('#up')

const viewMenu = () => {
    popMenu.classList.add('view')

    const loop = (nodeList) => {
        nodeList.forEach((item) => item.addEventListener('click', () => {
            popMenu.classList.remove('view')
        }))
    }
    
    loop(secao)
    loop(link)
    loop(closeMenu)
}

menu.addEventListener('click', (e) => {
    e.preventDefault()
    viewMenu()
})


// Verifica se HREF é 1
const verificaHref = ()=>{
    if(window.location.href=`#${1}`){
        up.disabled = false
        up.style.color="#5C6FFC"
        up.style.cursor="pointer"
    }
}

up.addEventListener("click", (e)=>{
    e.preventDefault()
    nextPage()
})

down.addEventListener("click", (e)=>{
    e.preventDefault()
    prevPage()
})

let next = window.location.href;
let href = next.split("#")
let atualPage = href


const nextPage = ()=> {
    next = window.location.href;
    href = next.split("#")
    atualPage = href

    if(next.includes("#") && atualPage[1] <=4){
        next = window.location.href=`#${atualPage[1] ++}`
        window.location.href=`#${atualPage[1] ++}`

    }else if(!next.includes("#")){
        next = window.location.href=`#${2}`
    }
}
const prevPage = ()=>{
    next = window.location.href;
    href = next.split("#")
    atualPage = href
    
    if(next.includes("#") && atualPage[1] !=1){
        next = window.location.href=`#${atualPage[1] --}`
        window.location.href=`#${atualPage[1]}`
        console.log(atualPage)
    }
}