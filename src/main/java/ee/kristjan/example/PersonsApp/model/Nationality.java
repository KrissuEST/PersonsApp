package ee.kristjan.example.PersonsApp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name="nationality")
public class Nationality {
	
	@Id
	private Long id;

	private String name;
	
}
