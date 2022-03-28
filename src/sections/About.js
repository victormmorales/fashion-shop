import styled from "styled-components";
//images:
import img1 from "../assets/Images/1.jpg";
import img2 from "../assets/Images/2.jpg";
import img3 from "../assets/Images/3.jpg";

// const Container = styled.div`
//   background-color: ${(props) => props.theme.green};
// `;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script", Arial, Helvetica, sans-serif;
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative:
  z-index: 5;
  margin-top: 20%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const Home = () => {
  return (
    <div>
      <Section id="fixed-target">
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          Sobre mí
        </Title>
        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          gravida, urna nec cursus iaculis, sem nibh tempus nunc, eu rhoncus
          nisl magna at enim. Nullam bibendum lacus ut ex malesuada, dapibus
          <br />
          <br />
          aliquet justo viverra. Praesent condimentum, lectus sed bibendum
          bibendum, est nulla rutrum ante, cursus hendrerit felis neque a neque.
          Nulla eget varius lorem. Duis id dui et sapien interdum efficitur.
          Quisque ipsum lacus, commodo sit amet massa eget, ultrices tincidunt
          ex.
          <br />
          <br />
          Aenean pulvinar molestie dolor, non ullamcorper est rhoncus in.
          Phasellus congue orci ut tellus lobortis facilisis. Suspendisse a
          accumsan sapien. Etiam et dolor tortor.
        </Left>
        <Right>
          <img src={img3} alt="About us" />
          <img
            data-scroll
            data-scroll-speed="5"
            src={img2}
            alt="About us"
            className="small-img-1"
          />
          <img
            data-scroll
            data-scroll-speed="-2"
            src={img1}
            alt="About us"
            className="small-img-2"
          />
        </Right>
      </Section>
    </div>
  );
};

export default Home;
