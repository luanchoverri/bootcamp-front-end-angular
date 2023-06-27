# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0 for Lamansys Bootcamp Front-End III

## Deployment

1. Subir el proyecto al repo remoto
2. Ejecutar el comando reemplazando el (usuario) y el (nombre del repo) por los que correspondan

   	ng build --output-path docs --base-href https://(luanchoverri).github.io/(bootcamp-front-end-angular)/  
   Lo que hace el comando es buildear dentro de la nueva carpeta generada "docs"
4. Subir los nuevos cambios a la rama del repo
5. entrar en Settings -> Pages -> Source -> elegir la rama y asociar la carpeta /docs (en vez de /root) -> Save
6. Ahora va a generar el link. Puede tardar unos minutos

 Nota Si aparece un error 404 se soluciona entrando a /docs/index.html y editando manualmente la base href poniendola de nuevo en base href="/"
