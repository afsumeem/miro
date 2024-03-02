import { Container } from "react-bootstrap";
import Header from "../components/shared/Header";
import HeroSection from "../components/ui/HeroSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <HeroSection />
      </Container>
    </div>
  );
};

export default HomePage;
