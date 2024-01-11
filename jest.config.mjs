import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  setupFiles: ['<rootDir>/.jest/env.ts'],

  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)
