<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sustancias tóxicas derivadas del proceso de preparación y almacenamiento de los alimentos

    p Tanto en las operaciones tecnológicas de elaboración como en los procesos culinarios y la conservación, los alimentos reciben tratamientos térmicos que hacen que se produzcan reacciones entre sus componentes, dando lugar a la formación de nuevas estructuras químicas, muchas de ellas con cierta toxicidad.
    p En general, cocinar los alimentos se hace desde hace mucho tiempo, esto se realiza por varias razones:
    
    .row.mb-5(data-aos='fade-right')
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.size1.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t1/img01.png', alt='')
          p.text-center Aumenta la palatabilidad.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.size1.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t1/img02.png', alt='')
          p.text-center Facilita la digestibilidad.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.size1.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t1/img03.png', alt='')

          p.text-center Destruye los microorganismos tóxicos.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.size1.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t1/img04.png', alt='')

          p.text-center Desactiva los inhibidores enzimáticos.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Derivados de la pirolisis
      
    p La pirolisis es un proceso químico causado por el calentamiento en ausencia de oxígeno, en el cual se descompone la materia orgánica de todo tipo de materiales, menos metales y vidrio. Se forman principalmente:
    ol.lista-ol--cuadro
      li
      .lista-ol--cuadro__vineta
        span 1
      |Hidrocarburos aromáticos policíclicos (HAP).
      li
      .lista-ol--cuadro__vineta
        span 2
      |Aminas heterocíclicas (AH).
    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Hidrocarburos aromáticos policíclicos (HAP)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p Son sustancias con estructuras orgánicas de dos o más anillos benzoico-fusionados, organizados de diferentes formas, y eventualmente con sustitutos metilo o cadenas más largas de tipo alquilo.
      .col-lg-3.col-8
        img(src='@/assets/curso/temas/t1/img05.png', alt='')
      .col-lg-4
        .cajon.color-acento-contenido.p-4.mb-4
          h5 Benzo (g,h,i) perilé C22H12

    .row.mb-5(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/img06.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p Los HAP son un grupo de más de 100 sustancias químicas diferentes que se forman durante la combustión incompleta del carbón, el petróleo y la gasolina, la basura y otras sustancias orgánicas como el tabaco o la carne preparada a la brasa. <br><br>Los HAP se encuentran generalmente como una mezcla de dos o más de estos compuestos. Los alimentos crudos contienen pocos HAP, los cuales se ven incrementados cuando el alimento es cocinado, es tostado o se lleva a plancha. La formación de ellos en preparaciones con brasas de carbón, aumenta por el contenido de grasa de la carne, el tiempo de cocción y la temperatura. <br><br>El cancerígeno más conocido de todos es el benzopireno ampliamente difundido en los alimentos. Se forma a partir de almidón a 370 - 390 ºC y también a partir de aminoácidos y ácidos grasos a temperaturas altas.

    h5 Vías de exposición del HAP
    p Uso habitual de productos derivados del petróleo y fumadores.
    h5 Ambiental:

    ol.lista-ol--cuadro
      li
      .lista-ol--cuadro__vineta
        span 1
      |Atmósfera (vehículos a motor, todos los diesel).

      li
      .lista-ol--cuadro__vineta
        span 2
      |Agua consumo y precipitaciones.

      li
      .lista-ol--cuadro__vineta
        span 3
      |Suelo y sedimentos, (deposición atmosférica o de plantas, y carbonización de plantas).

      li
      .lista-ol--cuadro__vineta
        span 4
      |Animales (animales marinos sobre todo cúmulos HAP, los invertebrados primitivos como esponjas).
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-2.col-sm-6
        img(src='@/assets/curso/temas/t1/img07.png', alt='')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          .row(titulo="Alimentaria")
            .col-md-12.mb-4.mb-md-0
              p Dieta (deposición de partículas de agua, suelo y aire contaminado), mariscos.

          .row(titulo="Tecnológica")
            .col-md-12.mb-4.mb-md-0
              p Tratamientos térmicos: secado, ahumado, adición de aditivos como aromas de humo, métodos de cocción (brasa, frito).
              p Los HAP son compuestos de carácter lipofílico que se concentran en grasas y aceites.

          .row(titulo="Efectos tóxicos")
            .col-md-12.mb-4.mb-md-0
              p En general no se han detectado efectos agudos de los HAP en humanos.

    
          .row(titulo="Efectos crónicos (no cancerígenos)")
            .col-md-12.mb-4.mb-md-0
              p En general no se han detectado efectos agudos de los HAP en humanos.
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  |Desórdenes en la piel en humanos y animales.
                li
                  i.fas.fa-check
                  |Efectos respiratorios.
                li
                  i.fas.fa-check
                  |Efectos en la sangre y en el hígado.
                li
                  i.fas.fa-check
                  |Toxicidad reproductiva en animales, incluyendo una disminución de la fertilidad (no hay información para humanos), efectos cancerígenos.
                li
                  i.fas.fa-check
                  |Aumento del cáncer de pulmón en humanos expuestos a emisiones de hornos de carbón de coque, material de construcción, derivados del alquitrán y humo de tabaco.
                li
                  i.fas.fa-check
                  |En general los compuestos con mayor peso molecular (3 - 5 anillos benzoicos) son los más cancerígenos para el organismo. 

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Aminas heterocíclicas (AH)
    
    p Producidas por la pirólisis de aminoácidos, cuando los alimentos de alto contenido en proteínas como las carnes y pescados se llevan a tratamientos térmico intensos. Se han identificado hasta 20 estructuras diferentes que se pueden agrupar en 2 familias:
    ul.lista-ul--color
      li
        i.fas.fa-check
        |Amino piridinas (carbolinos).
      li
        i.fas.fa-check
        |Amino-N-metilimidazol.

    p La formación de AH depende de:
    
    ol.lista-ol--cuadro
      li
      .lista-ol--cuadro__vineta
        span 1
      |Tiempo de cocinado.
      li
      .lista-ol--cuadro__vineta
        span 2
      |Temperatura (aumento exponencial > 150 ºC).
      li
      .lista-ol--cuadro__vineta
        span 3
      |Tipo de alimento.
      li
      .lista-ol--cuadro__vineta
        span 4
      |Contenido en grasa.
      li
      .lista-ol--cuadro__vineta
        span 5
      |Humedad.
      li
      .lista-ol--cuadro__vineta
        span 6
      |Presencia de aditivos.
      li
      .lista-ol--cuadro__vineta
        span 7
      |Tipo de cocinado (microondas, hervido, frito, sartén eléctrica).
      li
      .lista-ol--cuadro__vineta
        span 8
      |Generalmente la cantidad de carnes: pescado y carne pura, mezclas, salchichas o albóndigas. 

    p.mb-4 No es fácil evitar la formación de estos compuestos en productos ricos en proteínas, por ello se han realizado diferentes estrategias como:
    
    .row.mb-5(data-aos='fade-right')
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.size.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t1/ico01.png', alt='')
          p.mb-5.text-center Hervir el pescado y estofar la ternera utilizando más el microondas, asar o freír sólo a baja temperatura (< 180 º C).

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.size.color-secundario.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t1/ico02.png', alt='')
              .py-1
          p.mb-5.text-center Eliminar la costra y partes quemadas de carne, aves y pescado.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.size.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t1/ico03.png', alt='')
          p.mb-5.text-center La precocción en microondas ha demostrado que disminuye hasta un 90 % la formación de AH.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.size.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t1/ico04.png', alt='')

          p.text-center Las AH se absorben por el tracto gastrointestinal y un 40 % se elimina por la orina. Estas han demostrado ser mutagénicas y cancerígenas en animales de laboratorio. 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
