// your code here
let body = document.querySelector("body")
let h3 = document.createElement("h3")
let form = document.createElement("form")
let input = document.createElement("input")
let btn = document.createElement("button")
let input1 = input.cloneNode()
let br = document.createElement("br")
let br1 = br.cloneNode()
input.setAttribute("id","name")
input.setAttribute("name","name")
input1.setAttribute("id","year")
input1.setAttribute("name","year")
input1.setAttribute("type","number")
input1.setAttribute("min","1995")
input1.setAttribute("max","2025")
form.style.border = "1px solid red"
form.style.height = "200px"
h3.textContent = "https://localhost:8080/"
h3.setAttribute("id","url")
body.appendChild(h3)
form.appendChild(input)
form.appendChild(br)
form.appendChild(input1)
form.appendChild(br1)
form.appendChild(btn)
body.appendChild(form)
btn.textContent = "Submit"
btn.setAttribute("id","button")
btn.addEventListener("click",(e)=>{
	e.preventDefault()
	let value1 = input.value
	let value2 = input1.value
	if(value1 && value2){
		h3.textContent = "https://localhost:8080/?name="+value1+"&"+"year="+value2
	}else if(value1){
		h3.textContent = "https://localhost:8080/?name="+value1
	}else if(value2){
		h3.textContent = "https://localhost:8080/?year="+value2
	}else{
		h3.textContent = "https://localhost:8080/"
	}
})
console.log(form)