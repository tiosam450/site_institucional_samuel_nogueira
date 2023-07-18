const card = document.querySelectorAll(".card")
const popUp = document.querySelectorAll(".viewPortfolio")
const close = document.querySelectorAll('.viewPortfolio p')
const close1 = document.querySelectorAll('.viewPortfolio')

const viewPopUp = (index)=>{
    popUp[index].classList.add('view')
    close[index].addEventListener('click', ()=>{
        popUp[index].classList.remove('view')
    })
    close1[index].addEventListener('click', ()=>{
        popUp[index].classList.remove('view')
    })  
}

card.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        viewPopUp(index)
    })
})