import Herosection from "../app/(components)/home-components/Herosection/index";
import Trusted from "../app/(components)/home-components/Trusted/index";
import Incentives from "../app/(components)/home-components/Incentives/index";
import Features from "../app/(components)/home-components/Features/index";
import Counter from "../app/(components)/home-components/Counter/index";
import Members from "../app/(components)/home-components/Members/index";
import Footer from "../app/(components)/home-components/Footer/index";
export default function Home() {
  return (
    <div>
      <Herosection />
      <Trusted />
      <Incentives />
      <Features />
      <Counter />
      <Members />
      <Footer />
    </div>
  );
}
