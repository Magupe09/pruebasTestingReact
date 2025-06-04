// jest.config.cjs
/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    // Maneja la importación de archivos CSS, etc., en los tests
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // ¡Añade o modifica esta línea para manejar imágenes y otros archivos!
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.cjs',
    // Si usas alias de ruta como '@/'
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
};

module.exports = config;