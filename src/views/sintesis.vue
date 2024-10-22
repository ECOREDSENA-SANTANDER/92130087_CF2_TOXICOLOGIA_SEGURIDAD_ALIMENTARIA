<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Las sustancias toxicas pueden llegar a los alimentos de consumo humano de varias maneras, y dependiendo de su concentración pueden generar riesgo y daño en la salud de las personas, en el siguiente diagrama se pueden apreciar las diferentes fuentes de sustancias toxicas según el proceso, actividad o lugar donde se encuentren: 

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En el diagrama se presentan las diferentes sustancias tóxicas derivadas de procedimientos de preparación y/o almacenamiento de alimentos, así como las sustancias tóxicas que proceden de la contaminación ambientas y procesos de producción.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
