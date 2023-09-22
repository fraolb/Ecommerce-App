import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Provider from "../redux/provider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Provider>{children}</Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
