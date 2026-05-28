import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { Cart } from "@/components/Cart";
import { DesignTool } from "@/components/DesignTool";
import { CheckoutForm } from "@/components/CheckoutForm";
import { OrderSummaryHeader } from "@/components/CheckoutForm/DesktopCheckout";
import { Footer } from "@/components/Footer";
import { MobileFooterHand, MobileFooterTiles } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex h-screen min-h-0 flex-col md:h-full md:flex-1">
      <Header />

      <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col overflow-hidden px-4 md:px-6 lg:pl-8 lg:pr-14">
      <PageTitle />

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto md:hidden">
        <main className="flex flex-col px-4 pb-2 pt-3">
          <CheckoutForm />
        </main>

        <footer className="relative overflow-hidden bg-transparent px-4 pb-24 pt-4">
          <div className="relative z-10 mb-2 flex flex-col items-center gap-1.5">
            <div className="flex justify-center gap-4 font-display text-base font-bold uppercase tracking-wider text-ink">
              <a href="#" className="hover:text-terracotta">
                TERMS
              </a>
              <a href="#" className="hover:text-terracotta">
                CONTACT
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <MobileFooterTiles className="h-[80px] w-[90px]" />
          </div>
          <div className="absolute bottom-0 right-0">
            <MobileFooterHand className="h-[100px] w-[120px]" />
          </div>
        </footer>
      </div>

      <main className="mx-auto hidden min-h-0 w-full max-w-[1500px] flex-1 gap-x-3 overflow-hidden px-4 py-3 md:grid md:grid-cols-[30%_45%_25%] md:grid-rows-[auto_minmax(0,1fr)] md:px-5">
        <div className="mb-2 flex w-full items-baseline gap-x-3 md:col-span-3 md:row-start-1">
          <h2 className="w-[30%] shrink-0 font-display text-2xl font-medium uppercase leading-none tracking-wider text-ink md:text-3xl">
            SHOPPING CART & DESIGN TOOL
          </h2>
          <div className="w-[45%] shrink-0" />
          <div className="w-[25%] shrink-0 min-w-0">
            <OrderSummaryHeader />
          </div>
        </div>

        <div className="min-h-0 overflow-hidden md:col-start-1 md:row-start-2">
          <Cart showHeading={false} />
        </div>
        <div className="flex min-h-0 flex-col items-start overflow-hidden md:col-start-2 md:row-start-2">
          <DesignTool />
        </div>
        <div className="flex h-full min-h-0 flex-col overflow-hidden pr-2 md:col-start-3 md:row-start-2">
          <CheckoutForm showOrderSummaryHeader={false} />
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
