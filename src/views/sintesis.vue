<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El componente formativo Tendencias de moda y eventos, aborda el análisis de tendencias de moda y consumo, las teorías de difusión, la clasificación de tendencias, los observatorios y los difusores que participan en su circulación. También relaciona estos elementos con los universos de vestuario, las ocasiones de uso, los perfiles de consumidor y las líneas de mercado, permitiendo comprender cómo las preferencias sociales influyen en el desarrollo, comunicación y posicionamiento de productos de moda.
        .p-4.bg-sintesis.rounded-4
          p.mb-0 Además, aborda los eventos de moda como espacios estratégicos de exhibición, promoción y conexión con el público. Incluye su evolución histórica, tipologías, formatos físicos, digitales e híbridos, procesos de producción, visualización de productos según líneas de mercado y evaluación de resultados desde el <em>marketing</em> digital.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema conceptual sobre tendencias de moda y eventos. Integra contenidos relacionados con el análisis de tendencias, teorías de difusión, observatorios y difusores de tendencias, así como la clasificación de universos de vestuario y ocasiones de uso. También aborda los eventos de moda desde su evolución histórica, tipologías, formatos físicos, digitales e híbridos, procesos de producción, visualización de productos según líneas de mercado y evaluación de resultados mediante estrategias de marketing digital.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
