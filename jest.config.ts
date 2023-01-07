import type { JestConfigWithTsJest } from 'ts-jest';
import { jsWithTs as defaults } from 'ts-jest/presets';

const config: JestConfigWithTsJest = Object.assign({}, defaults);

export default config;