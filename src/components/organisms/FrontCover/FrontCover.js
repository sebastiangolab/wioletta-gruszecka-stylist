import React, { useEffect, useRef, useState } from "react";
import {
  Wrapper,
  Row,
  Column1,
  Column2,
  TextSection,
  Socials,
  Image,
} from "./FrontCover.styles";
import Button from "components/atoms/Button";
import PageTitle from "components/atoms/PageTitle";
// import FrontCoverImg from "images/front-cover-img.png";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const FrontCover = ({ text }) => {
  const element = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(element.current.clientHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      <Row>
        <Column1 ref={element}>
          <TextSection>
            <PageTitle>Wioletta Gruszecka Stylist</PageTitle>
            <p>{text}</p>
            <Button to="/services">View services</Button>
          </TextSection>

          <Socials>
            <a
              href="https://www.facebook.com/wiolettagruszeckahair"
              title="Facebook"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookF />
              Like our fanpage
            </a>

            <a
              href="https://www.instagram.com/wioletta_gruszecka_stylist/"
              title="Instagram"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
              Follow our profile
            </a>

            <a
              href="https://www.tiktok.com/@wiolagruszecka"
              title="Tik tok"
              rel="noreferrer"
              target="_blank"
            >
              <FaTiktok />
              Follow our TikTok
            </a>

          </Socials>
        </Column1>

        <Column2 height={height}>
          <Image>
            <StaticImage
              src="../../../images/front-cover-img.png"
              width={754}
              alt="hair services"
              placeholder="none"
            />
          </Image>
        </Column2>
      </Row>
    </Wrapper>
  );
};

export default FrontCover;
