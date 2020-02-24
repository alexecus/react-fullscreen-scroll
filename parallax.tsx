import React from 'react';

import styles from './parallax.style';

// we purposely disable the linting here, since the underlying ReactPageScroller
// library has dynamic props

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Parallax: React.FC<any> = props => {
    return (
        <div className="ParallaxWrapper">
            <style jsx>{styles}</style>
            {props.children}
        </div>
    );
};

Parallax.defaultProps = {
    heightOffset: 0,
    animationTimer: 500,
};

export default Parallax;
