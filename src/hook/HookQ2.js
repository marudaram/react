import { useDebugValue, useRef, useState } from "react";


const HookQ2 = () => {

    /*
    실습(할일목록 만들기)
    1. state는 {todo: '', list: [] }로 관리하기
    2. 할일 목록을 작성하고 클릭시 list의 인풋에 입력값을 추가, map을 통해서 화면 그리기
    3. 등록버튼 클릭 이후에는 ref를 활용해서 input태그에 포커싱 주기
    */

    const inputRef = useRef(null); //
    const [data, setData] = useState({todo: '', list: []});

    
    
    //인풋데이터 핸들링
    const handleChange = (e) => {
        setData({...data, ["todo"]: e.target.value});
    }
    
    console.log(data);

    
    //추가하기
    const handleClick = () => {
        const newList = data.list.concat(data.todo); //기존 list는 유지, 새롭게 합쳐진 list 반환
        // console.log(newList);
        setData({list: newList, todo: ''});
        inputRef.current.focus();
    }
    
    //화면그림
    const result = data.list.map((item, index)=> <li key={index}>{index+1}- {item}</li>);

    return (
        <div>
            <h3>ref로 할일 목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" onChange={handleChange} value={data.todo} ref={inputRef}/>
            <button onClick={handleClick}>등록하기</button>
            <ul>
               {result} 
            </ul>

        </div>
    )

}

export default HookQ2;