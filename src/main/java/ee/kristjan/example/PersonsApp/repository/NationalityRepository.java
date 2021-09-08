package ee.kristjan.example.PersonsApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ee.kristjan.example.PersonsApp.model.Nationality;

@Repository
public interface NationalityRepository extends JpaRepository<Nationality, Long> {
	
//	//findBy + field
//	Nationality findByName(String name);
	
}
