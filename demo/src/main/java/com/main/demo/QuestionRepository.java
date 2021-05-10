package com.main.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * 
 * @author Maiko Bergman
 * Simple repository interface for storing the questions.s
 *
 */
@Repository
public interface QuestionRepository extends CrudRepository<SimpleQuestion, Long> {

}
