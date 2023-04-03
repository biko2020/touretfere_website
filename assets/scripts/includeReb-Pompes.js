// add section fabrication
class Pompes extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `

    <!-- section Réparation Pompes submenu -->

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
          data-slide-bg="assets/images/fabrication/banniere-reb_pompes.svg"
        >
          <div class="swiper-slide-caption section-md">
            <div class="container">
                <h2 data-caption-animate="fadeInLeft" data-caption-delay="0">
                
                Réparation de Pompes
               
                
                </h2>
             
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- ------- ------- ------- ------ ------ --------- ------ -------- ------- ------ ----->
  <!-- section fabrication popmes -->

  <section class="section section-sm section-fluid bg-default">
  <div class="container-fluid">
    <!-- main-title -->
    <div class="main-title">
      
      <h2> la Réparation de tous types de pompes </h2>
       
        <p>La réparation de pompes est une activité essentielle pour assurer le bon fonctionnement de nombreux processus industriels et commerciaux. Notre entreprise, avec notre expérience et notre expertise, est fière d'offrir des services de réparation de pompes de qualité supérieure. Nous disposons d'un équipement de pointe et de techniciens hautement qualifiés qui sont capables de diagnostiquer rapidement les problèmes et de fournir des solutions efficaces. Nous nous engageons à fournir des services rapides et fiables pour minimiser les temps d'arrêt et garantir que vos opérations continuent de fonctionner sans interruption. Que ce soit pour des pompes centrifuges, à engrenages, à pistons ou autres, notre équipe est prête à répondre à tous vos besoins de réparation de pompes.</p>
      
      
    </div>

    <div class="row row-sm row-30 justify-content-center">
      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight">
        <!-- Team Classic-->
        <article class="team-classic team-classic-lg">
          <a class="team-classic-figure" href="#">
            <img src="./assets/images/fabrication/0-pompes.svg" alt="1" width="420" height="424" /></a>
          <div class="team-classic-caption">
            <h5 class="team-classic-name"><a href="#">POMPES DOSEUSES OBL</a></h5>
          </div>
        </article>
      </div>
      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
        <!-- Team Classic-->
        <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
            <img src="./assets/images/fabrication/1-pompes.svg" alt="2" width="420" height="424" /></a>
          <div class="team-classic-caption">
            <h5 class="team-classic-name"><a href="#">pompes standard </a></h5>
          </div>
        </article>
      </div>
      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
        <!-- Team Classic-->
        <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
            <img src="./assets/images/fabrication/2-pompes.svg" alt="3" width="420" height="424" /></a>
          <div class="team-classic-caption">
            <h5 class="team-classic-name"><a href="#">pompes spéciales</a></h5>
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
          <img src="./assets/images/fabrication/3-pompes.svg" alt="1" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">pompes pour moteur thermique </a></h5>
        </div>
      </article>
    </div>
    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <!-- Team Classic-->
      <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
          <img src="./assets/images/fabrication/4-pompes.svg" alt="2" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">pompes pour moteur hydraulique</a></h5>
        </div>
      </article>
    </div>
    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
      <!-- Team Classic-->
      <article class="team-classic team-classic-lg"><a class="team-classic-figure" href="#">
          <img src="./assets/images/fabrication/5-pompes.svg" alt="3" width="420" height="424" /></a>
        <div class="team-classic-caption">
          <h5 class="team-classic-name"><a href="#">Moto-pompe électrique</a></h5>
        </div>
      </article>
    </div>
  </div>
</div>
</section>

<section class="section section-sm section-fluid bg-default">
<div class="container-fluid">
  <div class="row row-sm row-30">
    <img src=" ./assets/images/fabrication/13-pompes.svg" width="680" height="620" />

    <!-- RED CURVE TEXT -->
    <div class="col col-sm col-30">
      <div class="red-curve-text">
        <p>
        Nous offrons des services complets de réparation pour tous les types de pompes. Que ce soit pour des pompes centrifuges, à engrenages, à pistons, à membrane ou autres, notre équipe de professionnels expérimentés est capable de diagnostiquer rapidement les problèmes et de fournir des solutions efficaces. Nous disposons des équipements de pointe nécessaires pour effectuer des réparations de haute qualité et assurer la remise en état complète des pompes. Nous sommes engagés à fournir des services rapides et fiables pour minimiser les temps d'arrêt et garantir que vos opérations continuent de fonctionner sans interruption. Quel que soit le type de pompe que vous avez, vous pouvez compter sur nous pour assurer sa réparation complète et efficace.
        </p>

      </div>

    </div>
  </div>
</div>

</section>


    `;

  }
}
customElements.define("include-reb-pompes", Pompes);