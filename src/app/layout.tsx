import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { Header } from '@/components/header';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import { AppProvider } from '@/providers/app-provider';
import { cn } from '@/utils/style';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Lumi',
  description: 'Software para gestão de créditos de energia',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <AppProvider>
          <div className='flex min-h-screen w-full mx-auto items-center flex-col max-w-7xl'>
            <Header />
            <div className='flex flex-col flex-1 justify-between h-full w-full'>
              <main className='flex flex-col flex-1 px-4 py-8 overflow-y-auto'>
                {children}
              </main>
              <footer className='bg-background flex flex-col gap-8 mb-8 justify-center items-center'>
                <Separator />
                <p className='text-muted-foreground font-semibold'>
                  Developed by Ruver Dornelas.
                </p>
              </footer>
              <Toaster />
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
