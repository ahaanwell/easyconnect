// "use client";
import MainLayout from "@/components/MainLaout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "HP - Professional Printer Download Driver & Setup Solutions",
  description:
    "Expert printer services including installation, troubleshooting, maintenance, and 24/7 technical assistance for all printer brands.",
};
export default function EulaPage() {
  return (
    <MainLayout>
      <main className="bg-gray-50 min-h-screen text-gray-900">
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68e4b9cd615cd1194e6d045f/1j6unbirp';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
      {/* HERO */}
      <header className="bg-gradient-to-b from-sky-800 to-sky-700 text-white pb-16 pt-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            End User License Agreement
          </h1>
          <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            This agreement outlines your rights and responsibilities when using EasyConnect software. Please read carefully to ensure proper use.
          </p>
          <p className="mt-4 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            By using our software, you acknowledge and accept these terms, which are designed to protect both your interests and those of EasyConnect LLC.
          </p>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <article className="prose prose-slate max-w-none lg:prose-lg xl:prose-xl">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">End User License Agreement</h2>

          <p className="mb-4 leading-relaxed">
            Upon proceeding, a system scan will start automatically. You may continue other tasks while the scan runs, but it cannot be interrupted once initiated.
          </p>

          <p className="mb-4 leading-relaxed">
            Before installing or accessing the EasyConnect software, including any related files, media, or documentation (collectively referred to as the “Software”), you must accept this agreement. By clicking “Accept,” installing, or using the Software, you agree to be legally bound by these terms. This agreement constitutes the full understanding between you and EasyConnect LLC and supersedes any prior communications regarding the Software. If you do not agree, do not install or use the Software.
          </p>

          {/* Section 1 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 1. Ownership of Intellectual Property</h3>
          <p className="mb-4 leading-relaxed">
            The Software is protected by copyright, trademarks, and other intellectual property laws. All rights, title, and interest in the Software are owned exclusively by EasyConnect LLC, located at 14 West Second Street, Suite 108, Upland, CA 91786. Third-party content included or accessible through the Software remains the property of the respective owner. This agreement does not grant you rights to such third-party content. All rights not expressly granted are reserved by EasyConnect. The Software is licensed, not sold.
          </p>

          {/* Section 2 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 2. License Terms and Restrictions</h3>
          <p className="mb-4 leading-relaxed">
            Subject to compliance with this agreement, EasyConnect grants you a limited, non-transferable, non-exclusive license to install and use the Software on a single device. You may use the Software for personal or internal business purposes only. A single backup copy may be made for archival purposes and may only be used when the original is unavailable. You may not remove or alter copyright notices, share the Software, sublicense it, rent, or lease it. Reverse engineering, decompiling, or disassembling is prohibited except where explicitly allowed by law. Updates or supplementary components provided by EasyConnect are also subject to this agreement.
          </p>

          {/* Section 3 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 3. Limited Warranty</h3>
          <p className="mb-4 leading-relaxed">
            EasyConnect guarantees that the Software will operate substantially as described in the accompanying documentation for thirty (30) days after installation (“Warranty Period”), provided the issue is reported within this timeframe. This warranty does not cover misuse, accidents, or unauthorized modifications. Remedies include repair, replacement, or refund of the purchase price, at EasyConnect’s discretion.
          </p>

          {/* Section 4 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 4. Disclaimer of Additional Warranties</h3>
          <p className="mb-4 leading-relaxed">
            The Software is provided “as is” and “as available.” Except for the limited warranty above, EasyConnect disclaims all other warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. EasyConnect does not guarantee uninterrupted or error-free operation. Users assume all risks associated with performance and quality of the Software.
          </p>

          {/* Section 5 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 5. Limitation of Damages</h3>
          <p className="mb-4 leading-relaxed">
            To the extent permitted by law, EasyConnect is not liable for indirect, incidental, consequential, or punitive damages arising from your use of the Software, including lost profits or data. Some jurisdictions do not allow exclusion of such damages, so limitations may not apply in all cases.
          </p>

          {/* Section 6 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 6. Maximum Liability</h3>
          <p className="mb-4 leading-relaxed">
            EasyConnect’s total liability for any claim related to the Software will not exceed the amount you paid for the Software. This limitation applies regardless of legal theory, whether in contract, tort, or otherwise.
          </p>

          {/* Section 7 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 7. Export Compliance</h3>
          <p className="mb-4 leading-relaxed">
            You must comply with all U.S. export laws. You agree not to export or re-export the Software to prohibited countries, persons, or entities. You represent that you are not restricted from receiving the Software under these laws.
          </p>

          {/* Section 8 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 8. Taxes</h3>
          <p className="mb-4 leading-relaxed">
            You are responsible for any applicable taxes related to your acquisition or use of the Software, excluding taxes based on EasyConnect’s income.
          </p>

          {/* Section 9 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 9. Government End Users</h3>
          <p className="mb-4 leading-relaxed">
            If acquired by the U.S. Government, the Software is provided with “Restricted Rights” as defined under applicable statutes and regulations. Use, reproduction, or disclosure is subject to government contract provisions.
          </p>

          {/* Section 10 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 10. Termination</h3>
          <p className="mb-4 leading-relaxed">
            EasyConnect may terminate this agreement immediately if you fail to comply with any term. Upon termination, you must delete all copies of the Software and cease use.
          </p>

          {/* Section 11 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 11. Governing Law</h3>
          <p className="mb-4 leading-relaxed">
            For U.S. users, this agreement is governed by California law. For non-U.S. users, Hong Kong law applies. If any provision is invalid, the remaining terms remain in effect. Amendments must be in writing and signed by EasyConnect.
          </p>

          {/* Section 12 */}
          <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Section 12. Dispute Resolution</h3>
          <p className="mb-4 leading-relaxed">
            Most issues can be resolved through EasyConnect support. If unresolved, disputes may proceed to informal notice, mediation, or arbitration. Terms apply to all related parties, including affiliates.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Claim Notification</h4>
          <p className="mb-4 leading-relaxed">
            Send written notice to EasyConnect including your details and the Software in question: <a href="mailto:support@easyconnectnow.com" className="text-sky-700 underline">support@easyconnectnow.com</a>. The purpose is to attempt informal resolution.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Mediation</h4>
          <p className="mb-4 leading-relaxed">
            Mediation is voluntary and non-binding. For U.S. users, mediation can be conducted via JAMS or AAA. For international users, contact EasyConnect.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Arbitration</h4>
          <p className="mb-4 leading-relaxed">
            U.S. users may opt for binding arbitration rather than court action. Arbitration is individual, confidential, and final, subject to FAA rules.
          </p>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Opting Out</h4>
          <p className="mb-4 leading-relaxed">
            You may reject arbitration by emailing EasyConnect within 30 days of Software acquisition: <a href="mailto:support@easyconnectnow.com" className="text-sky-700 underline">support@easyconnectnow.com</a>. Include your name, date, and license info. Opt-out does not affect other rights.
          </p>

          <hr className="my-8" />

          <p className="text-sm text-gray-600">
            Updated: {new Date().getFullYear()} • EasyConnect LLC, 14 West Second Street, Suite 108, Upland, CA 91786
          </p>
        </article>
      </section>
    </main>
    </MainLayout>
  );
}
