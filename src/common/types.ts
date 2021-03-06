import { ParserOptions } from '@babel/parser';

export enum QuoteType {
  double = 'double',
  single = 'single',
  backtick = 'backtick',
}

export const QuoteCharMap = {
  [QuoteType.single]: "'",
  [QuoteType.double]: '"',
  [QuoteType.backtick]: '`',
};

export interface IUmiProConfig {
  quotes: QuoteType;
  routerConfigPath?: string;
  parserOptions: ParserOptions;
}

export const DEFAULT_ROUTER_CONFIG_PATH = [
  '.umirc.js',
  'config/config.js',
  'config/router.config.js',
];

interface CodeWithLoc {
  code: string;
  loc: {
    start: {
      line: number;
      column: number;
    };
    end: {
      line: number;
      column: number;
    };
  };
}

export interface IDvaModel {
  namespace: string;
  effects: {
    [name: string]: CodeWithLoc;
  };
  reducers: {
    [name: string]: CodeWithLoc;
  };
}

export interface IDvaModelWithFilePath extends IDvaModel {
  filePath: string;
}

export enum Brackets {
  ROUND = '()',
  BOX = '[]',
  CURLY = '{}',
}

export const JS_EXT_NAMES = ['.js', '.jsx', '.ts', '.tsx'];

export const SUPPORT_LANGUAGE = ['javascript', 'typescript', 'typescriptreact'];
