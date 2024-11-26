const userInput = document.querySelector(".js-input");
const message = document.querySelector(".message");
const subscribeButton = document.querySelector(".js-button")
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

subscribeButton.addEventListener("click", () => {
    if(userInput.value !== "" && userInput.type === "email" && emailPattern.test(userInput.value) ){
        message.textContent = `Thanks for Subscring. 
        A confirmation message has been sent to ${userInput.value}`
        message.style.color = ""
    }
})