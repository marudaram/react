import { useState } from "react";


const IterationComponentQ2 = () => {
    //1- select는 컴포넌트 반복으로 option태그를 생성한다
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    //2- data는 state로 관리하고 화면에 li태그로 반복한다
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];

    //3- 셀렉트박스가 체인지되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 됨


    //option 태그 반복생성하기
    const newSel = select.map((item, index) =>
        <option key={index} >{item}</option>
    )

    //클릭이벤트로 클릭한 type이 뜨도록 설정
    const [list, setList] = useState(data.map((item) => <li>{item.type}-{item.teacher}</li>));
    const handleChange = (e) => {
        console.log(e.target.value);
        let newList = data.filter(item => item.type === e.target.value).map((item) => <li key={item.id}>{item.type}-{item.teacher}</li>);
        setList(newList);
        console.log(newList);
    }


    //숙제: 검색기능 만들기 - 대소문자를 구분하지 않고, teacher, type에 포함된 데이터만 필터링
    const [search, setSearch] = useState()

    // const searchChange = 


    //검색 클릭
    // const searchClick = () => {


}


return (
    <>
        <h3>컴포넌트 반복 실습</h3>
        Search:<input type="text" onChange={searchChange} /* value={} */></input>
        <button>검색</button>

        <br />
        과목찾기:<select onChange={handleChange}>
            {newSel}
        </select>
        <ul>
            {list}
        </ul>
    </>
)


export default IterationComponentQ2;