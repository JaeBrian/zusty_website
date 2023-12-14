import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Demo = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.gif'), {
      max: 5,
      speed: 10,
      glare: true,
      'max-glare': 0.9,
      scale: 1.1,
      perspective: 500,
    });
  }, []);
  return (
    <div className="page-demo">
      <h1 id="demotitle" className="feature-title">
        FEATURES
      </h1>
      <div className="demo-container">
        <div className="container">
          <div className="description">
            <p className="title">COMPONENT TREE </p>
            <p className="desc">
              With our interactive Component Hierarchy Tree, you can easily view all of your components and identify what is affecting the state across your application, allowing you to quickly visualize and troubleshoot issues
            </p>
          </div>
          <img className="gif" src="../demo-pics/Tree.gif"></img>
        </div>

        <div className="container-rev">
          <img className="gif" src="../demo-pics/Store.gif"></img>
          <div className="description">
            <p className="title">STORE</p>
            <p className="desc">
              Throughout the debugging process, you can easily gain instant insights into your app&apos;s state structure and functions to efficiently debug and optimize without needing to look into the code base
            </p>
          </div>
        </div>

        <div className="container">
          <div className="description">
            <p className="title">STATE SNAPSHOTS </p>
            <p className="desc">
              Track and visualize your store&apos;s state changes with Zusty&apos;s state snapshot feature, instantly capturing the impact of each action with timestamps for efficient debugging
            </p>
          </div>
          <img className="gif" src="../demo-pics/StateSnapShot.gif"></img>
        </div>

        <div className="container-rev">
          <img className="gif" src="../demo-pics/ActionLog.gif"></img>
          <div className="description">
            <p className="title">ACTION LOG</p>
            <p className="desc">
              Provides time-traveling capabilities with timestamps for a smoother debugging process, and offers a diffing feature to compare previous and post-action states. Spot rendering efficiency with color-coded indicators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
