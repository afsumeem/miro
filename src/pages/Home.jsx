import { Container } from "react-bootstrap";
import Header from "../components/shared/Header";
import HeroSection from "../components/ui/HeroSection";
import TrustedSection from "../components/ui/TrustedSection";
import Collaborate from "../components/ui/Collaborate";
import WorkTogetherSection from "../components/ui/WorkTogetherSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <HeroSection />
        <TrustedSection />
        <Collaborate />
        <WorkTogetherSection />
      </Container>
    </div>
  );
};

export default HomePage;
