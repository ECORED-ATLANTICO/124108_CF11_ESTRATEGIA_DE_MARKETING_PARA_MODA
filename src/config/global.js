export default {
  global: {
    Name: 'Tendencias de moda y eventos',
    Description:
      'El componente formativo desarrolla la comprensión de las tendencias de moda, los universos de vestuario, las ocasiones de uso, el observatorio de tendencias y los eventos de moda como elementos estratégicos del sistema moda. A partir de estos contenidos, el aprendiz interpreta la relación entre consumo, producto, comunicación, visualización comercial, líneas de mercado y <em>marketing</em> digital para apoyar decisiones de diseño, presentación y posicionamiento de productos de moda.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Tendencias de moda y consumo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Teorías de difusión de tendencias',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de las tendencias',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Observatorio de tendencias',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Difusores de tendencias',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Universos de vestuario',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Ocasiones de uso',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Eventos de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Historia y función de los eventos de moda',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de eventos de moda',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Eventos físicos, digitales e híbridos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Producción de eventos de moda',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Visualización de productos según líneas de mercado',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Evaluación del evento desde <em>marketing</em> digital',
            hash: 't_2_6',
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      termino: 'Activación de marca',
      significado:
        'Acción comunicativa y experiencial orientada a generar recordación, interacción o respuesta comercial frente a una marca o producto.',
    },
    {
      termino: 'Coolhunter',
      significado:
        'Persona o equipo que observa señales emergentes en la calle, medios, cultura digital y consumo para identificar posibles tendencias de moda.',
    },
    {
      termino: 'Difusión de tendencias',
      significado:
        'Proceso mediante el cual una idea, estilo, producto o comportamiento se desplaza entre grupos sociales y mercados hasta alcanzar mayor adopción.',
    },
    {
      termino: 'Evento de moda',
      significado:
        'Escenario presencial, digital o híbrido donde se presentan productos, colecciones o marcas con fines comunicativos, comerciales o de posicionamiento.',
    },
    {
      termino: '<em>Fashion experience</em>',
      significado:
        'Formato de evento que integra producto, narrativa, espacio, interacción y recursos sensoriales para construir experiencia de marca.',
    },
    {
      termino: 'Influenciador de moda',
      significado:
        'Actor digital o social que incide en la percepción y adopción de productos, estilos o marcas por parte de una comunidad específica.',
    },
    {
      termino: 'Lanzamiento',
      significado:
        'Acción estratégica orientada a introducir un producto, colección, campaña o colaboración en el mercado con alta visibilidad.',
    },
    {
      termino: 'Macrotendencia',
      significado:
        'Tendencia de mediano plazo que influye en diseño, consumo, comunicación y mercado durante varias temporadas.',
    },
    {
      termino: 'Meta tendencia',
      significado:
        'Cambio estructural de largo plazo que transforma valores, comportamientos sociales, tecnologías y modelos de consumo.',
    },
    {
      termino: 'Micro tendencia',
      significado:
        'Manifestación de corta duración asociada con detalles de producto, colores, siluetas, accesorios o estilos de rápida circulación.',
    },
    {
      termino: 'Ocasión de uso',
      significado:
        'Contexto, actividad o situación en la que una prenda o accesorio cumple una función determinada para el usuario.',
    },
    {
      termino: 'Pasarela',
      significado:
        'Formato de presentación de moda en el que los productos se exhiben en movimiento mediante modelos, styling y puesta en escena.',
    },
    {
      termino: '<em>Pop-up store</em>',
      significado:
        'Punto de venta temporal utilizado para activar productos, campañas, colecciones cápsula o experiencias de marca durante un periodo definido.',
    },
    {
      termino: '<em>Showroom</em>',
      significado:
        'Espacio de exhibición controlada dirigido a compradores, prensa, aliados o clientes seleccionados para revisar productos y gestionar relaciones comerciales.',
    },
    {
      termino: 'Tendencia',
      significado:
        'Dirección de cambio en gustos, estilos, materiales, colores, siluetas o comportamientos de consumo que influye en el sistema moda.',
    },
    {
      termino: 'Universo de vestuario',
      significado:
        'Categoría que agrupa prendas y complementos según función, estilo, contexto de uso y características comunes.',
    },
    {
      termino: 'Visualización de producto',
      significado:
        'Proceso de presentar un producto de moda mediante recursos físicos, visuales, digitales o experienciales para comunicar su valor al mercado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Codina, M. (2004). Crear moda, hacer cultura. <em>Ars Brevis</em>, (10), 43-62.',
      link:
        'http://www.raco.cat/index.php/arsbrevis/article/viewFile/87836/142383',
    },
    {
      referencia:
        'Emprende A Conciencia. (2021). <em>Curva de adopción de la innovación</em>.',
      link: 'https://www.emprendeaconciencia.com/curva-adopcion-innovacion',
    },
    {
      referencia:
        'Estanyol, E. (2020). <em>Los eventos de moda en tiempos de COVID-19</em>. COMeIN, (103).',
      link: 'https://doi.org/10.7238/c.n103.2071',
    },
    {
      referencia: 'FashionLab. (2025). <em>Introducción a la moda</em> [PDF].',
      link:
        'https://fashionlab.education/wp-content/uploads/2025/01/Bibliografia-unidad-1-Introduccion-a-la-moda.docx_compressed_compressed-1-1.pdf',
    },
    {
      referencia:
        'Ministerio de Cultura de España. (2012). <em>Moda y diseño</em>.',
      link:
        'https://www.cultura.gob.es/dam/jcr%3Aa04a4e3b-a174-4b30-897a-f1f070e574ba/guialector12.pdf',
    },
    {
      referencia:
        'Niebles Cifuentes, L. (2018). <em>Moda sustentable, moda amigable: Una oportunidad de mercado</em> (Trabajo de grado de pregrado). Pontificia Universidad Javeriana.',
      link:
        'https://apidspace.javeriana.edu.co/server/api/core/bitstreams/b1c77dd1-0803-47cb-bfef-93997fb06ef4/content',
    },
    {
      referencia:
        'Peña, S. (2009). <em>De los textiles a las apariencias: Los tránsitos de la moda en Colombia entre 1970 y 1999</em>. Academia.edu.',
      link:
        'https://www.academia.edu/75326169/Ense%C3%B1ar_y_aprender_moda_y_textil_en_el_siglo_XXI',
    },
    {
      referencia:
        'Villalba, D. (2021). <em>Omnicanalidad o multicanalidad: diferencias y beneficios</em>. Pragma.',
      link:
        'https://www.pragma.com.co/blog/omnicanalidad-vs-multicanalidad-cual-es-la-mejor-opcion-para-mi-empresa',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales - Profesional 06',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
