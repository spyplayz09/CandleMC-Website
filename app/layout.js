import "./globals.css";

export const metadata = {
  title: "CandleMC — Minecraft SMP",
  description: "Your next adventure starts here."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
