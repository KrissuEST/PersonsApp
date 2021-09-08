package ee.kristjan.example.PersonsApp.model;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "person_id")
	private Long id;
	
	//We map column name to the field
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="age")
	private Integer age;
	
	@Column(name="birthday_date")
	private Instant birthdayDate;
	
	@Column(name="email_address")
	private String emailAddress;
	
	@Column(name="weight")
	private Double weight;
	
	@Column(name="height")
	private Double height;
	
//	@JsonIgnore    //If we don't want to return some data in my response.
	@ManyToOne    //Many nationalities can be connected to one Person.
	private Nationality nationality;
	
}
