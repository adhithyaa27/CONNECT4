var nickname = document.getElementById('input')
var nickname2 = document.getElementById('input2')

var button =document.getElementById("letsplay")


button.onclick =()=>{
    let nickname1 = nickname.value
    window.localStorage.setItem('name',nickname1)
    let nickname3 = nickname2.value
    window.localStorage.setItem('name2',nickname3)

}



var letsplay = document.querySelector('#letsplay')
    
letsplay.addEventListener('click', ()=>{
        window.location.href='gamepage.html'
})
console.log("working")

