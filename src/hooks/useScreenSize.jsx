import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        if (typeof window !== 0) {
            function handleResize() {
                setScreenSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return screenSize;
};

export default useScreenSize;