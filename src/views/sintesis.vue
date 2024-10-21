<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Entender el fenómeno toxico en el organismo y las generalidades de la toxicología permite conocer la manera en que se realiza la determinación de los tóxicos en los elementos y como se desarrollan algunas enfermedades en el organismo generadas por intoxicación alimentaria. En el siguiente diagrama, se pueden apreciar los conceptos y relaciones tratadas en el componente.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En el diagrama se presentan los temas tratados en el componente, desde las características principales de los antinutrientes, la toxicidad por virus y bacterias, contaminación vírica y las sustancias toxicas de origen fungido.")
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
