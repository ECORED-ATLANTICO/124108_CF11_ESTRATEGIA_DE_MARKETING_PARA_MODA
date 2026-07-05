<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-xl-9
        .row.align-items-center.mb-3.justify-content-center
          .col-sm-8.col-lg-6.col-xl-5
            figure
              img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/intro/1.png", alt="tendencias de moda y eventos")
          .col-lg-6.col-xl-7
            .p-4.bg-acento-contenido-a5.rounded-4.mb-3
              p.mb-0 El presente componente formativo aborda las tendencias de moda y los eventos como recursos estratégicos para interpretar, proyectar y comunicar productos dentro del sistema moda. Para ello, integra conceptos relacionados con consumo, difusión de tendencias, observatorio de tendencias, universos de vestuario, ocasiones de uso, visualización de producto y producción de eventos, con el propósito de fortalecer la lectura técnica y comercial de las propuestas de moda.
        .row.align-items-center
          .d-none.d-lg-block.col-lg-1
            figure
              img.img-30(src="@/assets/curso/intro/3.svg", alt="")
          .col-lg-11
            p.mb-0 A lo largo del componente, el aprendiz reconoce que una tendencia no surge de manera aislada, sino que responde a transformaciones sociales, culturales, tecnológicas, ambientales, económicas y comunicativas. Esta comprensión permite relacionar los cambios del mercado con los productos del sistema moda, identificando cómo una prenda, accesorio, calzado o complemento puede adaptarse a universos de vestuario, momentos de uso, perfiles de consumidor, líneas de mercado y estrategias de comunicación digital.
            
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/intro/2.png", alt="tendencias de moda y eventos")
    
    .p-4.bg-secundario-s5.rounded-4.mb-3
      p.mb-0 De igual manera, se estudian los eventos de moda como escenarios de visualización, posicionamiento, relacionamiento y comercialización. Estos espacios permiten presentar colecciones, activar campañas, generar experiencias de marca, fortalecer relaciones con compradores y comunicar narrativas de producto mediante recursos presenciales, digitales o híbridos. En este sentido, el componente aporta bases para interpretar tendencias y planear eventos con criterios técnicos, comunicativos y comerciales acordes con el marketing digital aplicado al sistema moda.
</template>

<script>
export default {
  name: 'Introduccion',
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
