const articleContainer = document.querySelector('[data-articleContainer]')
const searchInput = document.querySelector('[data-searchInput]')

const articleCard = items.sort().map( item => {
    const { name } = item
    return `<article>${ name }</article>`
})
articleContainer.innerHTML = articleCard.join('')

searchInput.addEventListener('input', ({ target }) => {

    const filterItems = items.filter( item => {
        const { name } = item
        return name.includes(target.value.toLowerCase())
    })
   
    const getSearchedCard = filterItems.map( filterItem => {
        const { name } = filterItem
            return `<article> ${ name }</article>` 
    })
    
    if(getSearchedCard.length > 0){
        searchInput.classList.remove('error-input')
    }else{  
        searchInput.classList.add('error-input')
    }
    articleContainer.innerHTML = getSearchedCard.join('')
   
})
