import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Reputation Builders',
  description: 'Premier home remodeling service in Modesto, CA. Transform your home with our expert craftsmanship.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={robotoCondensed.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 -mt-0">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
