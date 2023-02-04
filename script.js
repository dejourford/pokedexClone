//  ==== define variables   ====    //
const addPokemonBtn = document.querySelector('.addPokemonBtn')
const closeBtn = document.querySelector('.closeBtn')
const resetBtn = document.querySelector('.resetBtn')
const deleteCloseBtn = document.querySelector('.deleteCloseBtn')
const showCloseBtn = document.querySelector('.showCloseBtn')
const resetCloseBtn = document.querySelector('.resetCloseBtn')
const deleteBtn = document.querySelector('.deleteBtn')
const showBtn = document.querySelector('.showBtn')
const showAllBtn = document.querySelector('#showAllBtn')
const pokemonName = document.querySelector('.pokemonName')
const pokemonImg = document.querySelector('.pokemonImg')
const addBtnModal = document.querySelector('.addBtnModal')
const deleteBtnModal = document.querySelector('.deleteBtnModal')
const showBtnModal = document.querySelector('.showBtnModal')
const resetBtnModal =  document.querySelector('.resetBtnModal')
const addBtn = document.querySelector('#addBtn')
const pokemonCard = document.querySelector('.pokemonCard')
const pokemonLibrary = document.querySelector('.pokemonLibrary')
// 


// ==== DEFINE FUNCTIONS ====  //
function getUserPokemon(){
    const userPokemon = document.querySelector('.addInput').value
    
 
    // ==== FETCH POKEMON API   ====  //
    fetch (`https://pokeapi.co/api/v2/pokemon/${userPokemon}/`)
    .then (response => response.json())
    .then (data => {
        console.log(data)
    
        const card = document.createElement('div')
        card.className = 'pokemonCard'
        const name = document.createElement('p')
        name.className = 'pokemonName'
        name.textContent = data.species.name
        const image = document.createElement('img')
        image.className = 'pokemonImg'
        image.src = data.sprites.front_default
    
        card.appendChild(name)
        card.appendChild(image)
        pokemonLibrary.appendChild(card)
      
     
    })
    .catch (error => {
        console.log(`${error}`)
    })

}




//  ====    ADD MODAL    ====   //    //
addPokemonBtn.addEventListener('click', function(){
    addBtnModal.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    addBtnModal.style.display = 'none'
})

addBtn.addEventListener('click', function(){
    getUserPokemon()
})

// ==== DELETE MODAL ====//
deleteBtn.addEventListener('click', function(){
    deleteBtnModal.style.display = 'block'
})

deleteCloseBtn.addEventListener('click', function(){
    deleteBtnModal.style.display = 'none'
})

// ==== SHOW MODAL ====//
showBtn.addEventListener('click', function(){
    showBtnModal.style.display = 'block'
})

showCloseBtn.addEventListener('click', function(){
    showBtnModal.style.display = 'none'
})

// ==== RESET MODAL ====//
resetBtn.addEventListener('click', function(){
    resetBtnModal.style.display = 'block'
})

resetCloseBtn.addEventListener('click', function(){
    resetBtnModal.style.display = 'none'
})
//

