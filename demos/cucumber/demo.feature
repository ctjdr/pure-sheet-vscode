@Version_1.1

Feature: Customer pays the price

  Background:

    Given A customer is signed in to the shop

  Scenario: Customer checkout

    Given The customer has a shopping cart full of items
      | Item           | Quantity   | Price per item  |
      | Suitecase      | 2          | 49.99           |

    And The customer goes for 24h delivery

    When The customer acknowledged the purchase

    Then The customer's account is decreased by "139.98"
