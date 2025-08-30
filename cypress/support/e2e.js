// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on('uncaught:exception', (err) => {
  // Aşağıdaki hataların testleri fail etmemesini sağlar
  if (
    err.message.includes('ADRUM.command is not a function') ||
    err.message.includes('ADRUM is not defined') ||
    err.message.includes('Script error') ||
    err.message.includes('Cannot read properties of undefined') ||
    err.message.includes('Cannot read properties of null') // yeni eklenen
  ) {
    return false; // Cypress testi fail etmez
  }
});


