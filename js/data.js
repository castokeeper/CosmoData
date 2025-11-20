// ======================
// PLANETARY DATA
// ======================
const planetsData = [
    {
        name: "Mercurio",
        image: "assets/images/planets/mercury.jpg",
        diameter: "4,879 km",
        orbit: "88 días terrestres",
        moons: "0",
        type: "Rocoso",
        description: "El planeta más cercano al Sol y el más pequeño del Sistema Solar. Su superficie está cubierta de cráteres, similar a nuestra Luna.",
        facts: [
            "Un día en Mercurio dura 59 días terrestres",
            "Temperaturas extremas: -180°C a 430°C",
            "No tiene atmósfera significativa"
        ]
    },
    {
        name: "Venus",
        image: "assets/images/planets/venus.jpg",
        diameter: "12,104 km",
        orbit: "225 días terrestres",
        moons: "0",
        type: "Rocoso",
        description: "El planeta más caliente del Sistema Solar debido a su densa atmósfera de CO₂. Conocido como el 'lucero del alba' o 'estrella vespertina'.",
        facts: [
            "Presión atmosférica 90 veces mayor que la Tierra",
            "Rota en sentido contrario a otros planetas",
            "Temperatura superficial de 465°C"
        ]
    },
    {
        name: "Tierra",
        image: "assets/images/planets/earth.jpg",
        diameter: "12,742 km",
        orbit: "365.25 días",
        moons: "1",
        type: "Rocoso",
        description: "Nuestro hogar, el único planeta conocido con vida. Posee agua líquida en superficie y una atmósfera that protects life.",
        facts: [
            "71% de su superficie está cubierta por agua",
            "Hogar de millones de especies",
            "Única luna: La Luna, que estabiliza nuestro clima"
        ]
    },
    {
        name: "Marte",
        image: "assets/images/planets/mars.jpg",
        diameter: "6,779 km",
        orbit: "687 días terrestres",
        moons: "2 (Fobos y Deimos)",
        type: "Rocoso",
        description: "El 'Planeta Rojo' debe su color al óxido de hierro. Es el más explorado después de la Tierra, con evidencia de agua antigua.",
        facts: [
            "Monte Olimpo: el volcán más grande del Sistema Solar (21 km de altura)",
            "Posee casquetes polares de hielo de agua y CO₂",
            "Un día marciano dura 24.6 horas"
        ]
    },
    {
        name: "Júpiter",
        image: "assets/images/planets/jupiter.jpg",
        diameter: "139,820 km",
        orbit: "11.86 años terrestres",
        moons: "95 conocidas",
        type: "Gigante Gaseoso",
        description: "El planeta más grande del Sistema Solar. Su Gran Mancha Roja es una tormenta que lleva activa al menos 400 años.",
        facts: [
            "Más masivo que todos los demás planetas combinados",
            "Posee un fuerte campo magnético",
            "Lunas galileanas: Ío, Europa, Ganímedes y Calisto"
        ]
    },
    {
        name: "Saturno",
        image: "assets/images/planets/saturn.jpg",
        diameter: "116,460 km",
        orbit: "29.46 años terrestres",
        moons: "146 conocidas",
        type: "Gigante Gaseoso",
        description: "Famoso por su espectacular sistema de anillos compuestos por hielo y roca. Es el segundo planeta más grande.",
        facts: [
            "Sus anillos se extienden hasta 282,000 km del planeta",
            "Densidad tan baja que flotaría en agua",
            "Titán, su luna más grande, tiene atmósfera densa"
        ]
    },
    {
        name: "Urano",
        image: "assets/images/planets/uranus.jpg",
        diameter: "50,724 km",
        orbit: "84 años terrestres",
        moons: "27 conocidas",
        type: "Gigante de Hielo",
        description: "El planeta más frío del Sistema Solar. Único por su rotación casi horizontal, giando 'de costado'.",
        facts: [
            "Eje de rotación inclinado 98 grados",
            "Color azul verdoso debido al metano",
            "Descubierto en 1781 por William Herschel"
        ]
    },
    {
        name: "Neptuno",
        image: "assets/images/planets/neptune.jpg",
        diameter: "49,244 km",
        orbit: "164.8 años terrestres",
        moons: "14 conocidas",
        type: "Gigante de Hielo",
        description: "El planeta más alejado del Sol. Posee los vientos más fuertes del Sistema Solar, alcanzando 2,100 km/h.",
        facts: [
            "No visible a simple vista desde la Tierra",
            "Descubierto por cálculos matemáticos en 1846",
            "Tritón, su luna más grande, orbita en sentido retrógrado"
        ]
    }
];

// ======================
// SPACE MISSIONS DATA
// ======================
const missionsData = [
    {
        name: "James Webb Space Telescope",
        agency: "NASA/ESA/CSA",
        status: "Activa",
        launchDate: "25 diciembre 2021",
        image: "assets/images/missions/jwst.jpg",
        objective: "Observar las primeras galaxias del universo y estudiar la formación de estrellas y exoplanetas",
        achievements: [
            "Primeras imágenes infrarrojas profundas del universo",
            "Detección de moléculas orgánicas en exoplanetas",
            "Observación de galaxias a 13 mil millones de años luz"
        ]
    },
    {
        name: "Perseverance Rover",
        agency: "NASA",
        status: "Activa en Marte",
        launchDate: "30 julio 2020",
        image: "assets/images/missions/perseverance.jpg",
        objective: "Buscar signos de vida microbiana antigua y recolectar muestras de roca marciana",
        achievements: [
            "Primer vuelo controlado en otro planeta (helicóptero Ingenuity)",
            "Producción de oxígeno en Marte (experimento MOXIE)",
            "Recolección de muestras para futura misión de retorno"
        ]
    },
    {
        name: "Artemis Program",
        agency: "NASA",
        status: "En desarrollo",
        launchDate: "Artemis II: 2025",
        image: "assets/images/missions/artemis.jpg",
        objective: "Retornar humanos a la Luna y establecer presencia sostenible",
        achievements: [
            "Artemis I completada con éxito (2022)",
            "Desarrollo del cohete SLS más potente",
            "Objetivo: primera mujer en la Luna para 2026"
        ]
    },
    {
        name: "Europa Clipper",
        agency: "NASA",
        status: "Lanzamiento programado 2024",
        launchDate: "Octubre 2024",
        image: "assets/images/missions/europa.jpg",
        objective: "Estudiar la habitabilidad del océano subterráneo de Europa (luna de Júpiter)",
        achievements: [
            "Realizará 50 sobrevuelos cercanos de Europa",
            "Estudiará el espesor de la capa de hielo",
            "Buscará signos de actividad geológica"
        ]
    }
];

// ======================
// ASTRONOMICAL EVENTS DATA
// ======================
const eventsData = [
    {
        title: "Lluvia de Meteoros Perseidas",
        date: "12-13 agosto 2025",
        type: "Lluvia de meteoros",
        visibility: "Hemisferio Norte",
        peak: "Noche del 12 al 13 de agosto",
        image: "assets/images/events/perseids.jpg",
        description: "Una de las lluvias de meteoros más populares y espectaculares del año. Originada por los restos del cometa Swift-Tuttle.",
        observation: "Buscar zona oscura lejos de luces urbanas. Mirar hacia el noreste después de la medianoche. No se necesita telescopio.",
        meteorsPerHour: "60-100"
    },
    {
        title: "Eclipse Total de Sol",
        date: "12 agosto 2026",
        type: "Eclipse solar",
        visibility: "España, Islandia, Groenlandia",
        peak: "Mediodía hora local",
        image: "assets/images/events/solar-eclipse.jpg",
        description: "Un espectacular eclipse total de Sol que será visible desde España y otras regiones del norte.",
        observation: "NUNCA mirar directamente al Sol. Usar gafas certificadas ISO 12312-2. La totalidad durará hasta 2 minutos.",
        meteorsPerHour: "N/A"
    },
    {
        title: "Oposición de Saturno",
        date: "21 septiembre 2025",
        type: "Oposición planetaria",
        visibility: "Global",
        peak: "Toda la noche",
        image: "assets/images/events/saturn-opposition.jpg",
        description: "Saturno estará en su punto más cercano a la Tierra y completamente iluminado por el Sol, perfecto para observar sus anillos.",
        observation: "Visible a simple vista. Con telescopio pequeño se pueden ver los anillos.  Mejor momento: medianoche mirando al sur.",
        meteorsPerHour: "N/A"
    },
    {
        title: "Lluvia de Meteoros Gemínidas",
        date: "13-14 diciembre 2025",
        type: "Lluvia de meteoros",
        visibility: "Global",
        peak: "Noche del 13 al 14 de diciembre",
        image: "assets/images/events/geminids.jpg",
        description: "Considerada la mejor lluvia de meteoros del año. Originada por el asteroide 3200 Faetón.",
        observation: "Punto radiante en constelación de Géminis. Observar después de las 22:00. cielos despejados y oscuros.",
        meteorsPerHour: "120+"
    }
];

// ======================
// PRODUCTS DATABASE
// ======================
const products = [
    // TELESCOPIOS
    {
        id: 1,
        name: "Telescopio Celestron AstroMaster 70AZ",
        price: 299.99,
        category: "telescopios",
        image: "assets/images/products/telescope-1.jpg",
        rating: 4.8,
        reviews: 342,
        badge: "Popular",
        description: "Telescopio refractor ideal para principiantes. Incluye trípode de aluminio ajustable y dos oculares. Perfecto para observar la Luna, planetas y objetos del cielo profundo.",
        specs: ["Apertura: 70mm", "Distancia focal: 900mm", "Montura altazimutal"]
    },
    {
        id: 2,
        name: "Orion SkyQuest XT8 Classic",
        price: 449.99,
        category: "telescopios",
        image: "assets/images/products/telescope-2.jpg",
        rating: 4.9,
        reviews: 528,
        badge: "Mejor Valorado",
        description: "Telescopio reflector Dobsoniano de 8 pulgadas. Excelente para observación de cielo profundo. Gran apertura para captar más luz.",
        specs: ["Apertura: 203mm (8\")", "Distancia focal: 1200mm", "Montura Dobsoniana"]
    },
    {
        id: 3,
        name: "Meade Instruments Infinity 102",
        price: 199.99,
        category: "telescopios",
        image: "assets/images/products/telescope-3.jpg",
        rating: 4.6,
        reviews: 215,
        badge: "Mejor Precio",
        description: "Refractor altazimutal de 102mm. Excelente opción calidad-precio para astronomy aficionados. Incluye software astronómico gratuito.",
        specs: ["Apertura: 102mm", "Distancia focal: 600mm", "incluye software AutoStar"]
    },

    // LIBROS
    {
        id: 4,
        name: "Cosmos de Carl Sagan",
        price: 24.99,
        category: "libros",
        image: "assets/images/products/book-cosmos.jpg",
        rating: 5.0,
        reviews: 1250,
        badge: "Clásico",
        description: "El libro que acompañó a la legendaria serie de TV. Un viaje fascinante desde el Big Bang hasta el futuro de la humanidad en el cosmos.",
        specs: ["448 páginas", "Tapa dura", "Ilustrado"]
    },
    {
        id: 5,
        name: "Una Breve Historia del Tiempo - Stephen Hawking",
        price: 18.99,
        category: "libros",
        image: "assets/images/products/book-time.jpg",
        rating: 4.7,
        reviews: 890,
        badge: null,
        description: "Explicación accesible sobre el universo, desde el Big Bang hasta agujeros negros. Uno de los libros de divulgación más vendidos de la historia.",
        specs: ["256 páginas", "Tapa blanda", "Edición actualizada"]
    },
    {
        id: 6,
        name: "Astrofísica para Gente con Prisas - Neil deGrasse Tyson",
        price: 16.99,
        category: "libros",
        image: "assets/images/products/book-astrophysics.jpg",
        rating: 4.8,
        reviews: 445,
        badge: "Nuevo",
        description: "Los conceptos más importantes del cosmos explicados de forma breve y entretenida. Perfecto para comprender el universo en poco tiempo.",
        specs: ["224 páginas", "Tapa blanda", "Bestseller NYT"]
    },
    {
        id: 7,
        name: "El Universo en Tu Mano - Christophe Galfard",
        price: 22.99,
        category: "libros",
        image: "assets/images/products/book-universe.jpg",
        rating: 4.9,
        reviews: 312,
        badge: null,
        description: "Viaje fascinante por el cosmos sin fórmulas matemáticas. Desde el interior de un agujero negro hasta el Big Bang.",
        specs: ["432 páginas", "Tapa dura", "Ilustraciones"]
    },

    // POSTERS
    {
        id: 8,
        name: "Poster Nebulosa del Águila (Pilares de la Creación)",
        price: 19.99,
        category: "posters",
        image: "assets/images/products/poster-eagle.jpg",
        rating: 4.7,
        reviews: 156,
        badge: "Popular",
        description: "Impresión de alta calidad de la icónica imagen del Hubble. Muestra los famosos 'Pilares de la Creación' donde nacen nuevas estrellas.",
        specs: ["Tamaño: 61x91cm (24\"x36\")", "Papel fotográfico premium", "Listo para enmarcar"]
    },
    {
        id: 9,
        name: "Sistema Solar Completo - Diagrama Educativo",
        price: 24.99,
        category: "posters",
        image: "assets/images/products/poster-solar-system.jpg",
        rating: 4.8,
        reviews: 203,
        badge: null,
        description: "Poster educativo con todos los planetas y datos clave. Incluye planetas enanos, cinturón de asteroides y escala comparativa.",
        specs: ["Tamaño: 91x61cm (36\"x24\")", "Laminado mate", "Información detallada"]
    },
    {
        id: 10,
        name: "Galaxia de Andrómeda - Fotografía Telescopio",
        price: 19.99,
        category: "posters",
        image: "assets/images/products/poster-andromeda.jpg",
        rating: 4.9,
        reviews: 178,
        badge: null,
        description: "Impresionante imagen de nuestra galaxia vecina. Capturada con largo tiempo de exposición revelando millones de estrellas.",
        specs: ["Tamaño: 61x91cm (24\"x36\")", "Impresión giclée", "Colores vibrantes"]
    },
    {
        id: 11,
        name: "Nebulosa de Orión - Astrofotografía",
        price: 21.99,
        category: "posters",
        image: "assets/images/products/poster-orion.jpg",
        rating: 4.6,
        reviews: 134,
        badge: null,
        description: "La nebulosa más fotografiada del cielo. Región de formación estelar visible a simple vista en la constelación de Orión.",
        specs: ["Tamaño: 76x51cm (30\"x20\")", "Papel mate premium", "marco opcional"]
    },
    {
        id: 12,
        name: "Mapa Estelar Vintage Constelaciones",
        price: 29.99,
        category: "posters",
        image: "assets/images/products/poster-star-map.jpg",
        rating: 5.0,
        reviews: 267,
        badge: "Popular",
        description: "Elegante mapa celestial de estilo vintage. Muestra las 88 constelaciones oficiales con ilustraciones clásicas mitológicas.",
        specs: ["Tamaño: 91x61cm (36\"x24\")", "Estilo antiguo", "Papel envejecido"]
    },

    // ROPA
    {
        id: 13,
        name: "Camiseta 'Explora el Universo'",
        price: 29.99,
        category: "ropa",
        image: "assets/images/products/tshirt-explore.jpg",
        rating: 4.5,
        reviews: 89,
        badge: null,
        description: "Camiseta de algodón 100% con diseño de galaxia espiral y texto 'Explore the Universe'. Disponible en negro y azul oscuro.",
        specs: ["Algodón 100%", "Tallas: S, M, L, XL, XXL", "Diseño de alta calidad"]
    },
    {
        id: 14,
        name: "Sudadera 'Astronauta Espacial'",
        price: 49.99,
        category: "ropa",
        image: "assets/images/products/hoodie-astronaut.jpg",
        rating: 4.8,
        reviews: 124,
        badge: "Nuevo",
        description: "Sudadera con capucha y diseño de astronauta flotando en el espacio. Interior afelpado suave. Perfect para noches de observación.",
        specs: ["80% algodón, 20% poliéster", "Bolsillo canguro", "Cordones ajustables"]
    },
    {
        id: 15,
        name: "Gorra NASA Vintage Logo",
        price: 24.99,
        category: "ropa",
        image: "assets/images/products/cap-nasa.jpg",
        rating: 4.7,
        reviews: 312,
        badge: "Popular",
        description: "Gorra tipo béisbol con el clásico logo de la NASA. Diseño retro inspirado en las misiones Apollo. Ajustable.",
        specs: ["100% algodón", "Visera curva", "Cierre ajustable trasero"]
    },

    // ACCESORIOS
    {
        id: 16,
        name: "Mapa Estelar Rotatorio Planisferio",
        price: 34.99,
        category: "accesorios",
        image: "assets/images/products/planisphere.jpg",
        rating: 4.6,
        reviews: 198,
        badge: null,
        description: "Planisferio ajustable que muestra las estrellas visibles para cualquier fecha y hora. Herramienta esencial para identificar constelaciones.",
        specs: ["Diámetro: 25cm", "Para latitud 40°N", "Instrucciones incluidas"]
    },
    {
        id: 17,
        name: "Linterna Roja para Astronomía",
        price: 14.99,
        category: "accesorios",
        image: "assets/images/products/red-light.jpg",
        rating: 4.9,
        reviews: 445,
        badge: "Esencial",
        description: "Linterna LED roja que preserve la adaptación nocturna de tus ojos. Imprescindible para observación astronómica.",
        specs: ["LED rojo regulable", "Resistente al agua", "Batería AAA incluida"]
    },
    {
        id: 18,
        name: "Planisferio Celeste Fosforescente",
        price: 12.99,
        category: "accesorios",
        image: "assets/images/products/glow-map.jpg",
        rating: 4.4,
        reviews: 167,
        badge: null,
        description: "Mapa del cielo que brilla en la oscuridad. Ideal para aprender constelaciones. Incluye las 88 constelaciones oficiales.",
        specs: ["Material fosforescente", "30x40cm", "Educativo"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { planetsData, missionsData, eventsData, products };
}
