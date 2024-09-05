import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "../components/ContextAPI/Context";
import Home from "../components/Home/Home";



function PageRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Context" element={<Context />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes