<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Derivados de la fracción nitrogenada
    
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Interacción proteína-proteína en alimentos de alto contenido proteico
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.align-items-center
      .bloque-texto-g__img.bg1
        img.img-bloque.d-none.d-lg-block(src='@/assets/curso/temas/t2/img01.png', alt='')
      .bloque-texto-g__texto.p-4
        p.mb-3 Uno de los métodos más habituales para hacer digeribles ciertas fracciones vegetales o animales consiste en el tratamiento con disoluciones alcalinas. Así se consiguen los lisados proteicos utilizados en alimentación animal y humana. El tratamiento alcalino tiene una serie de consecuencias como la racemización y destrucción de aminoácidos y formación de enlaces covalentes intra e intermoleculares, que también forman derivados tóxicos como lisinoalanina (LAL), ornitoalanina y lantionina. Esto trae como consecuencia la Nefrotoxicidad y disminución del valor nutritivo.
        
        
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Interacciones de las proteínas y los hidratos de carbono (Reacción de Maillard)
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Entre los procesos de elaboración de algunos alimentos, se produce lo que se llama oscurecimiento no enzimático o reacción de Maillard, es el resultado de productos reductores, primariamente azúcares, que reaccionan con proteínas o con grupos amino libres. Esta reacción cambia tanto las propiedades químicas como fisiológicas de las proteínas. En general la acumulación de pigmentos de color marrón indica que la reacción se ha producido en alimentos que contienen hidratos de carbono y proteínas. En la industria láctea se emplea como indicador de un procesado térmico excesivo. (Aqualab, lab-Ferrer) Esta reacción compleja descubierta por Maillard, puede ser deseable en algunos casos y absolutamente no deseable en otros. El pH, temperatura, humedad, presencia de iones metálicos y la propia estructura del azúcar son condicionantes de la velocidad de reacción. El control de la reacción de Maillard es muy importante, no sólo por posibles consecuencias adversas de color y aroma, sino por la posible toxicidad de los productos de degradación de las nitrosaminas.

    .subt(data-aos='fade-right')
      .row.align-items-center.mb-4
        .col-auto
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
        .col-auto.ps-0
          h3.mb-0.pe-4.pe-lg-5 Consecuencias
   
   
    .row.justify-content-center.mb-5
      .col-sm-8.col-lg-3
        img(src='@/assets/curso/temas/t2/img03.svg', alt='')
      .col-sm-12.col-lg-5
        .titulo-sexto.color-secundario
          h5 Figura 1.
          span
            | Reacción de Maillard.
        img(src='@/assets/curso/temas/t2/img03.png', alt='La figura presenta las reacción particulares de la reacción de Maillard y se mencionan las consecuencias nutricionales: perdidas de vitaminas y disminución digestibilidad de proteínas. Consecuencias toxicológicas: inhibición de las disacaridasas y actividad mutagénica. consecuencias sensoriales: oscurecimiento, aromas y sabores, y viscosidad.')
        figcaption Fuente, Sena 2012
   
    p Aspectos favorables de la reacción Maillard
    ul.lista-ul--color
      li
        i.fas.fa-check
        |Mejora las propiedades organolépticas.
      li
        i.fas.fa-check
        |Formación de productos con actividad antioxidante y antimicrobiana.
    
    h3(data-aos="fade-down") Acrilamida

    p Subproducto que se forma en alimentos ricos en carbohidratos (almidón), baja humedad y tratados a altas temperaturas (más de 120 º C). Es una sustancia potencialmente cancerígena.
    p Se forma en el transcurso de la reacción de Maillard por interacción de la asparagina (ASN) y azúcares reductores libres. Este compuesto se forma en mayores cantidades en aquellos alimentos en los que abundan los aminoácidos: representa el 40 % de los aminoácidos totales en las patatas chips, 14 % en la harina de trigo y el 18 % en los productos a base de centeno y café instantáneo.
    p Su formación depende de muchos factores como son la temperatura y tiempo de cocción, humedad, pH y la presencia de hidratos de carbono como fuente de carbonilos necesarios para la reacción de Maillard.
    
    p(data-aos="fade-down") ¿Cómo reducir las acrilamidas en alimentos a preparar?
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta
            span 1
          |''Al freír papas se debe utilizar variedades que sean bajas en carbohidratos.
          li
          .lista-ol--cuadro__vineta
            span 2
          |Se deben freír los alimentos entre 145 y 170 ° C.
          li
          .lista-ol--cuadro__vineta
            span 3
          |Al freír papas a la francesa deben quedar de color amarillo dorado, nunca café dorado.

          li
          .lista-ol--cuadro__vineta
            span 4
          |Al tostar pan debe quedar de color dorado tenue aceptable.

          li
          .lista-ol--cuadro__vineta
            span 5
          |Las papas en rebanadas se deben dejar de 15 a 30 minutos en agua antes de freírlas o asarlas.

          li
          .lista-ol--cuadro__vineta
            span 6
          |Las papas crudas no se deben almacenar en el congelador.'' (Revista Scielo 2010). 
      .col-lg-3.col-8
        img(src='@/assets/curso/temas/t2/img004.png', alt='')

    p(data-aos="fade-down") La formación de acrilamida comienza los 100 º C, acelerándose a partir de los 140 º C y siendo la temperatura óptima de 180 ºC (en cualquier horno o sistema de fritura industrial). En alimentos en ebullición no aparece la acrilamida, probablemente porque los alimentos se cuecen en la temperatura de ebullición del agua aproximadamente a 100 º C. La agencia internacional para el Cáncer (IARC) clasifica la acrilamida como un probable carcinógeno en humanos (Grupo 2A).
    
    
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-3.col-md-8.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/img04.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-2.mb-3 Neurotóxico
                p A altas exposiciones ocupacionales y accidentales (en animales y hombre).

      .col-lg-3.col-md-8.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador2 = false")
            .indicador--hover(v-if="mostrarIndicador2")
            figure
              img(src="@/assets/curso/temas/t2/img05.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-2.mb-3 Genotóxico
                p Afecta a células germinales (conduce a cambios hereditarios).

      .col-lg-3.col-md-8.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/img06.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-2.mb-3 Carcinógeno
                p En animales de experimentación (ratas).
      .col-lg-3.col-md-8.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/img07.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.justify-content-center.align-items-center.mb-5
                .col-lg-8.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-2.mb-3 Clínica
                p.text-small Somnolencia, descoordinación, alucinaciones, confusión, sensaciones anormales, debilidad muscular y descoordinación. Estudios en humanos (sobre 8.000 trabajadores en China) que daban positivo en neurotoxicidad presentaban relación con la aparición de cáncer. 
    
    p.mb-4 Métodos para minimizar el contenido en acrilamida en los alimentos:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-sm-6.col-8
        img(src='@/assets/curso/temas/t2/img08.png' alt='')
      .col-lg-9.col-10.col-md-11
        SlyderF.mb-5(columnas="col-lg-4 col-md-6")
          .tarjeta.tarj-slider.p-4.py-5
            .align-items-center
              .row.justify-content-center.my-3
                .col-5.col-lg-4
                  img(src='@/assets/curso/temas/t2/img09.png' alt='')
              p.text-center No sobrecalentar los alimentos ricos en carbohidratos.
          .tarjeta.tarj-slider.p-4.py-5
            .align-items-center
              .row.justify-content-center.my-3
                .col-5.col-lg-4
                  img(src='@/assets/curso/temas/t2/img10.png' alt='')
              p.text-center Evitar los alimentos ricos en asparagina y azúcares.
          .tarjeta.tarj-slider.p-4.py-5
            .align-items-center
              .row.justify-content-center.my-3
                .col-5.col-lg-4
                  img(src='@/assets/curso/temas/t2/img11.png' alt='')
              p.text-center Disminuir los niveles de asparagina mediante modificaciones genéticas.

          .tarjeta.tarj-slider.p-4.py-5
            .align-items-center
              .row.justify-content-center.my-3
                .col-5.col-lg-4
                  img(src='@/assets/curso/temas/t2/img12.png' alt='')
              p.text-center Hidrolizar la asparagina. 




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    mostrarIndicador2: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
