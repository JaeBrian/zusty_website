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
              See your applications components with our Component Hierarchy Tree
              feature, swiftly visualize and troubleshoot issues, gaining clear
              insights into component relationships for streamlined development.{' '}
            </p>
          </div>
          <img className="gif" src="../demo-pics/Tree.gif"></img>
        </div>

        <div className="container-rev">
          <img className="gif" src="../demo-pics/Store.gif"></img>
          <div className="description">
            <p className="title">STORE</p>
            <p className="desc">
              Explore your Zustand-powered state management effortlessly with
              our dev tool&apos;s new visualization feature. Gain instant
              insights into your application&apos;s state structure, allowing
              for efficient debugging and optimization. Simplify your
              development process and elevate your coding experience with our
              intuitive, real-time visualization tool.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="description">
            <p className="title">STATE SNAPSHOTS </p>
            <p className="desc">
              Effortlessly track and visualize your store&apos;s state changes
              with our state snapshot feature. Instantly capture the impact of
              each action, providing a clear representation of the modified
              state for efficient debugging and analysis.
            </p>
          </div>
          <img className="gif" src="../demo-pics/StateSnapShot.gif"></img>
        </div>

        <div className="container-rev">
          <img className="gif" src="../demo-pics/ActionLog.gif"></img>
          <div className="description">
            <p className="title">ACTION LOG</p>
            <p className="desc">
              Boost your Zustand app development with our Action Log Dev Tool!
              Effortlessly track and visualize every state-affecting action,
              harness the power of time travel to explore states pre and
              post-action, and gain valuable insights with real-time metrics.
              Instantly spot rendering efficiency with color-coded indicators:
              green for swift renders, yellow for potential slowdowns, and red
              for critical issues. Dive deeper with a toggle to display actual
              render times. Elevate your development game—download now for
              seamless optimization and unparalleled insights!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
