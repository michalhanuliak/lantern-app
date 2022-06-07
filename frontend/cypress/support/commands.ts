/// <reference types="cypress" />

import { DEVICE_TABLE_BODY } from './PageObject/DevicePage.po';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('validateTableItems', (expectedCount: number) => {
  cy.get(DEVICE_TABLE_BODY).children().should('have.length', expectedCount);
});

Cypress.Commands.add('getRemoveButton', (deviceId: number) => {
  cy.get(`[data-cy="deviceRemoveButton-${deviceId}"]`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      validateTableItems(expectedCount: number): Chainable<void>;
      getRemoveButton(deviceId: number): Chainable<void>;
    }
  }
}
