// add Parc Machines section

class Atelier extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `
  
  <!-- Slider de Milieu-->
  <section class="section swiper-container swiper-slider swiper-slider-classic" data-loop="false" data-autoplay="5000"
    data-simulate-touch="true" data-direction="vertical" data-nav="false">
    <div class="swiper-wrapper text-center">
      <!-- image banniere-->
      <div class="swiper-slide context-dark" data-slide-bg="assets/images/nosMoyens/banniere-atelier.jpg">
        <div class="swiper-slide-caption section-md">
          <div class="container">
            <h2 data-caption-animate="fadeInLeft" data-caption-delay="0">
  
            ATELIER D’USINAGE
  
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
        <h3>Nous avons toutes les compétences nécessaires pour répondre à vos attentes.</h3>
        <h2>ATELIER D’USINAGE</h2>
        <p class="texte-enrenage">
        Depuis sa création, TOUR ET FERE a fait de la mécanique de précision le pilier de ses activités. Notre atelier
        d'usinage compte actuellement environ quinze techniciens expérimentés et dispose de près de 25 machines d'usinage.
        Cette infrastructure nous permet de produire des pièces d'une grande précision et d'usiner une large gamme de
        matériaux, tels que les métaux, les plastiques et les composites, avec une précision allant jusqu'à quelques microns.
        De plus, nos machines sont capables d'exécuter des opérations complexes, comme le fraisage en 5 axes et le tournage de
        pièces de formes inhabituelles, afin de répondre aux exigences les plus rigoureuses de notre clientèle.
      </p>
      </div>
    </div>
  </section>
  
  
  <!-- section-Two -->
  
  <section class="section section-sm section-fluid bg-default">
    <div class="container-fluid bg-Parc">
  
      <div class="row row-sm row-30">
  
        <img src=" ./assets/images/nosMoyens/0-parc.svg" width="680" height="620" alt="1" /> 
  
        <!-- RED CURVE TEXT -->
        <div class="col col-sm col-30">
  
          <div class="red-curve-text">
            <h5> Notre Atelier de tournage</h5>
          
            <p>
            Notre atelier de tournage est équipé de machines de pointe pour réaliser des opérations de tournage sur une grande
            variété de matériaux, allant des métaux les plus courants aux alliages les plus exotiques. Grâce à notre expertise et
            notre équipement de haute précision, nous sommes en mesure de produire des pièces de qualité supérieure, répondant aux
            normes les plus élevées de l'industrie.
          </p>
  
          </div>
        </div>
      </div>
    </div>
  
  </section>
  
  
  
  <!-- section-Four -->
  
  <section class="section section-sm section-fluid bg-default">
    <div class="container-fluid bg-Parc">
  
      <div class="row row-sm row-30">
  
        <img src=" ./assets/images/nosMoyens/2-parc.svg" width="680" height="620" alt="1" />
        <!-- RED CURVE -->
        
  
        <!-- RED CURVE TEXT -->
        <div class="col col-sm col-30">
  
          <div class="red-curve-text">
            <h5>Notre Atelier de fraisage</h5>
  
            <p>
            Notre atelier de fraisage est équipé de machines de haute précision capables de réaliser des opérations de fraisage
            sur une grande variété de matériaux, tels que les métaux, les plastiques et les composites. Nos machines de fraisage
            sont programmées à l'aide des logiciels les plus modernes, ce qui nous permet de produire des pièces avec une grande
            précision et une grande efficacité. Nous sommes fiers de compter sur une équipe de techniciens qualifiés et
            expérimentés, qui travaillent avec une grande attention aux détails pour garantir des résultats optimaux pour nos
            clients. Que ce soit pour des pièces en série ou pour des projets personnalisés, nous sommes en mesure de répondre aux
            besoins de nos clients les plus exigeants.
          </p>
  
          </div>
        </div>
      </div>
    </div>
  
  </section>
  
    
  
  `;
  
  }
  }
  customElements.define("include-atelier", Atelier);