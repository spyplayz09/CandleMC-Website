import "./globals.css";

export const metadata = {
  title: "CandleMC — Minecraft Server",
  description: "Survive. Fight. Become the best."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}