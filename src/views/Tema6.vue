<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Radionúclidos
    
    P Los radionúclidos son elementos radiactivos que se pueden derivar de dos formas:

    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.bg10.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-3
            img.mb-2(src='@/assets/curso/temas/t6/img01.png', alt='')
          .col-9
        p.mb-2 A partir de los residuos radioactivos o radioemisores que proceden de las centrales nucleares por fugas radioactivas y contaminan los alimentos.
    
      .col-md.tarjeta.bg11.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-3
            img.mb-2(src='@/assets/curso/temas/t6/img02.png', alt='')
          .col-9
        p.mb-2 Por las fuentes de radioactividad de técnicas de conservación de alimentos. En este caso, se utilizan radiaciones electromagnéticas producidas por Co 60 y Cs 137, por lo que el producto resultante no tiene radioactividad. La mención de radiactividad es obligatoria en el etiquetado del alimento. (No hay que confundir este proceso con la irradiación).
        
    p Entre los radioelementos de interés se encuentran el rutenio, el yodo y el cesio.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t6/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los radionúclidos se incorporan a los vegetales directamente por deposición y riego o  indirectamente a través del sol; a los animales mediante la dieta y el agua. Aunque estos se encuentran en los alimentos a niveles muy bajos se deben considerar por sus efectos toxicológicos. Son cancerígenos, mutagénicos y teratógenos,     tienen afinidad especial por órganos o tejidos  y son acumulables, no tienen mecanismos de detoxificación, algunos tienen tiempos de vida media larga y esto hace que los efectos persistan a lo largo de la vida de las personas. 
    p Cuando un ser vivo recibe una dosis de radiación, sus efectos biológicos dependerán de la dosis radioactiva, la naturaleza y tiempo de la radiación, y el mismo estado del organismo. Accidentes como el de Chernóbil, el recientemente de la central nuclear en Japón y el uso de armas atómicas (aunque únicamente sea como ensayo) contribuyen poderosamente a aumentar la presencia de radionúclidos en el medio ambiente.



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
