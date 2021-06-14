package ee.kristjan.example.PersonsApp.model;

//import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table (name="user")
public class User {
	
	@Id
	private Long id;
	
	private String name;

// 	@OneToMany    //Ühel kasutajal võib olla mitu kategooriat. Hetkel pole vaja.
// 	private Set<Category> category;
	
}
