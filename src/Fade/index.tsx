import React, {useEffect, useState} from 'react';

interface FadeProps {
    in: boolean;
    duration?: number;
}

const Fade: React.FC<FadeProps> = ({children, in: visible, duration}) => {
    const [opacity, setOpacity] = useState(0);

    const childrenWithTransition = React.isValidElement(children)
        ? React.cloneElement(children, {
              style: {...children.props.style, opacity, transition: `opacity ${duration}ms`},
          })
        : children;

    useEffect(() => {
        if (visible) setOpacity(1);
        else setOpacity(0);
    }, [visible]);

    return <>{childrenWithTransition}</>;
};

Fade.defaultProps = {
    duration: 500,
};

export default Fade;
