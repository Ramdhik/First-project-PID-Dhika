import HeroComponent from './component/Hero';
import Product from './component/product/page';
import CustomersTest from './component/Customers';
import Footer from './component/Footer';
import FeatureComponent from './features/page';

export default function Home() {
  return (
    <>
      <main className="h-screen relative">
        <HeroComponent />
        <FeatureComponent />
        <Product />
        <CustomersTest />
        <Footer />
      </main>
    </>
  );
}
