// var dateNow = new Date()
// console.log(dateNow)
// function fun(){
//     alert("Akif")
// }
// function checkAddress(fieldId) 
// {
//     if (document.getElementById(fieldId).value === "") 
//     {  alert("Email address required."); }
// }
// if (document.getElementById('email').value === "") 
//     {  alert("Email address required."); }




                //  (important) for automatically enter value according to one field to other
// function filled(){
//     var zipcheck = document.getElementById("zip").value
//     var cityName=''
//     switch(zipcheck){
//         case("60608"):
//             cityName = "chicago"
//             break;
//         case("16421"):
//             cityName = "Rawalpindi"
//             break;
//     } 
//     document.getElementById("city").value = cityName;
// }
function display(no)
{
    document.getElementById("view").value += no
}
function clr(){
    document.getElementById("view").value = " "
}
function bck(){
    let rm = document.getElementById("view")
    let newRm = rm.value.slice(0,-1)
    rm.value = newRm
}
function eql(){
    let result = document.getElementById("view")
    result.value = eval(result.value)
}