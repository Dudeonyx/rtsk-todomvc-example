import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

interface ILinkProps {
  active: boolean;
  children: ReactNode;
  setFilter: () => void;
}

const Link: FunctionComponent<ILinkProps> = ({
  active,
  children,
  setFilter,
}) => (
  <a
    className={classnames({ selected: active })}
    style={{ cursor: 'pointer' }}
    onClick={() => setFilter()}
  >
    {children}
  </a>
);

export default Link;
