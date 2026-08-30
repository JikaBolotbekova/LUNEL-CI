package com.lunel.controller;

import com.lunel.model.Product;
import com.lunel.repository.CategoryRepository;
import com.lunel.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ProductRepository productRepository;

    @Test
    void shouldReturnAllProducts() throws Exception {
        mockMvc.perform(get("/api/products"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.length()").value(12));
    }

    @Test
    void shouldReturnFeaturedProducts() throws Exception {
        mockMvc.perform(get("/api/products/featured"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].featured").value(true));
    }

    @Test
    void shouldReturnProductBySlug() throws Exception {
        mockMvc.perform(get("/api/products/slug/aura-champagne-silk-triangle-bra"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Aura Champagne Silk Triangle Bra"));
    }

    @Test
    void shouldAllowNewsletterSubscription() throws Exception {
        String json = "{\"email\": \"vip@lunel-lingerie.com\"}";
        mockMvc.perform(post("/api/newsletter/subscribe")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.message").exists());
    }

    @Test
    void shouldSaveContactMessage() throws Exception {
        String json = "{\"name\": \"Elena\", \"email\": \"elena@example.com\", \"subject\": \"Custom Sizing\", \"message\": \"I would like to request custom sizing for Aura Bra.\"}";
        mockMvc.perform(post("/api/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isCreated());
    }
}
