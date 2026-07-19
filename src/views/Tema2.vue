<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Eventos de moda

    img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Los eventos de moda son escenarios de presentación, comunicación, comercialización y relacionamiento donde se visibilizan productos, colecciones, marcas, tendencias o campañas del sistema moda. Su función no se limita a exhibir prendas; también permite construir experiencia, generar recordación, activar intención de compra, fortalecer identidad de marca y producir contenidos para medios físicos y digitales.

    .p-4.bg-primario-p20.rounded-4.z-2.mb-4
      p.mb-0 En el contexto del #[em marketing] digital para el sistema moda, un evento debe planearse como una acción estratégica. Esto implica definir objetivos, público, concepto, producto a visualizar, narrativa, recursos técnicos, canales de comunicación, indicadores de desempeño y acciones posteriores al evento. La visibilidad digital del evento amplía su alcance y permite transformar una presentación física en contenido, conversación, tráfico, ventas o reconocimiento de marca.

    .p-4.bg-secundario-s5.rounded-4.z-2.mb-4
      .row.align-items-center.z-2.justify-content-center
        .col-lg-10
          h5.mb-4 Evento de moda como escenario estratégico
          p.mb-4.mb-lg-0 Un evento de moda es una herramienta de visualización de producto. Su valor se encuentra en la capacidad de conectar colección, consumidor, marca, canal y mercado mediante una experiencia planificada. Por ello, el evento debe responder a un objetivo medible y a una narrativa coherente con la línea de producto.
        .col-6.col-sm-4.col-lg-2
          figure
            img(src="@/assets/curso/tema2/2.png", alt="" data-aos="zoom-in-down")

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Historia y función de los eventos de moda
    
    .row.justify-content-center.align-items-center.mb-6
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .p-4.bg-acento-botones-a5.rounded-4.z-2
          p.mb-0.pe-2 Los eventos de moda se consolidaron históricamente a partir de la necesidad de mostrar las colecciones en movimiento, permitir que los productos fueran apreciados sobre el cuerpo y generar espacios de relación entre diseñadores, compradores, prensa y consumidores. Los desfiles privados, las semanas de la moda, las ferias, los #[em showrooms] y los encuentros sectoriales ampliaron el papel del evento como dispositivo de comunicación y comercialización. En la actualidad, los eventos de moda se integran a estrategias digitales. Un lanzamiento puede iniciar con expectativa en redes sociales, transmitirse por #[em streaming], generar piezas audiovisuales, activar códigos de compra, vincular influenciadores y producir métricas posteriores. Esto demuestra que el evento ya no se limita al momento presencial, sino que se extiende antes, durante y después mediante contenidos, comunidad y analítica.

    .titulo-con-imagen.mb-6(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.png")
        h4.titulo-con-imagen__texto Evolución de los eventos de moda

    div.slider-wrapper.z-2.mb-6
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.position-relative.p-4.pt-5.z-2.my-5
        LineaTiempoC.color-acento-contenido(text-small)
          .row.justify-content-center(titulo="Siglo XIX").pt-4
            .col-lg-8
              h5.mb-0 Siglo XIX
              p Desfiles privados
              p.mb-4.mb-lg-0 Las casas de moda presentaban sus colecciones en desfiles exclusivos dirigidos a clientes selectos y compradores.
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema2/4.png', alt='')
          .row.justify-content-center(titulo="1920–1930").pt-4
            .col-lg-8
              h5.mb-0 1920–1930
              p Presentaciones exclusivas
              p.mb-4.mb-lg-0 La moda incorporó eventos más sofisticados y temáticos para exhibir nuevas tendencias a un público especializado.
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema2/5.png', alt='')
          .row.justify-content-center(titulo="1940").pt-4
            .col-lg-8
              h5.mb-0 1940
              p #[em Press Week]
              p.mb-4.mb-lg-0 Se organizaron semanas dedicadas a la prensa para difundir las colecciones y fortalecer la cobertura de la industria.
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema2/6.png', alt='')
          .row.justify-content-center(titulo="1970").pt-4
            .col-lg-8
              h5.mb-0 1970
              p Semanas de la moda
              p.mb-4.mb-lg-0 Las Fashion Weeks se consolidaron como eventos internacionales donde diseñadores presentaban sus colecciones al público y la prensa.
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema2/7.png', alt='')
          .row.justify-content-center(titulo="2000").pt-4
            .col-lg-8
              h5.mb-0 2000
              p Experiencias de marca
              p.mb-4.mb-lg-0 Los desfiles evolucionaron hacia experiencias inmersivas que fortalecían la identidad y el posicionamiento de las marcas.
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema2/8.png', alt='')
          .row.justify-content-center(titulo="Actualidad").pt-4
            .col-lg-8
              h5.mb-0 Actualidad
              p Eventos híbridos y #[em streaming]
              p.mb-4.mb-lg-0 La tecnología permite transmitir los desfiles en vivo y combinar experiencias presenciales con audiencias digitales en todo el mundo.
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema2/9.png', alt='')

    .p-4.bg-acento-contenido-a5.rounded-4.z-2.mb-5
      p.mb-0 Los eventos de moda desempeñan un papel fundamental en el sistema moda, ya que constituyen espacios para la promoción, comunicación, relacionamiento y comercialización de productos, marcas y colecciones. A través de pasarelas, ferias, ruedas de negocios, lanzamientos y encuentros especializados, facilitan la difusión de tendencias, la presentación de propuestas creativas y la generación de oportunidades comerciales. Además, fortalecen la conexión entre diseñadores, empresas, compradores, medios de comunicación y consumidores, contribuyendo al posicionamiento de marcas y al desarrollo competitivo del sector.
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.png")
        h4.titulo-con-imagen__texto Funciones de los eventos de moda


    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .tarjeta.bg-primario-p10.p-4
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Visualización de producto
                p.mb-0 Presentar prendas, accesorios o colecciones de manera organizada y coherente con la marca. 
                p #[strong Ejemplo de aplicación]: desfile de colección cápsula, #[em showroom] de compradores o presentación de temporada.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Comunicación de marca
                p.mb-0 Transmitir identidad, valores, narrativa, estilo y posicionamiento.
                p #[strong Ejemplo de aplicación]: evento sostenible con mensajes de trazabilidad, producción local y consumo responsable.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Activación comercial
                p.mb-0 Estimular ventas, reservas, preventas, contactos o negociaciones.
                p #[strong Ejemplo de aplicación]: lanzamiento con catálogo digital, códigos de compra y atención a compradores mayoristas.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Relacionamiento
                p.mb-0 Conectar marca con medios, aliados, influenciadores, clientes, proveedores o comunidades.
                p #[strong Ejemplo de aplicación]: encuentro con prensa, #[em bloggers], estilistas y líderes de opinión.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Generación de contenido
                p.mb-0 Producir fotografías, videos, #[em reels], transmisiones, notas de prensa y material de campaña.
                p #[strong Ejemplo de aplicación]: cobertura de pasarela, backstage, entrevistas y piezas para redes sociales.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Validación de mercado
                p.mb-0 Recoger reacciones, comentarios, pedidos, interacción y comportamiento de los asistentes.
                p #[strong Ejemplo de aplicación]: encuestas rápidas, métricas de interacción, pedidos de #[em showroom] o análisis de conversiones.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipos de eventos de moda

    img(data-aos="fade-up")(src="@/assets/curso/tema2/12.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Los eventos de moda pueden clasificarse según su objetivo, público, formato, duración, nivel de exclusividad y relación con la estrategia comercial. Algunas acciones se orientan a la prensa y los compradores; otras buscan contacto directo con consumidores, activación digital, venta temporal, experiencia de marca o posicionamiento institucional. La selección del tipo de evento debe responder al producto que se desea visualizar y al mercado al que se dirige. Una colección de autor puede requerir un showroom o pasarela conceptual; una marca comercial puede optar por lanzamiento digital, #[em pop-up store] o evento con influenciadores; una empresa con enfoque sectorial puede participar en ferias, ruedas de negocio o experiencias híbridas. Entre los eventos de moda más relevantes tenemos:

    div.slider-wrapper.z-2.mb-6.slider-custom-small
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.position-relative.p-4.pt-5.z-2.my-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Desfile o pasarela
              p Presentación de una colección mediante modelos, #[em styling], música, iluminación y puesta en escena.
              p #[strong Uso estratégico]: comunicar concepto, siluetas, temporada, identidad de marca y propuesta estética.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/13.png', alt='')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 #[em Showroom]
              p Espacio de exhibición controlada para compradores, prensa, aliados o clientes seleccionados.
              p #[strong Uso estratégico]: favorecer negociación, revisión detallada de producto, pedidos y relaciones comerciales.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/14.png', alt='')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Lanzamiento de producto
              p Evento diseñado para introducir una colección, línea, cápsula, colaboración o referencia nueva.
              p #[strong Uso estratégico]: generar expectativa, contenido digital, preventa, tráfico a tienda o conversación en redes.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/15.png', alt='')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Feria de moda
              p Encuentro sectorial con marcas, proveedores, compradores, insumos, tecnología y servicios.
              p #[strong Uso estratégico]: ampliar redes de contacto, observar competencia, negociar y reconocer tendencias.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/16.png', alt='')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 #[em Pop-up store]
              p Punto de venta temporal, experiencial o itinerante asociado a una campaña o temporada.
              p #[strong Uso estratégico]: activar ventas, visibilidad, exclusividad y experiencia de marca por tiempo limitado.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/17.png', alt='')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 #[em Street event]
              p Acción desarrollada en espacio público o no convencional con alto componente experiencial.
              p #[strong Uso estratégico]: acercar la marca a comunidades urbanas, generar contenido espontáneo y viralidad.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/18.png', alt='')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 #[em Fashion experience]
              p Evento que integra moda, arte, tecnología, música, performance o interacción con el público.
              p #[strong Uso estratégico]: construir vínculo emocional, diferenciación y narrativa de marca.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/19.png', alt='')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 #[em Evento con influenciadores]
              p Actividad orientada a creadores de contenido, líderes de opinión o validadores de marca.
              p #[strong Uso estratégico]: ampliar alcance digital, generar reseñas, contenido y conversación social.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/20.png', alt='')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Evento digital o #[em streaming]
              p Presentación transmitida o desarrollada en plataformas digitales.
              p #[strong Uso estratégico]: superar barreras geográficas, aumentar alcance, medir interacción y conectar con comercio electrónico.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema2/21.png', alt='')

    .p-4.py-4.py-lg-0.bg-secundario-s5.rounded-4.z-2.mb-5
      .row.align-items-center.z-2.justify-content-center
        .col-lg-10.p-3.p-xl-0
          p.mb-4.mb-lg-0 La relación entre tipo de evento, producto y mercado permite comprender cómo las diferentes actividades del sistema moda se orientan a objetivos específicos de promoción, posicionamiento y comercialización. Eventos como pasarelas, ferias, ruedas de negocios y lanzamientos facilitan la conexión entre los productos y sus públicos objetivo, favoreciendo la visibilidad de las marcas y la generación de oportunidades comerciales. Analizar esta relación permite seleccionar los escenarios más adecuados para presentar productos, fortalecer estrategias de comunicación y responder de manera efectiva a las necesidades del mercado.
        .col-6.col-sm-4.col-lg-2
          figure
            img(src="@/assets/curso/tema2/22.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Relación entre tipo de evento, producto y mercado
        .tabla-a.color-secundario.tabla-a--text-left
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #CEDAF8")
                th Objetivo de visualización
                th Tipo de evento recomendado
                th Producto o línea de mercado relacionada
            tbody
              tr
                td Presentar colección completa
                td Desfile, pasarela o presentación editorial
                td Alta costura, lujo, diseño de autor o #[em prêt-à-porter]
              tr(style="background-color: #EAECEE")
                td Negociar con compradores
                td #[em Showroom], feria o rueda comercial
                td Moda comercial, marcas emergentes, calzado, marroquinería y accesorios
              tr
                td Generar expectativa por novedad
                td Lanzamiento, #[em drop] digital o evento con influenciadores
                td Series cortas, cápsulas, colaboraciones o productos de campaña
              tr(style="background-color: #EAECEE")
                td Fortalecer experiencia de marca
                td #[em Fashion experience], #[em pop-up store] o evento híbrido
                td Productos aspiracionales, sostenibles, de autor o líneas con narrativa diferenciada
              tr
                td Activar venta temporal
                td #[em pop-up store], #[em live shopping] o campaña de temporada
                td Moda comercial, moda rápida, accesorios, #[em drops] o productos promocionales
              tr(style="background-color: #EAECEE")
                td Comunicar innovación
                td Feria, demostración técnica, presentación digital o evento especializado
                td Textiles inteligentes, moda sostenible, #[em activewear], #[em sportswear] o tecnología aplicada

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Eventos físicos, digitales e híbridos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/23.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La transformación digital del sistema moda ha ampliado los formatos de evento. Un evento físico permite contacto directo con producto, texturas, caída, acabados y experiencia espacial; un evento digital permite mayor alcance, medición, permanencia del contenido y conexión con comercio electrónico; un evento híbrido integra ambas posibilidades para ampliar la participación y mejorar la comunicación de la marca.
        .p-4.bg-secundario-s5.rounded-4.z-2.mb-4
          p.mb-0 La decisión entre formato físico, digital o híbrido debe considerar presupuesto, objetivo, público, tipo de producto, alcance esperado, requerimientos técnicos, contenido necesario y capacidad de medición. En productos donde la textura, el ajuste o la materialidad son determinantes, el evento físico o #[em showroom] mantiene gran valor. En lanzamientos de alcance amplio o campañas con fuerte presencia en redes, el formato digital puede amplificar la visibilidad del producto.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 7.
      span Eventos físicos, digitales e híbridos
    .tabla-a.color-secundario.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #CEDAF8")
            th Formato de evento
            th Características
            th Ventajas estratégicas
            th Requerimientos principales
        tbody
          tr
            td Físico
            td Se desarrolla en un espacio presencial con asistencia directa del público
            td Contacto con producto, experiencia sensorial, #[em networking] y relación cercana con compradores
            td Lugar, montaje, logística, protocolo, seguridad, iluminación, sonido y producción
          tr(style="background-color: #EAECEE")
            td Digital
            td Se realiza mediante plataformas, #[em streaming], redes sociales, catálogos o entornos virtuales
            td Mayor alcance, medición de interacción, reducción de barreras geográficas y reutilización de contenido
            td Producción audiovisual, guion, plataforma, pauta, métricas y soporte técnico
          tr
            td Híbrido
            td Integra presencia física con transmisión, contenido digital o interacción remota
            td Combina experiencia directa con expansión de audiencia y generación de datos
            td Coordinación técnica, cámaras, conectividad, agenda, contenidos previos y seguimiento posterior

    .bg-acento-contenido-a5.p-4.rounded-4.z-2.mb-4
      p.mb-0.text-center A continuación, se relacionan las diferencias entre los eventos físicos, digitales e híbridos:

    .row.justify-content-center.z-2
      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.rounded-4(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/24.png", alt="")
          .crd_hover_txt--body.w-100
            h4.mb-4.text-center Físico
            ul.checklist
              li Presencial en un lugar físico.
              li Interacción directa y en tiempo real.
              li Ideal para experiencias inmersivas.
              li Alcance limitado por capacidad y costos.  

      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4
        .crd_hover_txt.rounded-4(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/25.png", alt="")
          .crd_hover_txt--body.w-100
            h4.mb-4.text-center Digital
            ul.checklist
              li 100 % virtual.
              li Transmisión en vivo o contenido #[em on demand].
              li Alcance global sin presencia física.
              li Menores costos de producción.

      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4
        .crd_hover_txt.rounded-4(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/26.png", alt="")
          .crd_hover_txt--body.w-100
            h4.mb-4.text-center Híbrido
            ul.checklist
              li Combina lo presencial y lo digital.
              li Experiencia integrada para más audiencia.
              li Mayor alcance y participación.
              li Requiere planificación y coordinación.
            
    .p-4.bg-primario-p10.rounded-4.z-2
      p.mb-0 El formato se define según el alcance, la experiencia, los recursos y el canal de venta.
      p.mb-0 Elegir el tipo de evento adecuado permite cumplir objetivos de marca, optimizar recursos y conectar mejor con el público objetivo, maximizando los resultados.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Producción de eventos de moda

    img(data-aos="fade-up")(src="@/assets/curso/tema2/27.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 La producción de eventos de moda corresponde al proceso de planear, organizar, ejecutar y evaluar una acción de visualización de producto. Involucra decisiones creativas, técnicas, logísticas, comunicativas y comerciales que deben integrarse desde la fase inicial. Un evento bien producido no depende únicamente de la puesta en escena, sino de la coherencia entre objetivo, colección, consumidor, canal, recursos y resultados esperados.

    .p-4.bg-secundario-s5.rounded-4.z-2.mb-5
      p.mb-0 En el sistema moda, la producción debe articular concepto, marca, consumidor, universo de vestuario, ocasión de uso y línea de mercado. Esta articulación permite que el evento no sea una actividad aislada, sino una herramienta que fortalece la estrategia de #[em marketing] digital, la generación de contenidos, la comercialización y la relación con públicos específicos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.png")
        h4.titulo-con-imagen__texto Etapas para la producción de eventos de moda

    p.mb-4 Las etapas para la producción de eventos de moda corresponden al conjunto de actividades necesarias para planificar, organizar, ejecutar y evaluar una experiencia orientada a la promoción de productos, marcas o tendencias. Este proceso integra aspectos estratégicos, logísticos, técnicos y comunicativos que permiten garantizar el cumplimiento de los objetivos del evento y una adecuada interacción con los diferentes públicos participantes.

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/28.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .tarjeta.bg-primario-p10.p-4
          SlyderA(tipo="b").slider-custom-small
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Definición de objetivo
                p Precisar si el evento busca lanzar, vender, posicionar, fidelizar, educar, negociar o generar contenido.
                p #[strong Resultado esperado]: objetivo medible y alineado con la estrategia de marca.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Conceptualización
                p Definir narrativa, estética, tono, universo de vestuario, ocasión de uso y mensaje central.
                p #[strong Resultado esperado]: concepto rector para orientar producto, #[em styling], espacio, comunicación y experiencia.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Selección de producto
                p Elegir prendas, accesorios, calzado o complementos que serán visualizados.
                p #[strong Resultado esperado]: listado de referencias, tallas, fichas, #[em looks], orden de salida o montaje de exhibición.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Planeación de público
                p Identificar asistentes, compradores, prensa, influenciadores, clientes o comunidad digital.
                p #[strong Resultado esperado]: segmentación de invitados, canales de convocatoria y experiencia esperada.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Producción técnica
                p Coordinar espacio, iluminación, sonido, montaje, modelos, #[em styling], fotografía, video y logística.
                p #[strong Resultado esperado]: plan de producción, cronograma, presupuesto y responsables.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Comunicación
                p Diseñar piezas previas, cobertura durante el evento y contenidos posteriores.
                p #[strong Resultado esperado]: campaña integrada en redes sociales, #[em mailing], prensa, página web y canales comerciales.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Ejecución
                p Realizar montaje, pruebas, #[em fitting], ensayo, presentación y control de experiencia.
                p #[strong Resultado esperado]: evento desarrollado según guion, tiempos y criterios de calidad.
            .row.justify-content-center
              .col-sm-10
                h5.mb-4 Evaluación
                p Medir asistencia, interacción, alcance, ventas, contactos, comentarios y aprendizajes.
                p #[strong Resultado esperado]: informe de resultados para tomar decisiones de mejora.

    .p-4.py-4.py-lg-0.bg-secundario-s5.rounded-4.z-2.mb-5
      .row.align-items-center.z-2.justify-content-center
        .col-lg-10.p-3.p-xl-0
          p.mb-4.mb-lg-0 La producción de un evento de moda requiere la participación coordinada de diferentes profesionales que contribuyen a su planificación, organización y ejecución. Entre los roles más frecuentes se encuentran la dirección y coordinación del evento, la producción, la logística, la comunicación, el protocolo, la dirección creativa, el estilismo, la fotografía y los servicios técnicos. La articulación de estas funciones permite desarrollar experiencias coherentes con los objetivos del evento, las necesidades de las marcas y las expectativas del público.
        .col-6.col-sm-4.col-lg-2
          figure
            img(src="@/assets/curso/tema2/29.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/30.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-primario-p20")
          div(titulo="Productor general")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p.mb-0 Coordina presupuesto, cronograma, proveedores, permisos y ejecución integral.
                p.mb-4.mb-lg-0 #[strong Relación con el producto de moda]: garantiza que la visualización del producto ocurra en condiciones técnicas adecuadas.
              .col-sm-10.col-lg-5
                figure
                  img(src="@/assets/curso/tema2/31.png", alt="")   
          div(titulo="Dirección creativa")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p.mb-0 Define concepto, narrativa, atmósfera, lenguaje visual y coherencia estética.
                p.mb-4.mb-lg-0 #[strong Relación con el producto de moda]: asegura que colección, #[em styling], puesta en escena y comunicación respondan a la marca.
              .col-sm-10.col-lg-5
                figure
                  img(src="@/assets/curso/tema2/32.png", alt="")
          div(titulo="<em>Stylist</em> o estilista de moda")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p.mb-0 Organiza #[em looks], combinaciones, accesorios, calzado, #[em fitting] y orden de presentación.
                p.mb-4.mb-lg-0 #[strong Relación con el producto de moda]: traduce el producto en propuestas visuales pertinentes para el consumidor.
              .col-sm-10.col-lg-5
                figure
                  img(src="@/assets/curso/tema2/33.png", alt="")
          div(titulo="Equipo de comunicación")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p.mb-0 Gestiona convocatoria, prensa, redes sociales, piezas gráficas, contenido y cobertura.
                p.mb-4.mb-lg-0 #[strong Relación con el producto de moda]: convierte el evento en visibilidad, recordación, conversación y alcance digital.
              .col-sm-10.col-lg-5
                figure
                  img(src="@/assets/curso/tema2/34.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-primario-p20")
          div(titulo="Equipo audiovisual")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p.mb-0 Registra fotografía, video, #[em reels], #[em streaming], #[em backstage] y material de campaña.
                p.mb-4.mb-lg-0 #[strong Relación con el producto de moda]: produce contenidos para canales digitales y memoria del evento.
              .col-sm-10.col-lg-5
                figure
                  img(src="@/assets/curso/tema2/35.png", alt="")   
          div(titulo="Equipo comercial")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p.mb-0 Atiende compradores, clientes, pedidos, bases de datos, ventas y seguimiento.
                p.mb-4.mb-lg-0 #[strong Relación con el producto de moda]: convierte la visualización en oportunidades de negocio.
              .col-sm-10.col-lg-5
                figure
                  img(src="@/assets/curso/tema2/36.png", alt="")
          div(titulo="Equipo logístico")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p.mb-0 Coordina montaje, circulación, tiempos, acceso, seguridad, transporte y recursos técnicos.
                p.mb-4.mb-lg-0 #[strong Relación con el producto de moda]: evita fallas que afecten la presentación del producto y la experiencia del público.
              .col-sm-10.col-lg-5
                figure
                  img(src="@/assets/curso/tema2/37.png", alt="")
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/39.png", alt="" data-aos="zoom-in-down")

    .p-4.py-4.py-lg-0.bg-primario-p10.rounded-4.z-2.mb-5
      .row.align-items-center.z-2.justify-content-center
        .col-lg-10.p-3.p-xl-0 
          p.mb-4.mb-lg-0 El #[em checklist] técnico para visualizar productos en eventos de moda es una herramienta que permite verificar los aspectos esenciales para la adecuada presentación de prendas, accesorios y colecciones. Incluye elementos relacionados con la exhibición, iluminación, montaje, comunicación visual, logística y experiencia del público, contribuyendo a que los productos sean percibidos de manera coherente con los objetivos de la marca y las características del evento.
        .col-6.col-sm-4.col-lg-2
          figure
            img(src="@/assets/curso/tema2/40.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span #[em Checklist] técnico para visualizar productos en eventos de moda
        .tabla-a.color-secundario.tabla-a--text-left
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #CEDAF8")
                th Elemento de control
                th Aspectos por verificar
                th Riesgo que previene
            tbody
              tr
                td Producto
                td Estado de prendas, tallas, planchado, etiquetas, accesorios, calzado y repuestos
                td Improvisación, daño de piezas, errores de #[em look] o presentación incompleta
              tr(style="background-color: #EAECEE")
                td #[em Fitting]
                td Ajuste, movilidad, largos, cierres, comodidad, correspondencia entre modelo y producto
                td Problemas de caída, incomodidad, fallas de cierre o lectura incorrecta de silueta
              tr
                td #[em Styling]
                td Coherencia entre concepto, prendas, accesorios, maquillaje, peinado y calzado
                td Desarticulación visual o pérdida del mensaje de marca
              tr(style="background-color: #EAECEE")
                td Espacio
                td Iluminación, circulación, señalización, sonido, montaje, accesos y seguridad
                td Baja visibilidad, desorden, retrasos o afectación de la experiencia
              tr
                td Comunicación
                td Invitación, piezas gráficas, guion, #[em hashtags], contenidos previos y cobertura
                td Baja asistencia, poca recordación, débil alcance digital o mensaje confuso
              tr(style="background-color: #EAECEE")
                td Registro audiovisual
                td Planos, fotografías de producto, #[em backstage], entrevistas, #[em streaming] y permisos
                td Pérdida de contenido útil para redes, prensa, catálogo o memoria de marca
                

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Visualización de productos según líneas de mercado

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/41.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La visualización de productos debe responder a la línea de mercado en la que se ubica la propuesta. Un producto de lujo requiere una presentación que comunique exclusividad, detalle, experiencia y valor simbólico; una línea comercial necesita claridad, disponibilidad, precio y facilidad de compra; una marca de moda rápida exige velocidad de comunicación, alta rotación y conexión inmediata con tendencias.
        .p-4.bg-secundario-s5.rounded-4.z-2
          p.mb-0 La relación entre evento y línea de mercado permite tomar decisiones sobre formato, invitados, narrativa, producción audiovisual, canal de venta y métricas. Esta lectura evita que todos los productos se presenten de la misma manera y permite alinear la experiencia con el consumidor esperado.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Observatorio de tendencias y análisis visual de referentes
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/43.svg", alt="La figura detalla un esquema piramidal de las gamas de mercado y la visualización de producto. Organiza los niveles desde la moda masiva y comercial hasta el prêt-à-porter, diseño de autor, lujo y alta costura, relacionando cada categoría con distintos grados de exclusividad, producción, acceso y propuesta de valor.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/42.svg", alt="La figura detalla un esquema piramidal de las gamas de mercado y la visualización de producto. Organiza los niveles desde la moda masiva y comercial hasta el prêt-à-porter, diseño de autor, lujo y alta costura, relacionando cada categoría con distintos grados de exclusividad, producción, acceso y propuesta de valor.")
        figcaption Nota. SENA, (2026).

    separador
    
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Evaluación del evento desde #[em marketing] digital

    img(data-aos="fade-up")(src="@/assets/curso/tema2/44.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 La evaluación del evento permite determinar si la acción cumplió los objetivos propuestos. En #[em marketing] digital, esta evaluación no se limita a contar asistentes; también considera alcance, interacción, contenidos generados, tráfico web, consultas, ventas, contactos comerciales, crecimiento de comunidad, percepción de marca y oportunidades de mejora.

    .bg-secundario-s10.p-4.rounded-4.z-2.mb-4
      p.mb-0 Para que la evaluación sea útil, los indicadores deben definirse antes del evento. De esta manera, el equipo puede decidir qué datos necesita recopilar, qué herramientas usará, quién será responsable del seguimiento y cómo se interpretarán los resultados para la siguiente acción de comunicación o comercialización. 

    p.mb-4 Indicadores para evaluar eventos de moda desde #[em marketing] digital

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-primario-p20")
          div(titulo="Asistencia")
            p.mb-0 Cantidad y perfil de personas que participaron en el evento.
            p.mb-0 #[strong Ejemplo de aplicación]: número de invitados, compradores, prensa, influenciadores o asistentes digitales.
          div(titulo="Alcance digital")
            p.mb-0 Cantidad de personas expuestas a los contenidos del evento.
            p.mb-0 #[strong Ejemplo de aplicación]: impresiones, visualizaciones, reproducciones, usuarios alcanzados o cobertura en medios.
          div(titulo="Interacción")
            p.mb-0 Nivel de respuesta del público frente al contenido.
            p.mb-0 #[strong Ejemplo de aplicación]: comentarios, compartidos, guardados, clics, preguntas, menciones o uso de #[em hashtag].
          div(titulo="Coversión")
            p.mb-0 Acciones comerciales derivadas del evento.
            Ejemplo de aplicación: ventas, reservas, pedidos, suscripciones, registros, #[em leads] o tráfico a tienda
          div(titulo="Contenido generado")
            p.mb-0 Material producido por la marca, asistentes o aliados.
            p.mb-0 #[strong Ejemplo de aplicación]: fotografías, #[em reels], #[em stories], notas de prensa, entrevistas o contenido de influenciadores.
          div(titulo="Percepción de marca")
            p.mb-0 Comentarios, tono de conversación y valoración del producto.
            p.mb-0 #[strong Ejemplo de aplicación]: análisis cualitativo de reseñas, mensajes, opiniones o cobertura.
          div(titulo="Aprendizaje operativo")
            p.mb-0 Fortalezas y aspectos por mejorar en la producción. 
            p.mb-0 #[strong Ejemplo de aplicación]: informe posterior con aciertos, riesgos, costos, tiempos y recomendaciones.
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/45.png", alt="")
    
    .p-4.bg-primario-p10.rounded-4.z-2.mb-4.mb-lg-5
      p.mb-0 La gestión de eventos de moda exige conectar producto, visualización, canal digital, experiencia de marca y evaluación. Un evento pertinente no se limita a exhibir prendas o accesorios; construye una narrativa, activa públicos, genera contenidos, permite medir resultados y aporta información para ajustar futuras acciones de #[em marketing] digital dentro del sistema moda.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7.bg-audio.rounded-4.mb-4.mb-lg-0
        .row.align-items-center.justify-content-center
          .col-8.col-sm-5
            figure.pt-3
              img.img-415.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="alt")
          .col-sm-7.col-lg-7.p-3.p-xl-0
            p Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-white.mb-3(
              texto="“Charlas que venden” tema: “Más que vestir identidad, creactividad y estrategía en el sistema de moda”"
              :audio="require('@/assets/curso/podcast/mas-que-vestir-identidad-creatividad-y-estrategia-en-el-sistema-de-moda.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-10.col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/46.png", alt="")



</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
