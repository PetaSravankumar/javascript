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
            if (data.cod!==200){
                alert(data.message);
                return
            }
            console.log(data);
            document.getElementById('city').innerText=`City :${data.name}`
            document.getElementById('temp').innerText=`Temperature :${data.main.temp} °C`
            document.getElementById('desc').innerText=`Weather :${data.weather[0].description }` 
            document.getElementById('presure').innerHTML=`Pressure :${data.main.pressure} hPa`
            document.getElementById('wind').innerText=`Wind Speed :${data.wind.speed} m/s`  
            document.getElementById("weather-card").style.display = "block";
            document.querySelector(".js-search").value=""

            searchbackground(data.weather[0].main)
          
        })
        .catch(err=>{console.log(err)})
    }
}

document.querySelector('.js-search').addEventListener("keydown",function(e){
    if(e.key==='Enter'){
        searchHandel()
    }
})
function searchbackground(weatherdata){
    let parent=document.querySelector(".parent")
    switch (weatherdata) {
        case "Clear":
            parent.style.backgroundImage="url('')"
            break;
    
        default:
            break;
    }
}




