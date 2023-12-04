import Adverting from "./components/advert/Adverting";
import Collabs from "./components/collaborators/Collabs";
import InfoGram from "./components/infoGram/InfoGram";
import Home from "./pages/home/Home";

const Index = () => {
  return (
    <>
      <Home />
      <InfoGram />
      <div className="ads_lenting">
        <Adverting />
        <Collabs />
      </div>
    </>
  );
};

export default Index;
