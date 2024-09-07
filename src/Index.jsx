import Adverting from "./components/advert/Adverting";
import Collabs from "./components/collaborators/Collabs";
import InfoGram from "./components/infoGram/InfoGram";

import Statistics from "./components/statistics/Statistics";
import Home from "./pages/home/Home";
import { useDispatch } from "react-redux";
import { closeSide } from "./redux/sidebarSlice";
import ContactForm from "./components/contactForm/ContactForm";
const Index = () => {
  let dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(closeSide())} className="homepage_margin">
      <Home />
      <InfoGram />
      <div className="ads_lenting">
        <Adverting />
        <Collabs />
      </div>
      <Statistics />
      <ContactForm />
    </div>
  );
};

export default Index;
