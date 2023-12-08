const Demo = () => {

  return ( 
    <div className="demo-container">
      <h1>FEATURES</h1>

      <div className="tree-container">
        <div className="description">
          <p className="title">Component Hierarchy Tree </p>
          <p className="desc">See your applications components with our Component Hierarchy Tree feature, swiftly visualize and troubleshoot issues, gaining clear insights into component relationships for streamlined development. </p>
        </div>
        <img className="gif" src="../../public/Tree.gif"></img>
      </div>

      <div className="store-container">
        <div className="description">
          <p className="title">Store</p>
          <p className="desc">Explore your Zustand-powered state management effortlessly with our dev tool's new visualization feature. Gain instant insights into your application's state structure, allowing for efficient debugging and optimization.
            Simplify your development process and elevate your coding experience with our intuitive, real-time visualization tool.</p>
        </div>
        <img className="gif" src="../../public/Store.gif"></img>
      </div>

      <div className="snapshot-container">
        <div className="description">
          <p className="title">State Snapshot </p>
          <p className="desc">Effortlessly track and visualize your store's state changes with our state snapshot feature. Instantly capture the impact of each action, providing a clear representation of the modified state for efficient debugging and analysis.</p>
        </div>
        <img className="gif" src="../../public/StateSnapShot.gif"></img>
      </div>

      <div className="action-log-container">
        <div className="description">
          <p className="title">Action Log </p>
          <p className="desc">Boost your Zustand app development with our Action Log Dev Tool! Effortlessly track and visualize every state-affecting action, harness the power of time travel to explore states pre and post-action, and gain valuable insights with real-time metrics. 
            Instantly spot rendering efficiency with color-coded indicators: green for swift renders, yellow for potential slowdowns, and red for critical issues. Dive deeper with a toggle to display actual render times. 
            Elevate your development game—download now for seamless optimization and unparalleled insights!</p>
        </div>
        <img className="gif" src="../../public/ActionLog.gif"></img>
      </div>
    </div>
  );
};

export default Demo;
