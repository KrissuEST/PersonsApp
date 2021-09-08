## Projekti info

*Full stack* CRUD projekt, mis on tehtud kasutades tehnoloogiaid React ja Spring Boot. <br/>
Samuti on kasutatud Bootstrap-i, MVC-d ja H2 andmebaasi. <br/>
Natukene on rõhku pandud turvalisusele WeatherApp api key varjamisel. <br/>
Testisin projekti kasutades programmi Postman. Projektil on olemas *Header* ja *Footer*. <br/>
WeatherApp leht kasutab oma lehe kujundamisel Sass stiililehe keelt.

**Home** leht annab natukene infot projekti kohta. <br/>
**Nationalities** leht kuvab hetke kõigi rahvuste nimesid ja võimaldab uut rahvust juurde lisada. <br/>
**Persons** lehel saab näha andmebaasis olevaid kõiki inimesi ja nende andmeid. <br/>
Samuti saab Persons lehel läbi nuppude: lisada, vaadata, muuta ja kustutada inimese andmeid. <br/>
Kõigi tegevuste puhul toimuvad muutused ka H2 andmebaasis. <br/>
**Add Person** lehel saab lisada juurde uue inimese. <br/>
**WeatherApp** lehel on võimalik otsida ja näha antud linna ilma infot. Seal on kasutatud <br/>
apit leheküljelt: https://openweathermap.org/current apit. <br/>

React komponente saab siit: https://www.npmjs.com/package/react-datepicker <br/>
Kasutasin brauseri laiendust: React Developer Tool testimiseks.

### Projekti käivitamine

Arvutis peab olema Java JDK ja Node.js installeeritud. Lombok peab olema arendusvahendis seadistatud, <br>
muidu tekivad koodis vead, nt nii: https://projectlombok.org/setup/eclipse <br>
*Back-end* projekti käivitamiseks kasutades Eclipse IDE, teha projekti PersonsApp peal <br>
parem klikk -> Run As -> Spring Boot App <br>
Enne seda võib esmakordsel käivitusel projekti peal teha parem klikk -> Maven -> Update Projekt <br>
*Front-end* projekti käivitamiseks võib kasutada Node.js Command Prompt-i. <br>
Peab minema PesonsApp -> App kausta ja siis seal teha: npm install ja npm start. <br>
Kui projekt on käivitatud, saab talle ligi aadressilt: http://localhost:3000/ <br>
Antud aadress peaks käsu npm start käivitamisel ka ise automaatselt veebibrauseris ette tulema. <br>
WeatherApp projekti osa töötab ka ilma *back-end* projekti käivitamiseta.

### H2 andmebaasi seadistus

Näeb välja selline, minna antud aadressile ja vajutada nuppu Connect: http://localhost:8080/h2-console/ <br>
Andmebaasi seadistuse pilt: <br>
![H2 database](https://user-images.githubusercontent.com/5465035/122926967-127ed800-d371-11eb-92ae-f45eecfb6b47.PNG)

### Autor

Kristjan Tõnismäe
