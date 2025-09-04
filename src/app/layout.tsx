import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Elite Home Remodeling | Transform Your Space',
    template: '%s | Elite Home Remodeling',
  },
  description: 'Premium kitchen and bathroom remodeling services. Transform your home with our expert craftsmanship and innovative design solutions.',
  keywords: ['home remodeling', 'kitchen renovation', 'bathroom remodel', 'contractor', 'luxury renovation'],
  authors: [{ name: 'Elite Home Remodeling' }],
  creator: 'Elite Home Remodeling',
  publisher: 'Elite Home Remodeling',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Elite Home Remodeling | Transform Your Space',
    description: 'Premium kitchen and bathroom remodeling services. Transform your home with our expert craftsmanship.',
    siteName: 'Elite Home Remodeling',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Home Remodeling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Home Remodeling | Transform Your Space',
    description: 'Premium kitchen and bathroom remodeling services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                anonymize_ip: true,
              });
            `,
          }}
        />
        {/* Tidio Chat Widget */}
        <script
          src="//code.tidio.co/your-tidio-key.js"
          async
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
