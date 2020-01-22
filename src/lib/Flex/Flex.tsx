import * as React from 'react';
import './index.css';

interface FlexProps {
  className?: string;
  children?: React.FC;
  style?: object;
}

export default function Flex({ className='', children, style }: FlexProps) {
  return (
    <div className={`flex-block ${className}`} style={style}>
      {children}
    </div>
  )
}
