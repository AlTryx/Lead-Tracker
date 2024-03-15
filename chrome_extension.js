let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage          // ensure-va kogato refreshna stranicata da se zapazqt linkovete(leadovete)
  renderLeads()
}


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""


  localStorage.setItem("myLeads", JSON.stringify(myLeads))

  renderLeads()

  console.log(localStorage.getItem("myLeads"))
})


function renderLeads() {
  let listItems = ""

  for (let i = 0; i < myLeads.length; i++) {

    listItems += `<li> 
      <a href = '${myLeads[i]}', target = '_blank'>  ${myLeads[i]}  </a>
      </li>`

  }

  ulEl.innerHTML = listItems
}