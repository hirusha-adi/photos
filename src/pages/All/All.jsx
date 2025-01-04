import { useEffect } from "react";

const All = () => {

    useEffect(() => {
        document.title = `All`
    })

    return (
        <>
            <h1>All</h1>
        </>
    );
};

export { All }