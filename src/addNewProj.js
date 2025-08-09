import loadAllProjects from "."
import "./styles/newproj.css"

function addNewProj() {
    const content = document.getElementById("content")

    const projDialog = document.createElement("dialog")
    projDialog.className = "proj-dialog"

    const projform = document.createElement("form")
    projform.className = "proj-form"
    projform.method = "dialog"

    const formHeading = document.createElement("span")
    formHeading.className = "form-heading"
    formHeading.innerHTML = "Add New Project"

    const inputSect = document.createElement("div")
    inputSect.className = "input-section"

    const inputLabel = document.createElement("label")
    inputLabel.className = "form-label"
    inputLabel.htmlFor = "projName"
    inputLabel.innerHTML = "PROJECT NAME"

    const newprojName = document.createElement("input")
    newprojName.type = "text"
    newprojName.id = "projName"
    newprojName.required = true
    newprojName.placeholder = "Enter project name...."

    inputSect.appendChild(inputLabel)
    inputSect.appendChild(newprojName)

    const submit = document.createElement("button")
    submit.textContent = "Submit"
    submit.className = "form-btn"
    submit.id = "submit"

    projform.appendChild(formHeading)
    projform.appendChild(inputSect)
    projform.appendChild(submit)

    projDialog.appendChild(projform)

    content.appendChild(projDialog)

    projDialog.showModal()

    projform.addEventListener("submit", (e) => {
        e.preventDefault()
        const inputVal = newprojName.value.trim()
        projDialog.close()

        let storedProjs = JSON.parse(localStorage.getItem("projects"))
        storedProjs.push(inputVal)
        localStorage.setItem("projects", JSON.stringify(storedProjs))
        
        localStorage.setItem(inputVal, JSON.stringify([]))
        loadAllProjects()
    })
}

export default addNewProj