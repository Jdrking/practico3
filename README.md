# Juego de Piedra, Papel o Tijeras en React

Este es un juego de "Piedra, Papel o Tijeras" implementado en React, que te permite competir contra la computadora en una serie de rondas. A continuación, se detalla la estructura y funcionamiento de la aplicación.

## Contenido

1. [Tecnologías Utilizadas](#tecnologías-utilizadas)
2. [Estructura de Directorios](#estructura-de-directorios)
3. [Componentes](#componentes)
4. [Funciones Principales](#funciones-principales)
5. [Manejo de Errores](#manejo-de-errores)
6. [Soluciones Implementadas](#soluciones-implementadas)
7. [Instrucciones para la Ejecución Local](#instrucciones-para-la-ejecución-local)
8. [Capturas de Pantalla](#capturas-de-pantalla)
9. [Licencia](#licencia)

## Tecnologías Utilizadas

La aplicación está construida utilizando las siguientes tecnologías:

- **React**: Se utiliza como el marco de desarrollo frontend para crear componentes reutilizables y gestionar el estado de la aplicación.

- **styled-components**: Una biblioteca de estilos CSS en línea para aplicar estilos a los componentes de React de manera sencilla y efectiva.

- **JavaScript**: El lenguaje de programación principal para la lógica de la aplicación.

## Estructura de Directorios

La estructura de directorios del proyecto es la siguiente:

piedra-papel-tijeras-react/
│
├── src/
│ ├── App.js
│ ├── GameArea.js
│ ├── Results.js
│ ├── ...
│
├── public/
│ ├── index.html
│ ├── ...
│
├── package.json
├── ...


- `src/`: Contiene los archivos fuente de la aplicación React, incluyendo los componentes y el archivo principal `App.js`.

- `public/`: Contiene archivos estáticos, como el archivo HTML de inicio.

## Componentes

La aplicación se divide en tres componentes principales:

1. **App.js**: Este componente principal maneja el estado global del juego y coordina la lógica del juego. Contiene métodos para manejar el nombre del jugador, las opciones seleccionadas, determinar el ganador y reiniciar el juego.

2. **GameArea.js**: Este componente muestra la interfaz de usuario relacionada con el juego. Permite al jugador ingresar su nombre, bloquear el nombre, y seleccionar una opción de juego (piedra, papel o tijeras). También contiene lógica para habilitar y deshabilitar botones según el estado del juego.

3. **Results.js**: Este componente muestra los resultados del juego, incluyendo el mensaje de victoria o derrota, las puntuaciones y la opción de reiniciar el juego.

## Funciones Principales

- **handleNameChange**: Maneja el cambio en el nombre del jugador y actualiza el estado.

- **handleOptionClick**: Maneja el clic en las opciones de juego (piedra, papel o tijeras) y determina el ganador de la ronda.

- **generateComputerChoice**: Genera una elección aleatoria para la computadora.

- **determineWinner**: Determina al ganador de la ronda según las reglas del juego.

- **resetGame**: Reinicia el juego, restableciendo las puntuaciones y las rondas jugadas.

- **lockName**: Bloquea el nombre del jugador una vez que se ha ingresado.

## Manejo de Errores

- Se muestra una alerta si el jugador intenta jugar sin ingresar su nombre.

## Soluciones Implementadas

- Uso de componentes reutilizables para una estructura organizada y mantenible.

- Aplicación de estilos CSS con `styled-components` para una apariencia agradable y coherente.

- Implementación de la lógica del juego siguiendo las reglas tradicionales de "Piedra, Papel o Tijeras".

## Instrucciones para la Ejecución Local

Si deseas ejecutar esta aplicación en tu entorno local, sigue estos pasos:

1. Clona este repositorio en tu computadora:

   ```bash
   git clone https://jdrking.github.io/practico3/

Navega al directorio del proyecto:

cd piedra-papel-tijeras-react

Instala las dependencias

npm install

Inicia la aplicación:

npm start

La aplicación se ejecutará en tu navegador en http://localhost:3000.