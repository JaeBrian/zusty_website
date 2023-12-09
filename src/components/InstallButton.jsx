const InstallButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open('http://google.com', '_blank', 'noreferrer');
  }
  return (
    <div className='hero-btn'>
      <button className='install-btn' type='button' onClick={handleClick}>Install Extension</button>
    </div>
  )
}

export default InstallButton;