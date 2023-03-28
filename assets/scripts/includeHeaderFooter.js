// add header
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="section page-header">
    <!--RD Navbar-->
    <div class="rd-navbar-wrap">
      <nav class="rd-navbar rd-navbar-classic" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed"
        data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static"
        data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static"
        data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="46px"
        data-xl-stick-up-offset="46px" data-xxl-stick-up-offset="46px" data-lg-stick-up="true" data-xl-stick-up="true"
        data-xxl-stick-up="true">
        <div class="rd-navbar-main-outer">
          <div class="rd-navbar-main">
            <!-- Navbar Panel-->
            <div class="rd-navbar-panel">
              <!-- Navbar Toggle-->
              <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap">
                <span></span>
              </button>
              <!--Navbar logo-->
              <div class="rd-navbar-brand">
                <a class="brand" href="./">
                  <img src="assets/images/logo--1024x279.svg" alt="Tour et Fere" width="229" height="43" /></a>
              </div>
            </div>
            <div class="rd-navbar-main-element">
              <div class="rd-navbar-nav-wrap">
  
                <!--Navbar Social Media left toggle-->
                <div class="rd-navbar-share fl-bigmug-line-share27" data-rd-navbar-toggle=".rd-navbar-share-list">
                  <ul class="list-inline rd-navbar-share-list">
                    <li class="rd-navbar-share-list-item">
                      <a class="icon fa fa-facebook" href="#"></a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a class="icon fa fa-twitter" href="#"></a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a class="icon fa fa-google-plus" href="#"></a>
                    </li>
                    <li class="rd-navbar-share-list-item">
                      <a class="icon fa fa-instagram" href="#"></a>
                    </li>
                  </ul>
                </div>
                <!--Navbar Menu principale-->
                <ul class="rd-navbar-nav">
                  <li class="rd-nav-item">
                    <a class="rd-nav-link" href="./">accueil</a>
                  <li class="rd-nav-item">
                        <a class="rd-nav-link" href="#">fabrication</a>
                        <ul class="rd-navbar-dropdown">
                          <li> <a href="page-fab-engrenage.html">engrenage</a> </li>
                          <li> <a href="page-fab-reducteurs.html">réducteurs</a></li>
                          <li> <a href="page-fab-pompes.html">pompes Et Accessoires</a></li>
                          <li><a href="page-usinage.html">usinage</a></li>
                        </ul>
                 </li>
                  <li class="rd-nav-item">
                        <a class="rd-nav-link" href="#">expertise/Réparation</a>
                        <ul class="rd-navbar-dropdown">
                          <li> <a href="page-reducteurs">réducteurs</a></li>
                          <li> <a href="page-pompes">pompes</a></li>
                          <li><a href="page-mecanique">mécanique Générale</a></li>
                      </ul>                  
                  </li>
                  <li class="rd-nav-item">
                        <a class="rd-nav-link" href="#">Nos-Moyens</a>
                        <ul class="rd-navbar-dropdown">
                          <li> <a href="page-moyensDeControle">Moyens De Contrôle</a></li>                        
                          <li> <a href="page-atelier.html">Atelier</a> </li>
                          <li> <a href="page-parcMachines">Parc Machines</a></li>
                        </ul>  
                  </li>
                  <li class="rd-nav-item">
                    <a class="rd-nav-link" href="page-Apropos.html">à propos</a>
                  </li>
                </ul>
              </div>
              <div class="rd-navbar-project-hamburger" data-rd-navbar-toggle=".rd-navbar-main">
                <!-- RED POLYGONE -->
                <div class="project-hamburger">
  
                  <img src="./assets/images/red-polygone.svg" alt="">
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </nav>
    </div>
  </header>
    `;
    // Active current item
    // Get the current page URL
    const currentPageUrl = window.location.href;

    // Find the "a" tag that matches the current page URL and add the "active" class to its parent "li" tag
    const links = this.querySelectorAll("a");
    links.forEach((link) => {
      if (link.href === currentPageUrl) {
        link.parentElement.classList.add("active");
      }
    });
  }
}
customElements.define("include-header", Header);

// add footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<!-- footer -->
    <footer class="section section-fluid footer-classic">
      <div class="container-fluid">
    
        <div class="row row-30 justify-content-center">
    
          <div class="col-lg-12  wow fadeInRight" data-wow-delay=".1s">
    
            <div class="box-footer">
              <ul class="list-inline list-inline-sm footer-social-list">
                <li><a class="icon fa fa-facebook" href="#"></a></li>
                <li><a class="icon fa fa-twitter" href="#"></a></li>
                <li><a class="icon fa fa-google-plus" href="#"></a></li>
                <li><a class="icon fa fa-instagram" href="#"></a></li>
              </ul>
              <div class="footer-text">
                <p>SIÈGE: Z1 Zenata Lot No 108, Ain Harrouda - Mohammedia Maroc</p>
                <p>Tél. :+212 523 326 945 - Fax: +212 523 326 947 - E-mail: tef@touretfere.ma</p>
              </div>
    
    
            </div>
          </div>
    
        </div>
    
    
      </div>
    
      <div class="container footer-bottom-panel wow fadeInUp">
        <!-- Rights-->
        <p class="rights"><span>&copy;&nbsp;</span><span class="copyright-year"></span> <span>Creator</span>. All rights
          reserved. <span> Design&nbsp;by&nbsp;<a href="#">Aitouf</a></span>
        </p>
      </div>
      <div class="footer-blue-box">
      </div>
    </footer>`;

  }
}
customElements.define("include-footer", Footer);
