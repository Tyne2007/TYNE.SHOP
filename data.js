/**
 * Estructura de Datos para la Tienda "NO FEAR"
 * Cada producto ahora incluye:
 * - 'imagenes': Un array con la ruta de las imágenes para la galería/carrousel.
 * - 'tallas': Un array con las tallas disponibles.
 * * NOTA: Debes asegurarte de que las rutas de las imágenes existan 
 * en tu carpeta '/imagenes/' para que el carrusel funcione.
 */
const productos = [
  {
    id: 1,
    nombre: "T-Shirt Drake - Honestly, Nevermind",
    precio: 140.00,
    // Ejemplo de rutas de imágenes para la bomber
    imagenes: ["images/T-Shirt Drake 1 B.png", "images/T-Shirt Drake 1 W.png"],
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    nombre: "T-SHIRT PORSCHE",
    precio: 180.00,
    // Ejemplo de rutas de imágenes para la primera camiseta
    imagenes: ["images/Porsche white 1.png", "images/Untitled Project - Mockup.png"],
    tallas: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    nombre: "T-SHIRT [Just Me]",
    precio: 160.00,
    // Ejemplo de rutas de imágenes para la segunda camiseta
    imagenes: ["images/Tshirt.png", "images/Just Me - Mockup.png"],
    tallas: ["M", "L", "XL"]
  },
  {
    id: 4,
    nombre: "T-SHIRT [SADE]",
    precio: 100.00,
    // Ejemplo de rutas de imágenes para la tercera camiseta
    imagenes: ["images/T-Shirt Sade.png"],
    tallas: ["S", "M", "L"]
  }
];