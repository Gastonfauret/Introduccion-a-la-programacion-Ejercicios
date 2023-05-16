let i = 10;
function countDown() {
    const interval = setInterval(() => {
        if(i === 0) {
            clearInterval(interval);
            console.log("Booom!");        
    } else {
        console.log(`La Bomba Explotara en ${i}`);
        i--;
    }}, 1000)
}

function startCountDown() {
    setTimeout(() => countDown(), 5000);
}

startCountDown();





