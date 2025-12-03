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
  <option value="New contact from RSD Website - AirSpace">AirSpace</option>
  {/* Hidden for now - Fire Remediation */}
  {/* <option value="New contact from RSD Website - Fire Remediation">Fire Remediation</option> */}
  {/* Hidden - moved to RMR Facades */}
  {/* <option value="New contact from RSD Website - Rainscreen Cladding">Rainscreen Cladding</option> */}
  {/* <option value="New contact from RSD Website - Composite Roofing">Composite Roofing</option> */}
  {/* <option value="New contact from RSD Website - Windows & Curtain Walling">Windows & Curtain Walling</option> */}
  {/* <option value="New contact from RSD Website - Metal Roofing">Metal Roofing</option> */}
  {/* <option value="New contact from RSD Website - Standing Seam Roofing">Standing Seam Roofing</option> */}
  {/* <option value="New contact from RSD Website - Flat Roofing">Flat Roofing</option> */}
  <option value="New contact from RSD Website - General Enquiry">General Enquiry</option>
  <option value="New contact from RSD Website - Request a Quote">Request a Quote</option>
</select>
          <select name="bestTime">
            <option value="">Anytime</option>
            <option value="morning">Morning (9am–12pm)</option>
            <option value="afternoon">Afternoon (12pm–3pm)</option>
            <option value="late-afternoon">Late afternoon (3pm–6pm)</option>
          </select>
          <textarea name="message"></textarea>
         </form>
        <Header />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
