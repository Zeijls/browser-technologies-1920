# Progressive Web App enquete

## Browser Technologies @cmda-minor-web 1920

<img width="1222" alt="Screenshot 2020-03-20 at 13 42 02" src="https://user-images.githubusercontent.com/45422060/77164557-d9422300-6ab0-11ea-9c25-7220dabaf842.png">

## Inhoudsopgave

- [Live Demo](#Live-Demo)
- [Installatie](#Installatie)
- [Feedback](#Feedback)
- [Concept](#Concept)
- [Wireflows](#Wireflows)
- [Artikelen](#Artikelen)
- [Opdrachten](#Opdrachten)
- [To Do](#To-Do)
- [Bronnen](#Bronnen)
- [Credits](#Credits)

## Live Demo

[Live Demo]()
De live demo werkt nog niet. Moet ik nog deployen via Heroku

## Installatie

### Nodejs

<details>
<summary> Nodejs </summary>

Ik had nodejs al geinstalleerd op mijn computer. Om te controleren of NPM al is geintalleerd kun je het volgende commando toepassen in je terminal;

> node -v

Als je nodejs nog niet hebt kun je dit installeren via de volgende link;
[Nodejs installeren](https://nodejs.org/en/download/)

</details>

### NPM

<details>
<summary> NPM </summary>
Om te controleren of je NPM al hebt geinstalleerd kun je het volgende commando uitvoeren in je terminal;

> npm -v

Als je NPM nog moet installeren kun je het volgende commando uitvoeren in je terminal;

> npm install npm@latest -g

</details>

### Express

<details>
<summary> Express </summary>
Om express te installeren heb je een aantal verschillende stappen nodig. Hierbij gaan we ervan uit dat je nodejs succesvol hebt geinstalleerd.

> mkdir myapp
> cd myapp

Gebruik npm init om een bestand package.json file aan te maken voor je applicatie.

> npm init

Om de standaard instellingen te accepteren zoals de versie en de naam van je applicatie kun je op enter klikken. In de entry point vul je de naam van je javascript bestand in.

> entry point: (index.js)

Installeer express in de dependecies list

> npm install express --save

</details>

### Nodemon

<details>
<summary> Nodemon </summary>

Nodemon kan de wijzigingen die je toepast in de applicatie meteen doorvoegen naar je localhost. Hierdoor hoef je niet iedere keer NPM af te sluiten en opnieuw op te starten. Nodemon installeer je op de volgende manier in je dependencies;

> npm install --save-dev nodemon

</details>

### ejs

<details>
<summary> ejs </summary>

Door middel van ejs kun je html renderen in je bestanden. Om ejc te installeren gebruik je het volgende commando;

> npm install ejs

</details>

## Feedback

- Is de opbouw van de readme zo goed?
- Klopt mijn opbouw in de lagen zoals ik het nu wil aanpakken aan de hand van Progressive Enhancement?
- Is mijn eerste versie van de HTMl nu netjes opgebouwd op basis van de theorie uit de gelezen artikelen?

## Concept

### Invullen van de Enquete

Je kunt verschillende vragen beantwoorden in de enquete
<img width="1222" alt="Screenshot 2020-03-20 at 13 42 02" src="https://user-images.githubusercontent.com/45422060/77164557-d9422300-6ab0-11ea-9c25-7220dabaf842.png">

### Opslaan

Zodra je de antwoorden wilt opslaan ontvang je een linkje waarmee je de enquete later kunt vervolgen.
<img width="1440" alt="Screenshot 2020-03-20 at 13 42 28" src="https://user-images.githubusercontent.com/45422060/77164559-d9dab980-6ab0-11ea-8f78-b4eae7c5f7b2.png">

### Overzicht beantwoorde vragen

Zodra je op versturen klikt krijg je een overzicht van de beantwoorde vragen. Hier komt een button waarbij de de antwoorden kunt bevestigen.

### Bevestiging

Zodra de enquete is bevestigd krijg je nog een laatste bericht met een bedankje voor het invullen van de enquete. Zo ver was ik nu nog niet gekomen.

## Wireflows

#### Features

- Enquete invullen met verschillende antwoordmogelijkheden
- Enquete opslaan om later te hervatten (Mogelijk met hidden form field)

#### Functional / Reliable

In de functional Laag kun je de vragen van de enquete invullen en opslaan om later te hervatten. Je kunt je antwoorden opsturen, dan krijg je een overzicht van de gegeven antwoorden, en vervolgens een bevestiging dat de enquete is verstuurd.

<details>
  <summary> Semantische HTML (Laag 1)
</summary>
  <img width="840" alt="2 1" src="https://user-images.githubusercontent.com/45422060/76973659-893c5280-6930-11ea-9ef5-f4fec0cd5bc1.png">
 </details>

#### Usable

In de usable laag ziet het formulier er heel netjes uit, maar de werking van het formulier is in principe hetzelfde als bij de functional laag. Er wordt wel een navigatie balk aan het concept toegevoegd zodat het voor de gebruiker duidelijk is hoeveel vragen er nog op hem te wachten staan.

<details>
<summary>Design Patterns CSS (Laag 2) </summary>
<img width="900" alt="2 2" src="https://user-images.githubusercontent.com/45422060/76973662-89d4e900-6930-11ea-8d47-acfbfe616056.png">
</details>

#### Pleasurable

In de pleasurable laag wordt de volgende vraag pas beschikbaar als het antwoord naar behoren is ingevuld. Verder kan de gebruiker in deze laag zijn formulier opslaan, zonder het linkje in de eerste twee lagen.

<details>
<summary> Javascript (Laag 3) </summary>
<img width="883" alt="2 3" src="https://user-images.githubusercontent.com/45422060/76973664-8b061600-6930-11ea-9fe0-c8fb3cf50962.png">
</details>

## Artikelen

Ik maak van alle artikelen een aantekening. Deze hou ik bij via Github Pages.
[Github Aantekeningen](https://minor-web-dev.gitbook.io/browser-technologies/)

## Opdrachten

Deze opdrachten staan in mijn WIKI
[Browser Onderzoek](https://github.com/Zeijls/browser-technologies-1920/wiki/Browser-Onderzoek) <br>
[Device Onderzoek](https://github.com/Zeijls/browser-technologies-1920/wiki/Device-onderzoek)<br>
[Features](https://github.com/Zeijls/browser-technologies-1920/wiki/Features)<br>
[Screenreader](https://github.com/Zeijls/browser-technologies-1920/wiki/Screenreader)<br>

## To Do

- [ ] Heroku laten werken
- [ ] Issue feedback Menno verwerken (Screenreader verder uitbreiden)
- [x] Artikelen lezen
- [ ] Object detection uitzoeken (JS)
- [ ] Opdracht 2
- [x] Readme bijwerken

## Bronnen

- [CODEPEN FORM](https://codepen.io/balapa/pen/XbXVRg)
- [W3SCHOOLS](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_reset)

## Credits

- Ramon, hij heeft mij geholpen met het opzetten van de link om de enquete op te slaan.
