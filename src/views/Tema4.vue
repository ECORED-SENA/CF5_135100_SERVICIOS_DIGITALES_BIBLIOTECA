<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estadísticas básicas

    .cont_4_1(style="position:relative;")
      p(data-aos="fade-up" style="position:relative") Una vez que los datos se han recopilado y clasificado, según el problema o necesidad de lo que se quiere analizar, se hace un análisis exploratorio de los mismos, para lo cual hay que darles una organización, bien sea por cada tipo de individuo o estrato de la población seleccionada, por orden numérico, según la naturaleza o tipo de la variable objeto de análisis, etc. 

      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.col-lg-10.m-auto.mt-5(style="position:relative")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 A partir de este ejercicio se procede al análisis de la información, como es la variación de la información, el comportamiento de frecuencia de la variable o característica, es decir, qué tanto se repite dentro de la muestra o población objeto de estudio, entre otros.

      h4.mt-5(data-aos="fade-up" style="position:relative") Para ahondar en las estadísticas básicas y sus aspectos más relevantes, se debe hablar de medidas de tendencia central y medidas de dispersión, así:

      br
      .row.mt-5.col-lg-8.m-auto(style="position:relative")
        .col-lg-6.mb-5.mb-lg-0
          .p-5.pt-0(style="background-color:#FDB768;height:100%;border-radius:10px;")
            figure.col-4.m-auto
              img(src="@/assets/curso/tema4/2.png" data-aos="zoom-in-up" style="position:relative;top:-50px;")
            h5.text-center(data-aos="fade-up") Medidas de tendencia central
            p.mt-4(data-aos="fade-up") Describen qué nivel de ubicación o posición tienen los datos, en promedio, dentro del campo de actuación o comportamiento de la variable. Ejemplo: se busca medir la edad de los usuarios de un servicio, entonces al conjunto de datos obtenidos de la muestra, se le realizará un análisis para identificar en centímetros el alcance de los datos.
        .col-lg-6.mb-5.mb-lg-0.mt-5.mt-lg-0
          .p-5.pt-0(style="background-color:#785549;height:100%;border-radius:10px;")
            figure.col-4.m-auto
              img(src="@/assets/curso/tema4/2.png" data-aos="zoom-in-up" style="position:relative;top:-50px;")
            h5.text-center.text-white(data-aos="fade-up") Medidas de dispersión
            ul.fa-ul.mt-4
              li.mb-2.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#C0C942;")
                | Cuando los datos estén muy dispersos, el cálculo de estas medidas informará que algunas medidas de tendencia central no son representativas, como la media aritmética.
              li.text-white(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#C0C942;")
                | Cuando los datos de la muestra estén concentrados, cercanos, las medidas de tendencia central son representativas de la muestra y la población en general, como la media aritmética.

    h4.mt-5(data-aos="fade-up") Entre las medidas de tendencia central, principales, se tienen la Media aritmética, la Mediana y la Moda, con las siguientes generalidades:

    .cont_4_2.pt-4.pb-5.mt-5(style="position:relative")
      TabsB.color-secundario.mt-5.mb-5(style="position:relative;background-color:white;")
        .py-4.py-md-5(titulo="La media aritmética" :icono="require('@/assets/curso/tema3/21.svg')")
          .row.p-4
            .col-lg-8.mb-4.mb-lg-0
              h4 La media aritmética
              p.mt-4 Busca identificar el valor promedio del comportamiento de los datos de la muestra, que expresa lo que ocurre entonces en la población, cuál es la tendencia del conjunto de datos o hacia dónde se inclina o sesga la información. 
              .p-4.mt-4(style="background-color:#F5F7D6;")
                h5 ¿Cómo se calcula la media aritmética?
                p.mb-0 Se calcula sumando el conjunto de valores obtenidos y que obedecen a la muestra, sumando cada uno de los valores obtenidos y dividiendo dicha suma entre el número total de valores.
            .col-lg-4
              figure.col-sm-6.m-auto
                img(src='@/assets/curso/tema4/4.png')
        .py-4.py-md-5(titulo="La mediana" :icono="require('@/assets/curso/tema3/22.svg')")
          .row.p-4
            .col-lg-8.mb-4.mb-lg-0
              h4 La mediana
              p.mt-4 Es el valor de los datos de una muestra, que se sitúa en la mitad de ellos (los datos). Para su cálculo y definición, los datos y sus valores deben ser ordenados estrictamente, de mayor a menor o viceversa, siendo el valor de la mitad, de ese conjunto de datos, La mediana. Esta medida de los datos de la muestra permite dejar la mitad de los datos a izquierda y derecha, del valor que se denomina mediana.  
              .p-4.mt-4(style="background-color:#F5F7D6;")
                h5 Si los datos son pares ¿cómo establecer la media?
                p.mb-0 Cuando el conjunto de datos de la muestra es par, La mediana se calcula y será el valor medio de los dos valores centrales, por ejemplo: si para determinar el número de préstamos de una obra literaria consultada en el último mes, la muestra es de cuatro datos de préstamos (3, 9, 11, 15), La Mediana de préstamos de esa obra en el último mes será: (9+11) / 2 = 10. Representando que, en promedio, esa obra se prestó 10 veces al mes.
            .col-lg-4
              figure.col-sm-6.m-auto
                img(src='@/assets/curso/tema4/5.png')
        .py-4.py-md-5(titulo="La Moda" :icono="require('@/assets/curso/tema3/22.svg')")
          .row.p-4
            .col-lg-8.mb-4.mb-lg-0
              h4 La Moda
              p.mt-4 En una muestra de datos de una población, la moda corresponde al valor o dato de la variable a analizar qué más se repite o que tiene el mismo comportamiento en diferentes individuos.
              .p-4.mt-4(style="background-color:#F5F7D6;")
                h5 Ejemplo de moda en la biblioteca
                p.mb-0 Se identificó el número de libros consultados por estudiantes en un día cualquiera: para un título en particular se pudo establecer la siguiente muestra (4, 3, 4, 1, 2, 4). El dato que más se repite es 4, que representa la moda, es decir, la tendencia de los estudiantes a consultar 4 libros, cuando ingresan a la biblioteca. No obstante, esta medida no es muy certera y depende del tamaño de la muestra.
              h5.mt-4 Nota importante sobre la moda
              p Pueden existir varias modas, es decir, varios valores se pueden repetir en iguales proporciones, inclusive en una misma muestra; aunque sugiere dos o más modas, lo que sí da es una tendencia de preferencias.
            .col-lg-4
              figure.col-sm-6.m-auto
                img(src='@/assets/curso/tema4/6.png')

    h4.mt-5(data-aos="fade-up") Entre las medidas de dispersión, principales, están:

    .row.mt-5.col-lg-10.m-auto
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Rango de variación") Esta medida busca identificar la amplitud, dentro de una escala, en que se mueven los datos de la muestra. Se halla a partir de la diferencia entre el mayor valor de los datos y el menor valor de los datos.
          p(numero="2" titulo="Varianza") Es el cálculo de variabilidad de los datos que se basa en las desviaciones, respecto de la media aritmética de la variable. Se representa como la distancia promedio del cuadrado de los datos (en unidades cuadráticas), en cualquier observación de la muestra de datos y la media aritmética.
          p(numero="3" titulo="Desviación estándar") La desviación estándar calcula la dispersión de los datos de la muestra de la población, alrededor de la media aritmética de los datos recolectados, y obedece al valor positivo de la raíz cuadrada de la varianza.
      .col-lg-6(style="place-self:center")
        figure
          img(src="@/assets/curso/tema4/7.png" data-aos="fade-left")

    .tarjeta.color-primario.p-3.mt-5.cont_4_3.col-lg-10.m-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white(data-aos="fade-up") ¡Consulta!
              p.text-small.mb-0.mt-3(data-aos="fade-up") Consulte el Anexo  Ejemplode Medidas y, mediante el ejemplo que allí se registra, amplíe su comprensión sobre las medidas de tendencia central y de dispersión.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('')" target="_blank")
                span(style="color:#12263F;") Descargar
                i.fas.fa-file-download(style="color:#12263F;")








</template>

<script>
export default {
  name: 'Tema4',
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
.cont_4_1:before
  content: ''
  position: absolute
  width: 115%
  left: -7%
  height: 92%
  background: url(../assets/curso/tema3/1.png)
  background-size: cover
  background-repeat: no-repeat
  top: -50px
.cont_4_2:before
  content: ''
  position: absolute
  width: 115%
  left: -7%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/16.png)
  background-size: 100% 100%
  background-repeat: no-repeat
.tabs-a__tab
  background-color: #E8E8E8
.tabs-b__tab
  border: 0
  border-right: 2px #E8E8E8 solid
.tabs-b.color-secundario .tabs-b__tab--active
  border-right: 0
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #785549
  color: #fff
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #DDD4D1
.cont_4_3
  background: url(../assets/curso/s1.png)
  background-size: cover
  background-repeat: no-repeat
</style>
