import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// Fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const fixelText = localFont({
  src: [
    { path: '../public/fonts/FixelText-Regular.woff2', weight: '400' },
    {
      path: '../public/fonts/FixelText-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    { path: '../public/fonts/FixelText-Medium.woff2', weight: '500' },
    {
      path: '../public/fonts/FixelText-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    { path: '../public/fonts/FixelText-Black.woff2', weight: '900' },
    {
      path: '../public/fonts/FixelText-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-fixel-text',
});
const fixelDisplay = localFont({
  src: [
    { path: '../public/fonts/FixelDisplay-Black.woff2', weight: '900' },
    {
      path: '../public/fonts/FixelDisplay-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-fixel-display',
});

export const metadata = {
  metadataBase: new URL('https://vitaliypanchenko.com/'),
  // title: 'Panchenko. - NextJS, Tailwind, shadcn/ui starter template',
  title: {
    default: 'Panchenko. - NextJS, Tailwind, shadcn/ui starter template',
    template: '%s | Panchenko. - NextJS, Tailwind, shadcn/ui starter template',
  },
  description:
    'This is my starter template with main settings for fastest development process.',
  openGraph: {
    title: 'Panchenko. - NextJS, Tailwind, shadcn/ui starter template',
    description:
      'This is my starter template with main settings for fastest development process.',
    type: 'website',
    locale: 'en_US',
    url: 'https://vitaliypanchenko.com/',
    siteName: 'Panchenko.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Panchenko." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fixelText.variable} ${fixelDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
