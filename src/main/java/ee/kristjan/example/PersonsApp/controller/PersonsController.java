package ee.kristjan.example.PersonsApp.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ee.kristjan.example.PersonsApp.exception.ResourceNotFoundException;
//import ee.kristjan.example.PersonsApp.model.Nationality;
import ee.kristjan.example.PersonsApp.model.Person;
import ee.kristjan.example.PersonsApp.repository.PersonsRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PersonsController {
	
	@Autowired   //It's constructor
	private PersonsRepository personsRepository;

	//GetMapping - get all the records from DB
	@GetMapping("/persons")
	public List<Person> getPersons() {
		return personsRepository.findAll();
	}
	
	//New here, get person by Id
	@GetMapping("/persons/{id}")
	public ResponseEntity<Person> getPersonById(@PathVariable Long id) {   //<Person> as generic type here
		Person person = personsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Person not exist with id :" + id));
		return ResponseEntity.ok(person);   //Return type here ResponseEntity
		//ok status - 200 OK status
	}
	
	//POST request - Add new person
	@PostMapping("/persons")
	public ResponseEntity<Person> createPerson(@Validated @RequestBody Person person) 
			throws URISyntaxException {
		Person result = personsRepository.save(person);
		return ResponseEntity.created(new URI("/api/persons" + result.getId())).body(result);
	}
	
//	//PUT - update a single person by id
//	@PutMapping("/persons/{id}")  
//	public ResponseEntity<Person> updatePerson(@Validated @RequestBody Person person) {
//		Person result = personsRepository.save(person);
//		return ResponseEntity.ok().body(result);
//	}
	
	//PUT - Update a single person by id
	@PutMapping("/persons/{id}")
	public ResponseEntity<Person> updatePerson(@PathVariable Long id, @Validated @RequestBody Person personDetails) {
		Person person = personsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Person not exist with id :" + id));
		
		person.setFirstName(personDetails.getFirstName());
		person.setLastName(personDetails.getLastName());
		person.setBirthdayDate(personDetails.getBirthdayDate());
		person.setNationality(personDetails.getNationality());
		person.setEmailAddress(personDetails.getEmailAddress());
		person.setAge(personDetails.getAge());
		person.setHeight(personDetails.getHeight());
		person.setWeight(personDetails.getWeight());
		
		Person updatedPerson = personsRepository.save(person);
		return ResponseEntity.ok(updatedPerson);
	}
	
//	//Delete person by id
//	@DeleteMapping("/persons/{id}")
//	public ResponseEntity<?> deletePerson(@PathVariable Long id) {
//		personsRepository.deleteById(id);
//		return ResponseEntity.ok().build();
//	}
	
	//Delete person by id
	@DeleteMapping("/persons/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePerson(@PathVariable Long id) {  //ResponseEntity - return type here
		Person person = personsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Person not exist with id :" + id));
		
		personsRepository.delete(person);
		Map<String, Boolean> response = new HashMap<>();  //Message: deleted true
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);  //Returning that map to client
	}

}
