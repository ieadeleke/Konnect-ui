/* ============================================================
   DisplayLayout — the public-facing page shell.
   Wraps page content with the shared chrome (Navbar now, Footer
   later). Pages import this and render their sections as children.
   ============================================================ */

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DisplayLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
