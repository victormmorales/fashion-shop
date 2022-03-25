import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <div>
      <CoverVideo />
      <Logo />
      <NavBar />
      <Section>Home</Section>
    </div>
  );
};

export default Home;
