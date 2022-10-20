<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-up") La estadística y el análisis de datos son una de las fuentes principales que tienen las bibliotecas para mejorar su servicio, por ende, debe hacer uso permanente de la información que expresan o se obtiene de los usuarios de los servicios bibliotecarios.

    .tarjeta.color-primario.p-3.mb-5.cont_sintesis
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/s2.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small.mb-0(data-aos="fade-up") Se ha finalizado el estudio de los contenidos de este componente formativo. En este punto, haga un análisis de la estructura que se muestra a continuación. Registre esta síntesis en su libreta personal de apuntes. Además, haga un repaso de los temas que considere necesario. #[strong(style="color:#FD9827;") ¡Adelante!]


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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

<style lang="sass">
.cont_sintesis
  background: url(../assets/curso/s1.png)
  background-size: cover
  background-repeat: no-repeat
</style>
