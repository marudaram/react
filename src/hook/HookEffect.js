import { useEffect, useState } from "react";


const HookEffect = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    //useEffect(함수) - 화면이 mount된 이후에 동작한다
    // useEffect(()=> {
    //     console.log(`렌더링완료 state값: ${name}`);
    // })


    //useEffect(함수, []) - 화면이 첫번째 mount에서만 실행된다
    // useEffect(() => {
    //     console.log(`처음만 실행됨`);
    // }, []);

    //useEffect(함수, [state]) - 특정값이 렌더링될 때만 실행된다
    // useEffect(()=> {
    //     console.log(`age가 변경될 때 실행`);
    // }, [age]);


    //useEffect
    useEffect(()=> {
        console.log("name이 변경될 때 render됨"); //렌더링이 그려지면 기존화면은 지워진다
        console.log(`update전 값: ${name}`);
        //컴포넌트가 unmount될 때 실행된다
        return () => {
            console.log(`unmount됨`);
        }
    }, [name])

    //useEffect는 여러개여도 된다*****

    return (
        <>
            이름:<input type="text" onChange={handleName}/><br/>
            나이:<input type="number" onChange={handleAge}/><br/>

            이름: {name} 나이: {age}
        </>
    )
}

export default HookEffect;