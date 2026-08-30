package com.lunel.controller;

import com.lunel.model.Category;
import com.lunel.model.Product;
import com.lunel.repository.CategoryRepository;
import com.lunel.repository.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductController(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String query,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice) {

        String queryParam = (query != null && !query.trim().isEmpty()) ? query.trim() : null;
        String categoryParam = (category != null && !category.trim().isEmpty() && !"all".equalsIgnoreCase(category)) ? category.trim() : null;

        List<Product> products = productRepository.searchProducts(categoryParam, queryParam, minPrice, maxPrice);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/products/slug/{slug}")
    public ResponseEntity<Product> getProductBySlug(@PathVariable String slug) {
        return productRepository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/products/featured")
    public ResponseEntity<List<Product>> getFeaturedProducts() {
        return ResponseEntity.ok(productRepository.findByFeaturedTrue());
    }

    @GetMapping("/products/best-sellers")
    public ResponseEntity<List<Product>> getBestSellers() {
        return ResponseEntity.ok(productRepository.findByBestSellerTrue());
    }

    @GetMapping("/products/new-arrivals")
    public ResponseEntity<List<Product>> getNewArrivals() {
        return ResponseEntity.ok(productRepository.findByNewArrivalTrue());
    }

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalProducts", productRepository.count());
        stats.put("totalCategories", categoryRepository.count());
        stats.put("brandFounder", "Zhypara Bolotbekova");
        return ResponseEntity.ok(stats);
    }
}
