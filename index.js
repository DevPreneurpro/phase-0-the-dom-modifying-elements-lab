// Import the helper functions if they exist
if (typeof require !== 'undefined') {
    require('./helpers.js');
  }
  
  // Define the function that manipulates the DOM
  function manipulateDOM() {
    const main = document.querySelector('main#main');
    main.remove();
  
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.innerHTML = 'YOUR-NAME is the champion';
  
    document.body.appendChild(newHeader);
  
    return newHeader; // return the newHeader element
  }
  
  // Run the function and update the DOM
  const newHeader = manipulateDOM();
  
  // Export the newHeader variable for testing purposes
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = newHeader;
  }
  
  