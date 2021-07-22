## Projekti info

Full stack projekt, mis on tehtud kasutades tehnoloogiaid React ja Spring Boot. <br>
Samuti on kasutatud Bootstrap-i, MVC-d ja H2 andmebaasi. <br>
Natukene on rõhku pandud turvalisusele WeatherApp api key varjamisel. <br>
Testisin projekti kasutades programmi Postman. <br>
<br>
**Home** leht annab natukene infot projekti kohta, **Persons** lehel saab inimest koos andmetega lisada ja kuvab andmeid, <br>
**Nationalities** leht kuvab hetke kõiki rahvuseid mis on olemas. **WeatherApp** lehel on võimalik sisestada linna nimi <br>
ja näha antud linna ilma infot. Seal on kasutatud lehe https://openweathermap.org/current apit. <br>
Hetkel saab lisada vaid ühe inimese ja kui uuesti väljad täita, siis muudetakse viimase lisatud inimese kirje andmed. <br>
Samuti saab igat inimest kustutada. Kirje lisamisel, muutmisel ja kustutamisel toimuvad ka muutused H2 andmebaasis. <br>
See rida kus on kirjas Averages, seal on lisatud vaid näiteandmed. Kahjuks ei õnnestunud realiseerida 3 viimast ülesannet: <br>
1. Keskmiste arvutamist.
2. Kuvada viimane ehk suurim Id.
3. Kirje kustutamisel peaksid ülejäänud Id-d muutuma.

React komponente saab siit: https://www.npmjs.com/package/react-datepicker <br>
React Developer Tool brauseri laiendus testimiseks.

### Projekti käivitamine

Arvutis peab olema Java JDK ja Node.js. Lombok peab olema arendusvahendis seadistatud, <br>
muidu tekivad koodis vead, nt nii: https://projectlombok.org/setup/eclipse <br>
Back-end projekti käivitamiseks kasutades Eclipse IDE, teha projekti PersonsApp peal <br>
parem klikk -> Run As -> Spring Boot App <br>
Enne seda võib esmakordsel käivitusel projekti peal teha parem klikk -> Maven -> Update Projekt <br>
Front-end projekti käivitamiseks võib kasutada Node.js Command Prompt-i. <br>
Peab minema PesonsApp -> App kausta ja siis seal teha npm install ja npm start. <br>
Kui projekt on käivitatud, saab talle ligi aadressil: http://localhost:3000/ <br>
Antud aadress peaks npm start käivitamisel ka ise veebibrauseris ette tulema. <br>
WeatherApp projekti osa töötab ka ilma *back-end* projekti käivitamiseta.

### H2 andmebaasi seadistus

Näeb välja selline, minna aadressile ja vajutada connect: http://localhost:8080/h2-console/ <br>
Andmebaasi seadistuse pilt: <br>
![H2 database](https://user-images.githubusercontent.com/5465035/122926967-127ed800-d371-11eb-92ae-f45eecfb6b47.PNG)

### Autor

Kristjan Tõnismäe
