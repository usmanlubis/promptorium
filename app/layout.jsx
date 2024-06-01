import "@/styles/globals.css";

export const metadata = {
  title: 'Promptorium',
  description: 'Discover & Share AI prompt',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en-US">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <div className="app">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;