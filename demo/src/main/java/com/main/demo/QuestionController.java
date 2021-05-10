package com.main.demo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.main.demo.Question;

/**
 * 
 * @author Maiko Bergman
 * Main controller class for the application. Handles the /questions and /checkanswer URLs.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200") // Needed in order to allow Angular frontend to make calls to backend
public class QuestionController {
	
	// Rest template for making REST calls to obtain questions
	@Autowired
	private RestTemplate restTemplate;
	
	// Question repository. All loaded questions are stored here.
	private final QuestionRepository qRepo;
	
	@Autowired
	public QuestionController(QuestionRepository repo) {
		this.qRepo = repo;
	}
	
	/*
	 * Handler for the /questions URL. Makes a REST call to the opentdb server 
	 * to obtain a list of questions. Parses these to Question model representation
	 * and stores them in the repository.
	 */
	@GetMapping("/questions")
	public List<SimpleQuestion> getQuestions(@RequestParam(value="nr", defaultValue="1") String nr) {
		final String uri = String.format("https://opentdb.com/api.php?amount=%s", nr);
		restTemplate = new RestTemplate();
		ResponseEntity<String> result = restTemplate.getForEntity(uri, String.class);
		ObjectMapper mapper = new ObjectMapper();
		JsonNode root;
		qRepo.deleteAll();
		try {
			root = mapper.readTree(result.getBody());
			JsonNode q = root.path("results"); // The json results element contains the questions

			for (JsonNode arrItem : q) {
				Question tQ = mapper.treeToValue(arrItem, Question.class);
				tQ.anonymizeAnswers(); // Anonymize the question so user cannot tell the correct answer
				qRepo.save((SimpleQuestion)tQ);
			}
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		return anonymizeRepo();
	   
	}
	
	/*
	 * Function that anonymizes the entire repository
	 * Creates and returns a new repository with the same list of questions
	 * but with all the Question specific fields removed. Only the SimpleQuestion parent fields remain.
	 */
	private List<SimpleQuestion> anonymizeRepo() {
		ArrayList<SimpleQuestion> anonymousList = new ArrayList<SimpleQuestion>();
		List<SimpleQuestion> fullQuestions = (List<SimpleQuestion>) qRepo.findAll();
		for(SimpleQuestion q : fullQuestions) {
			anonymousList.add(new SimpleQuestion(q));
		}
		return anonymousList;
	}
	
	/*
	 * Handler for the /checkanswer URL. Extracts the posted answers as a mapping where
	 * the keys indicate the question IDs and the values indicate the answers.
	 */
	@PostMapping("/checkanswer")
	public Map<Long, Boolean> checkAnswers(@RequestBody Map<Long, String> id){
		HashMap<Long, Boolean> correct = new HashMap<Long, Boolean>();
		for (Map.Entry<Long, String> entry : id.entrySet()) {
			Optional<SimpleQuestion> questionResponse = qRepo.findById(entry.getKey());
			Question fullQuestion = (Question) questionResponse.get();
			correct.put(entry.getKey(), entry.getValue().equals(fullQuestion.getCorrectAnswer()));
		}		
		return correct;
	}
}
