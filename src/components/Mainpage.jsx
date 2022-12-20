import styled from "styled-components";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { addLotto } from "../redux/modules/lotto";
import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다

const StBox = styled.div`
  width: 400px;
  height: 800px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 20px;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.7);
`;

const StButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px 50px;
  color: #666;
  border: 2px solid #000;
  border-radius: 20px;
`;

const StFooter = styled.div`
  margin-top: 190px;
  text-align: center;
  color: #000;
`;

function Mainpage() {
  // dispatch 생성
  const dispatch = useDispatch();
  const lottoStore = useSelector((state) => state.lotto);

  const onClick = () => {
    const balls = Array(45)
      .fill()
      .map((v, i) => i + 1);

    const shuffle = []; // 새로운 배열

    while (balls.length > 0) {
      shuffle.push(
        balls.splice(Math.floor(Math.random() * balls.length), 1)[0]
      );
    }
    const bonus = shuffle[shuffle.length - 1];
    const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);

    dispatch(addLotto([...winBalls, bonus]));
  };

  return (
    <StBox>
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "150px",
          marginBottom: "70px",
        }}
      >
        로또 번호 자동 추출기
      </h1>
      <Form />
      <StButton onClick={onClick}>추첨 !</StButton>
      <StFooter>&copy; 이학경</StFooter>
    </StBox>
  );
}

export default Mainpage;
