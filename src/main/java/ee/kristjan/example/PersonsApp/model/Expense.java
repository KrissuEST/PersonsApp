package ee.kristjan.example.PersonsApp.model;

//import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

//import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
//@AllArgsConstructor
@Entity
@Data
@Table (name="expense")
public class Expense {
	
	@Id
	private Long id;
	
	private Integer age;
	
	private Double weight;
	
	private Double height;
	
//	@ManyToOne
//	private Category category;
	
	@ManyToOne
	private User user;
	
}
