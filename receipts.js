function initReceipts() {
    // Display the message "Receipts for" along with the current date in long form
    const dateMessage = document.getElementById("dateMessage");
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    dateMessage.textContent = `Receipts for ${formattedDate}`;



    // Add a click event listener to the "Enter a New Receipt" button
    const newReceiptButton = document.getElementById("newReceiptButton");
    newReceiptButton.addEventListener("click", displayNewReceiptForm);
}

// Function to handle the click event for the "Enter a New Receipt" button
function displayNewReceiptForm() {
    // Create a form with 12 fields
    const form = document.createElement("form");
    form.id = "newReceiptForm";

    const fieldNames = ["Date", "Deputy", "Type", "CAUV", "Quantity", "Price", "Payment Type", "Check Number", "Name", "Name Custom", "Void", "Receipt Number"];

    fieldNames.forEach(fieldName => {
        const container = document.createElement("div");
		
        const label = document.createElement("label");
        label.textContent = `${fieldName}: `;


        if (fieldName === "Date") {
            // Automatically fill in the date and time
            const input = document.createElement("input");
            input.type = "text";
            input.value = new Date().toLocaleString(); // Current date and time
            input.disabled = true;
            container.appendChild(label);
            container.appendChild(input);
        } else if (fieldName === "Deputy") {
            // Automatically fill in with the current user (assuming you have a user object)
            const input = document.createElement("input");
            input.type = "text";
            // Replace 'currentUser' with the actual object or mechanism to get the current user
            input.value = "John Doe"; // Replace with actual user data
            input.disabled = true;
            container.appendChild(label);
            container.appendChild(input);
        } else if (fieldName === "Type") {
            // Create a drop-down selector for the "Type" field
            const select = document.createElement("select");
			select.name = "Type";
			const typeOptions = ["Copies", "CAUV", "CAUV Recoupment", "No Transfer Necessary", "Auditor Deed"];
            typeOptions.forEach(option => {
				const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
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
            container.appendChild(label);
            container.appendChild(select);
        } else if (fieldName === "Void") {
            // Create a drop-down selector for Payment Type
            const select = document.createElement("select");
            select.name = "paymentType";
            const paymentOptions = ["No", "Yes", "Unknown"];
            paymentOptions.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            container.appendChild(label);
            container.appendChild(select);
        } else {
            // For other fields, create a regular text input
            const input = document.createElement("input");
            input.type = "text";
            input.name = fieldName.toLowerCase().replace(/\s/g, ''); // Convert field name to lowercase and remove spaces
            container.appendChild(label);
            container.appendChild(input);
        }

        form.appendChild(container);
        form.appendChild(document.createElement("br"));
    });

    // Create a "Save" button for the receipt form (modify as needed)
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Receipt";
    saveButton.type = "button"; // Prevents form submission for now, you can change it to "submit" if needed
    saveButton.addEventListener("click", saveReceipt);

    form.appendChild(saveButton);

    // Append the form to the container
    const container = document.querySelector(".receipts-container");
    container.innerHTML = ''; // Clear existing content
    container.appendChild(form);
	
	container.style.display = 'block';
}

// Function to handle the click event for the "Save Receipt" button
function saveReceipt() {
    // Add your logic here to save the receipt data
    alert("Receipt data saved!");
}

// Function to create a text input field
function createInputField(type, value, disabled) {
    const input = document.createElement("input");
    input.type = type;
    input.value = value;
    input.disabled = disabled;
    return input;
}

// Function to create a drop-down selector
function createSelectField(name, options) {
    const select = document.createElement("select");
    select.name = name;
    
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });

    return select;
}

// Call the initialization function when the page loads
window.onload = function() {
    initReceipts();
    // Additional initialization code if needed
};
