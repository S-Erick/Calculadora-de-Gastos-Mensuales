const openModulePannelButton = document.querySelectorAll('.open-module-pannel-button')
const addModuleContainer = document.getElementById('add-module-container')
const moduleNameInput = document.getElementById('module-name-input') 

function createModule (name){
    const module = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const deleteButton = document.createElement('button')
    
    module.classList.add('module')
    module.id = name.toLowerCase().replace(/\s+/g, '-')
    label.textContent = `${name}`
    input.classList.add('number-input')
    input.type = 'number'
    deleteButton.type = 'button'
    deleteButton.classList.add('delte-module-button')
    deleteButton.textContent = 'Del'
    
    label.appendChild(input)
    label.appendChild(deleteButton)
    module.appendChild(label)
    
    return module
}

const addModuleButton = document.getElementById('add-module-button')

openModulePannelButton.forEach(button => {
    button.addEventListener('click', () => {
        addModuleContainer.style.display = 'flex'
        
        const container = button.closest('.module-container-scroll')
        
        addModuleButton.onclick = () => {
            container.appendChild(createModule(moduleNameInput.value))
            addModuleContainer.style.display = 'none'
        }
    })
})

const closeAddModulePannelButton = document.getElementById('close-add-module-pannel-button')

closeAddModulePannelButton.addEventListener('click', () => {
    addModuleContainer.style.display = 'none'
})

document.getElementById('inputs-container').addEventListener('click', (event) => {
    if(event.target.classList.contains('delte-module-button')){
        event.target.closest('.module').remove()
    }
})




