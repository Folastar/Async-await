// Function to simulate a delay of 1 second
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async function to iterate with a delay
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    await delay(1000); // Wait for 1 second
    console.log(value); // Log each value with a delay
  }
}

// Example usage:
const values = ['apple', 'banana', 'cherry', 'date'];
console.log(iterateWithAsyncAwait(values));


// Simulating an API call with a delay
const simulateApiCall = () => new Promise((resolve) =>
    setTimeout(() => resolve('Fetched data from API!'), 2000)
  );
  
  async function awaitCall() {
    try {
      console.log('Fetching data...');
      const data = await simulateApiCall(); // Await the simulated API call
      console.log('API Response:', data);  // Log the response
    } catch (error) {
      console.error('Error fetching data:', error); // Handle any potential errors
    }
  }
  
  // Example usage:
  console.log(awaitCall());


  // Simulating an API call that may fail
const simulateApiCallWithError = () => new Promise((_, reject) =>
    setTimeout(() => reject('API call failed!'), 2000)
  );
  
  async function awaitCall() {
    try {
      console.log('Fetching data...');
      const data = await simulateApiCallWithError(); // Await the API call
      console.log('API Response:', data);  // Log the response
    } catch (error) {
      console.error('Something went wrong, please try again later.'); // User-friendly error message
      console.error('Error:', error); // Log the actual error message for debugging
    }
  }
  
  console.log(awaitCall())
  
  
  


