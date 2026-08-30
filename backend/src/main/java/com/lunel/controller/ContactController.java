package com.lunel.controller;

import com.lunel.model.ContactMessage;
import com.lunel.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> sendMessage(@Valid @RequestBody ContactMessage message) {
        repository.save(message);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Thank you for contacting Lunel Concierge. Our team will get back to you shortly.");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
