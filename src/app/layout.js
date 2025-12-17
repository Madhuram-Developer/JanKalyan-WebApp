import "./globals.css";



export const metadata = {
  title: "JanKalyan App",
  description: "The JanKalyan App Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
