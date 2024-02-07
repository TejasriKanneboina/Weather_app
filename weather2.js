const container = document.querySelector('.container');
const search = document.querySelector('.searchbox button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = '03286361fdd5c573c6ed2b2fff3db28e';
    const city = document.querySelector('.searchbox input').value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-box .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'https://cdn.pixabay.com/photo/2012/04/10/16/49/sun-26344_1280.png';
                    break;
                case 'Rain':
                    image.src = 'https://static.vecteezy.com/system/resources/previews/012/098/044/original/illustration-of-heavy-rain-cloudy-weather-with-cartoon-animation-style-rainy-scenery-background-free-vector.jpg';
                    break;
                case 'Snow':
                    image.src = 'https://clipartcraft.com/images/snow-clipart-4.png';
                    break;
                case 'Clouds':
                    image.src = 'https://th.bing.com/th/id/OIP.wYxm9_pygf5rAIhW0Pb7bAHaGL?rs=1&pid=ImgDetMain';
                    break;
                case 'Mist':
                    image.src = 'https://cdn1.iconfinder.com/data/icons/weather-filled-9/614/12_-_Mist-1024.png';
                    break;
                case 'Haze':
                    image.src = 'https://cdn-icons-png.flaticon.com/512/1779/1779807.png';
                    break;
                default:
                    image.src = 'https://th.bing.com/th/id/R.bd7a307027816e155fe5e4bda4d1ecbc?rik=b7awAPDIKWXcFQ&riu=http%3a%2f%2fclipart-library.com%2fnewhp%2fSun_with_Clouds_Transparent_PNG_Picture.png&ehk=dymyEyAgDI8F6gfjCS3pQYm2hRhSgatigVfvopKgkcU%3d&risl=&pid=ImgRaw&r=0';
            }
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`; // Corrected wind speed unit
        });
});
