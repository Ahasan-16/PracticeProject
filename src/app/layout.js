import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader
          showSpinner={false}
      />
        {children}
      </body>
    </html>
  );
}
