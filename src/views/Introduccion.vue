<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.color-primario.p-5.mb-5.cont_intro(style="background-color:transparent;")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/intro1.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0(data-aos="fade-up" style="color:#12263F;") Se da la bienvenida al estudio del componente formativo “Datos y estadística”. Tenga una satisfactoria experiencia, haciendo un recorrido responsable por todos los temas propuestos. Comience observando con atención el vídeo que se muestra enseguida. #[strong(style="color:#FD9827;") ¡Adelante!]

    figure.mt-5(style="position:relative")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.cont_intro
  background: url(../assets/curso/intro2.png)
  background-size: cover
  background-repeat: no-repeat
</style>
