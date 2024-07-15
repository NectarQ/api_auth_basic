# API for Authentication

- This is a readme with all routes

## Auth Routes

### POST ```/api/v1/auth/login```

- method must include a user and password
- method return a BASE64 token with this information:
- ```{ "name": ..., "email": ..., "roles": ..., "expiration":... }```

En el controlador API_AUTH_BASIC/controllers/UserController.js, específicamente en la función bulkCreate. El servidor espera que los datos recibidos estén estructurados de una manera particular para poder procesarlos correctamente. 

[ const { users } = req.body; ]

Aquí, el servidor espera que req.body contenga una propiedad llamada users, la cual debería ser un arreglo de objetos de usuario. Este es el punto clave donde el servidor espera que los datos estén estructurados de esta manera:

{
    "users": [
        {
            "name": "Bob",
            "email": "bob@example.com",
            "password": "1234",
            "password_second": "1234",
            "cellphone": "2345678901"
        }
    ]
}


Creado por Alan Queupuán Punol.