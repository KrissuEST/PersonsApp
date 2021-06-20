package ee.kristjan.example.PersonsApp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
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
	
	private Double weight;
	
	private Double height;
	
//	@JsonIgnore    //If we don't want to include User data in my response.
//	@ManyToOne
//	private User user;
	
}
