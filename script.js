const userInput = document.querySelector(".js-input");
const message = document.querySelector(".message");
const subscribeButton = document.querySelector(".js-button")
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

subscribeButton.addEventListener("click", () => {
    if(userInput.value !== "" && userInput.type === "email" && emailPattern.test(userInput.value) ){
        message.textContent = `Thanks for Subscribing.\nA confirmation message has been sent to ${userInput.value}`
        message.style.color = "hsl(322, 100%, 66%)"
        message.style.width = "55%"
    }

    else{
        message.textContent = "Check your email please";
        message.style.color = "hsl(0, 100%, 63%)"
        userInput.style.border = "2px solid hsl(0, 100%, 63%)"
    }
})