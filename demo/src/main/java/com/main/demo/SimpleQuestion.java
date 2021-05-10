package com.main.demo;

import java.io.Serializable;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;


/**
 * 
 * @author Maiko Bergman
 * Data model for storing SimpleQuestion. A SimpleQuestion is a question that
 * can safely be sent to the user. It contains only the fields that are actually presented
 * in the frontend. 
 *
 */
@Entity
@Inheritance
public class SimpleQuestion implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long questionID;
	
	protected String question;
	
	@ElementCollection(targetClass=String.class)
	protected List<String> options;
	
	public SimpleQuestion() {
		
	}
	
	public SimpleQuestion(String q, List<String> ans) {
		this.question = q;
		this.options = ans; 
	}
	
	public SimpleQuestion(SimpleQuestion copy) {
		this.question = copy.getQuestion();
		this.options = copy.getOptions();
		this.questionID = copy.getID();
	}
	
	public String getQuestion() {
		return this.question;
	}
	public List<String> getOptions(){
		return this.options;
	}
	public long getID() {
		return this.questionID;
	}
}
