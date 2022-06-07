/// <reference types="cypress" />

import {
  DEVICE_ADD_BUTTON,
  INPUTS,
  LOADING_SPINNER,
} from '../support/PageObject/DevicePage.po';

describe('Device page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('devicePage').then((deviceJson) => {
      cy.intercept(
        'GET',
        deviceJson.apiUrl.device,
        deviceJson.mockData.deviceList,
      );
    });
  });

  it('show loading spinner', () => {
    cy.get(LOADING_SPINNER).should('exist');
  });

  it('show correct data', () => {
    cy.fixture('devicePage').then((deviceJson) => {
      cy.validateTableItems(deviceJson.mockData.deviceList.results.length);
    });
  });

  it('add device', () => {
    cy.get(DEVICE_ADD_BUTTON).click();
    cy.fixture('devicePage').then((deviceJson) => {
      cy.intercept('POST', deviceJson.apiUrl.device, {}).as('newDeviceRequest');
      cy.get(INPUTS.NAME).type(deviceJson.mockData.newDeviceData.name);
      cy.get(INPUTS.ISO_CODE).type(
        deviceJson.mockData.newDeviceData.countryIsoCode,
      );
      cy.get(INPUTS.SUBMIT_BUTTON).click();
      // check if POST request fired, but we dont want to add device in test
      cy.wait('@newDeviceRequest').its('response.statusCode').should('eq', 200);
    });
  });

  it('not add device without filled inputs', () => {
    cy.get(DEVICE_ADD_BUTTON).click();
    cy.get(INPUTS.SUBMIT_BUTTON).should('be.disabled');
  });

  it('remove device', () => {
    const buttonToRemoveIndex = 1;

    cy.fixture('devicePage').then((deviceJson) => {
      cy.intercept(
        'DELETE',
        `${deviceJson.apiUrl.device}/${buttonToRemoveIndex}`,
        {},
      ).as('deleteDeviceRequest');

      cy.getRemoveButton(buttonToRemoveIndex).click();
      // check if DELETE request fired, but we dont want to remove device in test
      cy.wait('@deleteDeviceRequest')
        .its('response.statusCode')
        .should('eq', 200);
    });
  });

  // TODO: Implement other tests
  it.skip('sort by name', () => {});

  it.skip('sort by device OS', () => {});

  it.skip('sort by country code', () => {});

  it.skip('modal can be closed', () => {});
});
