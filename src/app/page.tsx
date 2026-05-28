import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { Cart } from "@/components/Cart";
import { DesignTool } from "@/components/DesignTool";
import { CheckoutForm } from "@/components/CheckoutForm";
import { Footer } from "@/components/Footer";
import { MobileFooterHand, MobileFooterTiles } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex h-screen min-h-0 flex-col overflow-hidden md:h-full md:flex-1">
      <Header />
      <PageTitle />

      {/* Mobile: single column, scrollable */}
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

      {/* Desktop: 3 columns */}
      <main className="mx-auto hidden min-h-0 w-full max-w-[1500px] flex-1 gap-3 overflow-hidden px-4 py-3 md:flex md:px-5">
        <div className="min-w-0 w-[34%] shrink-0 overflow-hidden">
          <Cart />
        </div>
        <div className="flex min-w-0 w-[36%] shrink-0 items-start overflow-hidden">
          <DesignTool />
        </div>
        <div className="flex h-full min-h-0 min-w-0 w-[30%] shrink-0 flex-col overflow-hidden pr-2">
          <CheckoutForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
