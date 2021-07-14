package ee.kristjan.example.PersonsApp.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ee.kristjan.example.PersonsApp.model.Nationality;
import ee.kristjan.example.PersonsApp.repository.NationalityRepository;

@RestController
@RequestMapping("/api")
public class NationalityController {
	
	private NationalityRepository nationalityRepository;

	public NationalityController(NationalityRepository nationalityRepository) {
		super();
		this.nationalityRepository = nationalityRepository;
	}
	
	//SELECT * FROM nationality
	@GetMapping("/nationalities")
	Collection<Nationality> nationalities() {
		return nationalityRepository.findAll();
	}
	
	//Nationality/2
	@GetMapping("/nationality/{id}")
	ResponseEntity<?> getCategory(@PathVariable Long id) {
		//Optional bcs we don't know if this Id exists or not, if Id is valid.
		Optional<Nationality> nationality = nationalityRepository.findById(id);
		return nationality.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));  //Response if we don't find anything
	}
	
	//Add new nationality
	@PostMapping("/nationality")
	ResponseEntity<Nationality> createNationality(@Validated @RequestBody Nationality nationality)
			throws URISyntaxException {
		Nationality result = nationalityRepository.save(nationality);  //Same like insert into table ....
		return ResponseEntity.created(new URI("/api/nationality" + result.getId())).body(result);
	}
	
	//Modify nationality, modify single record
	@PutMapping("/nationality/{id}")
	ResponseEntity<Nationality> updateCategory(@Validated @RequestBody Nationality nationality) {
		Nationality result = nationalityRepository.save(nationality);
		return ResponseEntity.ok().body(result);
	}
	
	//Delete nationality by Id
	@DeleteMapping("/nationality/{id}")
	ResponseEntity<?> deleteCategory(@PathVariable Long id) {   //? - generic type
		nationalityRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}

}
