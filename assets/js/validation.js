document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const inputBoxes = form.querySelectorAll(".input-box");
        let isValid = true;

        inputBoxes.forEach(function(inputBox) {
            const input = inputBox.querySelector("input[type='text']");
            const inputValue = input.value.trim();
            
            // Check if input is empty
            if (inputValue === "") {
                isValid = false;
                inputBox.classList.add("error");
            } else {
                inputBox.classList.remove("error");
            }

            // Validate email format
            if (input.getAttribute("placeholder").toLowerCase().includes("email")) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(inputValue)) {
                    isValid = false;
                    inputBox.classList.add("error");
                }
            }

            // Validate phone number format (10 digits)
            if (input.getAttribute("placeholder").toLowerCase().includes("phone")) {
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(inputValue)) {
                    isValid = false;
                    inputBox.classList.add("error");
                }
            }

            // Validate budget (price in Indian system)
            
            // Validate deadline (date format)
            
        });

        if (isValid) {
            alert("Form submitted successfully!");
            // You can add additional logic here to submit the form data
        } else {
            alert("Please fill out all the required fields correctly.");
        }
    });
});
