import { Link } from "react-router-dom";


function Home(){
    return(
        <div>
            <Link to="/main">Майн</Link>
            <Link to="/about">Эбаут</Link>
            <h1>Home</h1>
        </div>
    )
}

export default Home;