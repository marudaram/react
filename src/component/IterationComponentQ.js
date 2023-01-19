/*
이미지를 가져오는 방법
1. 외부 서버에서 경로를 참조받음(가장 일반적인 방법)

2. src 폴더 밑에 img파일 참조가능(선호X)
import img1 from '../img/img1.png';

3. public 폴더 밑에 넣는 경우 이미지를 바로 참조할 수 있다
*/

import { useState } from "react"



const IterationComponentQ = () => {
    //1. 반복할 데이터
    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ]

    //2. map함수를 이용
    // const [list, setList] = useState(arr);

    const newArr = arr.map((item, index) =>
        <div key={index} >
            <img src={item.src} alt={item.title} onClick={() => { handleClick(item.src) }}></img>
            <p>상품:{item.title}</p>
            <p>가격:{item.price}</p>
        </div>
    );

    // console.log(newArr);

    //3. 인풋데이터 관리, 클릭이벤트
    const [data, setData] = useState('');
    const handleClick = (a) => {
        setData(<img src={a} alt="이미지"></img>);
    }


    return (
        <>
            {/* <h3>이미지 데이터 반복하기</h3>
            <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/> */}
            {/* <img src="/img/img1.png" alt="제목" width="100"/> */}


            {/* 반복할 요소의 모형 */}
            <div>
                <h3>이미지 데이터 반복하기</h3>
            {data}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {newArr}
            </div>

        </>
    )

}


export default IterationComponentQ;