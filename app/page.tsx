import Image from "next/image";
import CategoryList from "./_components/categories-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductsList from "./_components/products-list";

export default function Home() {
  return (
    <>
      <Header />

      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-01.svg"
          alt="Até 30% de desconto em pizzas"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>

      <ProductsList />
    </>
  );
}
