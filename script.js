let faqs = document.querySelectorAll('.long');
let last = 0
let lastel = 0
let size = 0
document.querySelectorAll('.bt').forEach(h=>{
    h.style.width = '0'
    h.style.height = '0'
})
let bah =  document.querySelector('.yes').clientHeight
faqs.forEach(e=>{
    e.addEventListener('click', f=>{
        if(e.lastElementChild != last && last != 0){
            lastel.style.height='4rem'
            last.style.display = 'none'
            last.style.width = '0px'
            last.style.height = '0px'
            last.style.padding = '0'
            last.style.padding = '0'
            document.querySelector('.yes').style.height = bah + 'px'
        }
        if(e.style.height == size && size != 0) {
            e.style.height='4rem'
            e.lastElementChild.style.display = 'none'
            e.lastElementChild.style.width = '0px'
            e.lastElementChild.style.height = '0px'
            e.lastElementChild.style.padding = '0'
            document.querySelector('.yes').style.height = bah + 'px'
        }
        else{
            e.lastElementChild.style.display = 'block'
            e.lastElementChild.style.width = '100%'
            e.lastElementChild.style.height = 'auto'
            e.lastElementChild.style.padding = '4rem 2rem 1rem'
            document.querySelector('.yes').style.height = bah +200 + 'px'
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