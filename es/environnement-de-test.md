---
title: Entorno de pruebas
---

Algunos criterios RAWeb, en particular los del tema JavaScript, incluyen pruebas de renderizado que deben realizarse con tecnologías de apoyo asociadas a navegadores y sistemas operativos.

Las pruebas realizadas utilizando estas combinaciones (tecnología de apoyo, sistema operativo, navegador) permiten declarar que un componente HTML / WAI-ARIA es “compatible con la accesibilidad”, tal como lo define WCAG.

Las combinaciones se han establecido sobre la base de la lista de tecnologías de apoyo cuyo uso está suficientemente extendido, o en algunos casos cuando están incluidas de forma nativa y constituyen el medio preferido de acceso a la información y a las funcionalidades.

### Entorno de pruebas informático (escritorio)

Los sistemas operativos seleccionados son Windows y macOS, y los navegadores Firefox, Chrome, Edge y Safari. Es responsabilidad del auditor definir, en consulta con los responsables del sitio auditado, las versiones del sistema operativo y del navegador que sean adecuadas para el contexto de uso del sitio y para el entorno de pruebas utilizado durante el desarrollo del sitio. Las versiones de las tecnologías de apoyo que se utilizarán serán la última disponible en el sistema operativo seleccionado o la versión anterior.

Cuando el sitio o la aplicación esté destinado a un público cuyo equipamiento esté controlado, las pruebas deberán realizarse en un entorno de pruebas adaptado al contexto del entorno controlado.

Para que un componente HTML / WAI-ARIA o su alternativa se considere compatible con la accesibilidad, debe ser completamente funcional, en términos de representación y funcionalidades de accesibilidad, en todas las configuraciones siguientes.

<table>
  <caption>Entorno de pruebas informático (escritorio)</caption>
  <thead>
    <tr>
      <th scope="col">Tecnología de apoyo</th>
      <th scope="col">Navegador</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA (última versión)</td>
      <td>Firefox o Chrome o Edge</td>
    </tr>
    <tr>
      <td>JAWS (versión anterior)</td>
      <td>Firefox o Chrome o Edge</td>
    </tr>
    <tr>
      <td>VoiceOver (última versión)</td>
      <td>Safari</td>
    </tr>
  </tbody>
</table>

### Entorno de pruebas móvil

Los sistemas operativos seleccionados son Android e iOS, y los navegadores Chrome y Safari. Corresponde al auditor definir, en consulta con los responsables del sitio auditado, las versiones del sistema operativo y del navegador que sean adecuadas para el contexto de uso del sitio y para el entorno de pruebas utilizado durante el desarrollo del sitio.

Las versiones de las tecnologías de apoyo que se utilizarán serán la última disponible en el sistema operativo seleccionado o la versión anterior.

Para probar un sitio web en un dispositivo móvil, el entorno de pruebas debe incluir una de las dos combinaciones complementarias siguientes:

<table>
  <caption>Entorno de pruebas en dispositivo móvil – Combinación 1</caption>
  <thead>
    <tr>
      <th scope="col">Sistema operativo</th>
      <th scope="col">Tecnología de apoyo</th>
      <th scope="col">Navegador</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Android nativo</td>
      <td>TalkBack (última versión)</td>
      <td>Chrome</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>Entorno de pruebas en dispositivo móvil – Combinación 2</caption>
  <thead>
    <tr>
      <th scope="col">Sistema operativo</th>
      <th scope="col">Tecnología de apoyo</th>
      <th scope="col">Navegador</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iOS</td>
      <td>VoiceOver (última versión)</td>
      <td>Safari</td>
    </tr>
  </tbody>
</table>

Obsérvese que, en el caso de un sitio web móvil destinado al público general, se recomienda encarecidamente realizar las pruebas en ambos entornos.

### Otros entornos

Finalmente, según el contexto del sitio auditado, otras tecnologías de apoyo complementarias pueden resultar útiles, tales como:

- ZoomText en Windows o macOS;
- Dragon Naturally Speaking en Windows o macOS.

### Entorno controlado

Cuando el sitio web esté destinado a ser distribuido y utilizado en un entorno controlado, el entorno de pruebas (línea base) debe consistir en las configuraciones (tecnología de apoyo, sistema operativo, navegador) que se utilicen realmente en dicho entorno controlado.

Por ejemplo, si el sitio web se distribuye exclusivamente en un entorno GNU/Linux, las pruebas deberán realizarse únicamente en los navegadores y tecnologías de apoyo utilizados por los agentes en esta plataforma. Este entorno de pruebas sustituye al entorno de pruebas utilizado en un entorno no controlado.
