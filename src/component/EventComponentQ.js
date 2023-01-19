import { useState } from "react"



const EventComponentQ = () => {
    const [menu, setMenu] = useState('선택하세요');

    const handleMenu = (e) => {
        setMenu(e.target.value);
    }




    return (
        <>
            <select onChange={handleMenu} value={menu}>
                <option></option>
                <option>피자</option>
                <option>햄버거</option>
                <option>치킨</option>
            </select>

            <h3>선택한 결과</h3>
            <div>{menu}</div>
        </>
    )


}

export default EventComponentQ;