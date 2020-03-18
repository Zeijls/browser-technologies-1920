# Browser Technologies

## Opdracht 2 - Progressive Enhanced Browser Technologie

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen. Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhanced feature een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning. Beschrijf de feature(s)/Browser Technologies, welke browser de feature(s) wel/niet ondersteunen, en de accessibility issues die zijn onderzocht.

### Doel van deze opdracht

Het doel van deze opdracht is te leren hoe je een online functionaliteit zo kan maken met behulp van Progressive enhancement en Feature detectie dat deze het altijd doet ...

### Uitleg

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de _core functionaliteit_ te zien/horen/voelen krijgen en maximaal een hele goede UX.

Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement.

Gebruik als enhancement een (innovatieve, vooruitstrevende, onbekende, nieuwe) [Browser Technologie](https://platform.html5.org) die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning. Je onderzoekt hoe je verschillende features door verschillende browsers worden ondersteund en hoe je voor goede fallback kan zorgen. Test de features op verschillende browsers en het Device Lab. Polyfills en NPM is niet toegestaan.

Gebruik [html5test.com](https://html5test.com), [css3test.com](http://css3test.com) en [kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

### Werkwijze

Schets eerst een wireflow en/of breakdown-schets met hoe de demo moet gaan werken en hoe het eruit komt te zien. Bepaal de functional/reliable, usable en pleasurable laag.

- Onderzoek voor de functional/reliable laag naar semantische HTML elementen
- Kijk voor de usable laag naar design patterns die je zou kunnen toepassen
- De meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken … Dit is de pleasurable laag.

### Gekozen use Case

1. Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Wire Flow

#### Features

- Enquete invullen met verschillende antwoordmogelijkheden
- Enquete opslaan om later te hervatten (Mogelijk met hidden form field)

#### Functional / Reliable => Semantische HTMl (Laag 1)

Voor deze laag beginnen we met het uitschakelen van de CSS en Javascript, en kijken of alles naar behoren werkt.
<img width="577" alt="1" src="https://user-images.githubusercontent.com/45422060/76963469-5d65a080-6921-11ea-9ea3-629ae9022725.png">

#### Usable => Design Patterns CSS (Laag 2)

<img width="600" alt="2" src="https://user-images.githubusercontent.com/45422060/76963574-87b75e00-6921-11ea-8444-4d40ab2ab107.png">

#### Pleasurable => Javascript (Laag 3)

<img width="362" alt="3" src="https://user-images.githubusercontent.com/45422060/76963578-88e88b00-6921-11ea-97f9-5fc9886b0a8f.png">

### Criteria

- De code staat in een repository op GitHub
- Er is een Readme toegevoegd met daarin beschreven:
  - Een (wireflow) schets van de functionaliteit met een beschrijving van de core functionality. Geef ook aan wat de functional/reliable, usable en pleasurable laag.
  - een beschrijving van de feature(s)/Browser Technologies
  - welke browser de feature(s) wel/niet ondersteunen
  - een beschrijving van de accessibility issues die zijn onderzocht
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- De user experience van de demo is goed
  - de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
  - het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
  - met meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken
- Student kan de Basic functionaliteit van een use case doorgronden
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development
