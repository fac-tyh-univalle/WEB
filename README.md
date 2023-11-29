    Manual Técnico
Proyecto de Sistemas III - TOURISTA

1.	Introducción:
Este manual tiene como propósito proporcionar una guía para la implementación y configuración de una aplicación turística desarrollada para brindar información sobre ubicaciones turísticas importantes. La aplicación está desarrollada utilizando tecnologías modernas y robustas para garantizar su fiabilidad y escalabilidad.

2.	Descripción del proyecto:
El proyecto es una aplicación de turismo que permite a los usuarios explorar diversas ubicaciones turísticas, obtener detalles sobre ellas y planificar su visita. La aplicación ofrece un diseño intuitivo y fácil de usar, con características que mejoran la experiencia del usuario, como la búsqueda de ubicaciones, la visualización de detalles y la capacidad de marcar ubicaciones como favoritas.

3.	Roles / integrantes:
-	BERNARDO GARCIA

4.	Arquitectura del software: 
La arquitectura del software se basa en el patrón Facade. El patrón Facade proporciona una interfaz unificada para un conjunto de interfaces en un subsistema. Facade define una interfaz de alto nivel que facilita el uso del subsistema. Esta arquitectura ayuda a desacoplar el sistema cliente del subsistema y facilita la escalabilidad y la portabilidad del sistema. El backend de la aplicación utiliza un enfoque de Backend as a Service (BaaS) utilizando Pocketbase, un servicio de backend desarrollado en Go que ofrece una base de datos SQLite integrada. Esto permite a la aplicación tener un backend robusto y escalable con menos esfuerzo de desarrollo y mantenimiento.

5.	Requisitos del sistema:
-	REQUERIMIENTOS DE HARDWARE (CLIENTE MÍNIMO): 
o	1 GB de RAM  
o	2 GB de espacio en disco
o	Procesador de 1.6 GHz 
-	REQUERIMIENTOS DE SOFTWARE (CLIENTE): 
o	Sistema operativo: Windows 7 o superior, Linux (cualquier distribución reciente) 
o	Navegador web: Google Chrome, Mozilla Firefox, Safari, Brave 
o	Conexión a Internet 
-	REQUERIMIENTOS DE HARDWARE (SERVIDOR/HOSTING/BD): 
o	No aplicable, ya que la aplicación utiliza un enfoque de BaaS. 
-	REQUERIMIENTOS DE SOFTWARE (SERVIDOR/HOSTING/BD): 
o	No aplicable, ya que la aplicación utiliza un enfoque de BaaS.
6.	Instalación y configuración: El proceso de instalación y configuración de la aplicación es sencillo ya que la mayor parte del backend se maneja a través de Pocketbase. El cliente simplemente necesita instalar la aplicación en su dispositivo y tener una conexión a internet para poder interactuar con la base de datos a través de Pocketbase.

Antes debe clonar o descargar los proyectos de la cuenta de GitHub:
CUENTA DE GITHUB
Correo: fac.tyh.2023@gmail.com
Contraseña: UnivalleRep2023

Descargar proyectos:

Entramos a uno de los repositorios que queramos usar.
 


GUÍA DE USO API/DASHBOARD (POCKETBASE) USO DEL PANEL ADMINISTRATIVO - BD
1.	Ingresar al sitio: Inicia tu navegador de internet y ve a la URL: 
https://boring-carpenter.pockethost.io/_/#/login
Te encontrarás con una pantalla de inicio de sesión.

 

2.	Iniciar sesión: Ingresa tus credenciales de usuario y contraseña para acceder al panel administrativo de PocketBase.
a.	Correo: fac.tyh.2023@gmail.com
b.	Contraseña: turismounivalle2023

3.	Navegar por el panel: En la pantalla principal del panel, encontrarás diversas secciones: 
a.	Colecciones: Aquí puedes visualizar todas las colecciones existentes, implementar nuevas y administrar los registros existentes.
 
*Para agregar regsitros a cada colección, debe darle donde dice New Record, despues llenar los datos requeridos*

b.	Logs de la aplicación: Aquí puedes ver las operaciones que se han realizado en tu aplicación, de dónde provienen y cómo se ejecutó la petición.

 

c.	Configuración de la aplicación (settings): En esta sección puedes configurar aspectos como el manejo de mails, manejo de archivos, exportar e importar colecciones, agregar métodos de autenticación para los usuarios y crear usuarios de administración para el proyecto.

 

DEPLOYMENT EN VERCEL PARA LA PAGINA WEB.
Para desplegar tu proyecto NextJS en Vercel, sigue estos pasos: 
1.	Crea una cuenta en Vercel: Si aún no tienes una, puedes crearla visitando:
https://vercel.com/signup.
 

Entramos con la misma cuenta de GitHub. Le damos al boton Continue with GitHub.

2.	Descargar el proyecto Web en GitHub: Ve al repositorio del proyecto en GitHub (**https://github.com/fac-tyh-univalle/WEB**).

 

3.	Importa el proyecto a Vercel: Inicia sesión en Vercel y haz clic en "Import Project". Luego, aparecerán los repositorios que ya tienes en la cuenta de GitHub,  y le damos click a “Import” al repositorio WEB.
 
 
 
*Le ponemos el nombre que queramos para la pagina y luego le damos a “Deploy”*
 
*Le damos a “Continue to Dashboard” y ya tenemos la pagina web deployada*
 

USO DEL CLIENTE WEB  
1.	Ingresar al sitio: En tu navegador de internet, ve a la URL de tu aplicación NextJS que te generó Vercel.
  
2.	Iniciar sesión: Ingresa tus credenciales para acceder al panel de usuario. 
a.	Correo: fac.tyh.2023@gmail.com
b.	Contraseña: univalle2023
3.	Administrar ubicaciones: En el panel de usuario, encontrarás la sección para administrar las ubicaciones que has registrado. Aquí puedes agregar, modificar y eliminar ubicaciones.
 

GUÍA DE USO Y DEPLOYMENT CLIENTE MÓVIL (EXPO) 
1.	Descargamos el repositorio MOVIL: 
https://github.com/fac-tyh-univalle/MOVIL
 

2.	Nos vamos a la raiz del proyecto e instalamos dependencias con cualquiera de los dos comandos: 
yarn 
npm i
 


3.	Iniciamos la aplicación: 
yarn start 
npm start
 

USO DEL CLIENTE MÓVIL 
1.	Instalamos EAS CLI: 
npm install -g eas-cli 
 
2.	Configuramos el EAS Build para la plataforma que querramos, en este caso ANDROID. 
eas build --platform android
 
*Con esto podemos entrar al link que nos genera, descargar el archivo y generar el apk*

7.	PROCEDIMIENTO DE HOSTEADO / HOSTING (configuración)
Debido a que la aplicación utiliza Pocketbase como BaaS, no hay necesidad de procedimientos de hosting adicionales.

8.	GIT: 
La versión final del proyecto se entrega a través de un repositorio GIT. Aquí, los clientes pueden obtener la versión más reciente del proyecto y mantenerla actualizada.

Cuenta de GitHub con los proyectos:
-	Correo: fac.tyh.2023@gmail.com
-	Contraseña: UnivalleRep2023

9.	Personalización y configuración:
La aplicación puede ser personalizada y configurada según las necesidades del usuario. Los detalles sobre cómo personalizar y configurar la aplicación se proporcionarán en una sección posterior del manual.

10.	Seguridad: 
La seguridad de la aplicación y de los datos del usuario es una de nuestras principales preocupaciones. La aplicación sigue las mejores prácticas de seguridad y se han implementado diversas medidas para garantizar que los datos del usuario estén seguros.

11.	Depuración y solución de problemas: 
La aplicación suelta mensajes de error en la terminal de los proyectos, antes de hacer cualquier paso de deployment explicado anteriormente, debemos asegurarnos de que en la terminal de los proyectos todo es bien. Si nos salta algún error, debemos solucionarlo o consultar con el encargado.
Ejemplo:
 

12.	Glosario de términos:
-	Aplicación de turismo: Un tipo de software que ofrece información relevante sobre lugares turísticos, lo que puede incluir detalles del lugar, cómo llegar, horarios de apertura y cierre, eventos próximos, etc. 
-	Backend: La parte de un software que se ejecuta en el servidor, manejando la lógica de negocio, las operaciones de base de datos y la comunicación con otros sistemas. 
-	Backend as a Service (BaaS): Un modelo de servicio que proporciona a los desarrolladores una forma de conectar sus aplicaciones a servicios de backend alojados en la nube a través de APIs y SDKs. 
-	Facade: Un patrón de diseño de software que proporciona una interfaz simplificada a un conjunto de interfaces en un subsistema. 
-	Frontend: La parte de un software que interactúa directamente con el usuario. En una aplicación web, se refiere a la interfaz de usuario y a la lógica que se ejecuta en el navegador del usuario. 
-	Go: Un lenguaje de programación de código abierto que hace que sea fácil construir software simple, fiable y eficiente. 
-	Pocketbase: Un servicio de backend como servicio que proporciona una base de datos SQLite integrada. 
-	React: Una biblioteca de JavaScript para construir interfaces de usuario, desarrollada por Facebook. 
-	SQLite: Una biblioteca en lenguaje C que proporciona una base de datos ligera basada en disco que no requiere un proceso de servidor separado y permite acceder a la base de datos usando una variante no estándar del lenguaje de consulta SQL. 
-	Tailwind CSS: Un marco de CSS de bajo nivel que permite a los desarrolladores construir diseños personalizados sin restricciones de estilo predefinidas. 
-	Reactstrap: Una biblioteca de componentes Bootstrap para React.

13.	Referencias y recursos adicionales:
 

Consejos adicionales:
-	Formatos audiovisuales permitidos en la parte web:
o	Imágenes: JPG, JPEG, PNG
o	Videos: MP4
o	Audios: MP3
-	No audios de mas de 8 minutos, no hay problema si se pasa, pero es mejor tener audios cortos y no sobrecargar la aplicación.
-	No videos de mas de 10 minutos por la razón anterior.
-	Imágenes no tiene límite de carga.

14.	Herramientas de Implementación:
LENGUAJES DE PROGRAMACIÓN: 
-	Frontend: React 
-	Backend: Go (para Pocketbase) 
FRAMEWORKS: 
-	Frontend: Tailwind CSS, Reactstrap 
-	Backend: Pocketbase

15.	Bibliografía
1. React Documentation. (2020). Facebook Inc. 
2. Go Documentation. (2020). The Go Authors. 
3. Tailwind CSS Documentation. (2020). Tailwind Labs. 
4. SQLite Documentation. (2020). SQLite Consortium. 
5. Pocketbase Documentation. (2020). The Pocketbase Authors... (2020). The Go Author
