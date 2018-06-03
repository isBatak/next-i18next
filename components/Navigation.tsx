import * as React from 'react';
import Link from 'next/link';

export interface INavigationProps {
}

export class Navigation extends React.Component<INavigationProps, any> {
  public render() {
    return (
      <ul>
        <li>
          <Link href='/interpolation'>
            <a>
              Interpolation
            </a>
          </Link>
        </li>
        <li>
          <Link href='/formating'>
            <a>
              Formating
            </a>
          </Link>
        </li>
        <li>
          <Link href='/plurals'>
            <a>
              Plurals
            </a>
          </Link>
        </li>
        <li>
          <Link href='/nesting'>
            <a>
              Nesting
            </a>
          </Link>
        </li>
        <li>
          <Link href='/context'>
            <a>
              Context
            </a>
          </Link>
        </li>
        <li>
          <Link href='/trans'>
            <a>
              Trans
            </a>
          </Link>
        </li>
      </ul>
    );
  }
}
