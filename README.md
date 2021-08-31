# Entrega-Modulo-3-Tarea03-CalculadoraIMC
## Enlaces.
- Repositorio GitHub: https://github.com/zazmage/Entrega-Modulo-3-Tarea03-CalculadoraIMC
- GitHub Page: https://zazmage.github.io/Entrega-Modulo-3-Tarea03-CalculadoraIMC/
- Google Drive: https://drive.google.com/drive/folders/1DECLIXeLYjpaLVaJbem-u2V8eRFSnX5X?usp=sharing
## Descripción del proyecto.
Este proyecto se realizó para dar respuesta al reto 3 del programa de entrenamiento de Academia Geek.
## Enunciado.
Reto: Calculadora IMC - Índice de Masa Corporal
El Índice de Masa Corporal (IMC) es una medida de asociación entre el peso y la talla de una persona. El IMC es usado como uno de varios indicadores para evaluar el estado nutricional.

Fórmula: peso (kg) / [estatura (m)]2
Con el sistema métrico, la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados. Debido a que la estatura por lo general se mide en centímetros, divida la estatura en centímetros por 100 para obtener la estatura en metros.

Ejemplo: Peso = 68 kg, Estatura = 165 cm (1.65 m) Cálculo: 68 ÷ (1.65)2 = 24.98

Requisitos técnicos:
La empresa nutricional de Colombia desea conocer la condición nutricional de la ciudad de Medellín, por tal motivo desean desarrollar una aplicación que permita medir el índice de masa corporal de las personas. Para el desarrollo de esta aplicación se debe tener en cuenta los siguientes requisitos técnicos.

Se debe tener un registro de la información de los usuarios, esta información debe ser almacenada en Local Storage
Se debe calcular la masa corporal para mujeres y hombres.
Se debe manejar estadísticas de la masa corporal de 15 personas, que debe ser almacenada en un archivo Json y consumirla en el componente de estadísticas.
Utilice la tabla que se presenta a continuación para ver en qué categoría encaja su IMC

ÍNDICE DE MASA CORPORAL CATEGORÍA

Por debajo de 18.5 Por debajo del peso
18.5 a 24.9 Saludable
25.0 a 29.9 Con sobrepeso
30.0 a 39.9 Obeso
Más de 40 Obesidad extrema o de alto riesgo
## Colores e íconos.
Para los colores utilizados en la hoja de estilos se utilizó como, referencia la paleta de colores de la siguiente página:

materialpalette.com/green/cyan

Los íconos utilizados se descargaron en formato svg de la siguiente página:

https://www.flaticon.es/

Para los colores de las guías de color de resultados se utilizó la herramienta "Eye Dropper" para seleccionar los mismos colores que en el ejemplo, enlace a la página:

https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka?hl=en
## Barra de estado
Para la posición el indicador de la barra de estado me ayudé mayoritariamente de funciones matemáticas creadas a partir de reglas de 3 para calcular cómodamente porcentajes.
## Base de datos de IMC
Para la base de datos "dataframe.json" se creó un archivo json que almacena la información de cada entrada a modo de objeto, esta información fué obtenida del localStorage tras procesar los datos con la aplicación, algunos de los datos fueron obtenidos de la siguiente página web:

https://jllopisperez.com/2017/02/22/base-de-datos-de-obesidad/comment-page-1/
## Gráficos
Para los gráficos me ayudé de la librería Chart.js y la documentación básica para gráficos de barras obtenida en la página principal de la librería:

https://www.chartjs.org/


