# Browser Technologies @cmda-minor-web 1920

## Inhoudspagina

- [Live Demo](#Live-Demo)
- [Feedback](#Feedback)
- [Concept](#Concept)
- [Wireflows](#Wireflows)
- [Installatie](#Installatie)
- [Bronnen](#Bronnen)
- [Credits](#Credits)

## Live Demo

[Live Demo]()
De live demo werkt nog niet.

## Feedback

-

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

<details>
  <summary> Semantische HTML (Laag 1)
</summary>
  Voor deze laag beginnen we met het uitschakelen van de CSS en Javascript, en kijken of alles naar behoren werkt.
  <img width="840" alt="2 1" src="https://user-images.githubusercontent.com/45422060/76973659-893c5280-6930-11ea-9ef5-f4fec0cd5bc1.png">
    
 </details>

#### Usable

<details>
<summary>Design Patterns CSS (Laag 2) </summary>
<img width="900" alt="2 2" src="https://user-images.githubusercontent.com/45422060/76973662-89d4e900-6930-11ea-8d47-acfbfe616056.png">
</details>

#### Pleasurable

<details>
<summary> Javascript (Laag 3) </summary>
<img width="883" alt="2 3" src="https://user-images.githubusercontent.com/45422060/76973664-8b061600-6930-11ea-9fe0-c8fb3cf50962.png">
<details>

## Installatie

### Nodejs

Ik had nodejs al geinstalleerd op mijn computer. Om te controleren of NPM al is geintalleerd kun je het volgende commando toepassen in je terminal;

> node -v

Als je nodejs nog niet hebt kun je dit installeren via de volgende link;
[Nodejs installeren](https://nodejs.org/en/download/)

### NPM

Om te controleren of je NPM al hebt geinstalleerd kun je het volgende commando uitvoeren in je terminal;

> npm -v

Als je NPM nog moet installeren kun je het volgende commando uitvoeren in je terminal;

> npm install npm@latest -g

### Express

Om express te installeren heb je een aantal verschillende stappen nodig. Hierbij gaan we ervan uit dat je nodejs succesvol hebt geinstalleerd.

> mkdir myapp
> cd myapp

Gebruik npm init om een bestand package.json file aan te maken voor je applicatie.

> npm init

Om de standaard instellingen te accepteren zoals de versie en de naam van je applicatie kun je op enter klikken. In de entry point vul je de naam van je javascript bestand in.

> entry point: (index.js)

Installeer express in de dependecies list

> npm install express --save

### Nodemon

Nodemon kan de wijzigingen die je toepast in de applicatie meteen doorvoegen naar je localhost. Hierdoor hoef je niet iedere keer NPM af te sluiten en opnieuw op te starten. Nodemon installeer je op de volgende manier in je dependencies;

> npm install --save-dev nodemon

### ejs

Door middel van ejs kun je html renderen in je bestanden. Om ejc te installeren gebruik je het volgende commando;

> npm install ejs

## Bronnen

- [CODEPEN FORM](https://codepen.io/balapa/pen/XbXVRg)
- [W3SCHOOLS](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_reset)

## Credits

- Ramon, hij heeft mij geholpen met het opzetten van de link om de enquete op te slaan.
