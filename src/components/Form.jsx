import styled from "styled-components";
import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다

const StLottoBox = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
  height: 100px;
  border: 2px solid #000;
  border-radius: 20px;
  position: relative;
`;

const StLottoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 40px;
  &:last-child {
    margin-left: 15px;
  }
  &::before {
    color: #000;
    font-size: 30px;
    position: absolute;
    bottom: 48px;
    right: 53px;
    content: "+";
  }
`;

function Form() {
  const lottoStore = useSelector((state) => state.lotto);

  let getColor = (number) => {
    let background;
    if (number < 10) {
      return (background = "#00d0ff");
    } else if (number < 20) {
      return (background = "#f7d6ed");
    } else if (number < 30) {
      return (background = "#ffff63");
    } else if (number < 40) {
      return (background = "#afa0eb");
    } else {
      return (background = "#e2e2e2");
    }
  };

  return (
    <StLottoBox>
      {lottoStore.map((state, index) => {
        return (
          <StLottoItem key={index} style={{ backgroundColor: getColor(state) }}>
            {state}
          </StLottoItem>
        );
      })}
    </StLottoBox>
  );
}

export default Form;
