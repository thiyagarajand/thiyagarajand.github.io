document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const messages = document.getElementById('messages');
 
    let step = 0;
    let userBookingDetails = {};
 
    sendBtn.addEventListener('click', function() {
        const userText = userInput.value.trim();
        if (userText !== "") {
            addMessage(userText, 'user');
            processUserInput(userText);
            userInput.value = "";
        }
    });
 
    function addMessage(text, sender) {
        const message = document.createElement('div');
        message.classList.add('message', sender);
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }
 
    function processUserInput(userText) {
        if (step === 0) {
            addMessage("Welcome to Akasa Air! Are you a new or existing customer?", 'bot');
            step++;
        } else if (step === 1) {
            userBookingDetails.customerType = userText;
            addMessage("Great! Where would you like to fly from and to?", 'bot');
            step++;
        } else if (step === 2) {
            userBookingDetails.route = userText;
            addMessage("Please provide your preferred flight timing (morning/afternoon/evening)?", 'bot');
            step++;
        } else if (step === 3) {
            userBookingDetails.timing = userText;
            addMessage("What is your seat preference (aisle/window)?", 'bot');
            step++;
        } else if (step === 4) {
            userBookingDetails.seatPreference = userText;
            addMessage("Any food preference (Vegans/vegetarian/non-vegetarian)?", 'bot');
            step++;
        } else if (step === 5) {
            userBookingDetails.foodPreference = userText;
            addMessage("Please provide the passenger details.", 'bot');
            step++;
        } else if (step === 6) {
            userBookingDetails.passengerDetails = userText;
            addMessage("Which class would you like to travel (economy/business)?", 'bot');
            step++;
        } else if (step === 7) {
            userBookingDetails.classPreference = userText;
            addMessage("How would you like to pay (UPI/cards/net banking)?", 'bot');
            step++;
        } else if (step === 8) {
            userBookingDetails.paymentMethod = userText;
            addMessage("Thank you! Redirecting you to the payment page...", 'bot');
            // Here, you'd normally handle the booking process and redirect to payment
            step++;
        } else {
            addMessage("Your booking details have been processed. Thank you for choosing Akasa Air!", 'bot');
        }
    }
 
    // Start the conversation automatically
    processUserInput('');
});