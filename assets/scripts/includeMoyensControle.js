class MoyensControle extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    
    <section class="section swiper-container swiper-slider swiper-slider-classic" data-loop="false" data-autoplay="5000"
  data-simulate-touch="true" data-direction="vertical" data-nav="false">
  <div class="swiper-wrapper text-center">
    <!-- image banniere-->
    <div class="swiper-slide context-dark" data-slide-bg="assets/images/nosMoyens/bannier-controle.svg">
      <div class="swiper-slide-caption section-md">
        <div class="container">
          <h2 data-caption-animate="fadeInLeft" data-caption-delay="0">

          MOYENS DE CONTRÔLES


          </h2>

        </div>
      </div>
    </div>
  </div>
</section>

<!-- Moyen de controle tour et fere-->
<!-- ------- ------- ------- ------ ------ --------- ------ -------- ------- ------ ----->
  <section class="section section-sm section-fluid bg-default">
  <div class="container-fluid">
    <!-- main-title -->
    <div class="main-title">

      <h2> MOYENS DE CONTRÔLES </h2>

      <p class="texte-enrenage">

        Nous nous engageons à fournir des produits de qualité supérieure à nos clients, et pour ce faire, nous avons mis
        en place des moyens de contrôle rigoureux pour garantir la qualité de chaque pièce produite. Nous utilisons une
        variété d'outils de mesure, tels que des micromètres, des pieds à coulisse, des comparateurs, des jauges de
        profondeur, des rugosimètres et des profilomètres, pour effectuer des contrôles dimensionnels, de planéité, de
        rugosité, de concentricité, de circularité, de perpendicularité, de dureté et de rectitude sur chaque pièce.
        Nous avons également investi dans des machines de mesure automatisées pour une plus grande précision et une plus
        grande efficacité dans notre processus de contrôle. Nous sommes fiers de notre capacité à fournir des pièces de
        haute qualité à nos clients grâce à notre engagement envers un contrôle rigoureux de la qualité.

      </p>

    </div>

  </div>
</section>
<!-- ------- ------- ------- ------ ------ 1--------- ------ -------- ------- ------ ----->
<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid">


    <div class="row row-sm row-30 justify-content-center">

      <!-- qualite-1 -->

      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <h6>Contrôle dimensionnel</h6>
      <div><br></div>
        <article class="team-classic team-classic-lg">
          <a class="img-qualite" href="#">
            <img src="./assets/images/nosMoyens/0-controle.svg" alt="1" width="204" height="226" /></a>
        </article>
        <div><br></div>
        <div class="qualite-text">
          <p>Chez Tour et fere, nous utilisons également ce type de contrôle pour nous assurer que chaque pièce produite
            est conforme aux spécifications dimensionnelles requises.</p>
        </div>
      </div>

      <article>
        <a class="ligne-qualite" href="#">
          <img src="./assets/images/qualite/qualite-ligne.svg" alt="2" />
        </a>
      </article>

      <!-- qualite-2 -->

      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
        <h6>Contrôle de planéité </h6>
        <div><br></div>
        <article class="team-classic team-classic-lg">
          <a class="img-qualite" href="#">
            <img src="./assets/images/nosMoyens/1-controle.svg" alt="1" width="204" height="226" /></a>
        </article>
        <div><br></div>
        <div class="qualite-text">
          <p>Nous utilisons des rugosimètres et des comparateurs de planéité pour effectuer
            ce type de contrôle. Nous vérifions la planéité de surfaces critiques telles que les faces de référence, les
            surfaces d'appui et les surfaces d'étanchéité ...</p>
        </div>
      </div>

      <article>
        <a class="ligne-qualite" href="#">
          <img src="./assets/images/qualite/qualite-ligne.svg" alt="2" />
        </a>
      </article>

      <!-- qualite-3 -->

      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <h6>Contrôle de rugosité</h6>
      <div><br></div>
        <article class="team-classic team-classic-lg">
          <a class="img-qualite" href="#">
            <img src="./assets/images/nosMoyens/2-controle.svg" alt="1" width="204" height="226" /></a>
        </article>
        <div><br></div>
        <div class="qualite-text">
        <p>La rugosité de surface d'une pièce peut avoir un impact significatif sur son fonctionnement et sa performance. Nous
        utilisons des rugosimètres pour mesurer la rugosité de surface des pièces produites en termes de profondeur de
        rugosité, de texture de surface et d'autres paramètres.</p>
        </div>
      </div>

    </div>  
  </div>
</section>
<!-- ------- ------- ------- ------ ------2 --------- ------ -------- ------- ------ ----->

<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid">


    <div class="row row-sm row-30 justify-content-center">
    
      <!-- qualite-4 -->

      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <h6>Contrôle de la concentricité </h6>
      <div><br></div>
        <article class="team-classic team-classic-lg">
          <a class="img-qualite" href="#">
            <img src="./assets/images/nosMoyens/3-controle.svg" alt="1" width="204" height="226" /></a>
        </article>
        <div><br></div>
        <div class="qualite-text">
        <p> Nous utilisons des comparateurs de précision et des équipements de mesure automatisés pour effectuer le Contrôle de
        la concentricité sur des éléments tels que les arbres, les mandrins et les paliers, pour nous assurer que chaque pièce
        est produite avec une concentricité absolue.</p>
        </div>
      </div>

      <article>
        <a class="ligne-qualite" href="#">
          <img src="./assets/images/qualite/qualite-ligne.svg" alt="2" />
        </a>
      </article>

      <!-- qualite-5 -->

      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
        <h6>Contrôle de la circularité</h6>
        <div><br></div>
        <article class="team-classic team-classic-lg">
          <a class="img-qualite" href="#">
            <img src="./assets/images/nosMoyens/5-controle.svg" alt="1" width="204" height="226" /></a>
        </article>
        <div><br></div>
        <div class="qualite-text">
        <p>Nous sommes en mesure de détecter rapidement les écarts de qualité et de prendre des mesures correctives pour
        garantir la satisfaction de nos clients. Le contrôle de la circularité est donc une partie essentielle de notre
        processus de fabrication pour assurer la qualité et la fiabilité de nos produits.</p>
        </div>
      </div>

      <article>
        <a class="ligne-qualite" href="#">
          <img src="./assets/images/qualite/qualite-ligne.svg" alt="2" />
        </a>
      </article>

      <!-- qualite-6 -->

      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <h6>Contrôle de la perpendicularité</h6>
      <div><br></div>
        <article class="team-classic team-classic-lg">
          <a class="img-qualite" href="#">
            <img src="./assets/images/nosMoyens/6-controle.svg" alt="1" width="204" height="226" /></a>
        </article>
        <div><br></div>
        <div class="qualite-text">
        <p>Le contrôle de la perpendicularité est une étape cruciale dans le processus de production de nos pièces. Nous
          utilisons des instruments de mesure précis pour vérifier l'alignement de chaque pièce, en nous assurant que les angles
          sont corrects et que les pièces sont bien perpendiculaires les unes aux autres. </p>
        </div>
      </div>

    </div>  
  </div>
</section>


<!-- ------- ------- ------- ------ ------3 --------- ------ -------- ------- ------ ----->

<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid">


    <div class="row row-sm row-30 justify-content-center">
    
      <!-- qualite-7 -->

      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <h6>Contrôle de la dureté </h6>
      <div><br></div>
        <article class="team-classic team-classic-lg">
          <a class="img-qualite" href="#">
            <img src="./assets/images/nosMoyens/7-controle.svg" alt="1" width="204" height="226" /></a>
        </article>
        <div><br></div>
        <div class="qualite-text">
        <p> Ce test nous permet de vérifier que chaque pièce est conforme aux exigences de qualité et de résistance de nos
          clients. Nous effectuons des contrôles réguliers de la dureté pour garantir la fiabilité de nos produits et optimiser
          leur durabilité à long terme. </p>
        </div>
      </div>

      <article>
        <a class="ligne-qualite" href="#">
          <img src="./assets/images/qualite/qualite-ligne.svg" alt="2" />
        </a>
      </article>

      <!-- qualite-8 -->

      <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
      <h6>Contrôle de la rectitude </h6>
      <div><br></div>
        <article class="team-classic team-classic-lg">
          <a class="img-qualite" href="#">
            <img src="./assets/images/nosMoyens/8-controle.svg" alt="1" width="204" height="226" /></a>
        </article>
        <div><br></div>
        <div class="qualite-text">
        <p>Le contrôle de la rectitude est une étape essentielle dans la production de nos pièces pour garantir leur qualité
          et leur précision. Nous utilisons des instruments de mesure spécialisés pour vérifier que chaque pièce est bien
          droite, en contrôlant l'écart entre la pièce et une surface de référence. </p>
      </div>
      </div>

    </div>  
  </div>
</section>


<!------ ---------- -------- ---------space ------- ------ ------- ----- ----->
<section class="section section-sm section-fluid bg-default">
  <div class="container-fluid">
    <div class="row row-sm row-30">
      <div class=" class=" col col-sm col-30">

      </div>

      <div class="col col-sm col-30">
        <div class="red-curve-text">

          <br><br> <br><br>
        </div>
      </div>
    </div>
  </div>
</section>
<!------ ---------- -------- ---------space ------- ------ ------- ----- ----->


    `;
  }
}

customElements.define("include-moyens-controle", MoyensControle);