const celsiusEl =document.getElementById("celsius");
const fahrenhietEl =document.getElementById("fahrenhiet");
const kelvinEl =document.getElementById("kelvin");



function computeTemp(event){
    const currentvalue = +event.target.value

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentvalue + 273.32).toFixed(2)
            fahrenhietEl.value = (currentvalue * 1.8 + 32).toFixed(2)      
            break;
        case "fahrenhiet":
            celsiusEl.value = ((currentvalue - 32) / 1.8).toFixed(2)
            kelvinEl.value = ((currentvalue - 32) / 1.8 + 273.32).toFixed(2)      
            break;
        case "kelvin":
            celsiusEl.value = (currentvalue - 273.15)
            fahrenhietEl.value = ((currentvalue - 273.15)*1.8 +32 ).toFixed(2)      
            break;
    
        default:
            break;
    }
}