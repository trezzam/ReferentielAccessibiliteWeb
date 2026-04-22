---
title: Metodología de pruebas
layout: layouts/base.njk
description: Metodología de pruebas que documenta los pasos utilizados para comprobar si un criterio RAWeb cumple o no con la normativa
eleventyNavigation:
  title: Recursos
  parent: recursos
  order: 3
---

Este documento ha sido redactado como parte de los recursos para acompañar la introducción de la versión 1 del Marco de Referencia de Accesibilidad Web (RAWeb).

Está dirigido a cualquier persona que desee comprobar que el contenido web cumple con el RAWeb. Es una metodología de pruebas que documenta los pasos necesarios para comprobar si se cumple o no un criterio RAWeb. Por lo tanto, esta metodología debe utilizarse junto con el marco técnico RAWeb y no puede utilizarse de forma aislada. No sustituye a una lectura exhaustiva del marco técnico, ni sustituye a una formación en RAWeb.

Para cada una de las pruebas de un criterio, existe un procedimiento de prueba correspondiente. La implementación de este procedimiento a veces puede requerir el uso de herramientas específicas, aunque un navegador es suficiente para realizar la mayoría de las pruebas.
También se proporciona una lista de herramientas para ayudar en la realización de las pruebas. Se han seleccionado tanto porque son utilizadas frecuentemente por expertos en el sector como porque facilitan la obtención de ciertos resultados.

<div class="fr-callout"><p class="fr-text--lg">
La metodología de pruebas ya está disponible para cada prueba en la página de <a href="criteres.html">criterios y pruebas</a>.</p>
</div>

### Evaluación del cumplimiento con el estándar de referencia

#### Marco general

Para evaluar el cumplimiento del sitio web con el estándar de referencia, la organización debe realizar una auditoría de accesibilidad. La auditoría (o evaluación) puede ser llevada a cabo por la propia organización (autoevaluación) o por un tercero. La evaluación se realiza sobre una muestra de páginas representativas del sitio.

La verificación del cumplimiento de las páginas de la muestra con los criterios aplicables se realiza utilizando el [Marco de Referencia de Accesibilidad Web (RAWeb)](./index.html).

La fase final de la auditoría es la declaración de accesibilidad, que informa sobre el cumplimiento de las normas aplicables.

La auditoría (o evaluación) cumple los siguientes criterios:

- es fiable: es responsabilidad de la organización interesada garantizar la fiabilidad de su declaración por todos los medios posibles (recurso a un proveedor de servicios externo, formación de expertos internos, auditorías cruzadas, etc.);
- es representativa: se basa en una muestra representativa (ver sección "Muestra" a continuación).

Es posible utilizar otro método de prueba, sujeto a tres condiciones:

- asegurarse de que el método de prueba utilizado pueda comunicarse bajo petición a un usuario o a una administración;
- producir una tabla de correspondencia explícita entre los criterios y pruebas y el estándar de referencia elegido;
- indicar esta información en la declaración de accesibilidad.

#### Muestra

La muestra sobre la que se realiza la auditoría de un sitio web cubre al menos las siguientes páginas, siempre que existan:

1. la página de inicio;
2. el aviso legal;
3. la página de autenticación;
4. la página de contacto;
5. la página de "accesibilidad";
6. la página de "ayuda";
7. la página web o el conjunto de páginas web que componen la [documentación](./glossaire.html#documentation) del sitio web (si es diferente de la página de "accesibilidad" y de la página de "ayuda");
8. la página web o el conjunto de páginas web que componen la [documentación](./glossaire.html#documentation) para el [servicio de soporte](./glossaire.html#support-service);
9. la página del "mapa del sitio";
10. al menos una página relevante para cada tipo de servicio proporcionado y cualquier otro uso principal previsto (ej. encabezados de primer nivel en la estructura jerárquica), incluida la funcionalidad de búsqueda (ver más abajo si está sujeto a la ley del 8 de marzo de 2023);
11. una página que contenga al menos un documento descargable relevante, cuando corresponda, para cada tipo de servicio proporcionado y para cualquier otro uso principal previsto;
12. el conjunto de páginas web que componen un proceso, por ejemplo, un formulario de entrada o una transacción de varias páginas (ver más abajo si está sujeto a la ley del 8 de marzo de 2023);
13. ejemplos de páginas con un aspecto significativamente distinto o un tipo de contenido diferente (ej. una página que contenga tablas de datos, elementos multimedia, ilustraciones, formularios, funcionalidad de comunicación en tiempo real, etc.).

La selección de las páginas auditadas y su número deben ser representativos del sitio. Se puede tener en cuenta la analítica web al seleccionar la muestra.

Finalmente, también se tienen en cuenta páginas seleccionadas al azar que representen al menos el 10% de los elementos de la muestra descrita anteriormente.

##### Entidades cubiertas por la [ley del 8 de marzo de 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo)

Para las entidades que prestan los servicios especificados en la [ley del 8 de marzo de 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo), deben incluirse páginas y procesos obligatorios específicos en la muestra de evaluación, dependiendo de los servicios prestados.

Por ejemplo, para los servicios de banca en línea, deben incluirse en la muestra con prioridad las siguientes páginas y características, si existen:

* Una página con firma electrónica;
* Información de cuenta:
  * Lista de cuentas;
  * Detalles de la cuenta;
  * Información de la cuenta;
  * Últimas transacciones;
  * Detalles de la transacción.
* Gestión de cuentas:
  * Apertura;
  * Cierre;
  * Gestión de descubiertos.
* Transferencias y órdenes permanentes:
  * Transferencia;
  * Orden permanente (creación, modificación, eliminación);
  * Beneficiario (creación, modificación, eliminación).
* Pedidos de tarjetas;
* Inversiones:
  * Gestión de carteras;
  * Asesoramiento de inversión;
  * Ejecución de órdenes.
* Sistema de validación de pagos (3D Secure).
* Funcionalidad de comunicación electrónica (mensajería segura);
* Funcionalidad de comercio electrónico (embudo de compra hasta el pago).

Dicha lista debe elaborarse para cada servicio ofrecido en línea, ya sea una función de comunicación electrónica (mensajería segura) o una función de comercio electrónico (embudo de compra hasta el pago).

Esta lista no es exhaustiva; pretende únicamente ilustrar la obligación específica que incumbe a las entidades que prestan los servicios designados en la [ley del 8 de marzo de 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo).

#### Entorno de pruebas (o "línea base")

Algunos [criterios RAWeb](./criteres.html), particularmente aquellos en el tema de Scripts, incluyen pruebas de renderizado que deben llevarse a cabo en tecnologías de asistencia asociadas a navegadores y sistemas operativos.

##### Definición del entorno de pruebas

Para validar estos criterios, es necesario definir un entorno de pruebas (o "línea base"). Por defecto, está compuesto por las plataformas y tecnologías de asistencia más utilizadas por las personas con discapacidad.

Para llevar a cabo las pruebas de evaluación dentro del marco de RAWeb, es necesario tener en cuenta el [entorno de pruebas RAWeb](./environnement.md).

Este entorno de pruebas mínimo puede complementarse, cuando proceda, con soluciones libres y de código abierto disponibles o con tecnologías más antiguas, dependiendo del uso del sitio. Siempre que sea posible conocer la configuración de las estaciones de trabajo y el hardware utilizado, la línea base estará compuesta por los servicios utilizados realmente en este entorno.

#### Páginas de prueba

Cada página de la muestra debe ser comprobada frente a los criterios que le sean aplicables.

Existen 3 razones por las que un criterio puede no ser aplicable a una página:

  1. El criterio se refiere a un contenido o una funcionalidad que no existe. Por ejemplo: si la página no incluye un vídeo, los criterios relativos a los vídeos no serán aplicables.
  2. El criterio se refiere a un contenido o servicio exento que, por tanto, no está sujeto a la obligación de accesibilidad.
  3. El criterio concierne a un contenido sujeto a derogación por carga desproporcionada que va acompañado de una alternativa digital accesible. Por ejemplo, una tabla estadística con gráficos que ofrece una alternativa textual. En este caso, los criterios aplicables al contenido sujeto a derogación no se aplicarán.
     Tenga en cuenta: si el contenido sujeto a derogación por carga desproporcionada no ofrece una alternativa digital accesible, los criterios para este contenido se consideran aplicables.

Las páginas se prueban entonces contra los criterios aplicables. Estas pruebas proporcionan:

  * el número de criterios validados y no validados para cada página;
  * la tasa de cumplimiento para cada página.

Tenga en cuenta:

  * un criterio se valida para una página determinada cuando todos los elementos de la página han superado las pruebas utilizadas para validar el criterio;
  * si un solo elemento de la página no supera las pruebas para un criterio, el criterio no puede validarse;
  * si la página es parte de un proceso (realizar una declaración, participar en una consulta pública, pedir una cita), un criterio se valida para una página en el proceso solo si está validado para todas las páginas del proceso.

Algunos criterios o temas son aplicables a todo el sitio y no a una página en particular, por lo que no es necesario evaluarlos en todas las páginas de la muestra. En este caso, pueden, por ejemplo, evaluarse en una sola página de la muestra y considerarse como no aplicables a todas las demás páginas. Esta metodología para informar de los resultados de la evaluación de estos criterios es, por supuesto, opcional. Cualquiera que sea la metodología elegida, no habrá impacto en la tasa de cumplimiento global del sitio. Este es particularmente el caso de los siguientes criterios y temas:
  * Criterio 12.3: ¿Es relevante la página del mapa del sitio?
  * Tema 14: Documentación y características de accesibilidad
  * Tema 16: Servicios de soporte.

#### Tasa de cumplimiento con el estándar

La tasa de cumplimiento mide el progreso realizado por el servicio en línea en el cumplimiento de los requisitos de accesibilidad.

Esta tasa indica el porcentaje de criterios cumplidos por el servicio en línea.

El porcentaje de criterios cumplidos se obtiene dividiendo el número de criterios validados por el número de criterios aplicables.

  * Criterio validado: un criterio se valida si está validado en todas las páginas de la muestra. Si un criterio está invalidado en una sola página de la muestra, no puede considerarse válido para calcular la tasa.
  * Criterio aplicable: para que un criterio sea aplicable, solo necesita ser aplicable en una página de la muestra. El corolario de esto es que un criterio no es aplicable si no es aplicable en todas las páginas de la muestra sin excepción.

Esta tasa de cumplimiento determina el estado de cumplimiento que debe mencionarse en la [declaración de accesibilidad](../obligations.md#content-of-the-accessibility-statement).

#### Principio de no interferencia

En una muestra de auditoría, puede haber contenido que no esté sujeto a la obligación de accesibilidad:

- [contenido exento](../obligations.md#exempt-content);
- [contenido con derogación por carga desproporcionada](../obligations.md#derogation-for-disproportionate-burden);
- contenido no accesible que tiene una alternativa accesible.

Es esencial asegurarse de que este contenido no impida a los usuarios acceder al resto de la página.

Por lo tanto, aunque no se requiera el cumplimiento de este contenido, debe cumplir con los siguientes criterios y pruebas:

- [Criterio 4.10](./criteres.html#crit-4-10): ¿Cada sonido activado automáticamente es controlable por el usuario?
- [Criterio 12.9](./criteres.html#crit-12-9): En cada página web, la navegación no debe contener ninguna trampa de teclado. ¿Se respeta esta regla?
- [Prueba 13.1.1](./criteres.html#test-13-1-1): Para cada página web, ¿cada proceso de actualización (etiqueta `<object>`, etiqueta `<embed>`, etiqueta `<svg>`, etiqueta `<canvas>`, etiqueta `<meta>`) cumple una de estas condiciones (excluyendo casos especiales)?
- [Criterio 13.7](./criterio.html#crit-13-7): En cada página web, ¿se utilizan adecuadamente los cambios bruscos de brillo o el parpadeo?
- [Criterio 13.8](./criteres.html#crit-13-8): En cada página web, ¿puede el usuario controlar cada contenido en movimiento o parpadeante?

El incumplimiento de uno de estos criterios o pruebas para uno de los tipos de contenido enumerados hace que los criterios correspondientes sean no conformes.

El principio de no interferencia se identifica en el estándar EN 301 549 en el criterio 9.6 requisitos de conformidad WCAG.

### Herramientas

La herramienta más útil es el inspector de código disponible en todos los navegadores. Facilita la búsqueda de los elementos y atributos necesarios para una prueba de accesibilidad. Hoy en día, las herramientas de desarrollo también ofrecen funciones para acceder a las propiedades del árbol de accesibilidad expuestas por el navegador. Sin embargo, esta información no sustituye a la necesidad de asistencia técnica cuando un criterio o prueba lo requiere.

Las tecnologías de asistencia enumeradas en el entorno de pruebas elegido constituyen un segundo conjunto de herramientas esenciales (ver la sección [Entorno de pruebas](environnement.html#contenu)). Son necesarias para asegurar que el contenido accesible (alternativas a las imágenes, encabezados de enlaces, títulos de tablas, etc.) se represente correctamente, particularmente en casos donde examinar el código por sí solo no sería suficiente.

Hay otras herramientas disponibles para ayudar a buscar elementos de contenido. A menudo se presentan como extensiones de navegador y pueden utilizarse para explorar uno o más aspectos de una prueba de accesibilidad.

Las siguientes barras de herramientas son extensiones de navegador que facilitan la localización visual de ciertos elementos en un documento:

- [Web Developer Toolbar para Firefox](https://addons.mozilla.org/en-US/firefox/addon/web-developer/): una barra de herramientas para desarrolladores que puede ayudarle a localizar visualmente ciertos elementos en un documento para comprobar su accesibilidad;
- [Web Developer Toolbar para Chrome](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm): la misma barra de herramientas anterior, para Chrome.

Además de la barra de herramientas simple, otras herramientas proporcionan un análisis completo del documento destacando visualmente los errores de accesibilidad en la página o, a la inversa, los elementos beneficiosos. A menudo se utilizan filtros para mostrar solo algunos de estos aspectos. Esto es lo que ofrece Wave, una solución disponible tanto en línea (http://wave.webaim.org) como extensión de navegador (https://wave.webaim.org/extension/).

Aunque ya no es necesario comprobar la validez del código fuente, puede ser útil utilizar el validador HTML para buscar anomalías. La validación del código fuente de un documento HTML utiliza el validador en línea del W3C (https://validator.w3.org/nu/). Tenga en cuenta que para validar el código fuente generado por el navegador, utilice la opción "Text input" en la lista desplegable "Check by" y copie el código fuente HTML disponible desde el inspector de código del navegador en el cuadro de entrada multilínea.
También hay extensiones de navegador disponibles, pero debe tener cuidado, ya que los algoritmos de validación de estas extensiones no están necesariamente actualizados con el validador del W3C y, por tanto, los resultados obtenidos pueden ser diferentes.

Hay varias herramientas disponibles para comprobar los contrastes de color:

- [WCAG Contrast checker para Firefox](https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/): extensión de Firefox que comprueba automáticamente los contrastes de color de texto en un documento;
- [WCAG Contrast checker para Chrome](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf): misma extensión que la anterior para Chrome;
- [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/): aplicación de Windows o Mac para comprobar los contrastes de color.

Una extensión muy útil está disponible para comprobar la estructura del árbol del documento y la jerarquía de los encabezados:

- [HeadingsMap para Firefox](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/): extensión de Firefox que le permite previsualizar el mapa del documento y su estructura de árbol;
- [HeadingsMap para Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi): misma extensión que la anterior para Chrome.

Se pueden utilizar varias herramientas para analizar archivos de oficina, dependiendo del formato de archivo:

- [PAC (PDF Accessibility Checker) 2024 para Windows](https://pac.pdf-accessibility.org/en): software para comprobar ciertos problemas de accesibilidad en documentos PDF;
- Las versiones recientes de Microsoft Office ofrecen una función de validación de accesibilidad integrada (ver el artículo [Hacer que sus documentos de Word sean accesibles para personas con discapacidad](https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d) y artículos relacionados);
- [Ace by DAISY App](https://inclusivepublishing.org/toolbox/ace-by-daisy-app/) es una herramienta para comprobar la accesibilidad de un archivo EPUB.

Finalmente, un programa antiguo pero todavía útil para evaluar el potencial de ciertos contenidos web para causar ataques epilépticos: [PEAT (Photosensitive Epilepsy Analysis Tool) para Windows](https://trace.umd.edu/peat).