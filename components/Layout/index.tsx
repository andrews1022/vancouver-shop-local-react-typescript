// next
import Head from 'next/head';

// react
import React from 'react';
import type { ReactNode } from 'react';

// components
import Footer from '../Footer';
import Nav from '../Nav';

// styled components
import * as S from './styles';

// props
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <Head>
      <meta name='description' content='Generated by create next app!! :D' />
      <link rel='icon' href='/favicon.ico' />
      <title>Vancouver Shop Local</title>
    </Head>

    <Nav />

    <main>{children}</main>

    <Footer />
  </S.Wrapper>
);

export default Layout;

// <Image src='/images/vercel.svg' alt='Vercel Logo' width={72} height={16} />
