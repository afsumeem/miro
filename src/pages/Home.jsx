import { Container } from "react-bootstrap";
import Header from "../components/shared/Header";
import HeroSection from "../components/ui/HeroSection";
import TrustedSection from "../components/ui/TrustedSection";
import Collaborate from "../components/ui/Collaborate";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <HeroSection />
        <TrustedSection />
        <Collaborate />
      </Container>
    </div>
  );
};

export default HomePage;
