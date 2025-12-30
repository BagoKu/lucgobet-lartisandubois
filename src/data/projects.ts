export interface Project {
    id: number
    title: string
    description: string
    category: string
    coverImage: string
    images: string[]
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Étagère Naruto',
        description: "Étagère sur mesure inspirée de l'univers Naruto. Un meuble unique alliant passion et savoir-faire artisanal.",
        category: 'Meubles sur mesure',
        coverImage: new URL('../assets/naruto/naruto-detail4.jpeg', import.meta.url).href,
        images: [
            new URL('../assets/naruto/naruto-detail1.jpeg', import.meta.url).href,
            new URL('../assets/naruto/naruto-detail2.jpeg', import.meta.url).href,
            new URL('../assets/naruto/naruto-detail3.jpeg', import.meta.url).href,
            new URL('../assets/naruto/naruto-detail4.jpeg', import.meta.url).href,
            new URL('../assets/naruto/naruto-detail5.jpeg', import.meta.url).href,
            new URL('../assets/naruto/naruto-detail6.jpeg', import.meta.url).href,
            new URL('../assets/naruto/naruto-detail11.jpeg', import.meta.url).href,
        ],
    },
    {
        id: 2,
        title: 'Volets en Bois',
        description: "Fabrication et pose de volets en bois sur mesure. Travail artisanal soigné pour une protection et une esthétique durables.",
        category: 'Aménagements extérieurs',
        coverImage: new URL('../assets/volets/WhatsApp Image 2025-07-14 at 10.34.41.jpeg', import.meta.url).href,
        images: [
            new URL('../assets/volets/WhatsApp Image 2025-07-14 at 10.34.41.jpeg', import.meta.url).href,
            new URL('../assets/volets/WhatsApp Image 2025-07-14 at 10.34.41 (1).jpeg', import.meta.url).href,
            new URL('../assets/volets/WhatsApp Image 2025-07-14 at 10.34.41 (2).jpeg', import.meta.url).href,
            new URL('../assets/volets/WhatsApp Image 2025-07-14 at 10.34.41 (3).jpeg', import.meta.url).href,
            new URL('../assets/volets/WhatsApp Image 2025-07-14 at 10.34.41 (4).jpeg', import.meta.url).href,
        ],
    },
    {
        id: 3,
        title: 'Meuble Encastré',
        description: "Conception et réalisation d'un meuble encastré sur mesure. Optimisation de l'espace avec des finitions impeccables.",
        category: 'Meubles sur mesure',
        coverImage: new URL('../assets/meubleEnmure/WhatsApp Image 2025-07-14 at 10.34.42.jpeg', import.meta.url).href,
        images: [
            new URL('../assets/meubleEnmure/WhatsApp Image 2025-07-14 at 10.34.42.jpeg', import.meta.url).href,
            new URL('../assets/meubleEnmure/WhatsApp Image 2025-07-14 at 10.34.41 (5).jpeg', import.meta.url).href,
            new URL('../assets/meubleEnmure/WhatsApp Image 2025-07-14 at 10.34.41 (6).jpeg', import.meta.url).href,
            new URL('../assets/meubleEnmure/WhatsApp Image 2025-07-14 at 10.34.42 (1).jpeg', import.meta.url).href,
        ],
    },
    {
        id: 4,
        title: 'Cuisine sur Mesure',
        description: "Réalisation d'une cuisine complète en bois. Design moderne et fonctionnel avec des matériaux de qualité.",
        category: 'Cuisines',
        coverImage: new URL('../assets/cuisine/WhatsApp Image 2025-07-14 at 10.24.13 (4).jpeg', import.meta.url).href,
        images: [
            new URL('../assets/cuisine/WhatsApp Image 2025-07-14 at 10.24.13 (4).jpeg', import.meta.url).href,
            new URL('../assets/cuisine/WhatsApp Image 2025-07-14 at 10.24.13 (5).jpeg', import.meta.url).href,
            new URL('../assets/cuisine/WhatsApp Image 2025-07-14 at 10.24.14.jpeg', import.meta.url).href,
        ],
    },
    {
        id: 5,
        title: 'Dressing sur Mesure',
        description: "Aménagement d'un dressing complet avec rangements optimisés. Solution sur mesure pour maximiser l'espace disponible.",
        category: 'Dressing',
        coverImage: new URL('../assets/dressing/WhatsApp Image 2025-07-14 at 10.25.21 (1).jpeg', import.meta.url).href,
        images: [
            new URL('../assets/dressing/WhatsApp Image 2025-07-14 at 10.25.21 (1).jpeg', import.meta.url).href,
            new URL('../assets/dressing/WhatsApp Image 2025-07-14 at 10.25.20.jpeg', import.meta.url).href,
            new URL('../assets/dressing/WhatsApp Image 2025-07-14 at 10.25.21 (2).jpeg', import.meta.url).href,
            new URL('../assets/dressing/WhatsApp Image 2025-07-14 at 10.25.21.jpeg', import.meta.url).href,
        ],
    },
    {
        id: 6,
        title: 'Meuble Sous Toit',
        description: "Création d'un meuble sous pente pour exploiter au mieux l'espace disponible. Rangements pratiques et esthétiques.",
        category: 'Meubles sur mesure',
        coverImage: new URL('../assets/meubleSousToit/WhatsApp Image 2025-07-14 at 10.30.01 (1).jpeg', import.meta.url).href,
        images: [
            new URL('../assets/meubleSousToit/WhatsApp Image 2025-07-14 at 10.30.01 (1).jpeg', import.meta.url).href,
            new URL('../assets/meubleSousToit/WhatsApp Image 2025-07-14 at 10.29.53.jpeg', import.meta.url).href,
            new URL('../assets/meubleSousToit/WhatsApp Image 2025-07-14 at 10.29.54.jpeg', import.meta.url).href,
            new URL('../assets/meubleSousToit/WhatsApp Image 2025-07-14 at 10.30.01 (1).jpeg', import.meta.url).href,
            new URL('../assets/meubleSousToit/WhatsApp Image 2025-07-14 at 10.30.01.jpeg', import.meta.url).href,
        ],
    },
    {
        id: 7,
        title: 'Étagère en Chêne',
        description: "Étagère murale en chêne massif. Fabrication artisanale avec finitions soignées pour un rendu élégant.",
        category: 'Meubles sur mesure',
        coverImage: new URL('../assets/etagereChene/WhatsApp Image 2025-07-14 at 11.40.51.jpeg', import.meta.url).href,
        images: [
            new URL('../assets/etagereChene/WhatsApp Image 2025-07-14 at 11.40.51.jpeg', import.meta.url).href,
            new URL('../assets/etagereChene/WhatsApp Image 2025-07-14 at 11.40.51 (1).jpeg', import.meta.url).href,
            new URL('../assets/etagereChene/WhatsApp Image 2025-07-14 at 11.40.52.jpeg', import.meta.url).href,
            new URL('../assets/etagereChene/WhatsApp Image 2025-07-14 at 11.40.52 (1).jpeg', import.meta.url).href,
            new URL('../assets/etagereChene/WhatsApp Image 2025-07-14 at 11.43.53 (1).jpeg', import.meta.url).href,
            new URL('../assets/etagereChene/WhatsApp Image 2025-07-14 at 11.43.53.jpeg', import.meta.url).href,
            new URL('../assets/etagereChene/WhatsApp Image 2025-07-14 at 11.43.54.jpeg', import.meta.url).href,
        ],
    },
    {
        id: 8,
        title: 'Tablette Murale',
        description: "Tablettes murales en bois massif. Installation soignée pour un résultat à la fois pratique et décoratif.",
        category: 'Meubles sur mesure',
        coverImage: new URL('../assets/tabletteMurale/WhatsApp Image 2025-07-14 at 11.39.29.jpeg', import.meta.url).href,
        images: [
            new URL('../assets/tabletteMurale/WhatsApp Image 2025-07-14 at 11.39.29.jpeg', import.meta.url).href,
            new URL('../assets/tabletteMurale/WhatsApp Image 2025-07-14 at 11.39.31 (1).jpeg', import.meta.url).href,
            new URL('../assets/tabletteMurale/WhatsApp Image 2025-07-14 at 11.39.31 (2).jpeg', import.meta.url).href,
            new URL('../assets/tabletteMurale/WhatsApp Image 2025-07-14 at 11.39.31.jpeg', import.meta.url).href,
            new URL('../assets/tabletteMurale/WhatsApp Image 2025-07-14 at 11.39.32 (1).jpeg', import.meta.url).href,
            new URL('../assets/tabletteMurale/WhatsApp Image 2025-07-14 at 11.39.32.jpeg', import.meta.url).href,
        ],
    },
    {
        id: 9,
        title: 'Terrasse en Bois',
        description: "Construction d'une terrasse en bois. Travail de qualité pour un espace extérieur durable et esthétique.",
        category: 'Aménagements extérieurs',
        coverImage: new URL('../assets/terrasse/WhatsApp Image 2025-07-14 at 10.24.14 (1).jpeg', import.meta.url).href,
        images: [
            new URL('../assets/terrasse/WhatsApp Image 2025-07-14 at 10.24.14 (1).jpeg', import.meta.url).href,
            new URL('../assets/terrasse/WhatsApp Image 2025-07-14 at 10.24.14 (2).jpeg', import.meta.url).href,
        ],
    },
]
