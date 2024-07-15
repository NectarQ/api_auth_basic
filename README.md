# API for Authentication

- This is a readme with all routes

## Auth Routes

### POST ```/api/v1/auth/login```

- method must include a user and password
- method return a BASE64 token with this information:
- ```{ "name": ..., "email": ..., "roles": ..., "expiration":... }```

Los datos query estan estructurados de esta manera:

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

El controlador extrae directamente los usuarios de req.body.users, haciendo que el código sea más claro y directo: const users = req.body.users; // Extracción directa

Al tener los datos de los usuarios encapsulados bajo la clave "users", la estructura de la solicitud es consistente y predecible. Esto es útil cuando el cuerpo de la solicitud puede contener múltiples tipos de datos o cuando se sigue una convención de diseño de API.



Creado por Alan Queupuán Punol.