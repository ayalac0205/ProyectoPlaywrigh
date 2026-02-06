# language: es
Característica: Inicio de sesión en Sauce Demo

  Escenario: Inicio de sesión con credenciales válidas
    Dado que abro la página de inicio de sesión
    Cuando inicio sesión con "standard_user" y "secret_sauce"
    Entonces debo ver la página de productos

  Escenario: Inicio de sesión con credenciales inválidas
    Dado que abro la página de inicio de sesión
    Cuando inicio sesión con "locked_out_user" y "wrong_password"
    Entonces debo ver un mensaje de error
