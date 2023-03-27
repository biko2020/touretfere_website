// add section fabrication
class Fabrication extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `

    <!-- section fabrication submenu -->

    <div class="fabrication-submenu">
     
      <ul class="fab-navbar-nav">
        <li class="fab-nav-item">
          <a class="fab-nav-link" href="#fab-speciale">fabrication spéciale</a>
        </li>
        <li class="fab-nav-item">
          <a class="fab-nav-link" href="#fab-standard">fabrication standard</a>
        </li>
      </ul>

    </div>

    <!-- Slider de Milieu-->
    <section
      class="section swiper-container swiper-slider swiper-slider-classic"
      data-loop="false"
      data-autoplay="5000"
      data-simulate-touch="true"
      data-direction="vertical"
      data-nav="false"
    >
      <div class="swiper-wrapper text-center">
        <!-- image banniere-->
        <div
          class="swiper-slide context-dark"
          data-slide-bg="assets/images/fabrication/0-1600x1200.jpeg"
        >
          <div class="swiper-slide-caption section-md">
            <div class="container">
                <h2 data-caption-animate="fadeInLeft" data-caption-delay="0">
                
                  Fabrication
               
                
                </h2>
             
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- ------- ------- ------- ------ ------ --------- ------ -------- ------- ------ ----->
  <!-- section fabrication spéciale -->
  <a name="fab-speciale">
  &nbsp; </br> &nbsp;
  </a>
  <section class="section section-sm section-fluid bg-default">
  <div class="container-fluid">
    <!-- main-title -->
    <div class="main-title">
      
      <h2> FABICATION SPÉCIALE </h2>
      <p>Nos solutions complètes de prévision et d’analyse prédictive, notre savoir-faire
        Et notre expertise sont au service de vos projets.</p>
    </div>

    <div class="row row-sm row-30 justify-content-center">
      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight">
        <!-- Team Classic-->
        <article class="team-classic team-classic-lg">
          <a class="team-classic-figure" href="#">
            <img src="./assets/images/nosServices/1-420x424.svg" alt="1" width="420" height="424" /></a>
          <div class="team-classic-caption">
            <h5 class="team-classic-name"><a href="#">L'usinage de précision </a></h5>
          </div>
        </article>
      </div>
      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
        <!-- Team Classic-->
        <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
            <img src="./assets/images/nosServices/2-420x424.svg" alt="2" width="420" height="424" /></a>
          <div class="team-classic-caption">
            <h5 class="team-classic-name"><a href="#">Le prototypage rapide </a></h5>
          </div>
        </article>
      </div>
      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
        <!-- Team Classic-->
        <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
            <img src="./assets/images/nosServices/3-420x424.svg" alt="3" width="420" height="424" /></a>
          <div class="team-classic-caption">
            <h5 class="team-classic-name"><a href="#">La production en série</a></h5>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
<section class="section section-sm section-fluid bg-default">
<div class="container-fluid">
  <div class="row row-sm row-30 justify-content-center">
    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight">
      <!-- Team Classic-->
      <article class="team-classic team-classic-lg">
        <a class="team-classic-figure" href="#">
          <img src="./assets/images/nosServices/1-420x424.svg" alt="1" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">L'usinage de précision </a></h5>
        </div>
      </article>
    </div>
    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <!-- Team Classic-->
      <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
          <img src="./assets/images/nosServices/2-420x424.svg" alt="2" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">Le prototypage rapide </a></h5>
        </div>
      </article>
    </div>
    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
      <!-- Team Classic-->
      <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
          <img src="./assets/images/nosServices/3-420x424.svg" alt="3" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">La production en série</a></h5>
        </div>
      </article>
    </div>
  </div>
</div>
</section>
<section class="section section-sm section-fluid bg-default">
<div class="container-fluid">
  <div class="row row-sm row-30">
    <img src=" ./assets/images/nosServices/1-680x620.svg" width="680" height="620" alt="1" />
    <!-- RED CURVE -->
    <div class="red-curve">
      <img src="./assets/images/nosServices/red-line.svg" width="780" height="720" alt="1" />
    </div>

    <!-- RED CURVE TEXT -->
    <div class="col col-sm col-30">
      <div class="red-curve-text">
        <p>

          Le service Techniques d'Usinage de Tour et Fere est
          en mesure de fournir des solutions sur mesure pour
          répondre aux besoins spécifiques de chaque client, en
          termes de production de pièces de haute précision,
          de prototypage rapide et de production en série.
          Les professionnels de l'entreprise travaillent avec des
          équipements de pointe et appliquent des normes strictes en
          matière de qualité et de sécurité pour garantir des résultats optimaux.
        </p>

      </div>

    </div>
  </div>
</div>

</section>

<!------ ---------- -------- --------- ------- ------ ------- ----- ----->
<!-- section fabrication standard -->
<a name="fab-standard">
&nbsp; </br> &nbsp;
</a>
<section class="section section-sm section-fluid bg-default">
<div class="container-fluid">
  <!-- main-title -->
  <div class="main-title">
    
    <h2> FABICATION STANDARD </h2>
    <p>Nos solutions complètes de prévision et d’analyse prédictive, notre savoir-faire
      Et notre expertise sont au service de vos projets.</p>
  </div>

  <div class="row row-sm row-30 justify-content-center">
    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight">
      <!-- Team Classic-->
      <article class="team-classic team-classic-lg">
        <a class="team-classic-figure" href="#">
          <img src="./assets/images/nosServices/1-420x424.svg" alt="1" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">L'usinage de précision </a></h5>
        </div>
      </article>
    </div>
    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <!-- Team Classic-->
      <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
          <img src="./assets/images/nosServices/2-420x424.svg" alt="2" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">Le prototypage rapide </a></h5>
        </div>
      </article>
    </div>
    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
      <!-- Team Classic-->
      <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
          <img src="./assets/images/nosServices/3-420x424.svg" alt="3" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">La production en série</a></h5>
        </div>
      </article>
    </div>
  </div>
</div>
</section>
<section class="section section-sm section-fluid bg-default">
<div class="container-fluid">
<div class="row row-sm row-30 justify-content-center">
  <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight">
    <!-- Team Classic-->
    <article class="team-classic team-classic-lg">
      <a class="team-classic-figure" href="#">
        <img src="./assets/images/nosServices/1-420x424.svg" alt="1" width="420" height="424" /></a>
      <div class="team-classic-caption">
        <h5 class="team-classic-name"><a href="#">L'usinage de précision </a></h5>
      </div>
    </article>
  </div>
  <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
    <!-- Team Classic-->
    <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
        <img src="./assets/images/nosServices/2-420x424.svg" alt="2" width="420" height="424" /></a>
      <div class="team-classic-caption">
        <h5 class="team-classic-name"><a href="#">Le prototypage rapide </a></h5>
      </div>
    </article>
  </div>
  <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
    <!-- Team Classic-->
    <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
        <img src="./assets/images/nosServices/3-420x424.svg" alt="3" width="420" height="424" /></a>
      <div class="team-classic-caption">
        <h5 class="team-classic-name"><a href="#">La production en série</a></h5>
      </div>
    </article>
  </div>
</div>
</div>
</section>
<section class="section section-sm section-fluid bg-default">
<div class="container-fluid">
<div class="row row-sm row-30">
  <img src=" ./assets/images/nosServices/1-680x620.svg" width="680" height="620" alt="1" />
  <!-- RED CURVE -->
  <div class="red-curve">
    <img src="./assets/images/nosServices/red-line.svg" width="780" height="720" alt="1" />
  </div>

  <!-- RED CURVE TEXT -->
  <div class="col col-sm col-30">
    <div class="red-curve-text">
      <p>

        Le service Techniques d'Usinage de Tour et Fere est
        en mesure de fournir des solutions sur mesure pour
        répondre aux besoins spécifiques de chaque client, en
        termes de production de pièces de haute précision,
        de prototypage rapide et de production en série.
        Les professionnels de l'entreprise travaillent avec des
        équipements de pointe et appliquent des normes strictes en
        matière de qualité et de sécurité pour garantir des résultats optimaux.
      </p>

    </div>

  </div>
</div>
</div>

</section>

    `;

  }
}
customElements.define("include-fabrication", Fabrication);