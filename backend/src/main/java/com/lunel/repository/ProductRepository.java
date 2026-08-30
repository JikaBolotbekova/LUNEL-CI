package com.lunel.repository;

import com.lunel.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findBySlug(String slug);

    List<Product> findByCategoryIgnoreCase(String category);

    List<Product> findByFeaturedTrue();

    List<Product> findByBestSellerTrue();

    List<Product> findByNewArrivalTrue();

    @Query("SELECT p FROM Product p WHERE " +
           "(:category IS NULL OR LOWER(p.category) = LOWER(:category)) AND " +
           "(:query IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(p.description) LIKE LOWER(CONCAT('%', :query, '%'))) AND " +
           "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
           "(:maxPrice IS NULL OR p.price <= :maxPrice)")
    List<Product> searchProducts(@Param("category") String category,
                                 @Param("query") String query,
                                 @Param("minPrice") Double minPrice,
                                 @Param("maxPrice") Double maxPrice);
}
