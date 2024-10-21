<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel




    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-8.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj1-1.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-4.mb-3 Patología
                p La intoxicación produce parálisis facial, dificultad de deglutir y hablar, debilidad progresiva con parálisis, nauseas, vómitos, cólicos abdominales, boca seca, diplopía (visión doble) y dificultad respiratoria que puede terminar en una insuficiencia respiratoria, usualmente no presenta fiebre, los síntomas aparecen de 8 a 28 horas después de consumidos los alimentos.
      .col-lg-4.col-md-8.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador2 = false")
            .indicador--hover(v-if="mostrarIndicador2")
            figure
              img(src="@/assets/curso/temas/t2/tarj1-2.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-4.mb-3 Tratamiento
                p Despejar las vías respiratorias, suministrar ayuda respiratoria y administrar la antitoxina botulínica, se recomienda la hospitalización de emergencia para facilitar la detección inmediata de la dificultad respiratoria.
      .col-lg-4.col-md-8.col-11.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj1-3.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xxl-4
                h4.mt-4.mb-3 Prevención
                p Esterilizar los alimentos envasados o enlatados, inhibir el crecimiento de la bacteria con pH bajos, mantener los alimentos a temperaturas bajas y almacenaje corto, cocinar la comida a 100 ºC durante 5 minutos, uso de autoclaves para conservas y no dar miel a los bebes.
    

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
