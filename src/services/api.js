// Fallback product data matching backend data for offline client execution
export const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: "Aura Champagne Silk Triangle Bra",
    slug: "aura-champagne-silk-triangle-bra",
    description: "Crafted from pure 22-momme mulberry silk in luminous champagne gold. Featuring soft unlined cups and delicate adjustable gold-plated hardware for effortless, breathable luxury.",
    price: 145.00,
    originalPrice: 165.00,
    category: "Bras",
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.9,
    reviewCount: 38,
    imageUrl: "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000",
    galleryImages: [
      "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000"
    ],
    sizes: ["32B", "32C", "34B", "34C", "36B"],
    colors: ["Champagne Gold", "Ivory Cream", "Midnight Black"],
    details: ["92% Pure Mulberry Silk, 8% Elastane", "Unpadded soft wireless cups", "Adjustable shoulder straps", "Gold-plated hardware", "Hand wash recommended"],
    fabricCare: "Hand wash cold with silk-safe detergent. Lay flat to dry out of direct sunlight."
  },
  {
    id: 2,
    name: "Céleste French Chantilly Lace Balconette",
    slug: "celeste-french-chantilly-lace-balconette",
    description: "Intricately detailed French Chantilly lace balconette bra offering supportive uplift with semi-sheer eyelash trim along the neckline.",
    price: 185.00,
    originalPrice: null,
    category: "Bras",
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 5.0,
    reviewCount: 24,
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000",
    galleryImages: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000"
    ],
    sizes: ["32B", "32C", "34B", "34C", "34D", "36C"],
    colors: ["Noir Black", "Blush Pink", "Champagne Gold"],
    details: ["Underwire support", "Eyelash lace trim", "Silk-lined wing bands", "Hook & eye closure"],
    fabricCare: "Gentle hand wash in cold water with delicate lingerie soap."
  },
  {
    id: 3,
    name: "Lumière Sheer Embroidered Corset Bodysuit",
    slug: "lumiere-sheer-embroidered-corset-bodysuit",
    description: "A showstopping piece featuring architectural boning and sheer tulle hand-embroidered with shimmering champagne floral motifs.",
    price: 265.00,
    originalPrice: 295.00,
    category: "Bodysuits",
    featured: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviewCount: 42,
    imageUrl: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000",
    galleryImages: [
      "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne Gold", "Noir Black"],
    details: ["Flexible internal boning", "Snap gusset closure", "Adjustable shoulder straps", "Semi-sheer mesh body"],
    fabricCare: "Dry clean only or ultra-delicate hand wash."
  },
  {
    id: 4,
    name: "Symphonie Silk Floor-Length Kimono Robe",
    slug: "symphonie-silk-floor-length-kimono-robe",
    description: "Envelop yourself in pure indulgence with our signature floor-length silk kimono. Featuring wide sash belt and French seams throughout.",
    price: 320.00,
    originalPrice: null,
    category: "Loungewear & Robes",
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 5.0,
    reviewCount: 56,
    imageUrl: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000",
    galleryImages: [
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000"
    ],
    sizes: ["S/M", "L/XL"],
    colors: ["Champagne Gold", "Ivory White", "Rose Blush", "Noir Black"],
    details: ["100% Mulberry Silk 22 Momme", "Kimono sleeve cut", "Includes removable silk belt sash", "Inside tie closure"],
    fabricCare: "Professional dry clean recommended or gentle silk cycle."
  },
  {
    id: 5,
    name: "Velvet Rose Silk & Lace Lingerie Set",
    slug: "velvet-rose-silk-and-lace-lingerie-set",
    description: "A harmonized set consisting of our plunge wire-free silk bra and high-waisted Chantilly lace knickers.",
    price: 210.00,
    originalPrice: 240.00,
    category: "Lingerie Sets",
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviewCount: 19,
    imageUrl: "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000",
    galleryImages: ["https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000"],
    sizes: ["S", "M", "L"],
    colors: ["Blush Rose", "Champagne Gold", "Noir Black"],
    details: ["Includes Bra & Matching Brief", "100% cotton gusset lining", "Scalloped lace trim", "Gold hardware accents"],
    fabricCare: "Hand wash in cool water."
  },
  {
    id: 6,
    name: "Satin Whispers High-Waisted Silk Briefs",
    slug: "satin-whispers-high-waisted-silk-briefs",
    description: "Designed to sit high on the waist with flattering sheer mesh side panels and ultra-soft silk front.",
    price: 75.00,
    originalPrice: null,
    category: "Knickers",
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.9,
    reviewCount: 64,
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000",
    galleryImages: ["https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne Gold", "Noir Black", "Ivory White"],
    details: ["High rise silhouette", "Pure silk front panel", "Breathable stretch mesh back", "Organic cotton lining"],
    fabricCare: "Hand wash cold."
  },
  {
    id: 7,
    name: "Elysian Silk Bias-Cut Slip Dress",
    slug: "elysian-silk-bias-cut-slip-dress",
    description: "Flowing silk slip dress cut on the bias to hug curves elegantly. Versatile enough for romantic evenings or luxury lougewear.",
    price: 240.00,
    originalPrice: 270.00,
    category: "Loungewear & Robes",
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 5.0,
    reviewCount: 31,
    imageUrl: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000",
    galleryImages: ["https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne Gold", "Blush Pink", "Midnight Noir"],
    details: ["100% Mulberry Silk", "Adjustable delicate straps", "V-neck front and back", "Fluid bias drape"],
    fabricCare: "Hand wash or dry clean."
  },
  {
    id: 8,
    name: "Noir Desire Eyelash Lace Plunge Bra",
    slug: "noir-desire-eyelash-lace-plunge-bra",
    description: "Sensual plunge silhouette adorned with eyelash floral lace and supportive underwire construction.",
    price: 160.00,
    originalPrice: null,
    category: "Bras",
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviewCount: 18,
    imageUrl: "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000",
    galleryImages: ["https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000"],
    sizes: ["32B", "32C", "34B", "34C", "36B", "36C"],
    colors: ["Noir Black", "Burgundy Velvet"],
    details: ["Plunge neckline", "Sheer lace cups", "Gold-tone slider details"],
    fabricCare: "Hand wash cold."
  },
  {
    id: 9,
    name: "Seraphine Embroidered Lace Thong",
    slug: "seraphine-embroidered-lace-thong",
    description: "Delicate thong with fine floral embroidery and soft stretch silk sides for all-day luxury.",
    price: 65.00,
    originalPrice: null,
    category: "Knickers",
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviewCount: 15,
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000",
    galleryImages: ["https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne Gold", "Blush Pink", "Noir Black"],
    details: ["Low-rise thong cut", "Embroidered front pattern", "100% cotton gusset"],
    fabricCare: "Hand wash cold."
  },
  {
    id: 10,
    name: "Ophelia Sheer Mesh Corset Top",
    slug: "ophelia-sheer-mesh-corset-top",
    description: "Structured outerwear-inspired corset top crafted with sheer power mesh and satin ribbing.",
    price: 225.00,
    originalPrice: 250.00,
    category: "Bodysuits",
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.9,
    reviewCount: 29,
    imageUrl: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000",
    galleryImages: ["https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne Gold", "Noir Black"],
    details: ["Steel flex boning", "Back lace-up ribbon detail", "Padded underwire cups"],
    fabricCare: "Dry clean recommended."
  },
  {
    id: 11,
    name: "Monarch Silk Pyjama Lounge Set",
    slug: "monarch-silk-pyjama-lounge-set",
    description: "Tailored pyjama jacket and fluid wide-leg pants in pure silk satin with gold contrast piping.",
    price: 350.00,
    originalPrice: null,
    category: "Loungewear & Robes",
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 5.0,
    reviewCount: 11,
    imageUrl: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000",
    galleryImages: ["https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000"],
    sizes: ["S", "M", "L"],
    colors: ["Ivory White", "Champagne Gold", "Midnight Blue"],
    details: ["22-momme Mulberry Silk", "Button front shirt", "Elastic waist trousers"],
    fabricCare: "Gentle silk washing cycle."
  },
  {
    id: 12,
    name: "Gilded Rose Bridal Garter & Panty Set",
    slug: "gilded-rose-bridal-garter-and-panty-set",
    description: "A romantic bridal set incorporating hand-sewn pearl beads, metallic champagne lace, and detachable garters.",
    price: 195.00,
    originalPrice: null,
    category: "Lingerie Sets",
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.9,
    reviewCount: 8,
    imageUrl: "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000",
    galleryImages: ["https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000"],
    sizes: ["S", "M", "L"],
    colors: ["Champagne Gold", "Ivory White"],
    details: ["Includes high-waisted briefs and garter straps", "Faux pearl bead accents", "Adjustable leg straps"],
    fabricCare: "Hand wash only."
  }
];

export const FALLBACK_CATEGORIES = [
  { id: 1, name: "Bras", slug: "bras", description: "Exquisite lace, silk, and structured bras.", imageUrl: "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Knickers", slug: "knickers", description: "Silky briefs, thongs, and shorts.", imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Bodysuits", slug: "bodysuits", description: "Sculpting, sheer, and embroidered bodysuits.", imageUrl: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Loungewear & Robes", slug: "loungewear", description: "Sumptuous pure silk robes and slips.", imageUrl: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Lingerie Sets", slug: "sets", description: "Coordinated luxury bra and knicker sets.", imageUrl: "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=800" }
];

const API_BASE_URL = "/api";

export async function fetchProducts(params = {}) {
  try {
    const url = new URL(`${window.location.origin}${API_BASE_URL}/products`);
    if (params.category && params.category !== 'all') url.searchParams.append('category', params.category);
    if (params.query) url.searchParams.append('query', params.query);
    if (params.minPrice) url.searchParams.append('minPrice', params.minPrice);
    if (params.maxPrice) url.searchParams.append('maxPrice', params.maxPrice);

    const res = await fetch(url);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (err) {
    console.warn("Using fallback local dataset for fetchProducts", err);
    let list = [...FALLBACK_PRODUCTS];
    if (params.category && params.category !== 'all') {
      list = list.filter(p => p.category.toLowerCase() === params.category.toLowerCase());
    }
    if (params.query) {
      const q = params.query.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (params.minPrice) {
      list = list.filter(p => p.price >= parseFloat(params.minPrice));
    }
    if (params.maxPrice) {
      list = list.filter(p => p.price <= parseFloat(params.maxPrice));
    }
    return list;
  }
}

export async function fetchProductById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error("Not found");
    return await res.json();
  } catch (err) {
    return FALLBACK_PRODUCTS.find(p => p.id === Number(id)) || FALLBACK_PRODUCTS[0];
  }
}

export async function fetchProductBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/products/slug/${slug}`);
    if (!res.ok) throw new Error("Not found");
    return await res.json();
  } catch (err) {
    return FALLBACK_PRODUCTS.find(p => p.slug === slug) || FALLBACK_PRODUCTS[0];
  }
}

export async function fetchFeaturedProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/products/featured`);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (err) {
    return FALLBACK_PRODUCTS.filter(p => p.featured);
  }
}

export async function fetchNewArrivals() {
  try {
    const res = await fetch(`${API_BASE_URL}/products/new-arrivals`);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (err) {
    return FALLBACK_PRODUCTS.filter(p => p.newArrival);
  }
}

export async function fetchBestSellers() {
  try {
    const res = await fetch(`${API_BASE_URL}/products/best-sellers`);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (err) {
    return FALLBACK_PRODUCTS.filter(p => p.bestSeller);
  }
}

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (err) {
    return FALLBACK_CATEGORIES;
  }
}

export async function subscribeNewsletter(email) {
  try {
    const res = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    return await res.json();
  } catch (err) {
    return { message: "Welcome to the Lunel inner circle. Thank you for subscribing." };
  }
}

export async function sendContactMessage(formData) {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    return await res.json();
  } catch (err) {
    return { message: "Thank you for contacting Lunel Concierge. Our team will get back to you shortly." };
  }
}
