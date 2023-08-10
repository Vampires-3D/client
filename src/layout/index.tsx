import {PropsWithChildren} from 'react';
import {Footer} from './Footer.tsx';
import {Header} from './Header.tsx';

export function Layout({children}: PropsWithChildren) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
