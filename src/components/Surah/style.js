import styled from "styled-components";

export const Surah = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #343a40;
  border-radius: 3px;
  color: rgb(231, 233, 234);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 30px;
      height: 30px;
      margin: 0 10px;
      position: relative;
      background-color: #343a40;
      border-radius: 3px;
      transform: rotate(45deg);
      &::before {
        content: attr(data-number);
        transform: rotate(-45deg);
        z-index: 0;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
      }
    }
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    p {
      font-size: 13px;
    }
  }
  &:hover {
    border-color: #00aa8b;
    cursor: pointer;
    div {
      div {
        background-color: #00aa8b;
      }
    }
  }
`;
