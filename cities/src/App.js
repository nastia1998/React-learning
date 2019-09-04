import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "94aa5b18b4610ecc3d8cdd0f12e70767";

class App extends React.Component {

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await 
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`);
        const data = await api_url.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                <Info />
                <Form weather={this.getWeather} />
                <Weather />
            </div>
        );
    }
}

export default App;