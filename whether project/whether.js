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
            
            document.getElementById('city').innerText=data.name
            document.getElementById('temp').innerText=data.main.temp
            document.getElementById('desc').innerText=data.weather[0].description           
            
        })
        .catch(err=>{console.log(err)})
    }
    
    
}



