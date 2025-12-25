import Script from "next/script";
import SetupPage from "./SetupPage";
import MainLayout from "@/components/MainLaout";
import Hero from "@/components/Hero";
import QuickEasySection from "@/components/QuickEasySection";
import UltimatePCCare from "@/components/UltimatePCCare";
import WorkWithDevices from "@/components/WorkWithDevices";
import DriverPack from "@/components/DriverPack";
import FAQList from "@/components/FaqList";
import Talk from "@/components/Talk";
import CustomersReview from "@/components/CostumersReview";

// export const metadata = {
//   title: "HP - Professional Printer Download Driver & Setup Solutions",
//   description:
//     "Expert printer services including installation, troubleshooting, maintenance, and 24/7 technical assistance for all printer brands.",
//   icons: {
//     icon: "/hplogo.png",
//   },
// };

export default function Page() {
  return (
    // <>

    //   <SetupPage />
    // </>

    <MainLayout>
      {/* Hero */}
      <Hero/>
    

      {/* Quick & Easy */}
      <QuickEasySection />

      {/* Ultimate PC Care */}
      <UltimatePCCare/>

      {/* Works with devices */}
      <WorkWithDevices/>


      {/* Suitable for any computer */}
      <DriverPack/>

      {/* Contact */}
      <CustomersReview/>
      <FAQList/>
      <Talk/>
    </MainLayout>
  );
}