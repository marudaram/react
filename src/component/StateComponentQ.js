import { useState } from "react";



const StateComponentQ = () => {
    
    //++count로 state를 직접 수정하면 안된다!! -> 나중에 에러가 발생할 수 있음
    const[count, setCount] = useState(0); //state, set state



    return(
        <>
            <h3>실습</h3>
            <hr/>
            <h3>카운트: {count}</h3>
            <button onClick={() => {setCount(count + 1)}}>증가</button>
            <button onClick={() => {setCount(count - 1)}}>감소</button>
            <button onClick={() => {setCount(0)}}>초기화</button>
        
        </>
    )



}

 
export default StateComponentQ;