/**
 * jest.config.js
 * Configuración de Jest para un proyecto Next.js + TypeScript.
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Permite usar importaciones absolutas comenzando por '@/'.
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    // Transforma archivos TypeScript/JavaScript usando Babel con la configuración de Next.js.
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  // Umbral global mínimo de cobertura. Ayuda a mantener la calidad del código.
  coverageThreshold: {
    global: {
      statements: 80,
      lines: 80,
      functions: 75, // TODO: Incrementar a 90 una vez alcancemos más cobertura
      branches: 70,  // TODO: Incrementar a 90 una vez alcancemos más cobertura
    },
  },
};
