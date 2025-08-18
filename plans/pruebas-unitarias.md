# Plan de Implementación de Pruebas Unitarias - Planeta Viaje

## 1. Configuración del Entorno de Pruebas

### 1.1 Instalación de Dependencias
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/react-hooks @types/jest jest-environment-jsdom ts-jest @types/testing-library__jest-dom
```

### 1.2 Configuración de Jest
Crear archivo `jest.config.js` en la raíz del proyecto:
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
```

### 1.3 Configuración de Jest Setup
Crear archivo `jest.setup.js` en la raíz del proyecto:
```javascript
import '@testing-library/jest-dom';
```

### 1.4 Actualizar package.json
Añadir scripts de prueba:
```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

## 2. Estructura de Carpetas de Pruebas

```
src/
├── __tests__/
│   ├── components/          # Pruebas de componentes
│   │   ├── blog/
│   │   │   └── BrighPostCard.test.tsx
│   │   └── layout/
│   │       ├── Header.test.tsx
│   │       └── ParallaxBackground.test.tsx
│   │
│   ├── lib/                # Pruebas de utilidades
│   │   └── posts.test.ts
│   │
│   └── app/                # Pruebas de páginas
│       └── page.test.tsx
├── mocks/                  # Mocks para pruebas
│   └── next/router.ts
```

## 3. Plan de Pruebas por Componente

### 3.1 Componente BrighPostCard
**Archivo:** `src/__tests__/components/blog/BrighPostCard.test.tsx`

**Casos de prueba:**
1. Renderiza correctamente con las props requeridas
2. Muestra el título del post
3. Muestra la fecha formateada correctamente
4. Navega a la URL correcta al hacer clic
5. Muestra la imagen con la URL correcta
6. Aplica las clases CSS correctas para los efectos de hover

### 3.2 Componente Header
**Archivo:** `src/__tests__/components/layout/Header.test.tsx`

**Casos de prueba:**
1. Renderiza el logo correctamente
2. Muestra el menú de navegación
3. El menú de navegación contiene los enlaces correctos
4. El menú móvil se muestra/oculta correctamente

### 3.3 Componente ParallaxBackground
**Archivo:** `src/__tests__/components/layout/ParallaxBackground.test.tsx`

**Casos de prueba:**
1. Renderiza correctamente con la imagen local
2. Renderiza correctamente con la imagen de S3 cuando está disponible
3. Aplica el overlay cuando está habilitado
4. Aplica el color de overlay personalizado
5. Maneja correctamente la ausencia de imagen

## 4. Pruebas de Utilidades

### 4.1 Módulo de Posts
**Archivo:** `src/__tests__/lib/posts.test.ts`

**Casos de prueba:**
1. `getAllPosts` devuelve un array de posts
2. `getPostBySlug` devuelve el post correcto
3. `getPostBySlug` devuelve null para un slug inexistente
4. `getPostsByCategory` filtra correctamente por categoría
5. `getAllCategories` devuelve todas las categorías

## 5. Pruebas de Páginas

### 5.1 Página de Inicio
**Archivo:** `src/__tests__/app/page.test.tsx`

**Casos de prueba:**
1. Renderiza el componente principal
2. Muestra el título de la página
3. Muestra los posts recientes
4. Muestra un mensaje cuando no hay posts
5. Maneja correctamente el estado de carga

## 6. Mocks y Utilidades de Prueba

### 6.1 Mock de Next.js Router
**Archivo:** `src/mocks/next/router.ts`

### 6.2 Factory de Datos de Prueba
**Archivo:** `src/__tests__/test-utils/factories.ts`

## 7. Configuración de Cobertura de Código

### 7.1 Configuración de cobertura
Añadir a `jest.config.js`:
```javascript
coverageThreshold: {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
},
```

## 8. Integración con GitHub Actions (CI)

### 8.1 Configuración de GitHub Actions
Crear archivo `.github/workflows/tests.yml`:
```yaml
name: Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18.x'
      - run: npm ci
      - run: npm run test:coverage
```

## 9. Próximos Pasos

1. Implementar pruebas siguiendo el orden de prioridad:
   - Primero las utilidades (lib/)
   - Luego los componentes
   - Finalmente las páginas
2. Configurar pre-commit hooks para ejecutar pruebas
3. Configurar informes de cobertura
4. Integrar con herramientas de calidad de código

## 10. Recursos Útiles

- [Documentación de Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Next.js Testing](https://nextjs.org/docs/testing)
- [Pruebas en TypeScript](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

## Chapter 2 – Cobertura completa restante

### Objetivo
Cubrir ≥ 90 % de líneas/funciones del código restante: utilidades `src/lib`, componentes faltantes y páginas dinámicas/estáticas.

### 2.1 Resumen de ficheros sin test

**Lib (utilidades):**
- `src/lib/categories.ts`
- `src/lib/images.ts`
- `src/lib/mdx.ts`
- `src/lib/mdx-parser.ts`
- `src/lib/mdx-renderer.tsx`
- `src/lib/mdx-components.tsx`
- `src/lib/mdx-server.ts`
- `src/lib/prisma.ts` (opcional)

**Componentes:**
- `src/components/blog/PostCard.tsx`
- `src/components/layout/Breadcrumbs.tsx`
- `src/components/layout/DropdownMenu.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Logo.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/components/layout/SearchBar.tsx`

**Páginas (App Router):**
- `src/app/layout.tsx`
- `src/app/not-found.tsx`
- `src/app/category/[slug]/page.tsx`
- `src/app/draft/[slug]/page.tsx`
- `src/app/post/[slug]/page.tsx`
- `src/app/*` legales (`aviso-legal`, `cookies`, `politica-de-privacidad`)
- `src/app/search/page.tsx`

### 2.2 Priorización
1. Lib utilidades básicas (`categories`, `images`) – mock Prisma.
2. Componentes de layout y navegación.
3. Resto de Lib MDX (mock rehype/remark).
4. Páginas dinámicas (mock funciones de datos).
5. Páginas estáticas simples.

### 2.3 Checklist tareas
- [ ] Tests `categories.ts`
- [ ] Tests `images.ts`
- [ ] Tests `PostCard.tsx`
- [ ] Tests `Breadcrumbs.tsx`
- [ ] Tests `DropdownMenu.tsx`
- [ ] Tests `Footer.tsx`
- [ ] Tests `Logo.tsx`
- [ ] Tests `MobileMenu.tsx`
- [ ] Tests `SearchBar.tsx`
- [ ] Tests `mdx*` modules
- [ ] Tests páginas `[slug]`
- [ ] Tests páginas legales y `not-found`
- [ ] Actualizar `coverageThreshold` a 90 %
- [ ] Confirmar CI verde

### 2.4 Buenas prácticas
- Seguir patrón 1:1 fichero-test.
- Usar mocks en `jest.setup.js` para componentes internos y librerías externas.
- Interacciones con `user-event` para menús y formularios.
- Snapshot testing solo donde sea útil (MDX renderizado).

### 2.5 Corrección de errores en pruebas
Para mantener la suite estable se seguirá este flujo iterativo cada vez que aparezcan fallos o advertencias:

1. **Identificación rápida** – Ejecutar `jest --onlyFailures --verbose` para localizar la suite y la aserción que falla.
2. **Análisis de la causa** – Determinar si el problema reside en:
   - La aserción o espera del test.
   - La lógica del componente/módulo.
   - La carencia o mala configuración de mocks.
3. **Corrección mínima y segura**
   - Ajustar la aserción o añadir mocks adecuados.
   - Corregir el componente evitando pasar props no válidas al DOM (`priority`, `fill`, `objectFit`, etc.).
   - Extender mocks globales (p. ej. `next/image`) para filtrar props conflictivas.
4. **Verificación** – Re‐ejecutar `npm test --silent` hasta lograr:
   - `Test Suites: 0 failed`.
   - Cobertura ≥ 80 % (objetivo inicial) y, tras completar el plan, ≥ 90 %.
5. **Limpieza de advertencias** – Reducir warnings de React para mantener la salida de CI clara.
6. **CI y cobertura** – Al finalizar, elevar `coverageThreshold` a 90 % en `jest.config.js` y confirmar pipeline CI en verde.
