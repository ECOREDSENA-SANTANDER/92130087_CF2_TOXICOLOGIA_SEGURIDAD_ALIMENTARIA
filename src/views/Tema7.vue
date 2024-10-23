<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Residuos de producción, agrícola y ganadera
    
    p Los plaguicidas son sustancias muy utilizadas en el mundo entero para el control de diferentes agentes, entre los que se encuentran: insectos, artrópodos, animales transmisores de enfermedades y hongos. En especies vegetales se usan para el control de insectos y malezas, y en la ganadería para controlar los parásitos; también se utilizan para eliminar roedores y mosquitos.
    p Estas sustancias en la actualidad son utilizadas tanto de forma industrial como en los hogares.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-12
        .cajon.color-acento-contenido.p-4
          p Los plaguicidas se pueden clasificar por el uso que se les da, su estructura química o su toxicidad. Están elaborados para cumplir diferentes funciones, las cuales varían según el grupo químico sobre el cual se desarrolla su estructura. Dentro de los principales tipos se destacan los inorgánicos, plaguicidas vegetales, organosintéticos y sintéticos, y organismos vivos. Entre los orgánicos de síntesis, a la cual pertenece la mayoría de los plaguicidas usados en la actualidad, se encuentran los organofosforados, los organoclorados, los carbamatos y las piretrinas y peritroides.
    p.mb-3 Los organoclorados son muy persistentes en el ambiente (agua y suelo) y tienen alta liposolubilidad, lo cual condiciona su almacenamiento en el tejido graso de los animales. Estos compuestos en la actualidad se usan muy poco, pero de estos, los más utilizados son los organofosforados, carbamatos y piretrinas sintéticas, ya que, debido a su menor persistencia en el medio ambiente, son potencialmente menos peligrosas para el consumidor, quedando ya atribuido su efecto tóxico a la manipulación por el fabricante, distribuidor y agricultor.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span
            | Clasificación de los plaguicidas según su funcionalidad y estructura química
        .tabla-a.color-acento-contenido
          table
            caption Referencia Tabla - Norma APA
            thead
              tr
                th Funcionalidad
                th Estructura química
            tbody
              tr.text-center
                td Insecticidas
                td Organoclorados

              tr.text-center
                td Fungicidas
                td Organofosforados
   
              tr.text-center
                td Herbicidas
                td Carbamatos
              
              tr.text-center
                td Acaricidas
                td Piretroides

              tr.text-center
                td Moluscosidas
                td Bromatos
   
              tr.text-center
                td Rodenticidas
                td Fenoxiacéticos
              
              tr.text-center
                td Algicidas
                td Bipiridilos

              tr.text-center
                td Biocidas
                td Triazinicos
   
              tr.text-center
                td Nematocidas
                td Fosfaminas

              tr.text-center
                td Ovocidas
                td Fenoles halogenados
          .py-1
          p Fuente: SENA (2012)


    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-10
        .bloque-texto-f.color-acento-contenido.pt-4.px-5.mb-5
          .bloque-texto-f__comillas.p-2
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto “Al considerar el término plaguicida también se incluyen otros compuestos con finalidades diferentes a la liquidación de organismos como sustancias reguladoras del crecimiento de las plantas, defoliantes, desecantes, agentes para reducir la densidad de la fruta, agentes para evitar la caída prematura de la fruta y sustancias aplicadas a los cultivos antes y después de la cosecha, para proteger el producto contra el deterioro durante el almacenamiento y transporte.”
          .bloque-texto-f__autor.mb-3.p-4
            h5.mb-0 - (FAO 1990).
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.align-items-center(data-aos='fade-right')
      .bloque-texto-g__img.bg1
        img.img-bloque.d-none.d-lg-block(src='@/assets/curso/temas/t7/img01.png', alt='')
      .bloque-texto-g__texto.p-4
        p.mb-3 Desde el año 1945, los plaguicidas se han multiplicado por 45, pero debido a los nuevos controles de los últimos 15 años se ha tenido un mayor control para reducir su uso. El nivel de seguridad toxicológica de los principales plaguicidas permitidos que son usados en diferentes cultivos son establecidos por el Codex Alimentarius (FAO/ OMS, 2005) donde se definen los Límites Máximos de Residuos (LMR) para cada cultivo. Según la OMS cada año hay 250.000 muertos debido a los plaguicidas. La mayoría de los países han establecido un LMR, pero el desconocimiento de efectos sinérgicos y antagónicos entre los diferentes plaguicidas y la exposición real a través de la dieta los convierte en muy peligrosos.
 
    p Dependiendo   de   su   grado   de   peligrosidad los plaguicidas se pueden clasificar en extremadamente, altamente, medianamente y ligeramente tóxicos si son de baja o alta peligrosidad. De acuerdo con su dosis letal 50 (DL50) se pueden clasificar en diferentes categorías toxicológicas como se aprecia a continuación:

    .row.justify-content-center.align-items-center.mb-2(data-aos='fade-right')
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3. 
          span
            | Categoría toxicológica de los plaguicidas
        .tabla-a.color-acento-contenido
          table
            caption Referencia Tabla - Norma APA
            thead
              tr
                th Color etiqueta
                th Categoría toxicológica
                th Equivalencia clasificación OMS
                th Dl50 Oral en mg/kg
                th Característica
            tbody
              tr.text-center
                td Rojo
                td I
                td IA
                td < 50
                td Extremadamente tóxico.

              tr.text-center
                td Amarillo
                td II
                td IB
                td 50 a 500
                td Altamente tóxico.
              tr.text-center
                td Azul
                td III
                td II
                td 500 a 5000
                td Medianamente tóxico.
              tr.text-center
                td Azul
                td IV
                td III
                td < 5000
                td Ligeramente tóxico.
 
          .py-1
          p Fuente: Decreto 1843/1991, Ministerio de Salud de Colombia.

    P El Ministerio de Salud, de acuerdo con el decreto 1843 de 1991, expide el concepto toxicológico (el cual consiste en una serie de pruebas de toxicidad aguda, subaguda y crónica en mamíferos, que generalmente realizan las casas comerciales en sus países de origen) para los productos formulados que se apliquen en el país y los permisos de experimentación bajo protocolos específicos. Este decreto busca mantener una dinámica de integración entre los Ministerios de Agricultura, a través del ICA y el Ministerio de Salud, la industria y usuarios, para el estudio y planeamiento de soluciones a la situación de los plaguicidas en Colombia.
    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-12
        .cajon.color-acento-contenido.p-4
          p Los plaguicidas son agentes tóxicos para los organismos vivos, incluyendo la especie humana. Son capaces de producir una respuesta tóxica aguda, normalmente secundaria a una intoxicación de tipo accidental (manipulación inadecuada, confusión de envases, entre otras) o suicida. No obstante, en toxicología alimentaria este tipo de respuesta suele ser relativamente excepcional ya que suelen ser residuos que permanecen en el alimento y que potencialmente pueden originar una intoxicación crónica.
          P El riesgo de   contaminación   por   plaguicidas en alimentos deriva de características como aplicación inapropiada de pesticidas permitidos, bien en cantidad excesiva o en momentos más cercanos a la cosecha; contaminación ambiental por una distribución accidental secundaria a una fumigación en zonas adyacentes o bien por la existencia de fábricas próximas, incumplimiento del tiempo de suspensión o retirada.


    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.1 Organofosforados

    P Estos compuestos son ésteres del ácido fosfórico y de sus derivados, los cuales son potentes inhibidores de la acetilcolinesterasa y producen un bloqueo irreversible de esta enzima. Al inhibir esta enzima la cual es la encargada de degradar la acetilcolina, se produce un cúmulo de acetilcolina originándose grandes perturbaciones en la neutransmisión.
    .row.mb-3(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t7/img002.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p Son muy utilizados como insumos agrícolas, como plaguicidas en los hogares y para el control de agentes transmisores de enfermedades epidémicas. Son fácilmente hidrolizados, tienen escasa permanencia en el medio ambiente y escaso potencial de acumulación. Tienen efectos sobre los insectos pero ninguna actividad sobre plantas. Muchos de ellos son altamente tóxicos para los humanos y especies no objetivas. <br><br>Los compuestos más conocidos son el malatión, diclorvós, metamidofós, clorpirifós, diazinón, escradán, fentión, demetón. De los nombres comerciales se encuentran: FOLIDOL® (metilparathion), ABATE® (tenefos), PARATHION 50® (parathion), NUVAN® (diclorvos), BAYGON® (propoxur). 
    
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.2 Organoclorados

    p Son compuestos que se caracterizan por tener moléculas orgánicas de cloro en su estructura química. Son los más persistentes dentro de los plaguicidas, muy estables en los diferentes ecosistemas, son bioacumulables y no son biodegradables.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t7/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Actúan inhibiendo la fosforilación oxidativa y, especialmente, las ATPasas de membrana, lo que origina una alteración en el transporte iónico a través de esta. En general son hepatonefrotóxicos (hepatitis y lesiones en el túbulo proximal) y algunos de ellos son cancerígenos, como por ejemplo el clordane, capaz de inducir una anemia aplásica.<br><br>Entra al organismo por todas las vías (oral, dérmica e inhalatoria), debido a su gran liposolubilidad se absorben con facilidad por la piel. Cuando son absorbidos se desplazan en todos los tejidos, almacenándose la mayor parte en el tejido graso, por lo cual se eliminan lentamente por orina después de que sufren varios procesos metabólicos a nivel hepático. Producen graves efectos neurotóxicos en el ser  humano.

    p Los compuestos más representativos del grupo es el DDT el cual fue muy importante para controlar la malaria. Otros son: aldrín, dieldrín, lindano, heptacloro, clordano, toxafeno, endosulfán.
    p Actualmente, se restringe el uso de los organoclorados por su efecto nocivo sobre el medio ambiente, por su elevada persistencia y alto potencial de bioacumulación en la cadena alimentaria. 

    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.3 Carbamatos

    p Son compuestos derivados del ácido carbámico. En general son plaguicidas no bioacumulables, poco persistentes en el ambiente y de mediana toxicidad para los humanos, que desaparecen rápidamente por hidrólisis y fotodegradación.





</template>

<script>
export default {
  name: 'Tema3',
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
