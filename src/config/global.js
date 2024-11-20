export default {
  global: {
    componenteFormativo: 'Sustancias tóxicas',
    descripcionCurso:
      'En este componente se aborda el tema de sustancias toxicas teniendo en cuenta los procesos de preparación, aditivos alimentarios para la conservación, almacenamiento, entre otros. <br><br>Adicionalmente, se estudian los efectos de la contaminación ambiental sobre los alimentos y los diferentes elementos y compuestos que son consumidos por el hombre y pueden llegar a afectar su salud.',
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo:
          'Sustancias tóxicas derivadas del proceso de preparación y almacenamiento de los alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Derivados de la pirolisis',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Hidrocarburos aromáticos policíclicos (HAP)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aminas heterocíclicas (AH)',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Derivados de la fracción nitrogenada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Interacción proteína-proteína en alimentos de alto contenido proteico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Interacciones de las proteínas y los hidratos de carbono (Reacción de Maillard)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Nitrosaminas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principales fuentes tóxicas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aminas biógenas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Toxicidad derivada de la conservación de los alimentos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Hidrocarburos policlorados, dioxinas y furanos policlorobifenilos (PCBs)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Dioxinas y Furanos',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Metales pesados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Radionúclidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Residuos de producción, agrícola y ganadera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Organofosforados',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Organoclorados',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Carbamatos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Residuos de productos farmacológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Antibióticos',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Betaantagonistas',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Antitiroideos o tireostáticos',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Tranquilizadores',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Anabolizantes o promotores del crecimiento',
            hash: 't_8_5',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_92130087_DU.zip',
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
  glosario: [
    {
      termino: 'Alergia',
      significado:
        'Síntomas o signos que aparecen en individuos sensibilizados, tras la exposición a una sustancia (alergeno) que produjo sensibilización en un contacto anterior, y que no origina trastornos en sujetos no sensibilizados. Las formas más comunes de alergias son rinitis, urticaria, asma y dermitis de contacto. ',
    },
    {
      termino: 'Antibiótico',
      significado:
        'Sustancia producida por, y obtenida de, ciertas células vivas (especialmente bacterias, levaduras y hongos), o sus equivalentes sintéticos que, a bajas concentraciones, son biostáticos o biocidas, para otras formas de vida, especialmente para organismos patógenos o nocivos.',
    },
    {
      termino: 'Antídoto',
      significado:
        'Sustancia capaz de contrarrestar o reducir el efecto de una sustancia potencialmente tóxica mediante una acción química relativamente específica.',
    },
    {
      termino: 'Cáncer',
      significado:
        'Denominación de las tumoraciones malignas. Los carcinomas se originan en las células epiteliales; los sarcomas en el tejido conjuntivo.',
    },
    {
      termino: 'Palatabilidad',
      significado: 'de paladar, referente al gusto.',
    },
    {
      termino: 'Pirólisis',
      significado:
        'Proceso químico causado por el calentamiento en ausencia de oxígeno, en el cual se descompone la materia orgánica de todo tipo de materiales, menos metales y vidrio.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'Capacidad de un organismo para experimentar exposición a dosis nocivas de una sustancia sin sufrir efectos adversos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardona, F. (S/f). Actividad del agua en alimentos: concepto, medidas y aplicaciones. Upv.es. Recuperado de',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/121948/Cardona%20-%20ACTIVIDAD%20DEL%20AGUA%20EN%20ALIMENTOS%3A%20CONCEPTO%2C%20MEDIDA%20Y%20APLICACIONES.pdf?sequence=1',
    },
    {
      referencia:
        'Derache, R. (1990). Toxicología y seguridad de los alimentos. Barcelona: Omega. ',
    },
    {
      referencia:
        'Escriche. (2006). Aminas biogenas. Valencia, España: Universidad Politécnica de Valencia. ',
    },
    {
      referencia:
        'Escriche. (2006). Gestión del Autocontrol en la industria agroalimentaria. Valencia, España: Universidad Politécnica de Valencia. ',
    },
    {
      referencia:
        'Lindner, E. (1995). Toxicología de los alimentos 2a edición. Zaragoza, España: Acribia. Revista Scielo. (2010). Cómo reducir las acrilamidas en alimentos a preparar. s.f. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Cristina Muñoz Urrea',
          cargo: 'Gestor de curso',
          centro: 'Centro de Industria y Servicios del Meta - Regional Meta',
        },
        {
          nombre: 'Angela Patricia Frasser Castaño',
          cargo: 'Asesora pedagógica',
          centro: 'Línea de producción Tolima',
        },
        {
          nombre: 'Jesús Bernardo Novoa Ortiz ',
          cargo: 'Guionista',
          centro: 'Línea de producción Tolima ',
        },
        {
          nombre: 'Claudia Rocio Varon Buitrago ',
          cargo: 'Senior línea de producción',
          centro: 'Línea de producción Tolima',
        },
        {
          nombre: 'Carolina Jiménez Suescún ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco ',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño ',
          cargo: 'Animador y producción audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
