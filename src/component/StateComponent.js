import { useState } from "react";

const StateComponent = () => {

    /*
    103p
    state란 컴포넌트에서 변화하는 값을 의미한다
    state가 변경되면 컴포넌트를 리렌더링 시킨다 -> 렌더링: 화면출력
    함수형 컴포넌트에서는 useState()를 사용한다
    */

    //함수형 컴포넌트
    //1.
    // let data = useState('초기값');
    // console.log(data);
    // let a = data[0];
    // let b = data[1];

    //2.
    let [data, setData] = useState('초기값');
    // console.log(data); //state 값
    // console.log(setData); //state setter 함수
    
    let func = () =>  setData("변경");
    let enter = () => setData("입장");
    let exit = () => setData("퇴장");

    //state는 여러개일 수 있다
    let [color, setColor] = useState("red"); 
    
    console.log(color);

    return(
        <>
            <h3 style={{color: color}}>state값: {data}</h3>
            <button onClick={func}>값 변경하기</button>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>

            <hr/>
            <button onClick={() => setColor("red")}>붉은색</button>
            <button onClick={() => setColor("blue")}>푸른색</button>
            <button onClick={() => setColor("yellow")}>그 사이 3초 그 짧은색</button>
        </>
    )
}

export default StateComponent;