# Frontend Pengembangan Dashboard Sistem Informasi Manajemen Inventaris PT. Telkom Witel Magelang (Telkom Magelang)

## Official Documentation

- Documentation Platform [Vue.js](https://vuejs.org/).
- Documentation for State Management [Vuex](https://vuex.vuejs.org/).
- Documentation for Router [Vue Router](https://router.vuejs.org/).
- Documentation for HTTP Client [Axios](https://axios-http.com/).

## Requirement

### Install Node.js

Ensure that you have Node.js installed on your local computer. You can download it from [Node.js Official Website](https://nodejs.org/en/).

### Vue CLI

If you haven't already, install the Vue CLI globally on your machine:

```bash
npm install -g @vue/cli
```

This allows you to create and manage Vue.js projects easily.

## Installation

### Execute in your terminal

1. Clone the repository to your local machine.

2. Navigate to the frontend directory of your project.

3. Install the dependencies by running:

   ```bash
   npm install
   ```

4. Copy the example environment file and create a new `.env` file:

   ```bash
   cp .env.example .env
   ```

5. Edit the `.env` file and set up your base URLs:

   ```env
   VITE_BASE_URL=http://localhost:8080
   BASE_URL=http://localhost:8080
   ```

6. Make sure your backend server is running at the specified `VITE_BASE_URL` before proceeding.

## Running the Application

To start the development server and run the frontend application:

```bash
npm run dev
```

This will start the application on `http://localhost:3000` (or another available port if 3000 is occupied).

## Features

### Prettier

Run Prettier to tidy up your code:

```bash
npm run prettier
```

### Enjoy coding

#### Created with ❤️
```
