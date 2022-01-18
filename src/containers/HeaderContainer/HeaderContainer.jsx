import './HeaderContainer.css';

const HeaderContainer = () => {

  const themeToggle = () => document.body.classList.toggle('theme-light');  

  return (
    <div className="headerContainer">
      {/* <h1>Header</h1> */}
     
      {/* <button className='theme-button-toggle' onClick={()=>themeToggle()}>Toggle Theme</button> */}

      <div className='theme-toggle'>
      <input type="checkbox" class="checkbox" id="checkbox" onChange={()=> themeToggle()}/>
      <label for="checkbox" class="label">
        <i class="fas fa-moon"></i>
        <i class='fas fa-sun'></i>
        <div class='ball'></div>
      </label>
      </div>
    </div>
    
  )
}

export default HeaderContainer;
