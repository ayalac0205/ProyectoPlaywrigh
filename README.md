CLONAR E IR RAMA DEVELOP DONDE SE VEN TODO LOS CAMBIOS
# Proyecto de Automatización E2E con Cucumber + Playwright

## Descripción

Este proyecto contiene pruebas automatizadas End‑to‑End escritas en **Gherkin** usando **Cucumber.js** y **Playwright**.
Se validan flujos básicos de la aplicación *Sauce Demo* como:

* Inicio de sesión
* Visualización de productos
* Agregar productos al carrito
* Compra completa

---

## Tecnologías usadas

* **Node.js**
* **Cucumber.js** (BDD)
* **Playwright** (automatización UI)
* **Gherkin** (Given / When / Then)
* **HTML Report** (reporte simple)

---

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

---

## Ejecución de pruebas

Ejecutar todos los escenarios:

```bash
npx cucumber-js
```

O de forma explícita:

```bash
npx cucumber-js "features/**/*.feature" --require "features/steps/**/*.js" --require "features/hooks/**/*.js" --format json:reports/report.json
node generate-report.js
```

---

## Reportes

Después de la ejecución se genera un reporte HTML en:

```
/reports/report.html
-----------------
OTRA OPCION DIRECTA
Screenshots
```

Abrir el archivo en el navegador para ver:

* Features
* Scenarios
* Steps
* Tiempos de ejecución
* Estado (passed / failed)

---

## Estructura del proyecto

```
features/
 ├── hooks/        # Hooks (Before / After)
 ├── steps/        # Step Definitions
 ├── *.feature     # Escenarios Gherkin
reports/            # Reporte HTML
package.json
```

---

## Hooks

Los hooks se usan para:

* Inicializar el navegador antes del escenario
* Cerrar el navegador al finalizar

Ejemplo:

```js
Before(async () => { /* setup */ })
After(async () => { /* teardown */ })
```

---

## Buenas prácticas aplicadas

* BDD con Gherkin
* Separación de features y steps
* Hooks centralizados
* Escenarios claros y reutilizables

---

## Autor

brandon
