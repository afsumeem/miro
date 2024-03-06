import { Container } from "react-bootstrap";
import Header from "../components/shared/Header";
import HeroSection from "../components/ui/HeroSection";
import TrustedSection from "../components/ui/TrustedSection";
import Collaborate from "../components/ui/Collaborate";
import WorkTogetherSection from "../components/ui/WorkTogetherSection";
import ConnectSection from "../components/ui/ConnectSection";
import Footer from "../components/shared/Footer";
import WaysWeWork from "../components/ui/WaysWeWork";
import WayYouWork from "../components/ui/WayYouWork";
import AllKindsOfTeams from "../components/ui/AllKindsOfTeams";
import CustomersStories from "../components/ui/CustomersStories";

const HomePage = () => {
  return (
    <div>
      <Header />

      <Container>
        <HeroSection />
        <TrustedSection />
        <Collaborate />
        <WorkTogetherSection />
        <ConnectSection />
        <WaysWeWork />
        <WayYouWork />
        <AllKindsOfTeams />
        <CustomersStories />
      </Container>

      <Footer />
    </div>
  );
};

export default HomePage;
