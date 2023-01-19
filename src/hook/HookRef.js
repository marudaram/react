import { useRef, useState } from "react";


const HookRef = () => {
    //사용자 입력값 data, 화면 출력값 result
    const [form, setForm] = useState({data: '', result: ''})
    //인풋
    const handleChange = (e) => {
        setForm( {...form, ["data"]: e.target.value} ) 
        
    }
    //등록
    const handleClick = () => {
        setForm( {data: '', result: form.data});

        //Ref의 사용
        // console.log(inputTag);
        // console.log(inputTag.current);
        // console.log(inputTag.current.value);
        inputTag.current.focus();
    }

    //특정 태그에 이름달기 useRef()
    //변환된 이름을 사용할 태그의 ref 속성에 넣는다
    const inputTag = useRef();


    return (
        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result}

        </>
        )
}

export default HookRef;