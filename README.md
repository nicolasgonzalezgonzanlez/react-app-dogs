# Aplicacion creada con React.js (Dogs).
###### Proyecto parte de la prueba de AVALITH (challenge).

### Consigna.

Se tiene un web service que provee información sobre razas de perros. El mismo consta de
dos endpoints, uno que responde un JSON con las razas, y otro que recibe la raza como
parámetro y devuelve un JSON que contiene una imágen de la raza.
Los endpoints son los siguientes:
● https://dog.ceo/api/breeds/list
● https://dog.ceo/api/breed/{BREED_NAME}/images/random
Desarrollar una aplicación mobile en la cual se pueda ver en la vista principal un listado
categorizado alfabéticamente por la primera letra de las razas recibidas con el endpoint
/breed/list.
Al seleccionar un ítem de la lista, se debe abrir otra vista donde se muestre el nombre de la
raza, seguido de una imagen que se obtiene con el endpoint
/breed/{BREED_NAME}/images/random.

Para poder realizar este proyecto consumi las siguientes Frameworks.

[Bulma.](https://bulma.io/)para darle estilo y evitar asi programar un css grid.

[React.js ](https://es.reactjs.org/)para la parte del Frontend.

[Prop-Type](https://www.npmjs.com/package/prop-types) Para poder documentar el uso de variables y facilitar la comprension de variables para otro desarrolladores.


>Para poder correr la app... Siga las siguientes lineas de comando

```
NPM INSTALL
NPM START
```
Para poder correr estos comondos... hace falta tener instalado NPM y dirigirse al directorio una ves clonado o descargado