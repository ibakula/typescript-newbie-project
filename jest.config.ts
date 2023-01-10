import type { JestConfigWithTsJest } from 'ts-jest';
import { jsWithTs as defaults } from 'ts-jest/presets';

const config: JestConfigWithTsJest = Object.assign({}, defaults);

config.moduleFileExtensions = ['tsx', 'ts', 'js', 'mjs', 'cjs', 'jsx', 'json', 'node'];

config.moduleNameMapper = Object.assign({
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/source/__mocks__/fileMock.ts',
  '\\.(css|less)$': 'identity-obj-proxy'
}, config.moduleNameMapper);

export default config;