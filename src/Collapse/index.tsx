import React, {useEffect, useRef, useState} from 'react';

interface CollapseProps {
    in: boolean;
    duration?: number;
}

const Collapse: React.FC<CollapseProps> = ({children, in: visible, duration}) => {
    const [height, setHeight] = useState<'auto' | number| undefined | string>(visible ? 'auto' : 0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (visible) setHeight('100%');
        else setHeight(0);
    }, [visible]);

    return (
        <div ref={ref} style={{height, transition: `all ${duration}ms`, overflow: 'hidden', padding: 0}}>
            {children}
        </div>
    );
};

Collapse.defaultProps = {
    duration: 500,
};

export default Collapse;
