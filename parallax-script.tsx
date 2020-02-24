import React from 'react';

import ReactScroller from './scroller/scroller';
// import ReactPageScroller from 'react-page-scroller';

import styles from './parallax.style';

// we purposely disable the linting here, since the underlying ReactPageScroller
// library has dynamic props

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Parallax: React.FC<any> = props => {
    return (
        <div className="ParallaxContainer">
            <style jsx>{styles}</style>
            <ReactScroller>{props.children}</ReactScroller>
        </div>
    );

    // return (
    //     <React.Fragment>
    //         {React.Children.count(props.children) > 1 ? (
    //             <ReactPageScroller
    //                 {...props}
    //                 renderAllPagesOnFirstRender={false}
    //                 containerHeight={'92vh'}
    //             >
    //                 {props.children}
    //             </ReactPageScroller>
    //         ) : (
    //             props.children
    //         )}
    //     </React.Fragment>
    // );
};

Parallax.defaultProps = {
    heightOffset: 0,
    animationTimer: 500,
};

export default Parallax;
