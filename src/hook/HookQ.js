import { useEffect, useRef, useState } from "react";


const HookQ = () => {

    /*
    1. 컴포넌트가 마운트된 이후에 한번만 id태그에 포커스를 준다 -> 바로 아이디 입력할 수 있도록 포커싱 주기

    2. id, pw는 state로 관리한다
    로그인버튼 클릭시 공백이라면 공백인 태그에 포커스 주기
    로그인버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력
    */

    //데이터 관리
    const [data, setData] = useState({id: '', pw: ''});



    //마운트된 이후 한번만 포커스 주기
    useEffect(()=> {
        input1.current.focus();
    }, [])

    //ref
    const input1 = useRef(null);
    const input2 = useRef(null);

    //id
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    //클릭이벤트
    const handleClick = () => {
        if(data.id == '') {
            input1.current.focus();
        } else if (data.pw == '') {
            input2.current.focus();
        } else {
            alert(`id: ${data.id} pw: ${data.pw}`);
        }
    }




    return (
        <div>
            <h3>훅 실습</h3>
            <input type="text" name="id" placeholder="아이디" onChange={handleChange} ref={input1}/>
            <input type="password" name="pw" placeholder="비밀번호" onChange={handleChange} ref={input2}/>
            <button onClick={handleClick}>로그인</button>
        </div>
    )
}

export default HookQ;