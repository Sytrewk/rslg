import React, { useEffect, useState } from 'react';

function Slider(props) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const len = React.Children.count(props.children);

    useEffect(() => {
        const id = setInterval(
            () => {
                setCurrentSlide(cs => (cs + 1) % len)
            }, props.interval
        );
        return () => clearInterval(id);
    }, [props.interval, len]);

    return React.Children.toArray(props.children)[currentSlide];
}

export default Slider;