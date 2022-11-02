<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Variables

    .row
      .col-auto.d-none.d-md-block
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-right")
      .col
        p.mb-0(data-aos="fade-up") Las variables se pueden definir como las características, cualidades o comportamientos de una persona, animal u objeto, las cuales pueden presentar cambios, comportamientos diferenciales, en momentos diferentes, o por cambios de una a otra persona o cosa. Las variables siempre se podrán registrar, medir y evaluar.

    .cont_2_1.mt-5.p-md-5.pt-5.pb-5(style="position:relative;")
      h4(data-aos="fade-up") Algunos ejemplos de variables pueden ser:
      .row.mt-5.m-auto.justify-content-center
        .col-xl-2.col-6.mb-5.mb-xl-0.m-auto.mt-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/3.png' data-aos="zoom-in-up" style="width:95px;left:25%;right:25%;")
            .tarjeta.color-primario.d-block(style="background-color:#F5E8DF;border:3px #31313C solid;padding-top:30px !important;")
              .p-4.ps-2.pe-2.pt-0.pb-0
                h5.text-center(data-aos="fade-up" style="color:#31313C;") La edad
                p.text-center(data-aos="fade-up" style="color:#31313C;") … de un grupo de personas
        .col-xl-2.col-6.mb-5.mb-xl-0.m-auto.mt-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/4.png' data-aos="zoom-in-up" style="width:95px;left:25%;right:25%;")
            .tarjeta.color-primario.d-block(style="background-color:#F5E8DF;border:3px #31313C solid;padding-top:30px !important;")
              .p-4.ps-2.pe-2.pt-0.pb-0
                h5.text-center(data-aos="fade-up" style="color:#31313C;") La estatura
                p.text-center(data-aos="fade-up" style="color:#31313C;") … de los niños de un nivel de estudio
        .col-xl-2.col-6.mb-5.mb-xl-0.m-auto.mt-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/5.png' data-aos="zoom-in-up" style="width:95px;left:25%;right:25%;")
            .tarjeta.color-primario.d-block(style="background-color:#F5E8DF;border:3px #31313C solid;padding-top:30px !important;")
              .p-4.ps-2.pe-2.pt-0.pb-0
                h5.text-center(data-aos="fade-up" style="color:#31313C;") El peso
                p.text-center(data-aos="fade-up" style="color:#31313C;") … o la altura de los edificios de una región

        .col-xl-2.col-6.mb-5.mb-xl-0.m-auto.mt-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/6.png' data-aos="zoom-in-up" style="width:95px;left:25%;right:25%;")
            .tarjeta.color-primario.d-block(style="background-color:#F5E8DF;border:3px #31313C solid;padding-top:30px !important;")
              .p-4.ps-2.pe-2.pt-0.pb-0
                h5.text-center(data-aos="fade-up" style="color:#31313C;") El tipo
                p.text-center(data-aos="fade-up" style="color:#31313C;") … de enfermedades asociadas a las formas de alimentación
        .col-xl-2.mb-5.mb-xl-0.m-auto.mt-0.col-6
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/7.png' data-aos="zoom-in-up" style="width:95px;left:25%;right:25%;")
            .tarjeta.color-primario.d-block(style="background-color:#F5E8DF;border:3px #31313C solid;padding-top:30px !important;")
              .p-4.ps-2.pe-2.pt-0.pb-0
                h5.text-center(data-aos="fade-up" style="color:#31313C;") El nivel
                p.text-center(data-aos="fade-up" style="color:#31313C;") … de estudios de las personas en cargos públicos


    .tarjeta.color-primario.p-3.mt-5.cont_2_2.col-lg-10.m-auto
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white(data-aos="fade-up") ¡Atención!
              p.text-small.mb-0.mt-3(data-aos="fade-up") Se puede saber que se está hablando de variables cuando, sobre cualquiera de ellas, se puedan sacar descripciones, resúmenes y conclusiones de orden estadístico.


    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Tipos de variables

    .row
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center")
        p(data-aos="fade-up") Conceptualmente existen dos tipos de variables que son utilizadas para el análisis e interpretación de información y de datos: las #[strong(style="color:#FD9827;") variables de orden cuantitativo] y las #[strong(style="color:#FD9827;") variables de orden cualitativo nominales.]
        .mt-4.row.m-0.pt-4.pb-4.pe-4.ps-0.ps-sm-4.ps-md-4.ps-lg-0(style="background-color:#EBC9B1;")
          .col-auto.d-none.d-lg-block.p-0(style="place-self:center")
            figure
              img(src="@/assets/curso/tema2/9.png" data-aos="fade-right")
          .col(style="place-self:center")
            p.mb-0(data-aos="fade-up") En ambos casos, desde luego, se requiere que representen características observables, con posibles variaciones, que sean expresables en números, cantidades, cualidades o estados.
      .col-lg-5(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/8.png" data-aos="fade-left")

    .cont_2_3.mt-5.pt-5.pb-5(style="position:relative;")
      .row(style="background: rgb(192,201,66);background: linear-gradient(360deg, rgba(192,201,66,1) 75%, rgba(255,255,255,1) 75%);position:relative;width:fit-content;")
        .col-auto
          figure
            img(src="@/assets/curso/tema2/11.png" data-aos="fade-right")
        .col(style="place-self:center")
          h3.mb-0.mt-3(data-aos="fade-left") Variables cualitativas
      .row.mt-5
        .col-lg-7.mb-4.mb-lg-0
          p(data-aos="fade-up") Las variables cualitativas son aquellas que expresan características, como su nombre lo indica, de las cualidades, de un conjunto de individuos, objetos u animales, que se pueden expresar semánticamente con palabras.
          p.mt-5(data-aos="fade-up" style="font-weight:bold;") Algunos ejemplos de variables cualitativas, pueden ser:
          ul.fa-ul.mt-5
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | El color de ojos.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | El color del cabello.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | El género.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | El estado civil.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | La marca de un producto.
            li(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | En el caso de las bibliotecas la editorial de un libro.
        .col-lg-5(style="position:relative")
          figure.col-9.m-auto
            img(src="@/assets/curso/tema2/12.png" data-aos="fade-left")

      p.mt-5(data-aos="fade-up" style="position:relative;font-weight:bold;") Por otra parte, este tipo de variables cualitativas se subdividen en:

      .row.col-lg-8.m-auto.mt-5
        .col-lg-6.mb-4.mb-lg-0
          .p-4(style="background-color:#FDB768;height:100%;border-radius:15px;")
            h5.text-center(data-aos="fade-up") Cualitativas nominales
            p.mt-5(data-aos="fade-up") #[strong Por ejemplo:]
            ul.fa-ul.mt-4
              li.mb-3(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | Los colores.
              li.mb-3(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | Las razones por las cuales hay ausentismo en el trabajo.
              li(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | En una biblioteca, las categorías de libros que consultan los usuarios (ciencia, literatura, medicina, etc.).
        .col-lg-6.mb-4.mb-lg-0
          .p-4(style="background-color:#785549;height:100%;border-radius:15px;")
            h5.text-center.text-white(data-aos="fade-up") Cualitativas ordinales
            p.mt-5.text-white(data-aos="fade-up") #[strong Por ejemplo:]
            ul.fa-ul.mt-4
              li.mb-3.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | Los días de la semana.
              li.mb-3.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | El tamaño de las cosas (grande, mediano, pequeño).
              li.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | En una biblioteca, la ubicación de los libros (arriba, en el medio, abajo).

    .cont_2_4.mt-5.pt-5.pb-5(style="position:relative;")
      .row(style="background: rgb(192,201,66);background: linear-gradient(360deg, rgba(192,201,66,1) 75%, rgba(255,255,255,1) 75%);position:relative;width:fit-content;")
        .col-auto
          figure
            img(src="@/assets/curso/tema2/11.png" data-aos="fade-right")
        .col(style="place-self:center")
          h3.mb-0.mt-3(data-aos="fade-left") Variables cuantitativas

      .row.mt-5
        .col-lg-7.mb-4.mb-lg-0
          p(data-aos="fade-up") Las variables cuantitativas, por su parte, son aquellas que expresan las características de un conjunto de objetos, animales o individuos y que se expresan en cantidades o se escriben en números.
          p.mt-5(data-aos="fade-up" style="font-weight:bold;") Algunos ejemplos de variables cuantitativas, pueden ser:
          ul.fa-ul.mt-5
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | La edad.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | Los ingresos.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | El peso.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | La altura.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | La presión.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | La humedad.
            li.mb-2(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | La cantidad de hermanos.
            li(data-aos="fade-up")
              i.fa.fa-li.fa-check(style="color:#FD9827;")
              | En el caso de una biblioteca, el numero de usuarios que consultaron.
        .col-lg-5(style="position:relative")
          figure.col-9.m-auto
            img(src="@/assets/curso/tema2/14.png" data-aos="fade-left")

      p.mt-5(data-aos="fade-up" style="position:relative;font-weight:bold;") Por otra parte, este tipo de variables cuantitativas se subdividen en:

      .row.col-lg-8.m-auto.mt-5
        .col-xl-6.mb-4.mb-xl-0
          .p-4(style="background-color:#FDB768;height:100%;border-radius:15px;")
            h5.text-center(data-aos="fade-up") Cuantitativas discretas
            p.mt-5(data-aos="fade-up") #[strong Por ejemplo:]
            ul.fa-ul.mt-4
              li.mb-3(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | El número de personas que consultan servicios bibliotecarios en un periodo determinado o en un canal de consulta.
              li.mb-3(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | El resultado siempre será un número entero, no podrá indicar valores decimales.
        .col-xl-6.mb-4.mb-xl-0
          .p-4(style="background-color:#785549;height:100%;border-radius:15px;")
            h5.text-center.text-white(data-aos="fade-up") Cuantitativas continuas
            p.mt-5.text-white(data-aos="fade-up") #[strong Por ejemplo:]
            ul.fa-ul.mt-4
              li.mb-3.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | El valor de inversiones en material bibliográfico, ($158.600,55) por unidad adquirida en un periodo.
              li.mb-3.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | La medición del tiempo transcurrido de servicio (un año y medio).
              li.mb-3.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | La temperatura promedio en el establecimiento (18.5 °C).
              li.mb-3.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | El peso de los libros (0,75 kg).
              li.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#fff;")
                | La distancia entre anaqueles o estanterías (1.7 mt).

      p.mt-5(data-aos="fade-up" style="position:relative;font-weight:bold;") En relación con las variables cuantitativas en la gestión de bibliotecas se debe tener presente:

      .row.col-xl-10.m-auto.mt-5(style="position:relative")
        .col-xl-4.mb-4.mb-xl-0.col-8.m-auto.mt-0
          .tarjeta.color-acento-botones.pt-5.pb-5.ps-4.pe-4.cont_tarjetas(style="height:100%;")
            .row.justify-content-center.mb-3
              .col-8.m-auto.text-center
                img(src='@/assets/curso/tema2/16.svg' data-aos="zoom-in-up")
            h5.text-center.text-center.text-white(data-aos="fade-up") Utilización apropiada de los datos
            p.text-center.text-center.text-white(data-aos="fade-up") Los directores, coordinadores y el personal del equipo de trabajadores que gestionan servicios bibliotecarios deben aprender a utilizar los datos, de diversa índole, que se generan por la prestación del servicio y operación.
        .col-xl-4.mb-4.mb-xl-0.col-8.m-auto.mt-0
          .tarjeta.color-acento-botones.pt-5.pb-5.ps-4.pe-4.cont_tarjetas(style="height:100%;")
            .row.justify-content-center.mb-3
              .col-8.m-auto.text-center
                img(src='@/assets/curso/tema2/17.svg' data-aos="zoom-in-up")
            h5.text-center.text-center.text-white(data-aos="fade-up") Interpretación y uso de la información
            p.text-center.text-center.text-white(data-aos="fade-up") Con tal experticia y teniendo a la estadística como recurso, se espera interpretar y usar la información agregada o resumida de algún tipo de variable o factor por analizar.
        .col-xl-4.mb-4.mb-xl-0.col-8.m-auto.mt-0
          .tarjeta.color-acento-botones.pt-5.pb-5.ps-4.pe-4.cont_tarjetas(style="height:100%;")
            .row.justify-content-center.mb-3
              .col-8.m-auto.text-center
                img(src='@/assets/curso/tema2/18.svg' data-aos="zoom-in-up")
            h5.text-center.text-center.text-white(data-aos="fade-up") Hallazgos y toma de decisiones
            p.text-center.text-center.text-white(data-aos="fade-up") Así mismo, se busca registrar, expresar y procesar los hallazgos en función de tomar decisiones sobre las necesidades de mejora del servicio, entre otros.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 Elementos de la estadística

    .row
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center")
        p(data-aos="fade-up") Los elementos en estadística hacen referencia a las distintas maneras de lograr alguna información y cálculos de variadas acciones o actividades. Los principales elementos que conforman la información estadística son: la población, las variables, los parámetros, la muestra.
        .mt-4.row.m-0.pt-4.pb-4.pe-4.ps-0.ps-sm-4.ps-md-4.ps-lg-0(style="background-color:#EBC9B1;")
          .col-auto.d-none.d-lg-block.p-0(style="place-self:center")
            figure
              img(src="@/assets/curso/tema2/20.png" data-aos="fade-right")
          .col(style="place-self:center")
            p.mb-0(data-aos="fade-up") Visualice con atención el siguiente vídeo en el cual se profundiza en los elementos estadísticos principales; procure llevar registro de lo más destacado en su libreta personal de apuntes:
      .col-lg-5(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/19.png" data-aos="fade-left")

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ad5gxB9PhKQ" title="Principales elementos de la estadística" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-up" style="font-weight:bold;") En relación con los elementos de la estadística, tenga en cuenta los siguiente aspectos clave:

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Tamaño de la muestra") El tamaño de la muestra es importante para poder realizar un adecuado análisis de variables de la población objeto de estudio, de tal manera que llegue a ser representativa y refleje las características de la población en general.
          p(numero="2" titulo="Muestra censal") Se trata de una muestra muy grande o igual a la población. Esta suele dar lugar a grandes costos y demorará mucho tiempo, por ende, habrá que invertir mucho dinero; así mismo hay que tener cuidado si se llega a levantar una muestra pequeña de datos, lo cual puede generar información no confiable o insuficiente.
          p(numero="3" titulo="Determinar tamaños de muestras") Para determinar el tamaño de una muestra existen formas predeterminadas matemáticamente, que permiten que la muestra a recoger sea representativa de la población por analizar y adecuada, con el fin de minimizar el riesgo de error, así como minimizar los costos y tiempo para obtener información y tomar decisiones. 
      .col-lg-6(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/21.png" data-aos="fade-left")

    .tarjeta.color-primario.p-3.mt-5.cont_2_5.col-lg-10.m-auto
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white(data-aos="fade-up") ¡Consulta!
              p.text-small.mb-0.mt-3(data-aos="fade-up") Consulte el Anexo_1_EjemploEstadístico y, mediante el ejemplo que allí se registra, amplíe su comprensión sobre los elementos estadísticos. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('')" target="_blank")
                span(style="color:#12263F;") Descargar
                i.fas.fa-file-download(style="color:#12263F;")


</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({}),
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
.cont_2_1:before
  content: ''
  position: absolute
  width: 115%
  left: -7%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/2.png)
  background-size: cover
  background-repeat: no-repeat
.cont_2_2
  background: url(../assets/curso/s1.png)
  background-size: cover
  background-repeat: no-repeat
.cont_2_3:before
  content: ''
  position: absolute
  width: 115%
  left: -7%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/10.png)
  background-size: cover
  background-repeat: no-repeat
.cont_2_4:before
  content: ''
  position: absolute
  width: 115%
  left: -7%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/13.png)
  background-size: cover
  background-repeat: no-repeat
.cont_tarjetas
  background: url(../assets/curso/tema2/15.png)
  background-size: cover
  background-repeat: no-repeat
  min-height: 400px
.cont_tarjetas img
  max-width: 100px
  display: inline
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #785549
  color: #fff
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #DDD4D1
.cont_2_5
  background: url(../assets/curso/s1.png)
  background-size: cover
  background-repeat: no-repeat
</style>
