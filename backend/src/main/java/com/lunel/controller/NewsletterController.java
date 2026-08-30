package com.lunel.controller;

import com.lunel.model.NewsletterSubscription;
import com.lunel.repository.NewsletterSubscriptionRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/newsletter")
@CrossOrigin(origins = "*")
public class NewsletterController {

    private final NewsletterSubscriptionRepository repository;

    public NewsletterController(NewsletterSubscriptionRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/subscribe")
    public ResponseEntity<Map<String, String>> subscribe(@Valid @RequestBody NewsletterSubscription request) {
        Map<String, String> response = new HashMap<>();

        if (repository.existsByEmail(request.getEmail())) {
            response.put("message", "You are already subscribed to the Lunel VIP newsletter.");
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }

        repository.save(request);
        response.put("message", "Welcome to the Lunel inner circle. Thank you for subscribing.");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
