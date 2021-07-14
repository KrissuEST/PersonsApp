package ee.kristjan.example.PersonsApp.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
//import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data   //Sets all Getters and Setters
@Table(name="person")
public class Person {
	
	@Id
	private Long id;
	
	private String name;
	
	private Integer age;
	
	private Instant personDate;
	
	private Double weight;
	
	private Double height;
	
//	@JsonIgnore    //If we don't want to return some data in my response.
	@ManyToOne    //Many nationalities can be connected to one Person.
	private Nationality nationality;
	
}
