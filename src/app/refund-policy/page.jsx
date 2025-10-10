"use client";
import MainLayout from "@/components/MainLaout";
import React from "react";

export default function RefundPolicyPage() {
  return (
    <MainLayout>
      <main className="bg-gray-50 min-h-screen text-gray-900">
      {/* HERO */}
      <header className="bg-gradient-to-b from-sky-800 to-sky-700 text-white pb-16 pt-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Refund Policy
          </h1>
          <p className="mt-4 text-sky-100 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Our policies are designed to protect your rights and ensure a trustworthy, respectful experience.
          </p>
          <p className="mt-4 text-sky-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Customers may apply for refunds at the RETURNS & EXCHANGES center of Easyconnect (a wholly owned subsidiary of Easyconnect) for any legitimate order-related issues.
          </p>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <article className="prose prose-slate max-w-none lg:prose-lg xl:prose-xl">
          {/* Introduction */}
          <p className="mb-4 leading-relaxed">
            Every customer is valuable to Easyconnect, and the company strives to ensure that users enjoy its products and services. The functionality of trial versions is limited to help buyers make informed decisions and avoid purchasing incorrect products.
          </p>
          <p className="mb-4 leading-relaxed">
            Easyconnect offers a "try-before-you-buy" feature with a 14-day money-back guarantee on most products. Refunds are granted only under specified conditions and are unavailable after the guarantee period.
          </p>

          {/* Section: Circumstances of No Refund */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-6">Circumstances of No Refund</h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Non-Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Failure to read the product description before purchase. Refunds are not provided if dissatisfaction arises from misunderstanding the product's features or functions. Exchanges may be allowed if the price difference does not exceed USD $20.</li>
            <li>Refund requests related to credit card fraud or unauthorized payments must be addressed via the card issuer. Easyconnect cannot cancel processed orders but may provide exchanges for alternative products. Subscription cancellations follow our Terms of Use.</li>
            <li>Delayed registration code delivery within two hours post-purchase. Customers may contact the Easyconnect Support Center for assistance.</li>
            <li>Purchasing the wrong product immediately followed by acquiring the correct one elsewhere.</li>
            <li>Price differences for products between regions or companies.</li>
            <li>Partial bundle refunds are not possible through our payment processor; a full refund may be provided if a correct product is purchased separately.</li>
            <li>Customer changes their mind post-purchase.</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refund requests where customers refuse to assist support staff or provide necessary information to troubleshoot technical issues.</li>
            <li>Orders placed beyond the 14-day guarantee period experiencing technical issues.</li>
          </ul>

          {/* Section: Accepted Circumstances */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-6">Accepted Circumstances</h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Non-Technical Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Purchase of services like Registration Backup Service (RBS), Download Insurance Service, or Extended Download Service (EDS) without awareness that they can be canceled after purchase. Easyconnect will assist in recovering costs via the payment platform.</li>
            <li>Exchanging a program by purchasing the correct one, after which the original purchase cost is refunded.</li>
            <li>Duplicate purchases or similar product purchases. Easyconnect may exchange one product or refund one purchase.</li>
            <li>No response from Easyconnect Support within 24 hours, registration code not received, and the customer no longer needs the product. Refund will be issued.</li>
            <li>Purchasing alternative software due to technical errors. Product exchange or full refund may be issued.</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl font-semibold mt-6 mb-4">Technical Problems</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Purchased software has significant technical issues with no response for 30 days. Customers may receive a refund if they choose not to wait for future upgrades.</li>
          </ul>

          <h4 className="text-xl sm:text-2xl font-medium mt-6 mb-2">Refund Process</h4>
          <p className="mb-4 leading-relaxed">
            Once a refund is approved, the associated license will be deactivated. For downloaded software, the product must be removed from your device. Refunds are issued to the original payment method (credit card, bank account, or PayPal). Processing times may vary, typically 48 to 72 hours.
          </p>

          <hr className="my-8" />
          <p className="text-sm text-gray-600">
            Updated: {new Date().getFullYear()} • Easyconnect LLC
          </p>
        </article>
      </section>
    </main>
    </MainLayout>
  );
}
