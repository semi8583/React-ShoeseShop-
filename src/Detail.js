import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

// class Detail2 extends React.Component {
//     componentDidMount(){
//생성자
//     }
//     componentWillUnmount(){
//소멸자
//     }
// }
function Detail(props) {
  let [alert, alert변경] = useState(true);
  let history = useHistory(); //이동했던 모든 URL방문기록
  let { id } = useParams(); ///:id 같은 변수 사용

  let [인풋, 인풋변경] = useState();
  useEffect(() => {
    //컴포넌트가 실행될때 update될때 실행
    let 타이머 = setTimeout(() => {
      alert변경("false");
    }, 2000); //2초후에
    // return function 어쩌구(()=>{}) //unmount 소멸자
    console.log("안녕 ㅇㅇㅇ");
    return ()=>{clearTimeout(타이머)} //타이머 제거 
  }, [alert]); //alert가 변경될때만 실시

  var date = id == props.shoes[id].id ? props.shoes[id] : null;
  // let 찾은상품 = props.shoes.find(function(상품){ return 상품.id == id});
  return (
    <div className="container">
      <박스>
        <제목 색상={"red"}>상세페이지</제목>
        <제목 색상={"blue"}>상세페이지2</제목>
        <제목 className="red">Detail</제목>
      </박스>
      <input
        onChange={(e) => {
          인풋변경(e.target.value);
        }}
      />
      {alert == true ? (
        <p className="my-alert2">제고가 얼마 남지 않았습니다</p>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={date.url} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{date.title}</h4>
          <p>{date.content}</p>
          <p>{date.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack(); // 리액트 라우터 라이브러리
              //history.push('/'); 위와 같음
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
