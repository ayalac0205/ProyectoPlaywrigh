# language: en
Feature: Inicio de sesión y página de productos

  Scenario: Inicio de sesión exitoso muestra la página de productos
    Given que abro la página de inicio de sesión
    When inicio sesión con "standard_user" y "secret_sauce"
    Then debo ver la página de productos

  Scenario: Inicio de sesión fallido muestra mensaje de error
    Given que abro la página de inicio de sesión
    When inicio sesión con "locked_out_user" y "wrong_password"
    Then debo ver un mensaje de error
