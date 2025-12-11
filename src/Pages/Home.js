import { useOutletContext } from "react-router-dom";
const Home = () => {
    const {data} = useOutletContext();
    console.log(data);
    
    return (
        <div>
            <h1>Home Page</h1> 
            <p>View your tasks here.</p>
        </div>
    );
}

export default Home;