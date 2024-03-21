let myLeads = []
let oldLeads = []
let index;
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
const deleteUl = document.getElementById("delete-ul")

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage       
  render(myLeads)
}                                                     // ne barai

tabBtn.addEventListener("click", function(){

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  })
  
 
})                                                      // ne barai




function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li> 
        <a href="${leads[i]}" target="_blank">${leads[i]}</a>
        <button class="delete-ul">&#x1F5D1️</button>
      </li>`;
  }

  ulEl.innerHTML = listItems;

  // Event listener for delete buttons
  const deleteButtons = document.querySelectorAll('.delete-ul');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const listItem = button.parentElement;
      const deletedURL = listItem.querySelector('a').getAttribute('href');
      myLeads = myLeads.filter(url => url !== deletedURL);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      listItem.remove();
    });
  });
}



deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})







  



// when something is pushed into the array -> add Delete button in <li> or In the array (make it a button)"🗑️"
// when delete all button is clicked -> delete button in <li> (basically everything)

// 1. When saved input -> push <button id ="delete-ul">&#x1F5D1️</button> in HTML code and "🗑️" in the array and in the list and IN LOCAL STORAGE!!!
// 2. When the Delete All button is clicked -> REMOVE it from the array and clear() from local storage too
