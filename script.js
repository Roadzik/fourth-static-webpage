let faqs = document.querySelectorAll('.long');
let last = 0
let lastel = 0
let size = 0
document.querySelectorAll('.bt').forEach(h=>{
    h.style.width = '0'
    h.style.height = '0'
})
faqs.forEach(e=>{
    e.addEventListener('click', f=>{
        if(e.lastElementChild != last && last != 0){
            lastel.style.height='4rem'
            last.style.display = 'none'
            last.style.width = '0px'
            last.style.height = '0px'
            last.style.padding = '0'
            last.style.padding = '0'
            document.querySelector('.yes').style.height = '270rem'
        }
        if(e.style.height == size && size != 0) {
            e.style.height='4rem'
            e.lastElementChild.style.display = 'none'
            e.lastElementChild.style.width = '0px'
            e.lastElementChild.style.height = '0px'
            e.lastElementChild.style.padding = '0'
            document.querySelector('.yes').style.height = '270rem'
        }
        else{
            e.lastElementChild.style.display = 'block'
            e.lastElementChild.style.width = '100%'
            e.lastElementChild.style.height = '10rem'
            e.lastElementChild.style.padding = '2rem 2rem 1rem'
            document.querySelector('.yes').style.height = '276rem'
            size = e.style.height = e.lastElementChild.lastElementChild.clientHeight+140+'px'
            last = e.lastElementChild
            lastel = e
        }
    })
})

document.querySelector('.smol').addEventListener('click', e=>{
    if(document.querySelector('.navbar').style.height == '20rem'){
        document.querySelector('.navbar').style.height = '6rem'
        document.querySelector('.yyy').style.display = 'none'
    }
    else{
        document.querySelector('.navbar').style.height = '20rem'
        document.querySelector('.yyy').style.display = 'flex'
    }
})