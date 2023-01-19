import { useState } from "react";


const IterationComponent2 = () => {

    //1. 반복할 데이터(state로 관리)
    const arr = [
        { id: 1, topic: 'hello' },
        { id: 2, topic: 'bye' },
        { id: 3, topic: 'see ya' }
    ];

    const [list, setList] = useState(arr);

    //2. map함수를 이용해서 li태그로 생성
    const newList = list.map(item => 
        <li key={item.id} onDoubleClick={() => handleRemove(item.id) }> {/* return은 생략가능 */}
            {item.topic}
        </li>)

    //3. 인풋데이터 관리
    const [data, setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value);
    }

    //4. 추가하기 버튼 클릭시 input의 값을 list 마지막에 추가
    const handleClick = (e) => {
        let obj = {id: list[list.length-1].id + 1, topic: data}
        // list.push(obj); //X -> state는 절대 직접 바꾸면 안됨
        let newArr = list.concat(obj); //원본 리스트를 수정하지는 않고, 새로운 리스트(리스트에 obj가 합쳐진)를 반환시켜준다
        setList(newArr); //state 변경
        setData(''); //input값 초기화
    }

    //5. 삭제기능
    //화살표 함수는 익명함수이기 때문에 호이스팅이 불가능하다
    //호이스팅: 함수의 선언 전에 위에서 호출하는 것 
    //일반적으로 코드는 위에서 아래로 가서 선언 후 호출하는데, 
    //호이스팅은 선언 전에도 호출하는 것을 가능하게 함 

    //onClick={ ()=> 함수() }
    const handleRemove = (a) => {
        // console.log(a); //키
        //filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열 생성
        // const ex = [1,2,3,4,5].filter((item) => item != 3)
        // console.log(ex);

        let newList = list.filter(item => item.id !== a); //내가 클릭한 값을 제외하고 반환하는 작업
        setList(newList);

    }

    return (
        <>

            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data}/>
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newList}
            </ul>
        </>
    )

}

export default IterationComponent2;