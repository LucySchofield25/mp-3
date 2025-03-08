import {createBrowserRouter, Route,RouterProvider,Routes} from 'react-router';
import Home from "./components/respgs/Home";
import Education from "./components/respgs/Education";
import Employment from "./components/respgs/Employment";
import Achievements from "./components/respgs/Achievements";
import Projects from "./components/respgs/Projects";
import Skills from "./components/respgs/Skills";

function Root() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/employment" element={<Employment />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
    );
}
const router = createBrowserRouter([{path:"*",Component:Root}]);

function App(){
    return <RouterProvider router={router}/>

}
export default App;


