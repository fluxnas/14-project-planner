//================//
// 	  PARTIE 1
//================//
// Allow user to create tasks. Tasks should have a name, a description and a due date
// Allow users to label their tasks with a status (ex: to do, doing, done)

const createTask = document.querySelector(".add-button")
const tasks = document.querySelector(".tasks")
const now = new Date()
const day = document.querySelector(".day")
const month = document.querySelector(".month")
const year = document.querySelector(".year")


createTask.addEventListener("click", () => {

	//creer element cart (task) & relier a la div tasks
	const divCart = document.createElement("div")
	tasks.appendChild(divCart)
	divCart.classList.add("cart")

//NAME
	// creer element carName & relier a divCart
	const cartName = document.createElement("h3")
	divCart.appendChild(cartName)
	// recup la valeur de l'input et le faire apparaitre
	cartName.innerHTML = "Task name : " + document.querySelector(".new-task").value

// DESCRIPTION
	// creer element carName & relier a divCart
	const cartDescription = document.createElement("p")
	divCart.appendChild(cartDescription)
	// recup la valeur de l'input et le faire apparaitre
	cartDescription.innerHTML = "Task description : " + document.querySelector(".description-task").value

// // DATE 
	// // creer element carName & relier a divCart
	// const cartTime = document.createElement("p")
	// divCart.appendChild(cartTime)
	// // recup la valeur de l'input et le faire apparaitre
	// let date = document.querySelector('input[type="date"]')
	// console.log(date.value)

	const cartTime = document.createElement("p")
	divCart.appendChild(cartTime)
	let date = document.querySelector('input[type="date"]')
	cartTime.innerHTML = "End date task : " + date.value

// STATE
	// creer element carName & relier a divCart
	const cartState = document.createElement("p")
	divCart.appendChild(cartState)
	// recup la valeur de l'input et le faire apparaitre
	cartState.innerHTML = "State : " + document.querySelector(".state-task").options[document.querySelector(".state-task").selectedIndex].text



//================//
// 	  PARTIE 2
//================//
// Display the tasks, with their remaining time. 
// For instance, if today is the 15th of March and the task is due for the 20th of March, display in 5 days.

const cartDateCreation = document.createElement("p")
divCart.appendChild(cartDateCreation)
cartDateCreation.innerHTML = "Creation date of task : " + now


const cartRemainTime = document.querySelector("p")
divCart.appendChild(cartRemainTime)

function refresh() {

const tabDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
day.textContent = tabDay[now.getDay()]
const tabMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
month.textContent = tabMonth[now.getMonth()]
year.textContent = now.getFullYear()


}




cartRemainTime.innerHTML = "Remain Time : "

})












