package com.main.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 
 * @author Maiko Bergman
 * Entry point of the application
 *
 */
@SpringBootApplication
@RestController
public class SollicitatieApplication {

	public static void main(String[] args) {
		SpringApplication.run(SollicitatieApplication.class, args);
	}
}
