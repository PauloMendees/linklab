import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.scss';
import Head from 'next/head';
import { Header } from '@/components/shared/Header';
import { AppProvider } from '@/components/shared/AppProvider';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Halogenn',
  description: 'Itens para laboratórios',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <body className={dmSans.className + ' main-background'}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
