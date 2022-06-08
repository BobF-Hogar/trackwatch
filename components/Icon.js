import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/selection.json';

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

Icon.loadFont();

export default Icon;
