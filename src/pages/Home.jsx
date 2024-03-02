import { Container } from "react-bootstrap";
import Header from "../components/shared/Header";
import HeroSection from "../components/ui/HeroSection";
import TrustedSection from "../components/ui/TrustedSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <HeroSection />
        <TrustedSection />
      </Container>
    </div>
  );
};

export default HomePage;
