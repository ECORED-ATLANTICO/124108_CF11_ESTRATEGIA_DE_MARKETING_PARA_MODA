<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Explorando tendencias y eventos en el sistema moda.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos, clasificaciones, aplicaciones y procesos relacionados con las tendencias de moda, los universos de vestuario, las ocasiones de uso, los eventos de moda y la producción de eventos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué permiten interpretar correctamente las tendencias dentro del sistema moda?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprender cambios del mercado y comportamientos emergentes de consumidores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar análisis estratégicos relacionados con innovación comercial empresarial actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir estudios de mercado por decisiones intuitivas permanentes organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir importancia de consumidores en procesos comerciales contemporáneos actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál característica distingue origen de tendencias dentro contextos sociales actuales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se genera mediante dinámicas culturales, sociales y económicas cambiantes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Surge exclusivamente de decisiones empresariales aisladas del mercado actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Depende únicamente de campañas publicitarias desarrolladas por organizaciones comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elimina participación de consumidores en construcción de preferencias colectivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué representan meta tendencias dentro análisis prospectivo aplicado al sistema moda?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cambios temporales limitados exclusivamente a temporadas comerciales específicas actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transformaciones estructurales capaces de influir durante largos periodos sociales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Acciones promocionales utilizadas por marcas para incrementar ventas inmediatas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Estrategias visuales relacionadas únicamente con productos de vestuario contemporáneo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál función cumplen macrotendencias dentro planificación estratégica del sistema moda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir capacidad organizacional para anticipar cambios del entorno competitivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir análisis de consumidores mediante observaciones intuitivas exclusivamente comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar comprensión de movimientos amplios que afectan mercados globales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar procesos prospectivos relacionados con innovación empresarial contemporánea actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué caracteriza principalmente micro tendencias observadas dentro mercados contemporáneos de moda?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformaciones permanentes presentes durante extensos periodos históricos globales actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cambios específicos, rápidos y asociados grupos particulares consumidores actuales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Procesos económicos estructurales que afectan todos mercados simultáneamente globales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Estrategias organizacionales enfocadas exclusivamente en producción industrial masiva actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué permiten comprender los universos de vestuario dentro sistema moda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar segmentaciones utilizadas para organizar productos de moda actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir procesos comerciales relacionados con desarrollo de colecciones empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Agrupar productos según contextos, funciones y necesidades específicas consumo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir posibilidades de clasificación empleadas por marcas contemporáneas actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué criterio orienta clasificación productos dentro universos de vestuario?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exclusivamente ubicación geográfica donde opera cada organización comercial actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminación de categorías utilizadas tradicionalmente en mercados especializados actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustitución permanente de segmentaciones aplicadas por marcas contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Relación funcional entre producto, usuario y contexto de utilización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué representan ocasiones de uso dentro decisiones estratégicas de moda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Situaciones específicas que condicionan selección y utilización productos determinados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Procesos industriales relacionados exclusivamente con producción de vestuario actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Estrategias comerciales enfocadas únicamente en incremento de ventas inmediatas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cambios estructurales presentes durante largos periodos sociales contemporáneos actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué finalidad tiene clasificar productos según ocasiones de uso específicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar posibilidades de adaptación productos a diferentes contextos sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar selección coherente según necesidades, actividades y entornos determinados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir análisis de consumidores mediante criterios exclusivamente productivos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir importancia de preferencias individuales dentro decisiones de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué beneficio genera relacionar vestuario con ocasiones específicas de uso?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar diferenciación existente entre categorías comerciales del mercado actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir pertinencia funcional de productos dirigidos a consumidores específicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incrementar adecuación entre oferta comercial y necesidades del usuario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir procesos de segmentación utilizados por organizaciones especializadas actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué función cumplen eventos de moda dentro estrategias sectoriales actuales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir interacción entre marcas, consumidores y actores del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar oportunidades comerciales relacionadas con posicionamiento de productos actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir procesos comunicativos empleados por organizaciones especializadas del sector.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitar promoción, visibilidad y conexión entre diferentes públicos estratégicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué permiten establecer las clasificaciones utilizadas en eventos de moda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diferenciar eventos según objetivos, alcance y características particulares organizativas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar segmentaciones aplicadas por organizaciones especializadas del sector actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir estrategias promocionales utilizadas durante actividades comerciales contemporáneas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir capacidad organizacional para seleccionar formatos adecuados de presentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué caracteriza los distintos tipos existentes de eventos moda actuales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación de objetivos específicos asociados a cada formato comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Su adaptación a necesidades particulares de comunicación y promoción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La sustitución de actividades estratégicas desarrolladas por marcas contemporáneas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La reducción de alternativas disponibles para interacción con audiencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué aportan pasarelas dentro comunicación estratégica desarrollada por marcas moda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elimnan necesidad de presentar productos ante consumidores y compradores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituyen completamente acciones promocionales empleadas por organizaciones especializadas actualmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permiten exhibir colecciones fortaleciendo posicionamiento e imagen de marca.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducen visibilidad comercial alcanzada mediante estrategias de comunicación contemporáneas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué función estratégica cumple showroom dentro comercialización de productos moda?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar contacto directo entre compradores y propuestas comerciales disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir oportunidades de evaluación productos antes decisiones de compra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente actividades promocionales desarrolladas durante eventos especializados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitar presentación especializada de productos ante públicos de interés.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué objetivo tienen lanzamientos dentro estrategias comerciales del sistema moda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dar a conocer productos fortaleciendo posicionamiento y expectativa comercial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar procesos promocionales relacionados con introducción de nuevos productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir actividades de comunicación utilizadas por organizaciones especializadas actualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir visibilidad comercial alcanzada mediante estrategias de mercado contemporáneas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué caracteriza proceso de producción aplicado a eventos de moda?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminación de etapas necesarias para planificación y ejecución organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integración coordinada de actividades, recursos y responsables estratégicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustitución de procesos logísticos por decisiones intuitivas exclusivamente operativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducción permanente de controles requeridos durante desarrollo del evento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué permiten establecer tipos de producción en eventos especializados actuales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar diferencias operativas presentes entre formatos organizacionales contemporáneos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir criterios estratégicos empleados durante planificación de actividades comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Adaptar recursos y metodologías según necesidades específicas del evento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir capacidad organizacional para responder a diferentes requerimientos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué ventaja ofrece producción virtual dentro eventos desarrollados actualmente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limitar alcance de audiencias interesadas en contenidos especializados actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir posibilidades de interacción entre participantes y organizadores principales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar utilización de tecnologías durante experiencias comerciales contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ampliar cobertura mediante herramientas digitales y acceso remoto eficiente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué aporta producción presencial a experiencia generada durante eventos moda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Favorece interacción directa fortaleciendo experiencias y relaciones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituye completamente procesos comunicativos desarrollados mediante canales especializados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reduce oportunidades de contacto entre participantes y marcas presentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elimina valor experiencial asociado a actividades organizadas presencialmente actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente!, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
