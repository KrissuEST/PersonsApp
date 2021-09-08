package ee.kristjan.example.PersonsApp.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ee.kristjan.example.PersonsApp.exception.ResourceNotFoundException;
import ee.kristjan.example.PersonsApp.model.Nationality;
import ee.kristjan.example.PersonsApp.repository.NationalityRepository;

@CrossOrigin(origins = "http://localhost:3000")
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
	public Collection<Nationality> getNationalities() {
		return nationalityRepository.findAll();
	}
	
//	//Nationality/2   //Old version
//	@GetMapping("/nationality/{id}")
//	ResponseEntity<?> getNationality(@PathVariable Long id) {
//		//Optional bcs we don't know if this Id exists or not, if Id is valid.
//		Optional<Nationality> nationality = nationalityRepository.findById(id);
//		return nationality.map(response -> ResponseEntity.ok().body(response))
//				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));  //Response if we don't find anything
//	}
	
	//New here, get nationality by Id
	@GetMapping("/nationalities/{id}")
	public ResponseEntity<Nationality> getNationalityById(@PathVariable Long id) {
		Nationality nationality = nationalityRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Nationality not exist with id :" + id));
		return ResponseEntity.ok(nationality);
	}
	
	//POST, add new nationality
	@PostMapping("/nationalities")
	public ResponseEntity<Nationality> createNationality(@Validated @RequestBody Nationality nationality) 
			throws URISyntaxException {
		Nationality result = nationalityRepository.save(nationality);  //Same like insert into table ....
		return ResponseEntity.created(new URI("/api/nationalities" + result.getId())).body(result);
	}
//	
//	//Modify nationality, modify single record
//	@PutMapping("/nationality/{id}")
//	ResponseEntity<Nationality> updateNationality(@Validated @RequestBody Nationality nationality) {
//		Nationality result = nationalityRepository.save(nationality);
//		return ResponseEntity.ok().body(result);
//	}
	
//	//Delete nationality by Id
//	@DeleteMapping("/nationalities/{id}")
//	public ResponseEntity<Nationality> deleteNationality(@PathVariable Long id) {   //? - generic type
//		nationalityRepository.deleteById(id);
//		return ResponseEntity.ok().build();
//	}
	
	//Delete nationality by id
//	@DeleteMapping("/nationalities/{id}")
//	public ResponseEntity<Map<String, Boolean>> deleteNationality(@PathVariable Long id) {  //ResponseEntity - return type here
//		Nationality nationality = nationalityRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("Nationality not exist with id :" + id));
//		
//		nationalityRepository.delete(nationality);
//		Map<String, Boolean> response = new HashMap<>();  //Message: deleted true
//		response.put("deleted", Boolean.TRUE);
//		return ResponseEntity.ok(response);  //Returning that map to client
//	}

}
