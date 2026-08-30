package com.lunel.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(nullable = false)
    private BigDecimal price;

    private BigDecimal originalPrice;

    @Column(nullable = false)
    private String category;

    private boolean featured;

    private boolean bestSeller;

    private boolean newArrival;

    private Double rating;

    private Integer reviewCount;

    @Column(nullable = false)
    private String imageUrl;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "image_url")
    private List<String> galleryImages = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_sizes", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "size_name")
    private List<String> sizes = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_colors", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "color_name")
    private List<String> colors = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_details", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "detail_text")
    private List<String> details = new ArrayList<>();

    @Column(columnDefinition = "TEXT")
    private String fabricCare;

    public Product() {}

    public Product(String name, String slug, String description, BigDecimal price, BigDecimal originalPrice,
                   String category, boolean featured, boolean bestSeller, boolean newArrival,
                   Double rating, Integer reviewCount, String imageUrl, List<String> galleryImages,
                   List<String> sizes, List<String> colors, List<String> details, String fabricCare) {
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.price = price;
        this.originalPrice = originalPrice;
        this.category = category;
        this.featured = featured;
        this.bestSeller = bestSeller;
        this.newArrival = newArrival;
        this.rating = rating;
        this.reviewCount = reviewCount;
        this.imageUrl = imageUrl;
        this.galleryImages = galleryImages != null ? galleryImages : new ArrayList<>();
        this.sizes = sizes != null ? sizes : new ArrayList<>();
        this.colors = colors != null ? colors : new ArrayList<>();
        this.details = details != null ? details : new ArrayList<>();
        this.fabricCare = fabricCare;
    }

    // Getters and Setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public BigDecimal getOriginalPrice() { return originalPrice; }
    public void setOriginalPrice(BigDecimal originalPrice) { this.originalPrice = originalPrice; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public boolean isBestSeller() { return bestSeller; }
    public void setBestSeller(boolean bestSeller) { this.bestSeller = bestSeller; }

    public boolean isNewArrival() { return newArrival; }
    public void setNewArrival(boolean newArrival) { this.newArrival = newArrival; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public Integer getReviewCount() { return reviewCount; }
    public void setReviewCount(Integer reviewCount) { this.reviewCount = reviewCount; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public List<String> getGalleryImages() { return galleryImages; }
    public void setGalleryImages(List<String> galleryImages) { this.galleryImages = galleryImages; }

    public List<String> getSizes() { return sizes; }
    public void setSizes(List<String> sizes) { this.sizes = sizes; }

    public List<String> getColors() { return colors; }
    public void setColors(List<String> colors) { this.colors = colors; }

    public List<String> getDetails() { return details; }
    public void setDetails(List<String> details) { this.details = details; }

    public String getFabricCare() { return fabricCare; }
    public void setFabricCare(String fabricCare) { this.fabricCare = fabricCare; }
}
