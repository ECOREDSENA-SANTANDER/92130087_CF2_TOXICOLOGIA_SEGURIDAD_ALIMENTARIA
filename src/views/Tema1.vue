<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Antinutrientes

    .row.mb-5
      .col-lg-5 
        img(src='@/assets/curso/temas/t1/img1.png', alt='')
      .col-lg-7
        .row.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/t1/manzana.svg', alt='')
          .col-lg-10
            p Los antinutrientes, son sustancias que pueden producir problemas nutricionales y de salud al ser humano que las consume regularmente, por cuanto disminuyen o impiden la capacidad de asimilación de nutrientes. 
        p Se introdujeron en la alimentación humana, a través de los cultivos para proteger semillas de plagas principalmente. Estas sustancias deben ser transformadas para evitar problemas de salud, por lo cual, a lo largo de los años, el ser humano fue desarrollando técnicas para eliminarlas o transformarlas sin embargo hoy en día, estas prácticas están en su mayoría perdidas.
        .cajon.color-primario.p-4.mb-4
          p El consumo diario de alimentos con alto contenido de antinutrientes como cereales, legumbres y semillas que no han sido transformados adecuadamente, se encuentran relacionados con diversos problemas digestivos y falta de apetito, dientes cariados y débiles, raquitismo, alergias, deficiencias nutricionales como la anemia o la osteoporosis y problemas en el sistema inmunológico. (Foerster, 2012)

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1. Toxicología  
    
    .row.mb-4
      .col-lg-1
        img(src='@/assets/curso/temas/t1/icono.svg', alt='')
      .col-lg-11
        p Puede definirse como el estudio de los efectos adversos de sustancias extrañas en los organismos vivos; se basa en conocimientos químicos y biológicos, con el objetivo de hallar explicaciones detalladas a los efectos tóxicos. Uno de los conceptos fundamentales de la toxicología es que sólo la dosis, como observó Paracelso (1943-1541) “todas las sustancias son venenosas; no hay ninguna que no sea tóxica. La dosis es lo que diferencia al veneno del remedio”. 
    
    .row.mb-4
      .col-lg-4
        img(src='@/assets/curso/temas/t1/img3.svg', alt='')
      .col-lg-5.ps-lg-0
        .br-l.bg1.h-50.d-flex.align-items-center
          h4.bgtitulo1.mb-3.py-1.ps-3.pe-5 Por tanto, la respuesta a la pregunta ¿es esta sustancia tóxica?
          p Será siempre: si se toma una dosis suficiente para que lo sea. Por esta razón dos de los objetivos fundamentales de la toxicología son cuantificar e interpretar la toxicidad de las sustancias. 
      .col-lg-3
        img(src='@/assets/curso/temas/t1/img2.png', alt='')
    
    p.mb-4 Las curvas de frecuencia respuesta se obtienen a partir de cualquier serie de datos toxicológicos en los que se mide una respuesta cuantificable, registrando el porcentaje de individuos que responden a cada dosis menos el porcentaje de ellos que responden a cantidades menores. Este tipo de curvas presenta la forma típica de una distribución gaussiana. Además, las curvas ilustran de forma clara que hay una dosis media a la que responde de manera específica el mayor porcentaje de individuos. Siempre habrá quienes requieran porciones mayores o menores que la media para originar la misma respuesta. Los individuos que responden a dosis menores se denominan hipersensibles y los que responden a cantidades mayores se llaman hiposensibles.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los datos de dosis-respuesta y en particular la información sobre la toxicidad aguda de las sustancias, se indica a menudo como respuesta acumulativa frente a las dosis. En este caso se suministran a grupos de individuos varias cantidades de la sustancia y se anota el porcentaje de los mismos que responden positivamente. En el caso de la dosis letal, se apunta el número de seres que mueren. En el caso de una respuesta no terminal, se escribe el número de los individuos que responden al menos a una de las dosis. Previamente se establece experimentalmente el intervalo de porción en el que tiene lugar la respuesta de interés. Los datos se representan como porcentaje acumulativo de individuos que responden en la forma deseada frente a la dosis.

    .row.mb-4
      .titulo-sexto.color-acento-contenido
        h5 Figura 1. 
        span Curva dosis - respuesta
      .col-lg-5
        img(src='@/assets/curso/temas/t1/fig1.svg', alt='')
        figcaption #[b Fuente:] Shibatomo
      .col-lg-7
        p.mb-4 A medida que la dosis de una sustancia se aproxima al nivel tóxico, se llega a un intervalo de dosis al que los individuos del grupo experimental responden de forma similar. Una vez que se ha establecido la respuesta, los experimentos de dosis-respuesta o dosis-efecto pueden mostrarse de distintas formas. Se obtiene una dosis de frecuencias de respuestas (Figura 1) representando el número de individuos con una respuesta definida específica en función de la dosis. La mayor de estas dosis sin respuesta es la llamada dosis o nivel sin efecto observado, en inglés “No Observed Effect Level” (NOEL).
        .cajon.color-primario.p-4.mb-4
          p.text-center Para establecer la NOEL se administra un rango de dosis suficientemente pequeña para originar respuesta. A medida que se acumula la dosis, el porcentaje de individuos de cada grupo experimental que responde sigue aumentando hasta que se alcanza una dosis, a partir de la cual responde el 100% de los miembros del grupo.
    
    .row.bg2.mb-4
      .col-lg-2
        img(src='@/assets/curso/temas/t1/icono2.svg', alt='')
      .col-lg-10
        p La seguridad absoluta de una sustancia no puede explicarse puesto que la demostración ha de basarse en una evidencia negativa, es decir, en la falta de peligro o de daño debido a tal sustancia. Estadísticamente siempre existe la posibilidad que el experimento siguiente demuestre que el producto no es seguro. Así el concepto de seguridad se ha desarrollado con el transcurso del tiempo e inicialmente se podía considerar segura una sustancia si se consumía sin que ocasionase la muerte inmediata o una lesión aguda. Los conocimientos actuales de los efectos tóxicos y la capacidad de comprobarlos han aumentado hasta un punto, en el que se considera relativamente segura a una sustancia si no se producen efectos adversos en determinados efectos biológicos
    
    .row.mb-4
      .col-lg-5.bg3
        p Dado que no se puede hablar de una seguridad absoluta, se debe hablar de seguridad relativa, definiendo las condiciones en que se evalúa tal seguridad. Una vez que se han definido los efectos tóxicos de una especie y las condiciones experimentales de la prueba, la toxicidad relativa de las sustancias se establece a menudo determinando las curvas de las dosis letales y comparándolas con las DL50.
      .col-lg-3
        img(src='@/assets/curso/temas/t1/img5.svg', alt='')
      .col-lg-4
        p La DL50 es un valor determinado estadísticamente y representa el valor de la dosis necesaria para producir la muerte del 50% de los organismos experimentales. El porcentaje de la DL50 debe acompañarse siempre de alguna cifra o valor de la estimación del error. El intervalo de probabilidad, o valor p, que es el más utilizado, acepta que debe ser menor de 0,05. Este valor indica que si se repitiesen 100 veces el experimento en 95 ocasiones se obtendría la misma DL50.


    p.mb-4 Aunque cada sustancia presenta una curva de dosis letal-respuesta, hay muchas diferencias en las DL50 de diferentes sustancias. Por ejemplo, la DL50 de la cafeína se ha estimado en unos 200 mg/ kg de peso corporal; la de la toxina botulínica, una de las sustancias más tóxicas que se conocen, se ha estimado en unos 100 mg/kg. Por otra parte, la sal o cloruro sódico presenta una DL50 estimada de 40 mg/kg. Como norma general las sustancias con DL50 de 1 mg o menos deben considerarse muy tóxicas, aquellas que se encuentran entre 1-50 mg/kg como altamente tóxicas y las que presentan un rango de entre 50 y 500 mg/kg como moderadamente tóxicas.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los productos cuyas DL50 son mayores que los valores antes citados se consideran como “no tóxicas”, ya que para originar toxicidad o envenenamiento deberían consumirse cantidades relativamente grandes. Por ejemplo, un hombre adulto tendría que ingerir una copa de una sustancia cuya DL50 fuera de 2 g/kg, para presentar toxicidad. Pero de una sustancia muy tóxica que está en el rango 1 mg/kg la ingesta de sólo unas pocas gotas le produciría toxicidad. El riesgo se identifica como la probabilidad de que en algunas condiciones el tóxico genere un daño.
    
    .subt(data-aos='fade-right')
      .row.align-items-center.mb-4
        .col-auto
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
        .col-auto.ps-0
          h3.mb-0.pe-4.pe-lg-5 Limite Residual Crítico (LRM) Y Cantidad de Tóxico (IDA)
    
    .row.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t1/img7.png', alt='')
      .col-lg-7
        p.mb-2 La identificación de los límites de seguridad, definidos como la certeza que no se producirá ningún daño si el producto se utiliza en determinadas condiciones. Estos son indicadores de vital importancia en la toxicología alimentaria. El límite residual crítico (LRM) es el valor del residuo mínimo que queda en el alimento tras su contacto con este siguiendo unas buenas prácticas de higiene, agrícolas y de procesamiento, siempre y cuando este valor sea inferior a su IDA.
        p La IDA se define como la cantidad de tóxico, dada en mg/kg de peso corporal, que puede consumirse durante un período de tiempo determinado, o incluso durante toda la existencia, sin que ello entrañe peligro para la salud del consumidor. La IDA se calcula a partir de la dosis sin efectos apreciables en la más sensible de las especies animales estudiados y dividiendo esta dosis por un factor de seguridad, habitualmente de 100. Por tanto, la IDA es sólo el 1% de la dosis máxima sin efectos.

    p.mb-4 Para el establecimiento del LRM y la IDA se requiere la realización de los siguientes estudios toxicológicos:
    
    .row.mb-5
      .col-lg-6
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Toxicidad aguda") (Establece una dosis única elevada).
          
          p.text-small(numero="2" titulo="Toxicidad subaguda y crónica") Mediante la ingesta de una dosis permanente. En el caso de la subaguda se administra diariamente en dosis de la sustancia inferiores a la DL50, durante un periodo de mínimo 3 meses. Se diferencia de los estudios de toxicidad crónica porque se administran por un periodo más largo de tiempo en 1 ó 2 años.
          
          p.text-small(numero="3" titulo="Genotoxicidad y mutagénesis") Estudian la capacidad que tienen algunas sustancias de alterar componentes genéticos (DNA). Leratogénesis analiza si la sustancia tiene capacidad para generar efectos tóxicos sobre el embrión o el feto.
          
          p.text-small(numero="4" titulo="Carcinogénesis") Estudia si la sustancia puede dar lugar al desarrollo de tumores.

          p.text-small(numero="4" titulo="Sobre la reproducción") Estudia si la sustancia tiene capacidad para generar efectos sobre la fertilidad, la gestación y la descendencia. 
      .col-lg-6
        img(src='@/assets/curso/temas/t1/img8.png', alt='')
    
    p.mb-4 Todos estos estudios determinan que la inclusión de una nueva sustancia en el mercado sea lenta o rápida, siendo esta una forma de garantizar la inocuidad para los seres humanos. Normalmente estos estudios son llevados a cabo por organismos internacionales como el comité mixto de la FAO y OMS o la OCDE.
    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2. Determinación de los tóxicos en los alimentos

    .row.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t1/img9.png', alt='')
      .col-lg-7
        p Para determinar la seguridad de los alimentos se debe hacer una estimación de sus compuestos tóxicos, y para interpretar correctamente los datos es fundamental el desarrollo de métodos analíticos seguros. En toxicología alimentaria, el análisis químico de los alimentos implica la separación del tóxico de los otros componentes de los alimentos y la estimación de su cantidad, a la vez del análisis de toxicidad a nivel experimental o ensayo para detectar el veneno, que consiste generalmente en el efecto tóxico observado.
        .cajon.color-primario.p-4.mb-4
          p Dado que usualmente no son utilizados ni es ético el uso de personas, se selecciona un “sistema modelo” (generalmente ratas o ratones) para emplearlos en la identificación. Todo este proceso, requiere el uso de animales de experimentación, coste y tiempo. Para minimizar al máximo estos recursos se deben seguir unos métodos estandarizados para comprobar la seguridad de los componentes de los alimentos.

    .subt(data-aos='fade-right')
      .row.align-items-center.mb-4
        .col-auto
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
        .col-auto.ps-0
          h3.mb-0.pe-4.pe-lg-5 Identificación del tóxico de acuerdo con sus propiedades fisicoquímicas
    
    .row.mb-5
      .col-lg-7
        p.mb-2 Los análisis cualitativos y cuantitativos de los tóxicos en los alimentos son las actividades principales de la toxicología alimentaria. Cuando se descubre que un alimento presenta toxicidad, la primera tarea del analista es identificar las sustancias tóxicas responsables. La fase inicial es la identificación de la sustancia que va a analizarse. En el caso de las que son puras es relativamente sencillo, pero en el caso de mezclas complejas es más complicado. En este último caso se debe establecer la composición de la mezcla y determinar qué componentes de ella son responsables de la actividad biológica.
        p Primero se separan las sustancias del alimento y se analiza cada uno de ellos para comprobar su toxicidad. Cuando se ha identificado material tóxico se procede a realizar un análisis cuantitativo mediante una técnica analítica química creada para tal fin, luego se puede establecer su estructura por análisis químico utilizando técnicas analíticas como la espectroscopia ultravioleta (UV), espectroscopia de masa (MS), infrarrojo (IR) y de resonancia nuclear (NMR).
      .col-lg-5
        img(src='@/assets/curso/temas/t1/img10.png', alt='')
    
    h3.bgtitulo2 Análisis toxicológico

    p Este análisis comprende tres etapas:

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t1/boton1.svg', alt='')
          h4.bgtitulo3.mb-3.py-1.ps-3.pe-5 Determinación de la toxicidad
          p.text-center Se establece la DL50 que hace parte relevante de la dosis y ruta de administración en los ensayos de toxicidad posterior.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t1/boton2.svg', alt='')
          h4.bgtitulo3.mb-3.py-1.ps-3.pe-5 Estudios toxicocinéticos
          p.text-center En donde se estudian aspectos importantes como la absorción, distribución, bio-transformación (incluyendo los fenómenos de activación o detoxificación) y vías de excreción, sobre especies animales que poseen rutas de metabolización similares a la especie humana.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t1/boton3.svg', alt='')
          h4.bgtitulo3.mb-3.py-1.ps-3.pe-5 Estudios de toxicidad a corto, medio y largo plazo
          p.text-center Se analizan efectos que se producen como son la mutagénesis y carcinogénesis, inmunológicos, de tolerancia local, hematológicos, anatomopatológicos, alteraciones en el crecimiento y desarrollo, entre otros. 

    p Con base en los estudios experimentales se obtienen los índices de toxicidad (IT) tales como el NOEL, la IDA y el LMR que constituyen valores de vital interés en la toxicología alimentaria.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3. Fenómeno tóxico
    
    p.mb-4 La toxicidad es un fenómeno muy complejo en el que actúan muchos factores y donde se pueden distinguir dos grandes fases: la fase toxicocinéticay la fase toxicodinámica.
    
    .subt(data-aos='fade-right')
      .row.align-items-center.mb-4
        .col-auto
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
        .col-auto.ps-0
          h3.mb-0.pe-4.pe-lg-5 Fase toxicocinética
    
    p.mb-4 En esta fase se da el movimiento del tóxico en el organismo y comprende los procesos de absorción, distribución, biotransformación y eliminación.

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Absorción
            p.mb-2 Cuando ingresa el tóxico en el organismo este se ve obligado a atravesar las membranas biológicas que son básicamente hidrófobas y muy liposolubles, lo que hace que sean atravesadas por sustancias lipídicas o grasas y no por sustancias hidrosolubles o ionizadas. 
            p.mb-2 Las sustancias atraviesan las membranas celulares por dos procesos fundamentales: Difusión (movimientos libres al azar producidos por moción cinética) y transporte activo (movimiento de las sustancias combinadas químicamente en la membrana con productos transportadores). La mayoría de las sustancias extrañas liposolubles se trasladan por difusión simple a través de las membranas hacia la bicapa lipídica. 
            p Otro mecanismo de transferencia del tóxico es atravesando la membrana mediante la filtración a través de los poros y la pinocitosis. Muchos iones disueltos en agua y ciertas sustancias hidrosolubles de pequeño peso molecular se expanden a través de los poros acuosos de la membrana celular. La velocidad de difusión de una sustancia a través de una membrana viene determinada por el tamaño o peso molecular, a mayor peso molecular mayor dificultad de penetrar. Por su forma, cuando el tóxico está dividido en partículas muy pequeñas tiene mayor facilidad de absorción; por su grado de ionización, donde las formas no ionizadas son las más liposolubles. Finalmente, por su liposolubilidad, que es una característica propia de cada sustancia y entre más liposoluble más fácilmente penetrará.       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/slyder1.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Distribución
            p El tóxico se traslada principalmente por la sangre y posteriormente a los diferentes tejidos donde ejercerá su acción o bien se acumulará. En las sustancias transportadas por los alimentos, el tracto digestivo es el lugar principal de absorción y el de las sustancias muy liposolubles es habitualmente la boca. En el intestino delgado es donde se adsorben la mayor parte de los nutrientes y de otras sustancias, donde la carga iónica de las sustancias juega un papel importante en su velocidad de absorción. Debido a que el pH del intestino delgado está próximo a la neutralidad, los ácidos y las bases fuertes presentan carga, por lo tanto se absorben menos que las sustancias neutras. La absorción del intestino delgado comparada con la del grueso, es relativamente pobre; sin embargo, el intestino delgado sirve de sitio de absorción de algunas sustancias, especialmente las producidas por la fermentación bacteriana en este órgano o las que son muy liposolubles.    
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/slyder2.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Biotransformación
            p.mb-2 Son las biotransformaciones que tiene un tóxico en el organismo, por lo cual su finalidad es la formación de un compuesto hidrosoluble, poco tóxico y fácilmente eliminable por algún órgano de excreción. Esto a veces no se consigue y lo que ocurre es un proceso de bioactivación o biotoxificación, en donde se dan reacciones metabólicas de oxidación, principalmente de reducción e hidrólisis, por lo que aumenta la toxicidad de los tóxicos.
            p.mb-2 El movimiento interorgánico de sustancias en propiedades de diversas membranas y por las uniones con los líquidos. Además, el grado de perfusión sanguínea tiene un importante papel en el desempeño de las sustancias.
            p.mb-2 El flujo sanguíneo total es mucho mayor en el hígado, riñón, músculo, cerebro y piel que en la grasa y en el hueso. Por tanto, los órganos con mayor flujo sanguíneo, es de esperar que contengan la mayor cantidad de sustancias en movimiento.
            p Las sustancias orgánicas más polares tienden a unirse a las proteínas sanguíneas y a los tejidos blandos, mientras que las orgánicas cuyas propiedades químicas son parecidas a las del calcio, suelen almacenarse en tejido óseo. Los tejidos sirven como acumuladores en la absorción de los materiales más liposolubles. El colágeno, la principal proteína del organismo, liga muchos iones, como calcio, bario, magnesio, estroncio, berilio, plomo, arsénico y mercurio. El hueso es el almacén de ciertos elementos inorgánicos, tales como el plomo y el estroncio. El hígado tiene gran afinidad para ligar ácidos orgánicos, colorantes y ciertos esteroides.    
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/slyder3.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Eliminación
            p.mb-2 Se realiza a través de la excreción de las sustancias tóxicas o de los residuos de la biotransformación mediante la orina, bilis, heces, los líquidos orgánicos, está gobernada por las respiración (aire expirado) y otras como sudor, saliva, leche materna, entre otras.
            p La excreción urinaria es la más importante de las distintas rutas por las que pueden eliminarse del organismo las sustancias tóxicas consumidas en la dieta. Esto se aplica tanto al número, como a las cantidades de sustancias excretadas. La excreción fecal es importante para los compuestos que no se han absorbido en el tracto gastroentérico o que son secretados por la bilis. En las mujeres lactantes la excreción de sustancias con la leche desempeña cierto papel en la eliminación de productos tóxicos; algunos fármacos, ciertos plaguicidas y los agentes tóxicos de los alimentos enmohecidos se excretan en parte por la leche, sin embargo, hay que considerar en estos casos el impacto de las sustancias excretadas sobre el infante alimentado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/slyder4.png', alt='')
    
    .subt(data-aos='fade-right')
      .row.align-items-center.mb-4
        .col-auto
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
        .col-auto.ps-0
          h3.mb-0.pe-4.pe-lg-5 Fase toxicodinámica
    
    .row.mb-5(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/img11.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p Esta fase hace referencia a la interacción de tóxicos electrofílicos a nivel molecular con los receptores específicos o biomoléculas nucleófilas (proteínas, ácidos nucleicos, entre otros), mediante enlace covalente, que se da por variaciones bioquímicas, fisiológicas y/o estructurales que finalmente se manifiestan como un conjunto de síntomas que conforman el cuadro clínico de la intoxicación. Por tal razón en los diferentes mecanismos de los tóxicos se incluyen alteraciones de diversos tipos como son nivel de metabolismos esenciales, de actividades enzimáticas, a nivel del material genético y generación de intermediarios.
    
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4. Tóxicos endógenos y exógenos de los alimentos
    
    p.mb-4 Se pueden distinguir un grupo de sustancias extrañas al organismo vivo y que tras su interacción pueden originar un efecto nocivo, las cuales son los tóxicos endógenos o propios del alimento y los tóxicos exógenos o ajenos al alimento como se muestran en la Tabla 1.
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Tóxicos endógenos")
        .row.bg4
          .col-md-6.mb-4.mb-md-0
              img(src='@/assets/curso/temas/t1/tab1.svg', alt='')
          .col-md-6
            p Son sustancias que se encuentran presentes de modo natural en los alimentos o se generan en la evolución natural de los mismos. En este grupo se encuentran los antinutrientes y las sustancias tóxicas de origen vegetal y animal.
      .py-3.py-md-4(titulo="Tóxicos exógenos")
        .row.bg4
          .col-md-6.mb-4.mb-md-0
              img(src='@/assets/curso/temas/t1/tab2.svg', alt='')
          .col-md-6
            p Son sustancias extrañas a los alimentos que pueden ser de diversas clases: adicionadas al alimento, generadas por el procesamiento tecnológico-industrial de estos o procedentes de la contaminación ambiental. A este grupo pertenecen los aditivos, las sustancias tóxicas de origen bacteriano y fúngico, las que surgen de la contaminación ambiental, los residuos de medicamentos en alimentos y los tóxicos generados durante la preparación, proceso y almacenamiento de los alimentos.

    .row.mb-5(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/img12.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p En tiempos pasados, los ancestros se alimentaban con una serie de productos que desencadenaban muchos casos de intoxicación y muertes por desconocimiento que estos alimentos causaban cierta enfermedad. Gracias a la experiencia, el hombre aprendió a distinguir cuáles sustancias podría utilizar como alimento, sin producirle enfermedades ni causarle la muerte, y cuáles no; también sobre cuáles debería procesar previamente antes de consumirlas. Así se desarrollaron hábitos alimenticios que permitieron la supervivencia y el desarrollo de la especie.

    .row.mb-4
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1. 
        span Clasificación de los tóxicos en los alimentos
    
    .tabla-b.color-acento-contenido.mb-5      
      table
        tr
          th(rowspan="3") Endógenos
          td Sustancias antinutricionales.
          td 
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Inhibidores enzimáticos. Antivitaminas.
              li 
                i.lista-ul__vineta
                | Sustancias que impiden la asimilación y metabolismo de minerales.
              li 
                i.lista-ul__vineta
                | Sustancias de actividad polivalente (taninos, fibras).
        tr
          td Tóxicos de origen vegetal.
          td(rowspan="2") 
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Glucósidos tóxicos, lectinas, saponinas, aminoácidos tóxicos, hemaglutininas, favismo, alcaloides.
              li 
                i.lista-ul__vineta
                |  Saxitoxina, tetramina, tetrodotoxina, ciguatoxina, escombrotoxina.  
        tr
          td Tóxicos de origen animal.  
        tr
          th(rowspan="4") Endógenos 
          td Aditivos.
          td 
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Edulcorantes sintéticos, colorantes, conservantes, antioxidantes, aromatizantes.
        tr
          td Sustancias tóxicas de origen bacteriano y fúngico.
          td 
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Bacterias, hongos, virus, micotoxinas (aflatoxinas, ocratoxinas, entre otras).
        tr
          td Tóxicos generados durante la preparación, procesado y almacenamiento de los alimentos.
          td 
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Tóxicos pirogénicos: hidrocarburos aromáticos policíclicos y aminas heterocíclicas.
              li 
                i.lista-ul__vineta
                | Tóxicos derivados de la oxidación de grasas y aceites.
              li 
                i.lista-ul__vineta
                | Tóxicos derivados de la reacción de Maillard.
              li 
                i.lista-ul__vineta
                | Toxicidad derivada de la conservación de alimentos.
              li 
                i.lista-ul__vineta
                | Toxicidad de los materiales en contacto con los alimentos.
        tr
          td Sustancias tóxicas procedentes de la contaminación ambiental.
          td
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Metales pesados (plomo, mercurio, cadmio, arsénico, selenio, cobre).
              li 
                i.lista-ul__vineta
                | Hidrocarburos policlorados (bifenilos policlorados), dioxinas y furanos.
              li 
                i.lista-ul__vineta
                | Radionúclidos (Rutenio, yodo, cesio).
              li 
                i.lista-ul__vineta
                | Residuos de producción agrícola y ganadera: plaguicidas (organofosforados, organoclorados, carbamatos, piretrinas y piretroides).
              li 
                i.lista-ul__vineta
                | Residuos de productos farmacológicos (antibióticos, betaagonistas, coccidiostatos, anabolizantes y antiparasitarios).
             
    .row.mb-5
      .col-lg-1
        img(src='@/assets/curso/temas/t1/icono3.svg', alt='')
      .col-lg-11
        p Las mayores intoxicaciones de interés en salud pública en los últimos años están relacionadas con la contaminación alimentaria por agentes tóxicos procedentes de la contaminación ambiental, donde se incluyen los plaguicidas, metales, hidrocarburos clorados, residuos de medicamentos, entre otros. Los primeros tres vehiculizados por la atmósfera, el suelo o las aguas, que contaminan los cultivos y directamente a los organismos vivos. Por otra parte, el último, es vehiculizado en la carne de los animales que son consumidos posteriormente.
    
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5. Sustancias antinutricionales
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las sustancias antinutritivas son constituyentes que se encuentran de forma natural en algunos alimentos y afectan la biodisponibilidad de nutrientes o el aprovechamiento digestivo de los mismos, impidiendo el uso de proteínas, vitaminas y minerales, provocando una pérdida de nutrientes esenciales. La presencia de estas sustancias en los alimentos no crea un problema de toxicidad agudo serio, además no es riesgo grave para la salud de los consumidores, pero sí es esencial que estos compuestos sean clasificados y cuantificados para que se evalúe el riesgo real que genera para la salud humana y así puedan tomarse las medidas preventivas y correctivas adecuadas. Aunque son compuestos que se pueden encontrar en alimentos de origen vegetal y de origen animal, es en los primeros donde se han identificado en mayor proporción.
    
    .subt(data-aos='fade-right')
      .row.align-items-center.mb-4
        .col-auto
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
        .col-auto.ps-0
          h3.mb-0.pe-4.pe-lg-5 Inhibidores enzimáticos
    
    .row.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t1/img14.png', alt='')
      .col-lg-7
        .row.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/t1/icono4.svg', alt='')
          .col-lg-10
            p Son sustancias que obstruyen con la actividad enzimática del sistema digestivo, inhibiendo concretamente las enzimas necesarias para la asimilación de nutrientes. Esto se traduce en un déficit de la digestión de proteínas y de carbohidratos.
        .row.bg2
          p Por su estructura pueden ser:
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Sustancias de naturaleza protéica muy específicas como inhibidores de proteasas y amilasas.
            li 
              i.lista-ul__vineta
              | Compuestos de procedencia polifenólica presentes taninos que desnaturalizan enzimas digestivas.
    
    p.mb-4 Las proteasas son enzimas que hidrolizan los enlaces peptídicos de las proteínas y péptidos permitiendo así su asimilación. Los inhibidores de proteasa, se encuentran tanto en productos vegetales como en los de origen animal. Se localizan en numerosas variedades de leguminosas, en cacahuetes, patata, batata, y también en los huevos (ovomucoide y ocoinhibidor), en el calostro y la leche.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p Uno de los inhibidores de más importancia es la tripsina que se encuentra en la soja. Los procesos térmicos normales de trasformación, desnaturalizan las proteínas de los vegetales y por lo tanto su efecto inhibidor. Por esta razón no suele producir ningún efecto, pero suele quedar un valor residual inhibidor del 5 al 20% cuya significación toxicológica se desconoce en la actualidad, como se presenta en la tabla 2.
        .row.mb-4
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2. 
            span Inhibidores de proteasas presentes en alimentos
        
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            td Alimento
            td Enzima inhibida
          table
            tr
              th Soja
              td Tripsina, quimotripsina.
            tr
              th Judía
              td Tripsina, quimotripsina, elastasa, subtilisina.
            tr
              th Guisante
              td Tripsina.
            tr
              th Cacahuete
              td Tripsina, quimotripsina, plasmina, calicreína.
            tr
              th Avena
              td Tripsina.
            tr
              th Arroz
              td Tripsina.
            tr
              th Maíz
              td Tripsina.
            tr
              th Trigo
              td Tripsina.
            tr
              th Patata
              td Papaína, tripsina, quimotripsina, carboxipeptidasa, elastasa, calicreína.
    
    .subt(data-aos='fade-right')
      .row.align-items-center.mb-4
        .col-auto
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
        .col-auto.ps-0
          h3.mb-0.pe-4.pe-lg-5 Inhibidores de carbohidrasas
    
    .row.bg2.mb-4
      .col-lg-2
        img(src='@/assets/curso/temas/t1/icono4.svg', alt='')
      .col-lg-10
        p Son sustancias que afectan a enzimas presentes en las secreciones digestivas. Se encuentran en leguminosas, en donde son inhibidores de la amilasa (enzima que cataliza la hidrólisis de polisacáridos como el almidón y el glucógeno). En la papa y en el maíz se han identificado inhibidores de la invertasa, que metaboliza la sacarosa. Las leguminosas y el trigo poseen antiamilasas con importante actividad sobre las enzimas digestivas. En los productos agrícolas como el plátano verde y el mango, que se consumen crudos, las antiamilasas presentes son más difíciles de destruir.
    
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          h4 Antivitaminas
          p.mb-3 Son compuestos mayormente de naturaleza proteica que actúan sobre algunas vitaminas disminuyendo o destruyendo su función biológica, induciendo el aumento de las exigencias de las vitaminas. Entre las más importantes se encuentran la avidina, la tiaminasa, la niacitina y el ácido ascórbico oxidasa.
          img(src='@/assets/curso/temas/t1/slyder5.png', alt='')
        .row
          h4 Avidina
          p.mb-3 Se encuentra en la clara de huevo y es capaz de bloquear la absorción de la biotina (vitamina H o vitamina B8), por formación de un precipitado insoluble, afectando a su biodisponibilidad. La avidina es una glicoproteína que se combina con dos moléculas de biotina inhibiendo su absorción. Se inactiva por ebullición en agua en pocos minutos. El consumo excesivo de huevo de gallina crudo produce síntomas de falta de biotina con dermatitis exfoliativa y conjuntivitis.
          img(src='@/assets/curso/temas/t1/slyder6.png', alt='')
        .row
          h4 Tiaminasa
          p.mb-2 Está presente en animales como peces, moluscos, crustáceos y en vegetales como coles de bruselas, espinacas, remolacha, semillas de mostaza, fresas, café, té, entre otros. El efecto de la tiaminasa ha sido atribuido a la presencia de una serie de sustancias con estructura química variada, pero derivada de los hidroxifenoles. 
          p.mb-3 Entre estos compuestos hay que señalar el ácido clorogénico presente en los granos verdes de café o el metilsinapato en las semillas de mostaza. El mecanismo de inactivación de la tiamina (vitamina B1) por parte de estos compuestos requiere oxígeno y es dependiente de la temperatura y del pH, siendo una reacción de oxido-reducción. La tiaminasa es termolábil, por ello se inactiva por cocción. Esta sustancia es la causante de muchos casos de parálisis y perturbaciones neurológicas.
          img(src='@/assets/curso/temas/t1/slyder7.png', alt='')
        .row
          h4 Niacitina
          p.mb-2 Se trata de una sustancia que se encuentra en el maíz. Es un precursor del ácido nicotínico o niacina (vitamina B3). En este compuesto el ácido se encuentra fuertemente acomplejado unido a un polipétido. Este complejo es resistente a las enzimas digestivas con lo que se impide la asimilación de la niacina.
          p.mb-3 Sólo se libera tras la acción alcalina, de ahí que en países con dietas basadas casi exclusivamente en maíz como el caso de México, el cual utiliza una gran cantidad de maíz para hacer las “tortillas” típicas, tengan que tratar este producto con cal durante un tiempo para que se libere la niacina. La deficiencia de niacina produce pelagra que está asociada a alteraciones del sistema nervioso, trastornos digestivos, fatiga y problemas de piel. Esta antivitamina es inactivada por el calor.
          img(src='@/assets/curso/temas/t1/slyder8.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Ácido ascórbico oxidasa
            p Esta enzima oxida el ácido ascórbico (vitamina c) por la presencia de oxígeno que es el que cataliza la oxidación. Se encuentra presente en muchos alimentos de origen vegetal, siendo activa en pH entre 4-6 y temperatura entre 15-30 °C. Su actividad se inhibe cuando el alimento es sometido a temperaturas más altas, por ejemplo cuando se escaldan los vegetales. Se encuentra en el pepino, calabaza, melón, col, tomate, lechuga, coliflor, espinaca, zanahoria, patata, guisantes, entre otras. También se puede evitar la acción de la antivitamina por el consumo rápido (tiempo transcurrido desde su preparación o después de abrir el envase) de los zumos de fruta. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/slyder9.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Sustancias que impiden la asimilación y metabolismo de minerales
            p Estos componentes no causan ninguna toxicidad en circunstancias de consumo normal, pero sí pueden interferir en la absorción de minerales y metabólicamente esto puede ser de gravedad si se presentan problemas de malnutrición. Entre las sustancias más importantes dentro de este género se encuentran el ácido oxálico y el ácido fático.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/slyder10.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Acido oxálico
            p.mb-2 Los oxalatos pueden fijar minerales como el hierro, magnesio, calcio y zinc, pero cuando forman sales con sodio y potasio e insolubles con metales divalentes como el calcio interfieren en su asimilación. Se encuentran en algunos alimentos de origen vegetal como en las espinacas, la remolacha, el cacao, las patatas, el té, el café, el ruibarbo y las acelgas.
            p.mb-2 Sin duda el principal problema nutricional del oxalato deriva de su efecto negativo sobre la asimilación del calcio, principalmente en la fase en la cual el aporte de calcio es primordial como en el crecimiento y gestación, por lo cual se recomienda el consumo de alimentos ricos en calcio, como los productos lácteos, así como un aumento en la ingesta de vitamina D que ayuda a su asimilación.
            p.mb-2 La intoxicación por ácido oxálico causa dolor abdominal y gastroenteritis y en algunos casos graves puede causar diarrea, vómitos, convulsiones, alteraciones en la coagulación y en estados finales se puede llegar al coma. En el aparato digestivo de los seres humanos hay bacterias que pueden digerir el ácido oxálico, lo que facilita cierta adaptación a productos ricos en este compuesto.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/slyder11.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Ácido fítico
            p.mb-2 Este ácido impide la absorción de calcio, magnesio, hierro, cobre y zinc, además de afectar la utilización proteica por la formación de complejos insolubles. Se encuentra especialmente en cereales, leguminosas y semillas oleaginosas, trigo, maíz, arroz, avena, lenteja, soja, cacahuete y nuez. En los cereales se halla en la parte exterior, que es donde está su gran contenido en fitatos, por ejemplo en productos como el salvado, harinas, pan y pastas. Se han registrado casos de retrasos en el crecimiento y maduración sexual en niños cuya dieta se basa fundamentalmente en la ingesta de pan integral total. No obstante, la reducción en la biodisponibilidad mineral se puede contrarrestar en cierta medida incrementando la ingesta de minerales esenciales y gracias al aporte suficiente de mineral existente en la mayor parte de semillas.
            p En muchos alimentos, los niveles de fitatos pueden ser reducidos por la enzima fosfatasa, que se encuentra presente en los alimentos ricos en ácido fítico con mayor o menor actividad. Gracias a la actividad de esta enzima el ácido se hidroliza liberándose inositol y fosfato orgánico. Esta enzima presenta una actividad máxima a pH 5,5 y 60°C, con lo cual el tratamiento del alimento con ácido y/o calor favorece su hidrólisis, y gracias a ello el contenido de este ácido se reduce drásticamente durante el proceso de cocción. Las fitasas son inhibidas por cocción a más de 60 °C,por fermentación del pan con levadura química (bicarbonato) que provoca aumento de pH y por la germinación.
          .col-md-5
            .row.bg3.mb-3
              p Por otra parte, el ácido fítico tiene algunos efectos beneficiosos para el organismo, tales como:
            .row.bg9.mb-3
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | #[b Efecto antioxidante:] inhibe la oxidación de lípidos y la acumulación de peróxidos en los alimentos.
            .row.bg9.mb-3
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | #[b Disminuye la glucemia:] se une a las amilasas intestinales disminuyendo la liberación de azúcares simples.

    .subt(data-aos='fade-right')
      .row.align-items-center.mb-4
        .col-auto
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
        .col-auto.ps-0
          h3.mb-0.pe-4.pe-lg-5 Sustancias bociógenas

    p.mb-4 Estas sustancias impiden la absorción de yodo por parte de la glándula tiroides. Según su modo de acción las sustancias bociógenas se pueden clasificar en:

    .row.mb-4
      .col-lg-4
        img(src='@/assets/curso/temas/t1/img15.svg', alt='')
      .col-lg-5.ps-lg-0
        .br-l.bg1.h-100.d-flex.align-items-center
          .row.mb-3
            h4.bgtitulo1.mb-3.py-1.ps-3.pe-5 Sustancias que inhiben la síntesis de tiroxina
            p Un ejemplo de este mecanismo de acción, son las tioxazolidinas como la Goitrina resultante de la hidrólisis del tioglucósido progoitrina presente en vegetales del género Brassica como coliflor, col, nabo. Para mejorar la acción biciógena se requiere la administración de la hormona tiroxina.
            h4.bgtitulo1.mb-3.py-1.ps-3.pe-5 Sustancias que inhiben la síntesis de tiroxina
            p Esto se realiza por mecanismos no demasiado conocidos como por parte de compuestos como los tiocianatos, isotiocianatos y compuestos fenólicos. Los síntomas mejoran con la administración de yodo. 
      .col-lg-3
        img(src='@/assets/curso/temas/t1/img16.png', alt='')
    
    h3.bgtitulo2 Sustancias de actividad polivalente

    p.mb-4 A estas sustancias se les asignan propiedades antinutritivas sobre nutrientes de distinta naturaleza: proteínas, minerales y vitaminas. Existen dos grandes grupos: las fibras y los taninos.
    
    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.bg3.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-2
            img.mb-2(src='@/assets/curso/temas/t1/tarjeta1.svg', alt='')
          .col-9
            h3.bgtitulo1.mb-3.py-1.ps-3.pe-5 Fibras
        p.mb-2 La acción antinutritiva de las fibras se manifiesta a dos categorías. Por una parte, contribuyen a una endógena de proteínas, grasas e hidratos de carbono porque aumentan el volumen de la fracción no digerible (por acción trófica del epitelio digestivo) y además aumentan indirectamente las necesidades nitrogenadas del organismo. En segundo lugar, reduce la disponibilidad digestiva de minerales ya que disminuyen la absorción de Hierro, calcio, zinc y cobre.
        p Las fibras se dividen en solubles (gomas, mucílagos y pectinas) e insolubles (lignina, celulosa, hemicelulosa). A pesar de algunos efectos indeseables, la función nutricional de la fibra es notable, ya que limita la transformación de algunos ácidos biliares en derivados cancerígenos por parte de las bacterias digestivas.
      .col-md.tarjeta.bg4.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-2
            img.mb-2(src='@/assets/curso/temas/t1/tarjeta2.svg', alt='')
          .col-9
            h3.bgtitulo1.mb-3.py-1.ps-3.pe-5 Taninos
        p.mb-2 Son sustancias fenólicas que se pueden diluir en agua y tienen la capacidad de precipitar alcaloides y proteínas, que dan las reacciones características de los fenoles. Están presentes en leguminosas como habas, alubias, guisantes y en muchas frutas como el banano, fundamentalmente cuando aun no están maduras; también se han identificado en el café, té, cacao y sorgo. Los efectos antinutritivos de estos compuestos se manifiestan en varios niveles:
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Por su carácter polivalente se relacionan con la capacidad de formar complejos con las proteínas, disminuyendo su digestión y aumentando el nivel de nitrógeno fecal.
          li 
            i.lista-ul__vineta
            | Tiene capacidad de unirse a iones di y trivalentes como hierro, cobre y calcio, disminuyendo su disponibilidad.
          li 
            i.lista-ul__vineta
            | Se pueden designar como antivitaminas porque reducen las reservas de vitamina B12 al agruparse con ella.
          li 
            i.lista-ul__vineta
            | Pueden disminuir las reservas hepáticas de vitamina A. 
            
              
        



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
