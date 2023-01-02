import styled from "styled-components";

const sizes = {
  mobile: "320px",
  tablet: "500px",
  laptop: "769px",
};

export const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
};

export const Wrapper = styled.div`
  background-color: #1f2125;

  @media ${devices.mobile} {
    padding: 0 10px;
  }
  @media ${devices.tablet} {
    padding: 0 25px;
  }
  @media ${devices.laptop} {
    padding: 0 100px;
  }
`;

export const ImgWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
export const SurahsWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  padding-bottom: 50px;
  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
