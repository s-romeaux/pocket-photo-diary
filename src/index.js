import { koalas } from './koalas'
import { activeKoala } from './activeKoala'
import { renderActiveKoala } from './renderActiveKoala'
import { renderKoalaList } from './renderKoalaList'

// Called once when the page loads, and again every time a koala is selected
export let render = () => {
    let oldPage=  document.querySelector('.koala-container')
    let newPage;
    if(activeKoala){
        newPage = renderActiveKoala(activeKoala)
    } else {
        newPage = renderKoalaList(koalas)
    }
    newPage.classList.add('koala-container')
    oldPage.replaceWith(newPage)
}

// Render the page after all functions are defined
render()