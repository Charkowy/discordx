Discord
discord 2

Clon de Discord Fullstack Descripción del Proyecto Este proyecto es un clon de Discord desarrollado con tecnologías modernas como Next.js, React, Socket.io, Prisma, Tailwind CSS y MySQL. El objetivo es crear una plataforma de comunicación en tiempo real que permita a los usuarios crear servidores, enviar mensajes, compartir archivos y comunicarse a través de canales de texto y voz.

Características Creación de Servidores: Los usuarios pueden crear y gestionar sus propios servidores. Mensajería en Tiempo Real: Utilizando Socket.io, los mensajes se envían y reciben instantáneamente. Canales de Texto y Voz: Los usuarios pueden comunicarse en diferentes canales y participar en llamadas de voz. Gestión de Archivos: Permite el envío y la recepción de archivos adjuntos e imágenes. Interfaz Amigable: Diseñada con Tailwind CSS para una experiencia de usuario atractiva y responsiva. Tecnologías Utilizadas Frontend: Next.js React Tailwind CSS Backend: Socket.io Prisma MySQL Instalación Clona el repositorio:

bash Copiar git clone https://github.com/tu_usuario/clon-discord.git Navega al directorio del proyecto:

bash Copiar cd clon-discord Instala las dependencias:

bash Copiar npm install Configura la base de datos en prisma/schema.prisma y ejecuta las migraciones:

bash Copiar npx prisma migrate dev --name init Inicia el servidor de desarrollo:

bash Copiar npm run dev Uso Accede a la aplicación en http://localhost:3000. Regístrate o inicia sesión para crear o unirte a servidores. Explora las funcionalidades de mensajería y llamadas de voz. Contribuciones Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

Haz un fork del proyecto. Crea una nueva rama (git checkout -b feature/nueva-caracteristica). Realiza tus cambios y haz un commit (git commit -m 'Añadir nueva característica'). Envía un pull request. Licencia Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.