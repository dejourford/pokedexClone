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
const pokemonCard = document.querySelector('.pokemonCard')
const pokemonName = document.querySelector('.pokemonName')
const pokemonImg = document.querySelector('.pokemonImg')
const addBtnModal = document.querySelector('.addBtnModal')
const deleteBtnModal = document.querySelector('.deleteBtnModal')
const showBtnModal = document.querySelector('.showBtnModal')
const resetBtnModal =  document.querySelector('.resetBtnModal')
const addBtn = document.querySelector('#addBtn')
// 

//  ====    OPEN/CLOSE ADD MODAL    ====   //    //
addPokemonBtn.addEventListener('click', function(){
    addBtnModal.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    addBtnModal.style.display = 'none'
})

// ==== OPEN/CLOSE DELETE MODAL ====//
deleteBtn.addEventListener('click', function(){
    deleteBtnModal.style.display = 'block'
})

deleteCloseBtn.addEventListener('click', function(){
    deleteBtnModal.style.display = 'none'
})

// ==== OPEN/CLOSE SHOW MODAL ====//
showBtn.addEventListener('click', function(){
    showBtnModal.style.display = 'block'
})

showCloseBtn.addEventListener('click', function(){
    showBtnModal.style.display = 'none'
})

// ==== OPEN/CLOSE RESET MODAL ====//
resetBtn.addEventListener('click', function(){
    resetBtnModal.style.display = 'block'
})

resetCloseBtn.addEventListener('click', function(){
    resetBtnModal.style.display = 'none'
})
//

// ==== FETCH POKEMON API   ====  //
fetch ('https://pokeapi.co/api/v2/pokemon/charmander/')
.then (response => response.json())
.then (data => {
    console.log(data)
    pokemonName.textContent = data.species.name
})
.catch (error => {
    console.log(`${error}`)
})