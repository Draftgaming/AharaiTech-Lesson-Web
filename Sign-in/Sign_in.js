window.onload = function() {
    const codeInput = document.getElementById('code');
    const passwordInput = document.getElementById('password');
    const continueButton = document.getElementById('continue-btn');
    
    // Function to enable the Continue button when both fields are valid
    function validateInputs() {
        const isCodeValid = codeInput.value.length === 9;
        const isPasswordValid = passwordInput.value.length >= 6; // Example password length validation
        
        continueButton.disabled = !(isCodeValid && isPasswordValid);
    }
    
    // Add event listeners to inputs
    codeInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);
}