import styled from "styled-components";

export const ClockWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 120px;
    color: #bd6cff;
    font-family: "Nabla", cursive;
    letter-spacing: 0.1em;
  }
  a {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 25px;
  }

  @media (max-width: 760px) {
    h2{
      font-size: 60px;

    }
    
  }
`;
