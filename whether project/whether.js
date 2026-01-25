const BASE_URL="https://api.openweathermap.org/data/2.5";
const API_KEY="bab11adb04e51cf78a2a79e2720b22a0";
function searchHandel(){
    let search=document.querySelector(".js-search").value
    let city=search.trim();
    if (city==""){
        alert("Enter The valid city Name")
    }
    else{
        fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            document.getElementById('city').innerText=`City :${data.name}`
            document.getElementById('temp').innerText=`Temperature :${data.main.temp}`
            document.getElementById('desc').innerText=`Weather :${data.weather[0].description }` 
            document.getElementById('presure').innerHTML=`Pressure :${data.main.pressure}`
            document.getElementById('wind').innerText=`Wind Speed :${data.wind.speed}`            
        })
        .catch(err=>{console.log(err)})
    }
    
    
}



