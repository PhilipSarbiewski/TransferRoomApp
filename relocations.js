document.addEventListener('DOMContentLoaded', function () {
    // Function to create the relocation form
    function createRelocationForm() {
        // Your logic to dynamically create the form goes here
        const relocationForm = document.createElement('form');

        // List of fields
        const fields = [
            'Date', 'Deputy', 'MHRegNumber', 'RelocationFee', 'RelocationOwner',
            'RelocationAddress', 'RelocationCounty', 'PaymentType', 'CheckNum',
            'Name', 'NameCustom', 'Void'
        ];

        // Create form elements for each field
        fields.forEach(fieldName => {
            const label = document.createElement('label');
            label.textContent = fieldName;

            const input = document.createElement('input');
            input.type = 'text';
            input.name = fieldName;

            // If it's the 'Date' field, set the current date and time
            if (fieldName === 'Date') {
                input.value = getCurrentDateTime();
            }

            // If it's the 'PaymentType' field, create a dropdown
            if (fieldName === 'PaymentType') {
                const selectPaymentType = document.createElement('select');
                selectPaymentType.name = 'PaymentType';

                const paymentTypes = ['Check', 'Cash', 'Credit'];
                paymentTypes.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.text = option;
                    selectPaymentType.appendChild(optionElement);
                });

                relocationForm.appendChild(label);
                relocationForm.appendChild(selectPaymentType);
            } else {
                relocationForm.appendChild(label);
                relocationForm.appendChild(input);
            }
        });

        // Append the form to the container or wherever you want to add it
        const formContainer = document.querySelector('.container');
        formContainer.appendChild(relocationForm);

        // For demonstration, let's log a message
        console.log('Relocation form created!');
    }

    // Function to get the current date and time
    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // Selecting the button
    const newRelocationButton = document.getElementById('newRelocationButton');

    // Adding a click event listener to the button
    newRelocationButton.addEventListener('click', function () {
        createRelocationForm();
    });
});
