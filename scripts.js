const $addModuleContainer = document.querySelector('#add-module-container')
const $body = document.querySelector('#body')

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

let incomes = [
    {name: 'texto'},
]
let expenses = [
    {name: 'nombre', dataset: 'nombre'},
]

let currentContainer = ''
const $incomesContainer = document.querySelector('#incomes-container')
const $expensesContainer = document.querySelector('#expenses-container')
const $percentagesContainer = document.querySelector('#percentages-container')

$body.addEventListener('click', (event) => {
    
    if(event.target.classList.contains('open-module-pannel-button')){
        currentContainer = event.target.closest('div')
        $addModuleContainer.style.display = 'flex'
    }else if(event.target.id === 'close-add-module-pannel-button'){
        $addModuleContainer.style.display = 'none'
    }
    
    if(event.target.id === 'add-module-button'){
        const $moduleNameInput = document.querySelector('#module-name-input').value
        if(currentContainer.id === 'incomes-container'){
            incomes.push({name: $moduleNameInput})
        }else if(currentContainer.id === 'expenses-container'){
            expenses.push({name: $moduleNameInput, dataset: $moduleNameInput})
        }
        incomes.forEach(obj => {
            const module = createModule(obj.name)
            $incomesContainer.append(module)
        })
        expenses.forEach(obj => {
            const module = createModule(obj.name)
            $expensesContainer.append(module)
            const Pmodule = createPercentageModule(obj.name)
            $percentagesContainer.append(Pmodule)
        })
    }
    
})
