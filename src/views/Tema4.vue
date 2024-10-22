<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Hidrocarburos policlorados, dioxinas y furanos policlorobifenilos (PCBs)

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.align-items-center
      .bloque-texto-g__img.bg1
        img.img-bloque.d-none.d-lg-block(src='@/assets/curso/temas/t4/img01.png', alt='')
      .bloque-texto-g__texto.p-4
        p.mb-3 Estos compuestos han sido utilizados como aceites de transformadores, aceites hidráulicos, lubricantes, pinturas y ceras, entre otros. Las vías de contaminación del ambiente son diversas, tales como la destrucción de aparatos de refrigeración, condensadores, transformadores eléctricos, que van acumulándose mayoritariamente en sedimentos de alcantarillado y en las fuentes de aguas estancadas.<br><br>
        p.mb-0 Se han detectado niveles importantes en animales que viven junto a industrias donde se vierten estos contaminantes, entre ellos se encuentran las truchas, salmones, garzas, entre otras especies.


    p.mb-4 Los PCBs están clasificados como probables carcinógenos humanos, y producen una amplia gama de efectos adversos en los animales, como la toxicidad reproductiva, inmunotoxicidad y carcinogenicidad.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1. Dioxinas y Furanos
    
    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-12
        p El origen antropogénico de las dioxinas y furanos se debe esencialmente a procesos donde hay combustión donde se genera reacción entre hidrocarburos aromáticos y clorados en presencia de oxígeno, y también en procesos químicos e industriales como en la fabricación de PVC y blanqueo de papel. También pueden proceder de productos de desecho como lodos de depuradora o lixiviados de vertederos. A diferencia de los PCBs, no se conoce aplicación alguna de las dioxinas ni de furanos, apareciendo siempre como subproductos o impurezas en distintos procesos, entre ellos la obtención de plaguicidas organohalogenados. Los policlorodibenzodioxinas (PCDD) y policlorodibenzofuranos (PCDF) forman dos grupos de compuestos químicos que son, al igual que los PCBs, altamente persistentes en el medioambiente.
    
    .row.mb-3(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/img02.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p De dichos compuestos el más tóxico es el 2,3,7,7 -TCDD considerado por la Agencia Internacional de Investigación sobre el Cáncer (IARC) como sustancia carcinogénica clase 1, es decir de toxicidad demostrada para el hombre. Está identificada como el compuesto más tóxico de los generados por el hombre, siendo la dosis letal DL50 en ratas de tan solo 0,25 mg/kg. Varios estudios han demostrado la capacidad de estos compuestos para producir además de cáncer, mutaciones y malformaciones en fetos de distintas especies animales. A pesar de ser conocida como cancerígeno humano no se considera que el cáncer sea el efecto crítico que se haya de tener en cuenta para la fijación de la ingesta tolerable. Los efectos críticos son: cambios en el comportamiento neurológico, endometriosis e inmunosupresión.
      .py-3
      p El accidente que tuvo lugar en Severo (Italia) en 1976 en una fábrica de pesticidas dejó constancia de los efectos producidos por las dioxinas sobre la salud. Entre otras, cloracné (alteración dermatológica persistente similar al acné juvenil que aparece en cara, espalda, axilas, brazos y genitales), alteraciones hepáticas, alteraciones en el comportamiento y aprendizaje, disfunciones en el sistema inmunitario y hormonal. Hoy en día, casi medio siglo después, se siguen investigando y descubriendo nuevas afecciones sobre la población que estuvo expuesta.
      p Las personas se ven expuestas, principalmente a través de los alimentos (> 90%) siendo los alimentos de origen animal los que contribuyen mayoritariamente: los animales están expuestos a las dioxinas a través de la contaminación ambiental. Una vez en el organismo del animal, las dioxinas son acumuladas preferentemente en el hígado y el tejido adiposo, siendo la metabolización y la excreción muy lenta, lo cual permite su bioacumulación.





</template>

<script>
export default {
  name: 'Tema4',
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
