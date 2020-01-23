import * as React from 'react';
import './index.css';
import { FlexProps, } from './types';

export default function Flex({ justifyContent, direction, className = '', children, style={} }: FlexProps) {
  let classesList: string = '';
  classesList += justifyContent? ` ${justifyContent}` : '';
  classesList += direction? ` ${direction}` : '';
  classesList += className? ` ${className}` : '';


  return (
    <div className={`flex-block${classesList}`} style={style}>
      {children}
    </div>
  )
}
