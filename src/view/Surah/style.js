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
    padding: 50px 10px;
  }
  @media ${devices.tablet} {
    padding: 50px 25px;
  }
  @media ${devices.laptop} {
    padding: 50px 200px;
  }
`;

export const GoBackButton = styled.button`
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #00aa8b;
  background-color: #1f2125;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    color: #00aa8b;
  }
`;
