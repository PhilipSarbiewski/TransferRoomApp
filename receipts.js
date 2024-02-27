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
        const label = document.createElement("label");
        label.textContent = `${fieldName}: `;

        const input = document.createElement("input");
        input.type = "text";
        input.name = fieldName.toLowerCase().replace(/\s/g, ''); // Convert field name to lowercase and remove spaces

        // Automatically fill in the date and time for the "Date" field
        if (fieldName === "Date") {
            input.value = new Date().toLocaleString(); // Current date and time
            input.disabled = true;
        }

        // Create a drop-down selector for the "Type" field
        if (fieldName === "Type") {
            const select = document.createElement("select");
            select.name = "type";
            const typeOptions = ["Copies", "CAUV", "CAUV Recoupment", "No Transfer Necessary", "Auditor Deed"];
            typeOptions.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            input.remove(); // Remove the text input for the "Type" field
            form.appendChild(label);
            form.appendChild(select);
        }

        // Create a drop-down selector for the "Payment Type" field
        if (fieldName === "Payment Type") {
            const select = document.createElement("select");
            select.name = "paymentType";
            const paymentOptions = ["Check", "Cash", "Credit"];
            paymentOptions.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            input.remove(); // Remove the text input for the "Payment Type" field
            form.appendChild(label);
            form.appendChild(select);
        }

        // Create a drop-down selector for the "Void" field
        if (fieldName === "Void") {
            const select = document.createElement("select");
            select.name = "voidStatus";
            const voidOptions = ["No", "Yes", "Unknown"];
            voidOptions.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            input.remove(); // Remove the text input for the "Void" field
            form.appendChild(label);
            form.appendChild(select);
        }

        // For other fields, add the regular text input
        if (fieldName !== "Type" && fieldName !== "Payment Type" && fieldName !== "Void") {
            form.appendChild(label);
            form.appendChild(input);
        }

        form.appendChild(document.createElement("br"));
    });

    // Create a "Save" button for the receipt form (modify as needed)
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Receipt";
    saveButton.type = "button"; // Prevents form submission for now, you can change it to "submit" if needed
    saveButton.addEventListener("click", saveReceipt);

    form.appendChild(saveButton);

    // Append the form to the container
    const container = document.querySelector(".container");
    container.innerHTML = ''; // Clear existing content
    container.appendChild(form);
}

// Function to handle the click event for the "Save Receipt" button
function saveReceipt() {
    // Add your logic here to save the receipt data
    alert("Receipt data saved!");
}

// Call the initialization function when the page loads
window.onload = function() {
    initReceipts();
    // Additional initialization code if needed
};
