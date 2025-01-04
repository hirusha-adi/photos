import { useEffect } from "react";

const Landing = () => {

    useEffect(() => {
        document.title = `Home`
    })

    return (
        <>
            <h1>Landing</h1>
        </>
    );
};

export { Landing }