# API REST - Proyecto Final Back-End (Node.js)

API RESTful desarrollada con Node.js, Express, Firebase Firestore y autenticación mediante JSON Web Tokens (JWT).

## Tecnologías utilizadas
- Node.js & Express
- Firebase Firestore
- JSON Web Token (JWT)
- CORS & Dotenv

## Instalación y ejecución local
1. Clonar el repositorio:
   `git clone <URL_DE_TU_REPOSITORIO>`
2. Instalar dependencias:
   `npm install`
3. Crear un archivo `.env` en la raíz con las siguientes variables:
   - `PORT=3000`
   - `JWT_SECRET`
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
4. Iniciar el servidor:
   `npm start`

## Endpoints disponibles

### Autenticación
- **POST** `/auth/login` — Inicia sesión (`admin@gmail.com` / `123456`) y devuelve un token JWT.

### Productos
- **GET** `/api/products` — Obtiene el listado completo de productos (Pública).
- **GET** `/api/products/:id` — Obtiene un producto por su ID (Pública).
- **POST** `/api/products/create` — Crea un nuevo producto (Requiere `Bearer Token`).
- **DELETE** `/api/products/:id` — Elimina un producto por su ID (Requiere `Bearer Token`).