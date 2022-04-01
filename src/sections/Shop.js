import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import { motion } from "framer-motion";
//Images:
import img1 from "../assets/cursos/1.jpeg";
import img2 from "../assets/cursos/2.jpeg";
import img3 from "../assets/cursos/3.jpeg";
import img4 from "../assets/cursos/4.jpeg";
import img5 from "../assets/cursos/5.jpeg";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  /* background-color: ${(props) => props.theme.green}; */

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script", Arial, Helvetica, sans-serif;
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    padding-top: 5rem;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.fontlg};
    margin-top: 1rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{
        filter: "grayscale(100%)",
      }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
        },
        //we hae to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      //horizontal scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
        },
        //we hae to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  return (
    <Section ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        ¡Nuevos cursos!
      </Title>
      <Left>
        <p>
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
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img1} title="Curso 1" />
        <Product img={img2} title="Curso 2" />
        <Product img={img3} title="Curso 3" />
        <Product img={img4} title="Curso 4" />
        <Product img={img5} title="Curso 5" />
      </Right>
    </Section>
  );
};

export default Shop;
