# language: en
Feature: Compra en Sauce Demo

  Scenario: Usuario estándar completa una compra
    Given que inicio sesión con "standard_user" y "secret_sauce"
    When agrego un producto al carrito
    And voy al carrito
    Then debo ver el producto en el carrito
    When completo la compra
    Then debo ver la confirmación