import "./globals.css";

export const metadata = {
  title: "openAI Chat",
  description: "Test out the openAI API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
