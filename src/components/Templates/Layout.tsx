import React, { ReactNode, VFC, memo } from 'react';
import { Header } from '../Organisms/Header';

type Props = { children: ReactNode };

export const Layout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
