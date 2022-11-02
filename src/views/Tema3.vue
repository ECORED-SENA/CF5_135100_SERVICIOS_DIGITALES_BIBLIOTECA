<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Muestreo

    .cont_3_1(style="position:relative;")
      p(data-aos="fade-up" style="position:relative") Es el proceso que se adelanta para recopilar datos de información a una población en particular, de la cual se selecciona un grupo representativo de registros, casos, observaciones de una cualidad a la que se quiera analizar o realizar un análisis estadístico, y que pertenece a esa población.
      .row.mt-5.p-4.col-lg-10.m-auto(style="background-color:#EBC9B1;border-radius:10px;position:relative")
        .col-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/2.png" data-aos="fade-right")
        .col(style="place-self:center")
          p.mb-0(data-aos="fade-up") En otras palabras, el muestreo es el procedimiento mediante el cual se selecciona cierta cantidad de individuos, objetos o animales que conforman una población sujeta de análisis en alguna de sus características o variables de comportamiento sobre la que se quiera indagar para tomar decisiones.
      p.mt-5(data-aos="fade-up" style="position:relative;font-weight:bold;") Los muestreos son importantes y necesarios dado que:

      .row.mt-5(style="position:relative")
        .col-xl-5.mb-4.mb-xl-0(style="place-self:center")
          figure.col-7.m-auto.col-md-10.col-lg-12
            img(src="@/assets/curso/tema3/3.svg" data-aos="fade-right")
        .col-xl-6(style="place-self:center")
          .p-5.bg-white(style="border-radius:10px;")
            ul.fa-ul
              li.mb-2(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#FD9827;")
                | En muchas ocasiones las poblaciones objeto de estudio pueden ser demasiado numerosas lo que dificulta económicamente y operativamente levantar la información.
              li.mb-2(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#FD9827;")
                | El no usar el muestreo podría representar altos costos y demoras en la toma de datos de toda la población a analizar.
              li.mb-2(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#FD9827;")
                | Suele ser muy difícil adelantar, permanentemente, los datos de satisfacción de servicio de todos los usuarios, ya que por su frecuencia no se sabe cuándo vuelvan y por qué la dispersión es muy alta, entonces se toman muestras. 
              li(data-aos="fade-up")
                i.fa.fa-li.fa-check(style="color:#FD9827;")
                | Cuando se hace muestreo se busca que la selección de la muestra sea representación de cómo es la población total.

      p.mt-5(data-aos="fade-up" style="position:relative;font-weight:bold;") Visualice con atención el vídeo que se muestra a continuación; identifique los tipos de muestreo y las técnicas de selección de datos estadísticos:

      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/yGbtOWCHY4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-up") Elegir el tamaño necesario de la muestra para alcanzar los objetivos del estudio puede ser tan complejo y preciso como se desee. A continuación, se presentan los elementos clave a tener en cuenta:

    .tarjeta.tarjeta--gris.mt-5.pt-4.pb-4(style="background-color:#FFF0DE;")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.p-4(titulo="Nivel de confianza")
          .col-lg-7.mb-4.mb-lg-0
            h5 Nivel de confianza
            p.mt-4 Es un parámetro definido por el investigador, con el que se determina qué tan preciso se quiere que sea el estudio. Los valores utilizados con mayor frecuencia obedecen a un factor estimado, presentado en la tabla.
          .col-lg-5
            .tabla-a.color-acento-botones
              table(style="min-width:100%;")
                thead(style="border:0;")
                  tr
                    th.p-3.text-center(style="border:0;background-color:#C0C942;") Nivel de confianza
                    th.p-3.text-center(style="border:0;background-color:#EBC9B1;") Puntuación Estándar (Z)
                tbody
                  tr
                    td.text-center.p-3(style="font-weight:bold;border:0;background-color:#D1D59A;") 90%
                    td.text-center.p-3(style="font-weight:bold;border:0;background-color:#F5DECE;") 1.645
                  tr
                    td.text-center.p-3(style="font-weight:bold;border:0;background-color:#E8EAC6;") 95%
                    td.text-center.p-3(style="font-weight:bold;border:0;background-color:#E2CBBC;") 1.96
                  tr
                    td.text-center.p-3(style="font-weight:bold;border:0;background-color:#D1D59A;") 99%
                    td.text-center.p-3(style="font-weight:bold;border:0;background-color:#F5DECE;") 2.576

        .row.p-4(titulo="Margen de error (e)")
          .col-lg-7.mb-4.mb-lg-0
            h5 Margen de error (e)
            p.mt-4 Mide el rango de tolerancia que diferencia al resultado obtenido de la muestra en comparación con el de la población. Por ejemplo, un margen de error del 5 % implica que si el resultado de un estudio es una estatura promedio de las personas de la muestra en 1.80cm, este indicador en la población oscilará entre 1.71 y 1.89, es decir un 5% menor o un 5% mayor del valor obtenido.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/5.png')
        .row.p-4(titulo="Población o universo (N)")
          .col-lg-7.mb-4.mb-lg-0
            h5 Población o universo (N)
            p.mt-4 Se refiere al total de individuos sobre los que se espera proyectar las conclusiones. Por ejemplo, toda la población de un municipio, los estudiantes de un colegio o los trabajadores de una empresa agropecuaria.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/6.png')
        .row.p-4(titulo="Probabilidad de éxito (p)")
          .col-lg-7.mb-4.mb-lg-0
            h5 Probabilidad de éxito (p)
            p.mt-4 Este indicador puede tomarse de otros estudios previos relacionados, si no existe ninguna noción al respecto, se deduce que la probabilidad de éxito y de fracaso son equivalentes, es decir 50 %.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/7.png')
        .row.p-4(titulo="Probabilidad de fracaso (q)")
          .col-lg-7.mb-4.mb-lg-0
            h5 Probabilidad de fracaso (q)
            p.mt-4 Al igual que el indicador anterior, obedece a evidencia de estudios previos, la suma de la probabilidad de éxito más la de fracaso debe ser igual al 100% de los eventos. Así pues, la probabilidad de fracaso será igual al 100 % menos la probabilidad de éxito, en otras palabras q = 1 - p 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/8.svg')

    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Técnicas para realizar muestreos no probabilísticos

    p(data-aos="fade-up") El principal objetivo de un proceso estadístico es obtener información inicial para, luego, contribuir a la toma de decisiones de la organización (biblioteca, empresa, proyecto, programa, etc.) Cuando se trabaja con poblaciones muy grandes, es necesario recopilar, de manera que implique menor tiempo y costo.

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0
        .row.m-0.pt-4.pb-4.pe-4.ps-0.ps-sm-4.ps-md-4.ps-lg-0(style="background-color:#EBC9B1;")
          .col-auto.d-none.d-lg-block.p-0(style="place-self:center")
            figure
              img(src="@/assets/curso/tema2/20.png" data-aos="fade-right")
          .col(style="place-self:center")
            p.mb-0(data-aos="fade-up") Es por esto que se recurre al muestreo, el cual permite elegir solo algunos elementos que representan a toda la población. 
        p.mt-4(data-aos="fade-up") Se define como muestreos no probabilísticos a aquellos basados en el juicio personal del investigador y no de azar. Entre las técnicas de muestreo no probabilístico más usuales y destacadas, están:
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/9.png" data-aos="fade-left")

    .p-4.mt-5.cont_3_2(style="border-radius:25px;")
      SlyderA(tipo="b")
        .row.p-md-4
          .col-lg-6.mb-4.mb-lg-0
            .p-4(style="background-color: rgba(255,255,255,.52);height:100%;border-radius:10px")
              h4 Técnica de muestreo por conveniencia
              p.mt-4 No es propiamente una técnica, simplemente se elige la muestra por parte del analista, captando los datos de los individuos, animales o cosas que estén a su disponibilidad más próxima o de fácil acceso.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3/11.png")
        .row.p-md-4
          .col-lg-6.mb-4.mb-lg-0
            .p-4(style="background-color: rgba(255,255,255,.52);height:100%;border-radius:10px")
              h4 Técnica de muestreo intencional
              p.mt-4 No es propiamente una técnica para elegir la muestra, simplemente el analista determina, a partir de su juicio o criterio, la elección dentro de la población, a los sujetos, animales o cosas, los cuales harán parte de la muestra.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3/12.png")
        .row.p-md-4
          .col-lg-6.mb-4.mb-lg-0
            .p-4(style="background-color: rgba(255,255,255,.52);height:100%;border-radius:10px")
              h4 Técnica de muestreo casual o por intercepción accidental
              p.mt-4 Esta técnica identifica la ubicación de la población y, a partir de allí, se selecciona de manera inadvertida y sin condiciones previas a los individuos, animales o cosas que conformarán la información de datos hasta completar la muestra. Por ejemplo, en una institución universitaria, en la biblioteca, se interceptan usuarios de manera inadvertida a efectos de levantar datos frente a los aspectos que se quieren analizar.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3/13.png")
        .row.p-md-4
          .col-lg-6.mb-4.mb-lg-0
            .p-4(style="background-color: rgba(255,255,255,.52);height:100%;border-radius:10px")
              h4 Técnica de muestreo Bola de Nieve
              p.mt-4 Se aplica cuando es difícil encontrar los sujetos que poseen la característica y completar la muestra. Consiste en obtener la muestra de datos a partir de referidos, es decir, a los primeros individuos que participan suministrando sus datos de la muestra para el análisis, se les solicita información de otros individuos con la misma característica y así ubicarlos para tomar la información e ir completando la muestra.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3/14.png")
        .row.p-md-4
          .col-lg-6.mb-4.mb-lg-0
            .p-4(style="background-color: rgba(255,255,255,.52);height:100%;border-radius:10px")
              h4 Técnica de muestreo por cuotas
              p.mt-4 Técnica no aleatoria; comienza entendiendo la composición de la población por analizar, dividirla en grupos o estratos y, a partir de estos se hará el levantamiento de la muestra, de manera proporcional a los subgrupos. Por ejemplo, en el caso de estudiantes de una Facultad, la población se compone de un 40% de personas que pertenecen a un curso en finanzas , el 35% de personas al programa de Mercadeo y el restante 25% pertenecen al programa de Negocios Internacionales.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3/15.png")

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Recolección de datos

    .cont_3_3.pt-4.pb-5(style="position:relative")
      p(data-aos="fade-up" style="position:relative") La recolección de datos es la recopilación, ya sea de manera manual o sistematizada, de información de datos relevantes para la biblioteca o institución que la requiera, la cual estará disponible en formato análogo o digital y se almacenará para, posteriormente, realizar su respectivo procesamiento y análisis.
      .row.mt-5(style="position:relative")
        .col-lg-8.p-0
          .p-4(style="background-color:#EBC9B1;height:100%;")
            p.mb-0(data-aos="fade-up") La recolección de los datos o la captura de información, por tanto, se refiere al proceso de transformar datos compilados y disponerlos como datos que se puedan analizar e interpretar. El fin siempre será mejorar el servicio, reconocer las características de los recursos de consulta, su pertinencia, la calidad e integridad, la oportunidad, entre otros.
        .col-lg-3.p-0.d-none.d-lg-block
          .p-4(style="background-color:#785549;height:100%;")
            figure.m-auto.text-center
              img(src="@/assets/curso/tema3/17.png" data-aos="fade-left" style="max-width:100px;display:inline;")

      .tarjeta.color-primario.p-3.mt-5.cont_3_4.col-lg-10.m-auto.mb-5(style="position:relative")
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.text-white(data-aos="fade-up") Recolección y mejora continua
                p.text-small.mb-0.mt-3(data-aos="fade-up") La recolección de datos e información, por tanto, sirve como soporte para trazar estrategias efectivas de mejoramiento continuo, calidad de los contenidos y ampliación de servicios, con base en información real y debidamente recopilada.

    p.mt-5(data-aos="fade-up" style="font-weight:bold;") En la actualidad, existen muchas bibliotecas que dependen de documentos en papel y el registro manual de datos, lo cual puede implicar:

    .row.cont_3_5.pt-4(style="position:relative")
      .col-lg-7.mb-5.mb-lg-0(style="place-self:center;position:relative")
        ul.fa-ul
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | Procesos de captura de datos lentos, costosos.
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | Probabilidad alta de errores, que conllevan un gasto doble por la necesidad de reprocesar, ajustar y actualizar.
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | Retrasos en la toma de decisiones.
          li.mb-2(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | Dificultad en la aplicación de estrategias adecuadas y oportunas.
          li(data-aos="fade-up")
            i.fa.fa-li.fa-check(style="color:#FD9827;")
            | Necesidad de migrar a sistemas de captura de información automatizada y en línea.
      .col-lg-5.col-8.m-auto(style="place-self:center;position:relative")
        figure
          img(src="@/assets/curso/tema3/18.png" data-aos="fade-right")

    .tarjeta.color-primario.p-3.mt-2.cont_3_4.col-lg-10.m-auto(style="position:relative")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white(data-aos="fade-up") Captura de datos automática
              p.text-small.mb-0.mt-3(data-aos="fade-up") Es el proceso por el cual, utilizando herramientas tecnológicas de reconocimiento óptico para la gestión de documentos, se facilita el registro de los recursos; esto logra un procedimiento ágil, eficaz y de calidad, mitigando posibles errores de transcripción u omisión de información.


    Separador.mt-4

    .titulo-segundo
      h2#t_3_3 3.3 Técnicas e instrumentos de recolección de información

    p(data-aos="fade-up") Para obtener información sobre los servicios, calidad, necesidades, nuevas temáticas, información de consultas, oferta de contenidos, de bases de datos de información, entre otros, es necesario contar con técnicas de recolección o captura, bien sea esta cualitativa o cuantitativa, según sea el caso.

    .row.mt-5.col-lg-8.m-auto(style="position:relative")
      .col-lg-8.p-0
        .p-4(style="background-color:#EBC9B1;height:100%;")
          p.mb-0(data-aos="fade-up") #[strong Dentro de las técnicas de recolección de datos, más destacadas, se encuentran las Manuales y las Automáticas.] 
      .col-lg-3.p-0.d-none.d-lg-block
        .p-4(style="background-color:#785549;height:100%;")
          figure.m-auto.text-center
            img(src="@/assets/curso/tema3/19.png" data-aos="fade-left" style="max-width:100px;display:inline")

    p.mt-5(data-aos="fade-up" style="font-weight:bold;") Entre las técnicas manuales, se enuncian como las más usadas, las siguientes:

    .row.mt-5
      .col-xl-8.mb-4.mb-xl-0(style="place-self:center")
        TabsA.color-acento-contenido
          .tarjeta.color-primario.p-5(titulo="Entrevistas  <br> individuales" style="background-color:#DDD4D1;border-radius:10px")
            .row
              p.mb-0(style="color:#12263F;") Es una conversación empática en un clima de confianza mutua, comprensión y afinidad emocional entre el entrevistador y el entrevistado. Regularmente, se orienta a clientes, proveedores o posibles demandantes de un producto o servicio.
          .tarjeta.color-primario.p-5(titulo="Análisis de  <br> documentos de <br> informes previos" style="background-color:#DDD4D1;border-radius:10px")
            .row
              p.mb-0(style="color:#12263F;") Se delega un investigador que reunirá  documentos que contengan la información por analizar, los cuales pueden ser informes cuantitativos o cualitativos, que necesitan ser estudiados, a fin de comprender la información histórica y demás características propias de la empresa, organización, etc. Así mismo se debe obtener informes sectoriales y gremiales que contextualizan las posibilidades de actividad y su comportamiento histórico.
          .tarjeta.color-primario.p-5(titulo="Debates o foros <br>  en grupos <br> pequeños" style="background-color:#DDD4D1;border-radius:10px")
            .row
              p.mb-0(style="color:#12263F;") Se adelantan sesiones grupales con un tema central a indagar, promoviendo los diferentes puntos de vista e interpretación que nutren la discusión dirigida frente a algún factor o variable, problema específico, sustentación del sector y sus posibilidades, necesidades de desarrollo, abastecimiento, etc.
          .tarjeta.color-primario.p-5(titulo="Entrevista colectiva" style="background-color:#DDD4D1;border-radius:10px")
            .row
              p.mb-0(style="color:#12263F;") A partir de una convocatoria de un grupo de personas, el moderador o entrevistador aplicará una serie de preguntas registrando las respuestas diferenciadas y comunes, en un lenguaje amable.
          .tarjeta.color-primario.p-5(titulo="Encuestas" style="background-color:#DDD4D1;border-radius:10px")
            .row
              p.mb-0(style="color:#12263F;") Son el diligenciamiento de formularios que, por medio de preguntas sobre los diferentes factores y aspectos a diagnosticar, los participantes del diagnóstico expresan su percepción. El fin es identificar tendencias y sustituciones de consumo de bienes, productos o servicios.
          .tarjeta.color-primario.p-5(titulo="Autoevaluaciones" style="background-color:#DDD4D1;border-radius:10px")
            .row
              p.mb-0(style="color:#12263F;") Ejercicio de consulta para obtener respuesta a partir de la reflexión de los trabajadores sobre los aspectos o factores que afectan el mercado o el sector, sus posibilidades de desarrollo, etc., que se realiza con formularios o cuestionarios.
      .col-xl-4(style="place-self:center")
        figure.col-7.m-auto
          img(src="@/assets/curso/tema3/20.svg" data-aos="fade-right")

    .tarjeta.color-primario.p-3.mt-2.cont_3_4.col-lg-10.m-auto.mt-5(style="position:relative")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white(data-aos="fade-up") Nota
              p.text-small.mb-0.mt-2(data-aos="fade-up") Tanto las entrevistas como las encuestas manejan formularios para realizar las preguntas, las cuales, dependiendo de la naturaleza de la información, pueden ser cerradas o abiertas, cuando se busca información descriptiva.

    .col-lg-10.m-auto.mt-4.p-5(style="background-color:#F3F9FF;border-radius:10px;")
      p.mb-0(data-aos="fade-up") El moderador de estas técnicas debe promover y facilitar que se responda con precisión a preguntas tipo: qué, cómo, dónde, etc., las cuales deben estar orientadas a obtener datos de medidas cuantitativas y hechos objetivos, hábitos, frecuencia de consumo, préstamo de material bibliográfico, opiniones, etc.

    .cont_3_3.pt-4.pb-5.mt-5(style="position:relative")
      p(data-aos="fade-up" style="position:relative;font-weight:bold;") Entre las técnicas automáticas, se encuentran:

      TabsB.color-secundario.mt-5(style="position:relative;background-color:white;")
        .py-4.py-md-5(titulo="Identificación óptica de caracteres OCR" :icono="require('@/assets/curso/tema3/21.svg')")
          .row.p-4
            .col-lg-8.mb-4.mb-lg-0
              p.mt-4 A través de un escáner y #[em software], esta tecnología tiene la capacidad de capturar caracteres en documentos con zonas preestablecidas o la página completa. Esto permite capturar información documental y de libros entre otros, facilita la preservación documental, ya que al estar en digital su vida útil es mayor.
            .col-lg-4
              figure.col-3.m-auto
                img(src='@/assets/curso/tema3/25.svg')
        .py-4.py-md-5(titulo="Reconocimiento inteligente de caracteres" :icono="require('@/assets/curso/tema3/22.svg')")
          .row.p-4
            .col-lg-8.mb-4.mb-lg-0
              p.mt-4 Su sigla ICR, es la traducción informática de caracteres impresos y escritos a mano alzada. Esta tecnología parte de una captura física de los datos que se ingresan en formularios impresos, se diligencian a mano alzada y través de un escáner, la imagen de los datos capturados se traduce a texto digital mediante #[em software] ICR; es similar al reconocimiento óptico de caracteres (OCR), pero es un proceso con mayor alcance ya que el OCR solo reconoce texto impresos.
            .col-lg-4
              figure.col-3.m-auto
                img(src='@/assets/curso/tema3/26.svg')
        .py-4.py-md-5(titulo="Reconocimiento de código de barras y código QR" :icono="require('@/assets/curso/tema3/23.svg')")
          .row.p-4
            .col-lg-8.mb-4.mb-lg-0
              p.mt-4 Dependiendo del tipo de código que se use, se pueden cargar y leer una gran cantidad de metadatos, lo que facilita el proceso tanto para la entrada como para la salida de información.
              p.mt-4 La aplicación de códigos de barras individuales o códigos QR a determinados tipos de documentos, los formularios solicitud de material bibliográfico, formularios de solicitud equipos de cómputo para trabajo, etc., aumenta la efectividad de los procesos y servicios bibliotecarios.
            .col-lg-4
              figure.col-3.m-auto
                img(src='@/assets/curso/tema3/27.svg')
        .py-4.py-md-5(titulo="Captura de voz" :icono="require('@/assets/curso/tema3/24.svg')")
          .row.p-4
            .col-lg-8.mb-4.mb-lg-0
              p.mt-4 Captura de registros por voz y formularios de voz, se ha convertido en algo importante para las empresas, como otras formas de comunicación: correo electrónico, formularios web, etc. Ahora existen aplicaciones que tienen la capacidad de capturar comandos de voz para iniciar procesos de escritura, búsqueda, almacenamiento, etc.
            .col-lg-4
              figure.col-3.m-auto
                img(src='@/assets/curso/tema3/28.svg')

      .tarjeta.color-primario.p-3.mt-2.cont_3_4.col-lg-10.m-auto.mt-5.mb-4(style="position:relative")
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/tema1/7.png" data-aos="fade-right")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.text-white(data-aos="fade-up") ¡Nota!
                p.text-small.mb-0.mt-3(data-aos="fade-up") Cada una de las alternativas de captura de información automática, exige de diversos tipos de utilitarios para la operación como, por ejemplo, escáneres, pistolas lectoras de códigos, cámaras digitalizadoras, etc., las cuales varían según el proveedor y sistema de #[em software] y sus requerimientos.

    Separador

    .titulo-segundo
      h2#t_3_4 3.4. Almacenamiento de datos

    p(data-aos="fade-up") Se puede definir almacenamiento de datos al resguardo y preservación de la información en medios electrónicos, magnéticos o mecánicos que soportan, en formatos de archivo, información digital de las operaciones actuales, en curso, pasadas o futuras de una biblioteca.

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0
        .row.m-0.pt-4.pb-4.pe-4.ps-0.ps-sm-4.ps-md-4.ps-lg-0(style="background-color:#F5F7D6;")
          .col-auto.d-none.d-lg-block.p-0
            figure
              img(src="@/assets/curso/tema2/20.png" data-aos="fade-right")
          .col(style="place-self:center")
            p.mb-0(data-aos="fade-up") Existen particularmente dos tipos de información digital a generar: los #[strong datos de entrada y los datos de salida.]
            p.mt-4(data-aos="fade-up") Los primeros son alimentados por los operadores de los dispositivos y los computadores, a través de #[em software] como hojas de cálculo o programas especializados. Pero los computadores y sus #[em software] de aplicación no pueden calcular datos y recuperarlos, generar salidas sin previa entrada y depositar información en ellos, sin el operador.
      .col-lg-5(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/29.svg" data-aos="fade-left")

    .cont_3_6.pt-5.pb-5(style="position:relative")
      p(data-aos="fade-up" style="position:relative;font-weight:bold;") En relación con el almacenamiento de datos, tenga en cuenta aspectos clave, como:

      .mt-5
        SlyderF(columnas="col-lg-4" style="position:relative")
          .tarjeta.color-acento-botones.pt-5.pb-5.ps-4.pe-4.cont_tarjetas(style="min-height:450px;")
            .row.justify-content-center.mb-3
              .col-8.m-auto.text-center
                img(src='@/assets/curso/tema3/31.svg')
            h5.text-center.text-center.text-white Variedad de instrumentos
            p.text-center.text-center.text-white Existen diversos instrumentos y #[em software] para el almacenamiento de la información y datos, como son las hojas electrónicas.
          .tarjeta.color-acento-botones.pt-5.pb-5.ps-4.pe-4.cont_tarjetas(style="min-height:450px;")
            .row.justify-content-center.mb-3
              .col-8.m-auto.text-center
                img(src='@/assets/curso/tema3/32.svg')
            h5.text-center.text-center.text-white Programas de cómputo
            p.text-center.text-center.text-white Son varios los programas de cómputo alojados en computadores, que se pueden interconectar con otros operadores a través de una red electrónica o por medio de internet, facilitando la entrada de nueva información y análisis de la misma.
          .tarjeta.color-acento-botones.pt-5.pb-5.ps-4.pe-4.cont_tarjetas(style="min-height:450px;")
            .row.justify-content-center.mb-3
              .col-8.m-auto.text-center
                img(src='@/assets/curso/tema3/33.svg')
            h5.text-center.text-center.text-white Programas especializados
            p.text-center.text-center.text-white Así mismo existen programas especializados que albergan en un módulo central la información, no solo documental y de textos, sino información gráfica, audio, etc. y que permiten su operatividad para el servicio de la biblioteca.
          .tarjeta.color-acento-botones.pt-5.pb-5.ps-4.pe-4.cont_tarjetas(style="min-height:450px;")
            .row.justify-content-center.mb-3
              .col-8.m-auto.text-center
                img(src='@/assets/curso/tema3/34.svg')
            h5.text-center.text-center.text-white Resguardo y almacenaje
            p.text-center.text-center.text-white Estos sistemas dan la posibilidad de resguardar y almacenar documentos y carpetas de archivos de forma jerárquica, es decir, documentos dentro de una carpeta, que a su vez está dentro de otra carpeta.






</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 92%
  background: url(../assets/curso/tema3/1.png)
  background-size: cover
  background-repeat: no-repeat
  top: -50px
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__dot
  border-color: #FD9827
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__dot:after
  background-color: #FD9827
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__line-container:before, .linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__line-container:after
  background-color: #FD9827
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__line-container:before
  background-color: #FD9827
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__dot
  border-color: #FD9827
.cont_3_2
  background: url(../assets/curso/tema3/10.png)
  background-size: cover
  background-repeat: no-repeat
.slyder-a__tipo-b
  padding: 1rem
.slyder-a__bullets__item
  background-color: #A6A19B
.slyder-a__bullets__item--active
  background-color: #000 !important
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #C0C942
  opacity: 1
.cont_3_3:before
  content: ''
  position: absolute
  width: 115%
  left: -7%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/16.png)
  background-size: 100% 100%
  background-repeat: no-repeat
.cont_3_4
  background: url(../assets/curso/s1.png)
  background-size: cover
  background-repeat: no-repeat
.cont_3_5:before
  content: ''
  position: absolute
  width: 100%
  height: 55%
  transform: translateY(43%)
  background-color: #F5F7D6
  top: 0
.tabs-a__tab
  background-color: #E8E8E8
.tabs-b__tab
  border: 0
  border-right: 2px #E8E8E8 solid
.tabs-b.color-secundario .tabs-b__tab--active
  border-right: 0
.cont_3_6:before
  content: ''
  position: absolute
  width: 115%
  left: -7%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/30.png)
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
.slyder-f__btn i
  background-color: #C0C942
  font-size: 19px
  padding: 0.8rem 1rem
  border-radius: 147px
@media screen and (max-width: 1399px)
  .cont_3_5:before
    height: 40%
    transform: none
</style>
