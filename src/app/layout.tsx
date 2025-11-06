import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "RMR Construction Group – Building cities and towns for tomorrow's communities.",
  description: "Established construction specialists delivering high-value facades, roofing, and development solutions across the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* Hidden form for Netlify Forms detection - do not remove */}
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="company" />
          <textarea name="message"></textarea>
          <select name="bestTime">
            <option value="">Anytime</option>
            <option value="Morning (9am–12pm)">Morning (9am–12pm)</option>
            <option value="Afternoon (12pm–3pm)">Afternoon (12pm–3pm)</option>
            <option value="Late afternoon (3pm–6pm)">Late afternoon (3pm–6pm)</option>
          </select>
        </form>
        {/* Hidden form for Contact Page - do not remove */}
        <form
          name="contact-page"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="contact-page" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="company" />
          <select name="subject">
            <option value="">Select a subject</option>
            <option value="airspace">AirSpace</option>
            <option value="fire-remediation">Fire Remediation</option>
            <option value="rainscreen">Rainscreen Cladding</option>
            <option value="composite">Composite Roofing</option>
            <option value="windows">Windows & Curtain Walling</option>
            <option value="metal">Metal Roofing</option>
            <option value="standing">Standing Seam Roofing</option>
            <option value="flat">Flat Roofing</option>
            <option value="general">General Enquiry</option>
            <option value="quote">Request a Quote</option>
          </select>
          <select name="bestTime">
            <option value="">Anytime</option>
            <option value="morning">Morning (9am–12pm)</option>
            <option value="afternoon">Afternoon (12pm–3pm)</option>
            <option value="late-afternoon">Late afternoon (3pm–6pm)</option>
          </select>
          <textarea name="message"></textarea>
        </form>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
