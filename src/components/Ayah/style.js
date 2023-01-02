import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px 10px;
  margin: 10px 0;
  border: 1px solid #00aa8b;
  border-radius: 5px;
  color: rgb(231, 233, 234);
  background-color: #1f2125;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftItems = styled.div`
  flex: 5%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const AyahNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: #00aa8b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  flex: 80%;
  width: 100%;
  font-size: 18px;
  line-height: 30px;
  text-align: right;
`;
export const SvgContainer = styled.span`
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const AudioPlayer = styled.audio``;
