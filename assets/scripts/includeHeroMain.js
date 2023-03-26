// add hero section
class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <!--hero-section-->
    <section class="section swiper-container swiper-slider swiper-slider-classic" data-loop="true" data-autoplay="5000"
      data-simulate-touch="true" data-direction="vertical" data-nav="false">
      <div class="swiper-wrapper text-center">
        <!--slide N 1-->
        <div class="swiper-slide context-dark" data-slide-bg="./assets/images/slide/slider-1-1770x742.svg">
          <div class="swiper-slide-caption section-md">
            <div class="container">
              <h2 data-caption-animate="fadeInLeft" data-caption-delay="0">
                TOURNAGE ET FRAISAGE
                </h3>
                <p class="text-width-large" data-caption-animate="fadeInRight" data-caption-delay="100">
                  Nous pouvons répondre favorablement à des demandes de tournage
                  en fonction de caractéristiques techniques bien spécifiques.
                </p>

            </div>
          </div>
        </div>
        <!--slide N 2-->
        <div class="swiper-slide context-dark" data-slide-bg="./assets/images/slide/slider-2-1770x742.jpeg">
          <div class="swiper-slide-caption section-md">
            <div class="container">
              <h2 data-caption-animate="fadeInLeft" data-caption-delay="0">
                SURFAÇAGE
              </h2>
              <p class="text-width-large" data-caption-animate="fadeInRight" data-caption-delay="100">
                Nous avons la possibilité d’usiner des aciers
                (en fonction de la dureté), alliage, fonte, inox.
              </p>

            </div>
          </div>
        </div>
        <!--slide N 3-->
        <div class="swiper-slide context-dark" data-slide-bg="./assets/images/slide/slider-3-1770x742.jpeg">
          <div class="swiper-slide-caption section-md">
            <div class="container">
              <h2 data-caption-animate="fadeInLeft" data-caption-delay="0">
                TOUR ET FERE S'OCCUPE DE VOS PROJETS!
              </h2>
              <p class="text-width-large" data-caption-animate="fadeInRight" data-caption-delay="100">
                Notre savoir-faire dans
                ce domaine peut vous apporter des solutions techniques efficaces et
                innovantes pour répondre à vos besoins et défis spécifiques.
              </p>

            </div>
          </div>
        </div>
      </div>
      <!-- BLUE POLYGONE -->
      <div class="blue-polygone">
        <img src="./assets/images/bule-Polygon.svg" alt="">
      </div>

    </section>`;
}
}
customElements.define("include-hero", Hero);

// add main section
class Main extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <!-- main-section -->
    <!-- section-One -->
    <section class="section section-sm section-fluid bg-default">
      <div class="container-fluid">
        <!-- main-title -->
        <div class="main-title">
          <h3>VOTRE PARTENAIRE DE CONFIANCE.</h3>
          <h2>TECHNIQUES D'USINAGE </h2>
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
    <!-- section-two -->
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
    <!-- section three -->
    <section class="section section-sm section-fluid bg-default">
      <div class="container-fluid">


        <div class="row row-sm row-30 justify-content-center">
          <!-- qualite-1 -->
          <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">

            <article class="team-classic team-classic-lg">
              <div class="counter-amy-number"><span class="counter">2055</span></div>
              <a class="img-qualite" href="#">
                <img src="./assets/images/qualite/1-104x126.svg" alt="1" width="104" height="126" /></a>

            </article>
            <div class="qualite-text">
              <p>Les ingénieurs de Tour et Fere travaillent en étroite collaboration avec les équipes de production pour
                s'assurer que les produits sont fabriqués selon les spécifications, tout en garantissant leur fiabilité
                et leur sécurité.</p>
            </div>
          </div>
          <article>
            <a class="ligne-qualite" href="#">
              <img src="./assets/images/qualite/qualite-ligne.svg" alt="2" />
            </a>
          </article>

          <!-- qualite-2 -->
          <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
            <!-- Team Classic-->
            <article class="team-classic team-classic-lg">
              <div class="counter-amy-number"><span class="counter">35</span></div>
              <a class="img-qualite" href="#">
                <img src="./assets/images/qualite/2-143x88.svg" alt="2" width="143" height="88" /></a>

            </article>
            <div class="qualite-text-2">
              <p>La collaboration avec nos partenaires est une partie essentielle de notre entreprise. Nous travaillons
                en étroite collaboration avec nos partenaires pour développer des produits innovants et répondre aux
                besoins de nos clients. </p>
            </div>
          </div>
          <article>
            <a class="ligne-qualite" href="#">
              <img src="./assets/images/qualite/qualite-ligne.svg" alt="2" />
            </a>
          </article>
          <!-- qualite-3 -->
          <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".3s">
            <!-- Team Classic-->
            <article class="team-classic team-classic-lg">
              <div class="counter-amy-number"><span class="counter">72</span></div>
              <a class="img-qualite" href="#">
                <img src="./assets/images/qualite/3-107x128.svg" alt="3" width="107" height="128" /></a>

            </article>
            <div class="qualite-text">
              <p>Nous nous engageons à fournir des produits et des services de la plus haute qualité à nos clients. Pour
                atteindre cet objectif, nous avons mis en place des processus rigoureux de contrôle qualité, qui
                garantissent que chaque produit fabriqué rendu répond aux normes les plus strictes. </p>
            </div>
          </div>

        </div>
        <!-- main-title-qualite -->
        <div class="main-title-qualite">
          <h3>CONCEPTION ET FABRICATION</h3>
          <h2>DE PIÈCES MÉCANIQUES</h2>
        </div>
        <div class="footer-logo">
          <img src="./assets/images/logo-307x121.svg" alt="">
        </div>
      </div>
    </section>
`;
  }
}
customElements.define("include-main", Main);