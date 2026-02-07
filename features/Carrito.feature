# language: en
Feature: Agregar producto al carrito

  Como usuario estándar de Sauce Demo
  Quiero agregar un producto al carrito
  Para poder comprarlo más adelante

  Scenario: Usuario agrega un producto al carrito desde la página de productos
    Given que inicio sesión con "standard_user" y "secret_sauce"
    And estoy en la página de productos
    When agrego el producto "Sauce Labs Backpack" al carrito
    Then el producto "Sauce Labs Backpack" debe aparecer en el carrito
