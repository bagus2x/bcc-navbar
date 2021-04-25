import React, {useEffect, useState} from 'react';

interface GrowProps {
    in: boolean;
    duration?: number;
}

const Grow: React.FC<GrowProps> = ({children, in: visible, duration}) => {
    const [grow, setGrow] = useState('50%');
    const [opacity, setOpacity] = useState(0);

    const childrenWithTransition = React.isValidElement(children)
        ? React.cloneElement(children, {
              style: {
                  ...children.props.style,
                  transform: `scale(${grow})`,
                  opacity,
                  transition: `transform ${duration}ms, opacity ${duration}ms`,
              },
          })
        : children;

    useEffect(() => {
        if (visible) {
            setGrow('100%');
            setOpacity(1);
            return;
        }
        setGrow('50%');
        setOpacity(0);
    }, [visible]);

    return <>{childrenWithTransition}</>;
};

Grow.defaultProps = {
    duration: 500,
};

export default Grow;
