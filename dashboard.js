function initDashboard() {
    // Display the message "Conveyances for" along with the current date in long form
    const dateMessage = document.getElementById("dateMessage");
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    dateMessage.textContent = `Conveyances for ${formattedDate}`;

    // Add a click event listener to the "Enter a New Conveyance" button
    const newConveyanceButton = document.getElementById("newConveyanceButton");
    newConveyanceButton.addEventListener("click", displayNewConveyanceForm);
}

// Function to handle the click event for the "Enter a New Conveyance" button
function displayNewConveyanceForm() {
    // Create a form with 9 fields
    const form = document.createElement("form");
    form.id = "newConveyanceForm";

    const fieldNames = ["Date", "Number", "Payment Type", "Transfer Tax", "Conveyance Fee", "Name", "Name Custom", "Deputy", "Tax Year"];

    fieldNames.forEach(fieldName => {
        const label = document.createElement("label");
        label.textContent = `${fieldName}: `;

        if (fieldName === "Date") {
            // Automatically fill in the date and time
            const input = document.createElement("input");
            input.type = "text";
            input.value = new Date().toLocaleString(); // Current date and time
            input.disabled = true;
            form.appendChild(label);
            form.appendChild(input);
        } else if (fieldName === "Payment Type") {
            // Create a drop-down selector for Payment Type
            const select = document.createElement("select");
            select.name = "paymentType";
            const paymentOptions = ["Check", "Cash", "Credit"];
            paymentOptions.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            form.appendChild(label);
            form.appendChild(select);
        } else if (fieldName === "Deputy") {
            // Automatically fill in with the current user (assuming you have a user object)
            const input = document.createElement("input");
            input.type = "text";
            // Replace 'currentUser' with the actual object or mechanism to get the current user
            input.value = "John Doe"; // Replace with actual user data
            input.disabled = true;
            form.appendChild(label);
            form.appendChild(input);
        } else {
            // For other fields, create a regular text input
            const input = document.createElement("input");
            input.type = "text";
            input.name = fieldName.toLowerCase().replace(/\s/g, ''); // Convert field name to lowercase and remove spaces
            form.appendChild(label);
            form.appendChild(input);
        }

        form.appendChild(document.createElement("br"));
    });

    // Create a "Save" button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.type = "button"; // Prevents form submission for now, you can change it to "submit" if needed
    saveButton.addEventListener("click", saveConveyance);

    form.appendChild(saveButton);

    // Append the form to the container
    const container = document.querySelector(".container");
    container.innerHTML = ''; // Clear existing content
    container.appendChild(form);
}

// Function to handle the click event for the "Save" button
function saveConveyance() {
    // Add your logic here to save the conveyance data
    alert("Conveyance data saved!");
}

// Call the initialization function when the page loads
window.onload = function() {
    initDashboard();
    // Additional initialization code if needed
};
