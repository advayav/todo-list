import loadAllTodoItems from "./alltodos"

function addNewTodo() {
    const content = document.getElementById("content")
    
    const projDialog = document.createElement("dialog")
    projDialog.className = "proj-dialog"
    
    const projform = document.createElement("form")
    projform.className = "proj-form"
    projform.method = "dialog"
    
    const inputLabel = document.createElement("label")
    inputLabel.className = "form-label"
    inputLabel.htmlFor = "todoName"
    inputLabel.innerHTML = "TO DO NAME"
    
    const newtodoName = document.createElement("input")
    newtodoName.type = "text"
    newtodoName.id = "todoName"
    newtodoName.required = true

    const projLabel = document.createElement("label")
    projLabel.htmlFor = "projName"
    projLabel.className = "form-label"
    projLabel.innerHTML = "PROJECT NAME"

    const submit = document.createElement("button")
    submit.textContent = "Submit"
    submit.className = "form-btn"
    submit.id = "submit"

    projform.appendChild(inputLabel)
    projform.appendChild(newtodoName)
    projform.appendChild(projLabel)

    const projects = JSON.parse(localStorage.getItem("projects"))

    for (let i = 0; i < projects.length; i++) {
        const projOption = document.createElement("input")
        
        projOption.type = "radio"
        projOption.innerHTML = projects[i]
        projOption.name = "proj-option"

        const optionLabel = document.createElement("label")
        optionLabel.innerHTML = projects[i]

        projform.appendChild(optionLabel)
        projform.appendChild(projOption)
        
    }

    projform.appendChild(submit)

    projDialog.appendChild(projform)

    content.appendChild(projDialog)

    projDialog.showModal()

    projform.addEventListener("submit", (e) => {
        e.preventDefault()
        const inputVal = newtodoName.value.trim()
        projDialog.close()

        const projName = document.querySelector('input[name="proj-option"]:checked')?.value

        let storedTodos = JSON.parse(localStorage.getItem(projName))
        storedTodos.push(inputVal)
        localStorage.setItem(projName, JSON.stringify(storedTodos))
        loadAllTodoItems(projName)        
    })
    
}

export default addNewTodo