import { Route, Routes } from "react-router-dom"
import { Home, PageNotFound } from "../pages"

const AllRoutes = () => {
    return (
        <>
            <Routes>
                {/* Main (for General Public) */}
                <Route path="/" element={<Home />} />

                {/* Errors */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export { AllRoutes }
