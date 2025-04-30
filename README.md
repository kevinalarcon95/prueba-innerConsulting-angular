# Explorador de Personajes de Rick y Morty

Esta aplicación web está construida con Angular 19 y permite a los usuarios explorar y buscar personajes del universo de Rick y Morty.

## Tecnologías Utilizadas

- **Angular 19.2.9** - Framework principal para construir la aplicación
- **TypeScript 5.7.2** - Lenguaje de programación utilizado
- **Componentes Standalone de Angular** - Para una arquitectura más independiente de módulos
- **RxJS 7.8.0** - Para programación reactiva y manejo de operaciones asíncronas
- **API de Rick and Morty** - API externa para obtener datos de personajes

## Estructura del Proyecto

La aplicación sigue una arquitectura basada en componentes:
- `app/` - Código principal de la aplicación
  - `auth/` - Componentes y servicios de autenticación
  - `home/` - Pantallas principales para mostrar personajes
  - `models/` - Modelos de datos
  - `services/` - Servicios API
  - `shared/` - Componentes reutilizables (encabezado, pie de página, búsqueda, paginador)

## Requisitos Previos

- Node.js (v18 o posterior)
- npm (v9 o posterior)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kevinalarcon95/prueba-innerConsulting-angular.git
   cd prueba-innerConsulting-angular
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecutar la Aplicación

Inicia el servidor de desarrollo:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y dirígete a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques cualquier archivo fuente.

También puedes usar el siguiente comando NPM:

```bash
npm start
```

## Características

- **Búsqueda de Personajes** - Encuentra personajes por nombre o especie
- **Interfaz Responsiva** - Diseño para dispositivos móviles que se adapta a diferentes tamaños de pantalla
- **Detalles de Personajes** - Ver información detallada de cada personaje
- **Paginación** - Navega a través de múltiples páginas de personajes

## Compilar para Producción

Para compilar el proyecto para producción:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de compilación en el directorio `dist/`.


## Comandos Adicionales

### Generación de Código

Para generar un nuevo componente:

```bash
ng generate component nombre-componente
```

Para obtener una lista completa de esquemas disponibles:

```bash
ng generate --help
```

## Compatibilidad con Navegadores

La aplicación ha sido probada y funciona bien en:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

## Recursos

Para más información sobre el uso de Angular CLI, visita la página de [Descripción general y referencia de comandos de Angular CLI](https://angular.dev/tools/cli).

## Autor

Kevin Alarcón
