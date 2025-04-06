const $addModuleContainer = document.querySelector('#add-module-container')

function createModule(name, data){
    const module = document.createElement('div')
    module.classList.add('module')
    module.dataset.name = data
    module.innerHTML = `
    <label>
        ${name}
        <input type="number" class="number-input">
    </label>
    <Button type="button" class="delte-module-button">🗑</Button>
    `
    return module
}

function createPercentageModule(name, data){
    const module = document.createElement('div')
    module.classList.add('percentage-module')
    module.dataset.name = data
    module.innerHTML = `
    <span>${name}</span>
    <span>0%</span>
    `
    return module
}

let incomes = []
let expenses = []

let currentContainer = ''
const $incomesContainer = document.querySelector('#incomes-container')
const $expensesContainer = document.querySelector('#expenses-container')
const $percentagesContainer = document.querySelector('#percentages-container')

document.body.addEventListener('click', (event) => {
    
    if(event.target.classList.contains('open-module-pannel-button')){
        currentContainer = event.target.closest('div')
        $addModuleContainer.style.display = 'flex'
    }else if(event.target.id === 'close-add-module-pannel-button'){
        $addModuleContainer.style.display = 'none'
    }
    
})