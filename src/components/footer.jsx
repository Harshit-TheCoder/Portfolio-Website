// // Footer.js
// import React from 'react';

// function Footer() {
//   return <footer>&copy; 2024 Portfolio Website</footer>;
// }

// export default Footer;

import React from 'react';
import "../css/footer.css";
function Footer() {
  return (
    <footer className="bg-light text-dark py-1 fixed-bottom z-index-1 shadow-lg footer_class">
      <div className="container">
        <div className="row">
         <div className='col-md-1'><img src="image.png" alt="Instagram logo" width="50px" style={{borderRadius:"40%"}} /></div>
          <div className="col-md-5 footer_text" style={{ justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
            <p>&copy; 2024 Portfolio Website</p>
          </div>
          <div className="col-md-3 footer_text">
            
          </div>
          <div className='col-md-1'><a href="https://www.instagram.com/harlalkaharshit/"><img src="insta_icon.png" alt="Instagram logo" width="40px" /></a></div>
          <div className='col-md-1'><a href="https://www.facebook.com/harshit.harlalka.1/"><img src="facebook_icon.png" alt="Instagram logo" width="40px" /></a></div>
          <div className='col-md-1'><a href="https://www.linkedin.com/in/harshit-harlalka-26b200233/"><img src="linkedin_logo.png" alt="Instagram logo" width="40px" /></a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

