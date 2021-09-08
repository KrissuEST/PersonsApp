package ee.kristjan.example.PersonsApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ee.kristjan.example.PersonsApp.model.Person;

//Database connection, mapping Person class to database table.
//The art of Jpa, Hiberante, converting Java class to Database table and vice versa.
@Repository
public interface PersonsRepository extends JpaRepository<Person, Long> {

}
