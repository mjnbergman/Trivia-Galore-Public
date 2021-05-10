package com.main.demo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 
 * @author Maiko Bergman
 * Data model for encapsulating full questions received from the external server.
 * Extends SimpleQuestion to make storage of questions easier.
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
public class Question extends SimpleQuestion implements Serializable {
	private String category;
	private String type;
	private String difficulty;
	@JsonProperty("correct_answer")
	private String correctAnswer;
	@JsonProperty("incorrect_answers")
	@ElementCollection(targetClass=String.class)
	private List<String> incorrectAnswers;
	private int correctAnswerIndex;
	
	public Question() {
		super();
	}
	
	public Question(String cat, String ty, String dif, String que, String cor, List<String> incor) {
		super();
		this.category = cat;
		this.type = ty;
		this.difficulty = dif;
		this.question = que;
		this.correctAnswer = cor;
		this.incorrectAnswers = incor;
		this.anonymizeAnswers();
	}
	
	public void setQuestion(String q) {
		this.question = q;
	}
	
	public String getCategory() {
		return this.category;
	}
	public String getType() {
		return this.type;
	}
	public String getDifficulty() {
		return this.difficulty;
	}
	public String getQuestion() {
		return this.question;
	}
	public String getCorrectAnswer() {
		return this.correctAnswer;
	}
	public int getCorrectAnswerIndex() {
		return this.correctAnswerIndex;
	}
	public List<String> getIncorrectAnswers() {
		return this.incorrectAnswers;
	}
	/*
	 * Utility function to anonymize the list of answers in this question.
	 * It simply combines the correct answer and incorrect answers fields into one new list 
	 * (so all possible answer options are stored in a single list) shuffles that list
	 * so the correct answer cannot be derived from the ordering, returns it and saves it
	 * in its member field options as well
	 */
	public List<String> anonymizeAnswers(){
		List<String> anonAns = new ArrayList<String>(this.incorrectAnswers);
		anonAns.add(this.correctAnswer);
		Collections.shuffle(anonAns);
		this.options = anonAns;
		this.correctAnswerIndex = this.options.indexOf(this.correctAnswer);
		return anonAns;
	}
}
