const currentTime = () => { 
    let curTime = new Date().toLocaleTimeString();
    document.getElementById('clock').innerText = curTime;

    setTimeout(currentTime, 1000); //for getting time continously 
}
currentTime();
