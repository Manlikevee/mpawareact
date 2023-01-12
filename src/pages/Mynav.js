import React from 'react' 
import { useState, useRef, useEffect } from 'react' 
import { Link } from 'react-router-dom'



function Mynav() {

  
    const [userMenu, setClassName] = useState("");
    const otherElementRef = useRef(null);
  
    const handleClickNav = () => {
      setClassName(userMenu === "active" ? "" : "active");
      otherElementRef.current.classList.toggle("navactive");
    };

    const handleClick = () => {
        document.body.classList.toggle('dark-mode');
      };


      const sectionRef = useRef(null);

      const scrollhandleClick = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };



  return (
    <div>
<div className="header">
  <div className="logo">
  <Link to="/" style={{color: 'inherit', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <svg style={{width: '100%', marginRight: '6px'}} width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6292 0.746394C16.8748 0.498585 16.4131 0.498585 15.6587 0.746394C13.8183 1.35092 13.8981 5.17663 14.4668 8.95118C13.0269 5.40661 11.138 2.05848 9.23679 2.44167C8.45746 2.59875 8.05818 2.82602 7.5325 3.41175C6.26829 4.82039 20.3125 19.8514 22.6901 22.8012C18.821 24.8172 4.32063 6.73478 2.88716 7.97777C2.29109 8.49463 2.06025 8.88672 1.9018 9.65141C1.5179 11.5042 4.88685 13.337 8.4766 14.7378C4.65368 14.1904 0.8017 14.1253 0.189511 15.9181C-0.0631561 16.658 -0.0631561 17.1108 0.189511 17.8507C0.8017 19.6435 4.65368 19.5784 8.4766 19.031C4.88685 20.4318 1.51789 22.2646 1.90179 24.1174C2.06023 24.8821 2.29108 25.2742 2.88714 25.791C4.3206 27.034 7.58497 25.1266 10.5978 22.8012C8.22022 25.751 6.26826 28.9484 7.53245 30.357C8.05813 30.9428 8.45741 31.1701 9.23674 31.3271C11.138 31.7103 13.0269 28.3621 14.4668 24.8174C13.8981 28.592 13.8182 32.4179 15.6587 33.0224C16.4131 33.2702 16.8748 33.2702 17.6292 33.0224C19.4697 32.4179 19.3898 28.5919 18.821 24.8172C20.261 28.3619 22.15 31.7103 24.0512 31.3271C24.8305 31.1701 25.2298 30.9428 25.7555 30.357C27.0197 28.9484 25.0677 25.751 22.6901 22.8012C25.703 25.1266 28.9674 27.034 30.4008 25.791C30.9969 25.2742 31.2277 24.8821 31.3862 24.1174C31.7701 22.2646 28.4011 20.4318 24.8114 19.031C28.6343 19.5784 32.4862 19.6435 33.0984 17.8507C33.3511 17.1108 33.3511 16.658 33.0984 15.9181C32.4862 14.1253 28.6343 14.1904 24.8114 14.7378C28.4011 13.337 31.7701 11.5042 31.3862 9.65141C31.2277 8.88672 30.9969 8.49463 30.4008 7.97777C28.9673 6.73478 25.7029 8.64223 22.69 10.9677C25.0677 8.01783 27.0197 4.82039 25.7555 3.41175C25.2298 2.82602 24.8305 2.59875 24.0512 2.44167C22.1499 2.05847 20.261 5.40675 18.8211 8.9514C19.3898 5.17678 19.4697 1.35093 17.6292 0.746394Z" fill="#F56D33" />
      </svg>
      <span style={{fontSize: '26px', fontWeight: 600, lineHeight: '38px', letterSpacing: '-1.213342308998108px', textAlign: 'left'}}>Mpawa</span>
    </Link>
  </div>
  <div ref={otherElementRef} className="header-menu">
  <Link to="#"></Link>
  <Link to="#"></Link>
    <Link to="#">Home</Link>
    <Link to="#">Programs</Link>
    <Link to="#">Become a partner</Link>
 
    <Link to="#"> <div className="user-names signup" style={{color: 'var(--nanocolor)'}}> Log in</div></Link>
    <Link to="#"><div className="user-names login" style={{color: 'var(--nanocolor)'}}>Get Started</div></Link>
  </div>
  <div className="user-settings">
    <div className="dark-light"id="body-btn" onClick={handleClick} >
      <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <div className="userMenu">
    <div onClick={handleClickNav} className={userMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-square">
        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      </svg>
    </div>
    </div>
    {/* <div class="user-name login"> </div>
      <div class="user-name signup"> </div> */}
     <Link to="/signin">
      <div className="user-name signup"> Log in</div>
   </Link>

   <Link to="/signup" style={{color: 'var(--nanocolor)'}}>
      <div className="user-name login">Get Started</div>
    </Link>
  </div>
</div>


    </div>
  )
}

export default Mynav