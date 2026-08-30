package com.lunel.config;

import com.lunel.model.Category;
import com.lunel.model.Product;
import com.lunel.repository.CategoryRepository;
import com.lunel.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepository, CategoryRepository categoryRepository) {
        return args -> {
            if (categoryRepository.count() == 0) {
                categoryRepository.saveAll(Arrays.asList(
                    new Category("Bras", "bras", "Exquisite lace, silk, and structured bras designed for luxury and comfort.", "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=800"),
                    new Category("Knickers", "knickers", "Silky briefs, thongs, and high-waisted shorts crafted with intricate lace.", "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800"),
                    new Category("Bodysuits", "bodysuits", "Sculpting, sheer, and embroidered one-piece silhouettes for effortless elegance.", "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=800"),
                    new Category("Loungewear & Robes", "loungewear", "Sumptuous 100% mulberry silk robes, kimonos, and slip dresses.", "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=800"),
                    new Category("Lingerie Sets", "sets", "Coordinated luxury bra and knicker sets paired with matching garters.", "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=800")
                ));
            }

            if (productRepository.count() == 0) {
                productRepository.saveAll(Arrays.asList(
                    new Product(
                        "Aura Champagne Silk Triangle Bra",
                        "aura-champagne-silk-triangle-bra",
                        "Crafted from pure 22-momme mulberry silk in luminous champagne gold. Featuring soft unlined cups and delicate adjustable gold-plated hardware for effortless, breathable luxury.",
                        BigDecimal.valueOf(145.00),
                        BigDecimal.valueOf(165.00),
                        "Bras",
                        true, true, false,
                        4.9, 38,
                        "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000",
                            "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("32B", "32C", "34B", "34C", "36B"),
                        Arrays.asList("Champagne Gold", "Ivory Cream", "Midnight Black"),
                        Arrays.asList("92% Pure Mulberry Silk, 8% Elastane", "Unpadded soft wireless cups", "Adjustable shoulder straps", "Gold-plated hardware", "Hand wash recommended"),
                        "Hand wash cold with silk-safe detergent. Lay flat to dry out of direct sunlight."
                    ),
                    new Product(
                        "Céleste French Chantilly Lace Balconette",
                        "celeste-french-chantilly-lace-balconette",
                        "Intricately detailed French Chantilly lace balconette bra offering supportive uplift with semi-sheer eyelash trim along the neckline.",
                        BigDecimal.valueOf(185.00),
                        null,
                        "Bras",
                        true, false, true,
                        5.0, 24,
                        "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000",
                            "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("32B", "32C", "34B", "34C", "34D", "36C"),
                        Arrays.asList("Noir Black", "Blush Pink", "Champagne Gold"),
                        Arrays.asList("Underwire support", "Eyelash lace trim", "Silk-lined wing bands", "Hook & eye closure"),
                        "Gentle hand wash in cold water with delicate lingerie soap."
                    ),
                    new Product(
                        "Lumière Sheer Embroidered Corset Bodysuit",
                        "lumiere-sheer-embroidered-corset-bodysuit",
                        "A showstopping piece featuring architectural boning and sheer tulle hand-embroidered with shimmering champagne floral motifs.",
                        BigDecimal.valueOf(265.00),
                        BigDecimal.valueOf(295.00),
                        "Bodysuits",
                        true, true, true,
                        4.9, 42,
                        "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000",
                            "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("XS", "S", "M", "L"),
                        Arrays.asList("Champagne Gold", "Noir Black"),
                        Arrays.asList("Flexible internal boning", "Snap gusset closure", "Adjustable shoulder straps", "Semi-sheer mesh body"),
                        "Dry clean only or ultra-delicate hand wash."
                    ),
                    new Product(
                        "Symphonie Silk Floor-Length Kimono Robe",
                        "symphonie-silk-floor-length-kimono-robe",
                        "Envelop yourself in pure indulgence with our signature floor-length silk kimono. Featuring wide sash belt and French seams throughout.",
                        BigDecimal.valueOf(320.00),
                        null,
                        "Loungewear & Robes",
                        true, true, false,
                        5.0, 56,
                        "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000",
                            "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("S/M", "L/XL"),
                        Arrays.asList("Champagne Gold", "Ivory White", "Rose Blush", "Noir Black"),
                        Arrays.asList("100% Mulberry Silk 22 Momme", "Kimono sleeve cut", "Includes removable silk belt sash", "Inside tie closure"),
                        "Professional dry clean recommended or gentle silk cycle."
                    ),
                    new Product(
                        "Velvet Rose Silk & Lace Lingerie Set",
                        "velvet-rose-silk-and-lace-lingerie-set",
                        "A harmonized set consisting of our plunge wire-free silk bra and high-waisted Chantilly lace knickers.",
                        BigDecimal.valueOf(210.00),
                        BigDecimal.valueOf(240.00),
                        "Lingerie Sets",
                        true, false, true,
                        4.8, 19,
                        "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("S", "M", "L"),
                        Arrays.asList("Blush Rose", "Champagne Gold", "Noir Black"),
                        Arrays.asList("Includes Bra & Matching Brief", "100% cotton gusset lining", "Scalloped lace trim", "Gold hardware accents"),
                        "Hand wash in cool water."
                    ),
                    new Product(
                        "Satin Whispers High-Waisted Silk Briefs",
                        "satin-whispers-high-waisted-silk-briefs",
                        "Designed to sit high on the waist with flattering sheer mesh side panels and ultra-soft silk front.",
                        BigDecimal.valueOf(75.00),
                        null,
                        "Knickers",
                        false, true, false,
                        4.9, 64,
                        "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("XS", "S", "M", "L", "XL"),
                        Arrays.asList("Champagne Gold", "Noir Black", "Ivory White"),
                        Arrays.asList("High rise silhouette", "Pure silk front panel", "Breathable stretch mesh back", "Organic cotton lining"),
                        "Hand wash cold."
                    ),
                    new Product(
                        "Elysian Silk Bias-Cut Slip Dress",
                        "elysian-silk-bias-cut-slip-dress",
                        "Flowing silk slip dress cut on the bias to hug curves elegantly. Versatile enough for romantic evenings or luxury lougewear.",
                        BigDecimal.valueOf(240.00),
                        BigDecimal.valueOf(270.00),
                        "Loungewear & Robes",
                        false, true, false,
                        5.0, 31,
                        "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("XS", "S", "M", "L"),
                        Arrays.asList("Champagne Gold", "Blush Pink", "Midnight Noir"),
                        Arrays.asList("100% Mulberry Silk", "Adjustable delicate straps", "V-neck front and back", "Fluid bias drape"),
                        "Hand wash or dry clean."
                    ),
                    new Product(
                        "Noir Desire Eyelash Lace Plunge Bra",
                        "noir-desire-eyelash-lace-plunge-bra",
                        "Sensual plunge silhouette adorned with eyelash floral lace and supportive underwire construction.",
                        BigDecimal.valueOf(160.00),
                        null,
                        "Bras",
                        false, false, true,
                        4.7, 18,
                        "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("32B", "32C", "34B", "34C", "36B", "36C"),
                        Arrays.asList("Noir Black", "Burgundy Velvet"),
                        Arrays.asList("Plunge neckline", "Sheer lace cups", "Gold-tone slider details"),
                        "Hand wash cold."
                    ),
                    new Product(
                        "Seraphine Embroidered Lace Thong",
                        "seraphine-embroidered-lace-thong",
                        "Delicate thong with fine floral embroidery and soft stretch silk sides for all-day luxury.",
                        BigDecimal.valueOf(65.00),
                        null,
                        "Knickers",
                        false, false, true,
                        4.8, 15,
                        "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("XS", "S", "M", "L"),
                        Arrays.asList("Champagne Gold", "Blush Pink", "Noir Black"),
                        Arrays.asList("Low-rise thong cut", "Embroidered front pattern", "100% cotton gusset"),
                        "Hand wash cold."
                    ),
                    new Product(
                        "Ophelia Sheer Mesh Corset Top",
                        "ophelia-sheer-mesh-corset-top",
                        "Structured outerwear-inspired corset top crafted with sheer power mesh and satin ribbing.",
                        BigDecimal.valueOf(225.00),
                        BigDecimal.valueOf(250.00),
                        "Bodysuits",
                        false, true, false,
                        4.9, 29,
                        "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("XS", "S", "M", "L"),
                        Arrays.asList("Champagne Gold", "Noir Black"),
                        Arrays.asList("Steel flex boning", "Back lace-up ribbon detail", "Padded underwire cups"),
                        "Dry clean recommended."
                    ),
                    new Product(
                        "Monarch Silk Pyjama Lounge Set",
                        "monarch-silk-pyjama-lounge-set",
                        "Tailored pyjama jacket and fluid wide-leg pants in pure silk satin with gold contrast piping.",
                        BigDecimal.valueOf(350.00),
                        null,
                        "Loungewear & Robes",
                        false, false, true,
                        5.0, 11,
                        "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("S", "M", "L"),
                        Arrays.asList("Ivory White", "Champagne Gold", "Midnight Blue"),
                        Arrays.asList("22-momme Mulberry Silk", "Button front shirt", "Elastic waist trousers"),
                        "Gentle silk washing cycle."
                    ),
                    new Product(
                        "Gilded Rose Bridal Garter & Panty Set",
                        "gilded-rose-bridal-garter-and-panty-set",
                        "A romantic bridal set incorporating hand-sewn pearl beads, metallic champagne lace, and detachable garters.",
                        BigDecimal.valueOf(195.00),
                        null,
                        "Lingerie Sets",
                        false, false, true,
                        4.9, 8,
                        "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000",
                        Arrays.asList(
                            "https://images.unsplash.com/photo-1616847854615-4927b23c21c6?auto=format&fit=crop&q=80&w=1000"
                        ),
                        Arrays.asList("S", "M", "L"),
                        Arrays.asList("Champagne Gold", "Ivory White"),
                        Arrays.asList("Includes high-waisted briefs and garter straps", "Faux pearl bead accents", "Adjustable leg straps"),
                        "Hand wash only."
                    )
                ));
            }
        };
    }
}
