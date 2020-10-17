import React from "react";
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
function Footer() {
  return (
    <>
  <article className="section__footer">
      <div className="container_fluid">
        <div className="footer__first">
                
    <section id="block_menu_menu_social_links" className="block block_menu block__title_md_inline">
              <h2 className="block__title block_title" class=" bg-info text-red">Follow us on <br className="visible_sm"/> </h2>
        
          <div className="block__content">
    <ul className="social_links" class="d-flex  pt5" >
<li className="first leaf social_links__item"><a href="https://www.twitter.com/" title="Twitter"> <span> <i className="fab fa-twitter fa-3x" font-size="50px" color="blue"> </i></span></a></li>
<li className="leaf social_links__item"><a href="https://www.facebook.com/" title="Facebook"> <span> <i className="fab fa-facebook fa-3x"> </i></span></a></li>
<li className="leaf social_links__item"><a href="https://www.linkedin.com/" title="LinkedIn"> <span> <i className="fab fa-linkedin fa-3x"> </i></span></a></li>
<li className="leaf social_links__item"><a href="https://www.flickr.com/" title="Flickr"> <span> <i className="fab fa-flickr fa-3x"> </i></span></a></li>
<li className="leaf social_links__item"><a href="https://www.github.com/" title="Github"> <span> <i className="fab fa-github fa-3x"> </i></span></a></li>
<li className="leaf social_links__item"><a href="https://www.googleplus.com/" title="Googleplus"> <span> <i className="fab fa-google-plus fa-3x"> </i></span></a></li>
<li className="leaf social_links__item"><a href="https://www.pinterest.com/" title="Pinterest"> <span> <i className="fab fa-pinterest fa-3x"> </i></span></a></li>
<li className="last leaf social_links__item"><a href="https://www.youtube.com/" title="YouTube"> <span> <i className="fab fa-youtube fa-3x"> </i></span></a></li>
</ul>  </div>
</section>
</div>

    <div className="footer__second" >
      
        <div  class="d-flex d-inline p-2 bg-primary text-white col_xs_12 col_sm_9 col_md_9">
          <ul className="nav_horizontal" class="d-flex">
<li className="first leaf nav_horizontal__item"><a href="/en/about" title="" className="nav_horizontal__link">About</a></li>
<li className="leaf nav_horizontal__item"><a href="/en/contact_us" title="" className="nav_horizontal__link">Contact us</a></li>
<li className="leaf nav_horizontal__item"><a href="/en/faq/jobseeker" title="" className="nav_horizontal__link">FAQ</a></li>
<li className="leaf nav_horizontal__item"><a href="/en/video_tutorials" title="" className="nav_horizontal__link">Video tutorials</a></li>
<li className="leaf nav_horizontal__item"><a href="/en/media_library" title="" className="nav_horizontal__link">Media library</a></li>
<li className="leaf nav_horizontal__item"><a href="/en/legal_notice" title="" className="nav_horizontal__link">Legal notice</a></li>
<li className="last leaf nav_horizontal__item"><a href="/en/privacy_statement" title="" className="nav_horizontal__link">Privacy statement and specific conditions</a></li>
</ul>        </div>
      </div>
    
  </div>
  </article>
    <div className="latest" class="d-flex d-inline">
	   <p className="copyright"> @Copyrights 2020</p>
      <h5> Website Designed : on October 2020 by Sirajeddine </h5>
    </div>
   </> 
  );
}

export default Footer;