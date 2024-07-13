// // Footer.js
// import React from 'react';

// function Footer() {
//   return <footer>&copy; 2024 Portfolio Website</footer>;
// }

// export default Footer;

// import React from 'react';
// import "../css/footer.css";
// function Footer() {
//   return (
//     <footer className="bg-light text-dark py-1 fixed-bottom z-index-1 shadow-lg footer_class">
//       <div className="container">
//         <div className="row">
//          <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1'><img src="image.png" alt="Instagram logo" width="50px" style={{borderRadius:"40%"}} /></div>
//           <div className="col-xl-5 col-lg-5 col-md-5  col-sm-5 col-xs-5 footer_text" style={{ justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
//             <p>&copy; 2024 Portfolio Website</p>
//           </div>
//           <div className="col-xl-3 col-lg-3 col-md-3  col-sm-3 col-xs-3 footer_text">
            
//           </div>
//           <div className='col-xl-1 col-lg-1 col-md-1  col-sm-1 col-xs-1'><a href="https://www.instagram.com/harlalkaharshit/"><img src="insta_icon.png" alt="Instagram logo" width="40px" /></a></div>
//           <div className='col-xl-1 col-lg-1 col-md-1  col-sm-1 col-xs-1'><a href="https://www.facebook.com/harshit.harlalka.1/"><img src="facebook_icon.png" alt="Instagram logo" width="40px" /></a></div>
//           <div className='col-xl-1 col-lg-1 col-md-1  col-sm-1 col-xs-1'><a href="https://www.linkedin.com/in/harshit-harlalka-26b200233/"><img src="linkedin_logo.png" alt="Instagram logo" width="40px" /></a></div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer bg-light text-dark py-3 shadow-lg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center text-md-left">
            <img src="image.png" alt="Logo" width="50px" className="footer-logo" />
          </div>
          <div className="col-12 col-md-4 text-center my-2 my-md-0">
            <p className="mb-0" style={{color:"white"}}>&copy; 2024 Portfolio Website</p>
          </div>
          <div className="col-12 col-md-4 text-center text-md-right">
            <a href="https://www.instagram.com/harlalkaharshit/" className="mx-2"><img src="insta_icon.png" alt="Instagram" width="40px" /></a>
            <a href="https://www.facebook.com/harshit.harlalka.1/" className="mx-2"><img src="facebook_icon.png" alt="Facebook" width="40px" /></a>
            <a href="https://www.linkedin.com/in/harshit-harlalka-26b200233/" className="mx-2"><img src="linkedin_logo.png" alt="LinkedIn" width="40px" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


