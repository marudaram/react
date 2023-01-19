import EventComponent from "./component/EventComponent";
import EventComponentQ from "./component/EventComponentQ";
import EventComponent2 from "./component/EventComponent2";
import EventComponentQ2 from "./component/EventComponentQ2";


const App = () => {

    /*
    p121
    이벤트 핸들링
    함수형 이벤트 핸들링
    */

    return(
        <>
        <EventComponent/>
        <EventComponent2/>

        <hr/>
        {/* 실습 */}
        <EventComponentQ/>
        <EventComponentQ2/>

        </>

    )
    
}

export default App;