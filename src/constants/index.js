import React from 'react';

export const COLORS = {
  black: '#000000',
  grey: '#a3a39a',
};

export const LABELS = {
  BRICK: 'BRICK',
  GAME: 'GAME',
  COUNT: '1 in 1',
  SERIAL: 'E 88',
  START: 'START/P',
  ONOFF: 'ON/OFF',
  SOUND: 'SOUND',
  LEFT: 'LEFT',
  DOWN: 'DOWN',
  RIGHT: 'RIGHT',
  ROTATE: 'ROTATE',
  SCORE: 'SCORE',
  HSCORE: 'HIGH SCORE',
  SPEED: 'SPEED',
  LEVEL: 'LEVEL',
};

export const FIGURE_CUBE = '[x],[x]/[x],[x]';
export const FIGURE_7 = '[x],[ ],[ ]/[x],[x],[x]';
export const FIGURE_Z = '[ ],[x],[x]/[x],[x],[ ]';
export const FIGURE_1 = '[ ],[ ],[x]/[x],[x],[x]';
export const FIGURE_4 = '[x],[x],[ ]/[ ],[x],[x]';
export const FIGURE_T = '[x],[x],[x]/[ ],[x],[ ]';
export const FIGURE_L = '[x],[x],[x]/[ ],[ ],[x]';

export const NUMBER_CONFIG = [
  [1, 1, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
]; // left top rigth left top rigth bottom

export const INIT_SCREEN = [
  'x,x,x,x,x,x,x,x,x,x',
  'x, , , ,x,x, , ,x,x',
  'x, ,x, ,x,x,x, ,x,x',
  'x, ,x, ,x,x,x, ,x,x',
  'x, ,x, ,x,x,x, ,x,x',
  'x, , , ,x,x, , , ,x',
  'x,x,x,x,x,x,x,x,x,x',
  ' , , , , , , , , , ',
  'x, ,x, ,x, ,x, ,x,x',
  'x,x, ,x, ,x, ,x, ,x',
  'x, ,x, ,x, ,x, ,x,x',
  'x,x, ,x, ,x, ,x, ,x',
  'x, , , , , , , , , ',
  'x, , , , , ,x, , , ',
  'x, , , , ,x,x,x, , ',
  ' , , , , , ,x, , , ',
  ' , ,x, , ,x,x,x, , ',
  ' ,x,x,x, , , , , , ',
  ' , ,x, , , , , , , ',
  ' ,x,x,x, , , , , , ',
  ' , , , , , , , , , ',
];

export const START_SCREEN = [
  'x,x,x,x,x,x,x,x,x, ',
  'x, , , , , , , , ,x',
  'x, , , , , , , , ,x',
  ' , , , , , , , , ,x',
  'x, , , , , , , , , ',
  'x, , , , , , , , ,x',
  'x, , , , , , , , ,x',
  ' , , , , , , , , ,x',
  'x, ,x, ,x, ,x, ,x, ',
  'x,x, ,x, ,x, ,x, ,x',
  'x, ,x, ,x, ,x, ,x,x',
  ' ,x, ,x, ,x, ,x, ,x',
  'x, , , , , , , , , ',
  'x, , , , , , , , ,x',
  'x, , , , , , , , ,x',
  ' , , , , , , , , ,x',
  'x, , ,x, , , , , , ',
  'x, ,x,x,x, , , , ,x',
  'x, , ,x, , , , , ,x',
  ' , ,x,x,x, , , , ,x',
  'x, , , , , , , , , ',
];
