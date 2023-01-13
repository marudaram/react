import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";


const App = () => {

    return (
        <Fragment>
        <h3>나의 App.JS</h3>
        {/* props */}
        <MyComponent name={1} age={20} email={"aa@naver.com"} />

        <h3>--------------------</h3>

        <h3>마루다람 귀여워</h3>
        <MyComponent2/>
        <MyComponent3/>

        </Fragment>
    )

}

export default App; //내보내기

