import React, { CSSProperties } from 'react';
import Container from '../Container';
import classname from 'classnames';
import './style.css';

interface IRowProps {
  colPerRow?: '1' | '2' | '3' | '4',
  className?: string,
  style?: CSSProperties
}

const Row: React.FC<IRowProps> = (props) => {
  const className = classname(
    'app-flex-row',
    (`col-per-row-${props.colPerRow || 'default'}`),
    props.className
  );
  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

interface IColProps {
  width?: string;
  className?: string,
}

const Col: React.FC<IColProps> = (props) => {
  const className = classname(
    'app-flex-col',
    props.className

  );
  const style: React.CSSProperties = {
    width: props.width,
  }
  return (
    <div className={className} style={style}>
      {props.children}
    </div>
  );
}

const Flex = {
  Row,
  Col
}

export default Flex;