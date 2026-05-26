const container = document.getElementById("container");
const requestbtn = document.getElementById("requestbtn")
requestbtn.addEventListener("click",() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://weather.tsukumijima.net/api/forecast/city/130010");
            const responseJson = await response.json();
            console.log(responseJson);
            
                const dataText = document.createElement("p");
                dataText.innerHTML = `
                <h1>${responseJson.title}</h1>
                <p>${responseJson.description.bodyText}</p>
                <p>${responseJson.bodytext}</p>
                <p>${responseJson.forecasts[0].date}</p>
                <p>${responseJson.forecasts[1].date}</p>
                <p>${responseJson.forecasts[2].date}</p>
                `
                container.appendChild(dataText);
                requestbtn.disabled = true;
        } catch (error) {
            console.log("エラーが発生しました!!",error)
        }
    }
    fetchData();
});
