import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

import Nav from "@/components/Nav bar/nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Nav>{children}</Nav>
        </ThemeRegistry>
      </body>
    </html>
  );
}
