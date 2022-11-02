<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estadística

    p(data-aos="fade-up") La estadística es una rama de las matemáticas que, como disciplina científica, se ocupa de la obtención, recopilación, ordenamiento y análisis de conjuntos de datos y variables, sucesos u otros, según la necesidad que se tenga de analizar o resumir dichos datos.

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0
        .p-4.row(style="background-color:#FFF0DE;height:100%;")
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/1.png" data-aos="fade-right")
          .col(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Con la aplicación de la estadística, se pretende obtener conclusiones, explicaciones, comparaciones de información y tendencias de los datos o variables, con lo cual, se facilita la toma de decisiones preventivas o de iniciativa, entre otras.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/2.png" data-aos="fade-left")

    h5.mt-5(data-aos="fade-up") La estadística se puede subdividir en dos grandes ramas, así:

    h4.text-center.mt-5(data-aos="fade-up") Tipos de estadística

    .row.mt-5
      .col-lg-6.mb-5.mb-lg-0
        .p-5.pt-0(style="background: rgb(231,231,232);background: linear-gradient(360deg, rgba(231,231,232,1) 74%, rgba(255,255,255,1) 74%);height:100%;")
          .col-sm-8.m-auto
            figure
              img(src="@/assets/curso/tema1/3.png" data-aos="zoom-in-up")
          h5.mt-5.text-center(data-aos="fade-up") 1. Estadística descriptiva
          p.mt-4.mb-0(data-aos="fade-up") Se ocupa de los métodos para la recolección, la organización, y la presentación de resumen de un conjunto de datos analizados. #[br] Busca describir las características de los datos. #[br] Suele utilizar instrumentos gráficos y de tablas.
      .col-lg-6
        .p-5.pt-0(style="background: rgb(231,231,232);background: linear-gradient(360deg, rgba(231,231,232,1) 74%, rgba(255,255,255,1) 74%);height:100%;")
          .col-sm-8.m-auto
            figure
              img(src="@/assets/curso/tema1/4.png" data-aos="zoom-in-up")
          h5.mt-5.text-center(data-aos="fade-up") 2.  Estadística inferencial
          p.mt-4.mb-0(data-aos="fade-up") Más que resumir y describir datos, busca hacer predicciones, conclusiones y generalizaciones de situaciones.
          p.mt-4.mb-0(data-aos="fade-up") Obtiene conclusiones a partir de los datos utilizados en el análisis. #[br] Siempre presumiendo un grado de incertidumbre o falla por la interpretación o calidad misma de los datos.

    p.mt-5(data-aos="fade-up" style="font-weight:bold;") En la biblioteca, la estadística tiene como objetivos principales:

    .row.mt-5.col-lg-8.m-auto
      .col-lg-6.mb-5.mb-lg-0.col-10.m-auto
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}")
              h5.text-center.mt-5(style="color:#12263F;") Medir y evaluar
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#FDB768;")
              h5.text-center.mt-5(style="color:#12263F;") Medir y evaluar
              p.mt-5.mb-5(style="color:#12263F;") La calidad y la eficiencia en la prestación de los servicios bibliotecarios para, así, emprender acciones de mejora.
      .col-lg-6.mb-5.mb-lg-0.col-10.m-auto.mt-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}")
              h5.text-center.mt-5 Difundir
            .tarjeta-flip__contenido.p-5.p-xl-5
              h5.text-center.mt-5 Difundir
              p.mt-5.mb-5 Ante la comunidad, el uso de los recursos bibliográficos, mes a mes, o en el periodo que estime pertinente.

    .tarjeta.color-primario.p-3.mt-5.cont_1_1.col-lg-10.m-auto
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white(data-aos="fade-up") ¡Nota!
              p.text-small.mb-0.mt-3(data-aos="fade-up") Con la captura y registro de los diferentes datos estimados como pertinentes, se construyen formas ordenadas de los mismos, los cuales sirven de instrumentos para el funcionamiento y servicio de la biblioteca.

    h5.mt-5(data-aos="fade-up") Los datos que se consideran pertinentes y con los cuales se lleva a cabo el análisis, se pueden clasificar en tres áreas:

    .p-5.mt-5.cont_1_2(style="border-radius:25px;")
      .row
        .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
          SlyderA(tipo="b" style="background-color:#fff;border-radius:25px")
            .row.p-5
              h4(style="color:#FD9827;") Datos para el funcionamiento administrativo
              p Miden las ocupaciones del personal y sus actividades funcionales, con relación a los servicios y orientación a usuarios, así como para determinar costos de la biblioteca.
            .row.p-5
              h4(style="color:#FD9827;") Datos sobre aspectos técnicos o de operación bibliotecaria
              p Donde lo que se busca registrar se relaciona con los niveles de pedidos de libros digitales, solicitudes de consecución de materiales específicos, el proceso físico, el registro de materiales (revistas, libros digitales o físicos, artículos, material pictográfico, domicilios y demás propios del servicio).
            .row.p-5
              h4(style="color:#FD9827;") Datos públicos
              p Aquellos que registran el acceso a las búsquedas, préstamos o suministros en sí, servicio en línea, uso de la colección, frecuencias, consultas, descargas de materiales, promoción de uso de bases de consulta, entre otros.
        .col-lg-6.d-none.d-lg-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.png" data-aos="fade-left")

    p.mt-5(data-aos="fade-up" style="font-weight:bold;") En relación con los datos estadísticos en la gestión de las bibliotecas, se recomienda tener muy en cuenta aspectos como:

    h5.text-center.mt-5(data-aos="fade-up") Aspectos clave del análisis de datos en bibliotecas

    ImagenInfografica.color-acento-botones.mt-5.col-lg-10.m-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/10.svg')
      .tarjeta.color-acento-botones.p-3(x="31%" y="13%" numero="1" style="background-color:#FFFFFF;border-radius:10px;border:1px #31313C solid;")
        p.mb-0 En estos grupos de datos se describe la generación de información de las áreas de la biblioteca, lo que permitirá su análisis responsable.
      .tarjeta.color-acento-botones.p-3(x="69.2%" y="10.5%" numero="2" style="background-color:#FFFFFF;border-radius:10px;border:1px #31313C solid;")
        p.mb-0 Se espera que, con un análisis apropiado y oportuno de la información, haya mejoras significativas y justas en el servicio, mediante la toma de decisiones.
      .tarjeta.color-acento-botones.p-3(x="22.3%" y="34.7%" numero="3" style="background-color:#FFFFFF;border-radius:10px;border:1px #31313C solid;")
        p.mb-0 Si no se cuenta con la información real y verídica, se pueden cometer errores, reportar cifras y/o descripciones no confiables; por lo cual es muy importante tener protocolos de registro y cultura de cumplimiento de los mismos.
      .tarjeta.color-acento-botones.p-3(x="78.5%" y="37%" numero="4" style="background-color:#FFFFFF;border-radius:10px;border:1px #31313C solid;")
        p.mb-0 Este ejercicio implica una revisión detallada, y a profundidad, de cada conjunto de variables que se trate, para entender su esencia, estructura e interpretar su funcionamiento.

    .row.mt-5.cont_1_3(style="position:relative;")
      .col-lg-7.mb-4.mb-lg-0.pt-5(style="place-self:center")
        h5(data-aos="fade-up") Con el adecuado análisis estadístico se puede responder a aspectos tácitos como son:
        ul.fa-ul.mt-5
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | ¿Quiénes son los usuarios de la biblioteca?
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | ¿Qué temas son los más consultados?
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | ¿Cuál es la edad de nuestros clientes, qué características tienen?
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | ¿Qué servicios son los más demandados por los usuarios?
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | ¿Qué tipo de experiencia, satisfacción expresan los clientes?
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | ¿Cuántas consultas, descargas, préstamos se hacen por periodos?
      .col-lg-5
        figure.col-10.m-auto
          img(src="@/assets/curso/tema1/12.png")

    .tarjeta.color-primario.p-3.mt-5.cont_1_1.col-lg-10.m-auto
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.p-3
              h5.text-white(data-aos="fade-up") ¡Importante!
              p.text-small.mb-0.mt-3(data-aos="fade-up") Estos, y otros aspectos, permitirán identificar patrones de comportamiento, sucesos o diferentes características de los conjuntos de datos a analizar, para mejorar la oferta, el servicio, recursos, procesos, experiencias en la biblioteca.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
.cont_1_1
  background: url(../assets/curso/s1.png)
  background-size: cover
  background-repeat: no-repeat
.cont_1_2
  background: url(../assets/curso/tema1/8.png)
  background-size: cover
  background-repeat: no-repeat
.slyder-a__tipo-b
  padding: 1rem
.slyder-a__bullets__item
  background-color: #FEDBB4
.slyder-a__bullets__item--active
  background-color: #FD9827 !important
  border: none
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #C0C942
  opacity: 1
.cont_1_3:before
  position: absolute
  content: ''
  width: 115%
  left: -7%
  height: 85%
  bottom: 0
  background: url(../assets/curso/tema1/11.png)
  background-size: cover
  background-repeat: no-repeat
@media screen and (max-width: 1399px)
  .cont_1_3:before
    height: 100%
  .cont_1_3 .col-lg-5
    place-self: center
</style>
