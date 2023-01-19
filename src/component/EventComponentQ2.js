import { useState } from "react";

const EventComponentQ2 = () => {

    //state를 객체로 관리
    const [data, setData] = useState({ input: '', result: '' }); //인풋데이터

    const handleChange = (e) => {

        // const copy = { ...data, [e.target.name]: e.target.value };
        // // console.log(copy);
        // setData(copy);

        //data는 사용자의 입력값으로, result는 유지
        setData({input: e.target.value, result: data.result});
    }


    const handleClick = () => {

        //data는 ''(공백), result는 data로 변경

        setData({ input: '', result: data.input });
    }

    const handlePress = (e) => {
        if(e.keyCode === 13) {
            handleClick();
        }
    }

    return (
        <>
            <h3>인풋데이터 핸들링(실습)</h3>
            <input type="text" name="input" onChange={handleChange} onKeyUp={handlePress} value={data.input} />
            <button type="button" name="add" onClick={handleClick}>추가하기</button>
            <h3>결과: {data.result}</h3>
        </>
    )

}

export default EventComponentQ2;

