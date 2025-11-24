/**
 * Lógica Principal para la Tienda "NO FEAR"
 * Funciones:
 * 1. Leer el array 'productos' de data.js.
 * 2. Generar el HTML para cada tarjeta de producto, incluyendo flechas y tallas.
 * 3. Implementar la navegación (cambio de imagen) al hacer clic en las flechas.
 */

// Obtener la referencia al contenedor del catálogo
const productGrid = document.getElementById('product-list');

// Función para formatear el precio (ej: $240.00)
function formatPrice(price) {
    return new Intl.NumberFormat('es-BO', {
        style: 'currency',
        currency: 'BOB',
        minimumFractionDigits: 2
    }).format(price);
}

// Función para generar las tallas como una cadena HTML (separadas por '|' y ocultas por defecto)
function generateSizeHTML(tallas) {
    return `
        <div class="product-sizes">
            SIZE: ${tallas.map(size => `<span class="size-option">${size}</span>`).join('')}
        </div>
    `;
}

// Función principal para generar el catálogo
function renderProducts() {
    if (!productGrid || !productos || productos.length === 0) {
        console.error("No se encontró el contenedor de la cuadrícula o no hay productos para mostrar.");
        return;
    }

    let htmlContent = '';

    productos.forEach(product => {
        const priceFormatted = formatPrice(product.precio);
        const sizesHTML = generateSizeHTML(product.tallas);
        
        // Usamos la PRIMERA imagen del array como imagen inicial
        const initialImage = product.imagenes[0];

        htmlContent += `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image-container">
                    
                    <img class="product-image" 
                        src="${initialImage}" 
                        alt="${product.nombre}"
                        data-images='${JSON.stringify(product.imagenes)}'
                        data-current-index="0"
                    >

                    <button class="nav-arrow left-arrow" data-direction="prev" title="Imagen anterior">
                        <span class="arrow-symbol">‹</span> 
                    </button>
                    
                    <button class="nav-arrow right-arrow" data-direction="next" title="Imagen siguiente">
                        <span class="arrow-symbol">›</span>
                    </button>
                </div>
                
                <div class="product-info">
                    <p class="name">${product.nombre}</p>
                    <p class="price">${priceFormatted}</p>
                    
                    ${sizesHTML} 
                </div>
            </article>
        `;
    });

    // 1. Inyectar todo el HTML de una vez (mejor rendimiento)
    productGrid.innerHTML = htmlContent;
    
    // 2. Añadir Event Listeners a las flechas después de renderizar
    setupArrowNavigation();
}


// Lógica para cambiar la imagen al hacer clic en las flechas
function setupArrowNavigation() {
    const arrows = document.querySelectorAll('.nav-arrow');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', (event) => {
            // Evita que el clic en la flecha active el enlace de la tarjeta principal
            event.stopPropagation();
            event.preventDefault(); 
            
            const direction = arrow.dataset.direction;
            
            // Buscar la etiqueta <img> dentro del mismo contenedor de imagen
            const imageContainer = arrow.closest('.product-image-container');
            const imgElement = imageContainer.querySelector('.product-image');
            
            // Obtener los datos almacenados en el atributo 'data-images'
            const images = JSON.parse(imgElement.dataset.images);
            let currentIndex = parseInt(imgElement.dataset.currentIndex);
            
            // No hacer nada si el producto no tiene más de una imagen
            if (images.length <= 1) return; 

            // Cálculo del nuevo índice (usando el operador módulo % para hacer un bucle)
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % images.length;
            } else if (direction === 'prev') {
                // (currentIndex - 1 + length) asegura que el resultado no sea negativo
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }

            // Aplicar la nueva imagen y guardar el nuevo índice
            imgElement.src = images[currentIndex];
            imgElement.dataset.currentIndex = currentIndex;
        });
    });
}

// Ejecutar la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderProducts);