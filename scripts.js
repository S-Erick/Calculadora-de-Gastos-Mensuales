const addModuleContainer = document.getElementById('add-module-container')
const openModulePannelButton = document.querySelectorAll('.open-module-pannel-button')
let currentContainer = null

openModulePannelButton.forEach(button => {
    button.addEventListener('click', (event) => {
        addModuleContainer.style.display = 'flex'
        currentContainer = event.target.closest('.module-container-scroll')
    })
})

function createModuleFunction(name){
    const module = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const button = document.createElement('button')

    module.classList.add('module')
    module.id = name.toLowerCase().trim().replace(/\s+/g, '-')
    label.textContent = `${name}`
    input.classList.add('number-input')
    input.type = 'number'
    button.classList.add('delte-module-button')
    button.type = 'button'
    button.textContent = 'Del'

    label.appendChild(input)
    module.append(label)
    module.append(button)

    return module
}

const moduleNameInput = document.getElementById('module-name-input')

document.getElementById('add-module-pannel').addEventListener('click', (event) => {
    if(event.target.id === 'close-add-module-pannel-button'){
        addModuleContainer.style.display = 'none'
    }else if(event.target.id === 'add-module-button'){
        currentContainer.appendChild(createModuleFunction(moduleNameInput.value))
        addModuleContainer.style.display = 'none'
        moduleNameInput.value = ''
    }
})

document.getElementById('form').addEventListener('click', (event) => {
    if(event.target.classList.contains('delte-module-button')){
        event.target.closest('.module').remove()
    }
})

const incomesSpanResult = document.getElementById('incomes-span-result')
const expensesSpanResult = document.getElementById('expenses-span-result')
const totalSpanResult = document.getElementById('total-span-result')

document.getElementById('form').addEventListener('input', () => {
    let totalIncomes = 0
    let totalExpenses = 0
    document.querySelectorAll('.number-input').forEach( input => {
        const container = input.closest('.module-container-scroll')
        const value = Number(input.value) || 0

        if(container.id === 'incomes-container'){
            totalIncomes += value
        }else if(container.id = 'expenses-container'){
            totalExpenses += value
        }
    })
    incomesSpanResult.textContent = totalIncomes
    expensesSpanResult.textContent = totalExpenses
    totalSpanResult.textContent = incomesSpanResult.textContent - expensesSpanResult.textContent
})