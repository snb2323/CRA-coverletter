import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowScrollButton(scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>

            {showScrollButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    {/* <FaArrowAltCircleUp className='arrow' /> */}
                    <FaArrowUp></FaArrowUp>


                </button>
            )}
        </>
    );
};

export default ScrollToTop;
