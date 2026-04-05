// 1. Initialize Supabase
const SUPABASE_URL = 'https://tddylpcsyjptiumolwss.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZHlscGNzeWpwdGl1bW9sd3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMDI3OTcsImV4cCI6MjA4OTc3ODc5N30.3zKdY1WxPrPKCeEDzANvfGd22wudHaUZbMyhS-5r7EI';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2. Grab the elements from your footer
const form = document.getElementById('supabase-signup-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const submitBtn = document.getElementById('submit-btn');
const statusMessage = document.getElementById('status-message');

// 3. Handle the submission
form.addEventListener('submit', async function(event) {
    event.preventDefault(); 
        
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
        
    // Show loading state
    submitBtn.textContent = 'Saving...';
    submitBtn.disabled = true;
    statusMessage.textContent = '';

    // 4. Send both Name and Email to Supabase
    const { data, error } = await supabase
    .from('subscribers')
    .insert([
        { name: nameValue, email: emailValue }
    ]);

    // 5. Display the result
    if (error) {
        console.error('Error saving data:', error);
        statusMessage.style.color = '#ff4d4d'; // Red text for errors
        statusMessage.textContent = 'Something went wrong. Please try again.';
    } else {
        statusMessage.style.color = '#4CAF50'; // Green text for success
        statusMessage.textContent = 'Success! You are on the list.';
        form.reset(); // Clear the inputs
    }
        
    // Reset the button
    submitBtn.textContent = 'Subscribe';
    submitBtn.disabled = false;
});