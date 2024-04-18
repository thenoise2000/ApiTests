Api rest para pruebas en la api publica de jsonplaceholder 

Se desarrollo una API REST para operaciones de CRUD con Nodejs empleando una BD no relacional MongoDB.

Herramientas

- Nodejs v18

- Axios

- MongoDB

- JWT

- Api Jsonplaceholder
  


Para instalar

instale nodejs y npm https://nodejs.org/en/

descargue el proyecto y ejecute el comando: npm install

Configure el archivo .env

Para ejecutar el servidor utilice: npm start


El servidor se ejecuta en http://localhost:5000/ 



Se ingresan los datos de usuarios name, email y password para ser autenticados con JWT verificque en la seccion `./src/apiRoutes/routes.js`. Este es el archivo que es la ruta de cada API y redirige a `./src/app/controllers`. Esta carpeta contiene los controladores, donde se realizan las reglas de negocio para cada API a la que se accede. Se utilizo MongoDB como base de datos de conexión con las entidades

ejemplo

![register](https://github.com/thenoise2000/ApiTests/assets/17861345/430144cd-df69-4725-8a67-125ae1172abe)

Se envia una peticion POST con los datos del usuario empleado la API publica jsonplaceholder la cual nos permitira realizar las operaciones CRUD para cargos una vez autenticado empleando JWT 

![charges](https://github.com/thenoise2000/ApiTests/assets/17861345/42e51a4b-697a-4836-a3c1-fffa0e64fcf7)






