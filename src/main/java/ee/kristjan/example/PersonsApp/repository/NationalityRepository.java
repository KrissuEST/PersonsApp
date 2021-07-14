package ee.kristjan.example.PersonsApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ee.kristjan.example.PersonsApp.model.Nationality;

public interface NationalityRepository extends JpaRepository<Nationality, Long> {
	
	//findBy + field
	Nationality findByName(String name);
}
