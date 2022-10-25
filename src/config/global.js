export default {
  global: {
    componenteFormativo: 'Datos y estadística',
    descripcionCurso:
      'Este componente formativo abordará temas relacionados con la información y datos de los registros bibliotecarios de libros, números de consulta, tipo de servicio y categorías, entre otros. Con el estudio responsable del componente, el aprendiz podrá afianzar sus conocimientos y habilidades en análisis de información, para su posterior operación en bibliotecas como garante del buen servicio y la mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estadística',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Variables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de Variables',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Elementos de la estadística',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas para realizar muestreos no probabilísticos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Recolección de datos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas e instrumentos de recolección de información',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Almacenamiento de datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estadísticas básicas',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Zappino, Jorge, (2020) Manual de Estadística Básica para no Estadísticos. Ed. Instituto Nacional de la INAP Administración Pública.',
      link:
        'https://www.argentina.gob.ar/sites/default/files/cuinap_13_2020_0.pdf',
    },
    {
      referencia:
        'Suárez Ibujés, M. O. (2015). Cálculo del tamaño de la muestra.',
      link: '',
    },
    {
      referencia:
        'Tlaxcala, I. t. (s.f.). Herramientas Estadísticas- Instituto tecnológico Apizaco de Tlaxcala. Obtenido de Herramientas Estadisticas.',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento de datos',
      significado:
        'Es la actividad de resguardar y registrar información digitalmente en dispositivos electrónicos o magnéticos, para facilitar su consulta.',
    },
    {
      termino: 'Captura de información',
      significado:
        'Es la acción de registrar la información que se desea analizar a través de un instrumento como pueden ser formularios, cuestionarios o registrada por medios automáticos.',
    },
    {
      termino: 'Conclusiones estadísticas',
      significado:
        'Son las interpretaciones a que se llega por parte del analista, respecto de los datos obtenidos de una muestra obtenida que presentan una tendencia, comportamiento después de un ordenamiento y procesamiento estadístico.  Pueden ser aspectos a mejorar o consolidar.',
    },
    {
      termino: 'Dato',
      significado:
        'Características o cantidad numérica de una variable que es objeto de recolección para complementar una muestra que se quiere analizar o estudiar',
    },
    {
      termino: 'Encuesta',
      significado:
        'Técnica de aplicación de un cuestionario para obtener información referente a consumos y preferencias, y que facilitan la identificación de tendencias Proporcionan información de opiniones, actitudes y comportamientos de los empleados, clientes, proveedores, etc.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'Son conjuntos de información agregada por tipo de variable o factor en la empresa, que se consolidan para efectos de análisis y toma de decisiones.',
    },
    {
      termino: 'Metodología',
      significado:
        'Para procesos de diagnóstico, corresponde definir las diferentes formas de capturar la información que se utilizará para análisis.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'Es la posibilidad de ocurrencia o que se presente una situación, la cual depende de las posibilidades en que la variable se expresa, por ejemplo, en un dado la probabilidad que salga un número en particular es 1/6= 0,1666 veces de un lanzamiento.',
    },
  ],
  complementario: [
    {
      tema: 'Técnicas de selección',
      referencia:
        'del Ramo Romero José Juan, Núñez de Murga Javier (2012). Universidad de Valencia',
      tipo: 'Artículo',
      link: 'http://ocw.uv.es/ciencias/2-1/3_almacenamientoyrecuperacion.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño y Metrología - Regional Bogotá',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
