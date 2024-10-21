export default {
  global: {
    componenteFormativo: 'Antinutrientes y toxicidad alimentaria',
    descripcionCurso:
      'Este componente es sobre los conceptos fundamentales de la toxicología general y las principales características del fenómeno tóxico en el organismo. Adicionalmente, explicar la sintomatología de algunas enfermedades generadas por intoxicaciones alimentarias, las cuales son desencadenadas por microorganismos como bacterias, virus y hongos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Antinutrientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Toxicología',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Determinación de los tóxicos en los alimentos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fenómeno tóxico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tóxicos endógenos y exógenos de los alimentos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Sustancias antinutricionales',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Toxicidad alimentaria por bacterias, virus y hongos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'La importancia de los microorganismos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Microbiota inicial de los alimentos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'FLas enterobacterias y los alimentos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La contaminación vírica en alimentos y agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Reservorio de los microorganismos patogénicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Virus',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Virus entéricos en humanos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sustancias tóxicas de origen fúngido (hongos)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Micotoxinas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Alfatoxinas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ocratoxinas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Nefrotoxinas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Toxinas del fusarium(tricotecenos)',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Toxina de claviceps',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Otras microtoxinas',
            hash: 't_4_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Antibiótico',
      significado:
        'Sustancia producida por, y obtenida de, ciertas células vivas que, a bajas concentraciones, son biostáticos o biocidas, para otras formas de vida, especialmente para organismos patógenos o nocivos.',
    },
    {
      termino: 'Bacteria',
      significado:
        'Microorganismos unicelulares que pueden estar presentes en toda la superficie terrestre.',
    },
    {
      termino: 'Biota',
      significado: 'La totalidad de los organismos vivos.',
    },
    {
      termino: 'Ergotismo',
      significado: 'Es una enfermedad causada por el hongo llamado Claviceps.',
    },
    {
      termino: 'Infecciones',
      significado:
        'Alimentos que sirven de vehículo de patógenos en el proceso de colonización en el hombre.',
    },
    {
      termino: 'Intoxicación',
      significado:
        'Conjunto de alteraciones que origina un tóxico que interacciona con un organismo vivo.',
    },
    {
      termino: 'Mutagénesis',
      significado:
        'Estudia si la sustancia tiene capacidad de alterar el material genético (DNA).',
    },
    {
      termino: 'Peligro',
      significado:
        'Es un agente biológico, químico o físico presente en el alimento o bien la condición en que este se halla y que puede causar un efecto adverso para la salud.',
    },
    {
      termino: 'Seguridad',
      significado: 'Ausencia de daño, peligro o lesión.',
    },
    {
      termino: 'Tóxico',
      significado: 'Agente químico capaz de provocar una intoxicación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Foerster, A. v. (Abril de 2012). Alimento y conciencia. Recuperado de http://alimentoyconciencia.com/:',
      link: 'https://drive.google.com/file/d/0B9hhR_rAdSbER1I5bWtlN2Q2V0U/view',
    },
    {
      referencia:
        'Linder, F. (1995). Toxicología de los alimentos. Acribia: Zaragoza.',
    },
    {
      referencia: 'Paracelso. (1943-1541). La Toxicología.',
    },
    {
      referencia:
        'Shibatomo, & Arroyo, M. F. (1996). Sustancias Antinutritivas en alimentos de origen vegetal. Su significado en la alimentación humana. Madrid: Alimentaria.',
    },
    {
      referencia:
        'Shibatomo, T. (1996). Introducción a la Toxicología. Acribia: Zaragoza.',
    },
    {
      referencia:
        'SENA, FAO, Café Quindío, Infoagro, albiz, Blog salud siglo XXI, Ciudad Atómica. (Portal web). “Imágenes web”.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Cristina Muñoz Urrea',
          cargo: 'Gestor de Curso',
          centro: 'Centro de Industria y Servicios del Meta - Regional Meta',
        },
        {
          nombre: 'Angela Patricia Frasser Castaño',
          cargo: 'Asesora pedagógica',
          centro: 'Línea de producción Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>fullstack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
