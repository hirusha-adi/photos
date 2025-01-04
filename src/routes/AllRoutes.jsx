import { Route, Routes, Navigate } from "react-router-dom"
import { HomeAllPage, HomeLandingPage, PageNotFound } from "../pages"

const AllRoutes = () => {
    return (
        <>
            <Routes>
                {/* Main (for General Public) */}
                <Route path="/" element={<HomeLandingPage />} />
                <Route path="/all" element={<HomeAllPage />} />

                {/* ------------------------- */}
                {/* Errors */}
                {/* ------------------------- */}
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<PageNotFound />} />
                {/* ------------------------- */}
            </Routes>
        </>
    );
};

export { AllRoutes }
