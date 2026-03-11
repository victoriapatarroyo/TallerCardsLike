❤️ Simulador de Likes

Aplicación web que permite crear publicaciones dinámicas con imagen, título y descripción, simulando la interacción de usuarios mediante un sistema de likes por publicación.

Este proyecto fue desarrollado para practicar manipulación del DOM, manejo de eventos y generación dinámica de contenido usando JavaScript.

📖 Tabla de Contenidos

Demo

Vista previa

Características

Tecnologías

Arquitectura del proyecto

Instalación

Uso de la aplicación

Retos del desarrollo

Habilidades adquiridas

Roadmap

Autora

Licencia

🚀 Demo

🔗 Aplicación en vivo

https://victoriapatarroyo.github.io/TallerCardsLike/

📸 Vista previa

Puedes agregar una captura del proyecto aquí.

![Preview del proyecto](img/demo.png)

✨ Características

✔ Creación dinámica de publicaciones
✔ Carga de imágenes desde el dispositivo
✔ Generación automática de cards
✔ Sistema de likes por publicación
✔ Contador total de publicaciones
✔ Animaciones visuales al dar like
✔ Interfaz responsive con Bootstrap
✔ Validación de archivos de imagen

🛠 Tecnologías

Este proyecto fue desarrollado con:

HTML5

CSS3

JavaScript (Vanilla JS)

Bootstrap 5

Google Fonts

🏗 Arquitectura del proyecto
TallerCardsLike
│
├── index.html
├── script.js
│
├── css
│ └── estilos.css
│
└── README.md
Componentes principales

Formulario de publicación

Permite ingresar:

título

descripción

imagen

Generación dinámica de cards

La función:

publicarCard()

se encarga de:

validar datos

generar HTML dinámicamente

insertar la publicación en el DOM

Sistema de Likes

Cada publicación tiene un botón que ejecuta:

incrementarLike(id)

Esta función:

incrementa el contador

cambia el estilo del botón

activa animaciones visuales

Gestión de imágenes

Las imágenes se cargan mediante:

URL.createObjectURL(file)

Esto permite mostrar archivos locales sin subirlos a un servidor.

Para optimizar memoria se liberan usando:

URL.revokeObjectURL()
⚙ Instalación

Clonar el repositorio:

git clone https://github.com/victoriapatarroyo/TallerCardsLike.git

Entrar al proyecto:

cd TallerCardsLike

Abrir el archivo:

index.html
▶ Uso de la aplicación

Ingresar el título de la publicación

Ingresar la descripción

Seleccionar una imagen

Presionar Publicar

Interactuar con el botón Me gusta

🎯 Retos del desarrollo

Durante el desarrollo se enfrentaron desafíos como:

Manipulación dinámica del DOM

Manejo de eventos en elementos generados dinámicamente

Gestión de archivos de imagen locales

Control de estados de likes por publicación

Optimización del manejo de memoria para imágenes

🧠 Habilidades adquiridas

Este proyecto permitió fortalecer habilidades en:

JavaScript orientado al DOM

Manejo de eventos

Generación dinámica de HTML

Desarrollo de interfaces responsive

Gestión de archivos en el navegador

Organización de lógica frontend

🚀 Roadmap

Posibles mejoras futuras:

Guardar publicaciones en LocalStorage

Persistencia de likes

Sistema de comentarios

Eliminación de publicaciones

Animaciones más avanzadas

Backend con Node.js o Spring Boot

Base de datos para publicaciones

👩‍💻 Autora

Victoria Eugenia Patarroyo

Desarrolladora Fullstack

GitHub
https://github.com/victoriapatarroyo

LinkedIn
https://www.linkedin.com/in/victoriaeugeniapatarroyo/

📄 Licencia

Este proyecto está bajo la licencia MIT.
