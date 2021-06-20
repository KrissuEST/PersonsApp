package ee.kristjan.example.PersonsApp.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ee.kristjan.example.PersonsApp.model.Person;
import ee.kristjan.example.PersonsApp.repository.PersonsRepository;

@RestController
@RequestMapping("/api")
public class PersonsController {
	
	@Autowired   //It's constructor
	private PersonsRepository personsRepository;

	//GetMapping - get all the records from DB
	@GetMapping("/persons")    //Working!
	List<Person> getPersons() {
		return personsRepository.findAll();
	}
	
	//Delete DB record by id, delete person
	@DeleteMapping("/persons/{id}")   //Working!
	ResponseEntity<?> deletePerson(@PathVariable Long id) {
		personsRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	//POST request, add new person
	@PostMapping("/persons")    //Working!
	ResponseEntity<Person> createPerson(@Validated @RequestBody Person person) throws URISyntaxException {
		Person result = personsRepository.save(person);
		return ResponseEntity.created(new URI("/api/persons" + result.getId())).body(result);
	}

}
