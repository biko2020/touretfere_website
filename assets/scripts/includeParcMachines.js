// add Parc Machines section

class ParcMachines extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

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
          data-slide-bg="assets/images/nosMoyens/bannier-parc.svg"
        >
          <div class="swiper-slide-caption section-md">
            <div class="container">
                <h2 data-caption-animate="fadeInLeft" data-caption-delay="0">
                
                PARC MACHINES
               
                
                </h2>
             
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- ------- ------- ------- ------ ------ --------- ------ -------- ------- ------ ----->
 
   
<!-- section-One -->

<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid">
    <!-- main-title -->
    <div class="main-title">
      <h3>haute performance</h3>
      <h2>NOTRE PARC MACHINES </h2>
      <p class="texte-enrenage">
        Notre parc machines haute performance comprend une large gamme d'équipements de pointe, tels que des centres
        d'usinage CNC, des tours à commande numérique, des fraiseuses à haute vitesse et des rectifieuses de précision.
        Toutes nos machines sont régulièrement entretenues et calibrées pour garantir des performances optimales et une
        précision de haute qualité pour chaque projet.

        Nous sommes équipés pour usiner une large gamme de matériaux, y compris les métaux, les plastiques et les
        composites, avec une précision allant jusqu'à quelques microns. Nos machines sont également capables de réaliser
        des opérations complexes telles que le fraisage en 5 axes et le tournage de pièces de formes complexes.

        Notre parc machines est soutenu par une équipe hautement qualifiée d'ingénieurs et de techniciens expérimentés,
        qui sont en mesure de travailler en étroite collaboration avec nos clients pour comprendre leurs besoins
        spécifiques et fournir des solutions sur mesure pour répondre à leurs exigences les plus complexes.
      </p>
    </div>
  </div>
</section>


<!-- section-Two -->

<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid bg-Parc">

    <div class="row row-sm row-30">

      <img src=" ./assets/images/nosMoyens/0-parc.svg" width="680" height="620" alt="1" />
      <!-- RED CURVE -->
      <div class="red-curve">
        <img src="./assets/images/nosServices/red-line.svg" width="780" height="720" alt="1" />
      </div>

      <!-- RED CURVE TEXT -->
      <div class="col col-sm col-30">
     
        <div class="red-curve-text">
        <h5> EN USINAGE</h5>
          <p>
            Notre parc machine de pointe est dédié à l'usinage de précision et dispose d'une large gamme d'équipements haute
            performance. Nos centres d'usinage CNC, tours à commande numérique, fraiseuses à haute vitesse et rectifieuses de
            précision sont régulièrement entretenus et calibrés pour garantir des performances optimales et une haute qualité de
            précision pour chaque projet.
          </p>

        </div>
      </div>
    </div>
  </div>

</section>


<!-- section-three -->

<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid bg-Parc">

    <div class="row row-sm row-30">

      <!-- RED CURVE TEXT -->
      <div class="col col-sm col-30">
     
        <div class="red-parc-text">
        <h5> EN CHAUDRONNERIE</h5>
          <p>
          Notre atelier de fabrication de pointe est dédié à la chaudronnerie et propose une large gamme d'équipements de haute
          qualité pour le soudage, la découpe et le formage de métaux. Notre équipe expérimentée de soudeurs, de fabricants et
          de techniciens travaille en étroite collaboration avec nos clients pour concevoir et fabriquer des structures et des
          composants métalliques sur mesure afin de répondre à leurs besoins spécifiques.
          </p>

        </div>
      </div>    
    
      <img src=" ./assets/images/nosMoyens/1-parc.svg" width="680" height="620" alt="1" />
      <!-- RED CURVE -->
  
    </div>
  </div>

</section>

<!-- section-Four -->

<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid bg-Parc">

    <div class="row row-sm row-30">

      <img src=" ./assets/images/nosMoyens/2-parc.svg" width="680" height="620" alt="1" />
      <!-- RED CURVE -->
      <div class="red-curve">
        <img src="./assets/images/nosServices/red-line.svg" width="780" height="720" alt="1" />
      </div>

      <!-- RED CURVE TEXT -->
      <div class="col col-sm col-30">
     
        <div class="red-curve-text">
        <h5> EN MONTAGE</h5>
       
          <p>
            Nos techniciens sont équipés d'une gamme d'outils et d'équipements avancés, tels que des clés dynamométriques, des
            multimètres et des oscilloscopes, pour garantir que tous les composants sont assemblés selon les normes de qualité et
            de précision les plus élevées. Nous disposons également de systèmes de gestion de qualité pour assurer la traçabilité
            des composants et des assemblages.
          </p>

        </div>
      </div>
    </div>
  </div>

</section>


<!-- section-Five -->

<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid bg-Parc">

    <div class="row row-sm row-30">

      <!-- RED CURVE TEXT -->
      <div class="col col-sm col-30">
     
        <div class="red-parc-text">
        <h5> EN MAINTENANCE INDUSTRIELLE</h5>
          <p>
            Notre équipe de maintenance industrielle est dédiée à maintenir les équipements et les machines de nos clients en bon
            état de fonctionnement. Nous offrons une gamme de services de maintenance, comprenant la maintenance préventive, la
            maintenance prédictive et la maintenance corrective, pour aider nos clients à minimiser les temps d'arrêt et à
            augmenter la productivité.
          </p>

        </div>
      </div>    
    
      <img src=" ./assets/images/nosMoyens/3-parc.svg" width="680" height="620" alt="1" />
      <!-- RED CURVE -->
  
    </div>
  </div>

</section>


    `;

  }
}
customElements.define("include-parc-machines", ParcMachines);
