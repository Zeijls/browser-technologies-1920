# Progressive Web App enquete

## Browser Technologies @cmda-minor-web 1920

<img width="1222" alt="Screenshot 2020-03-20 at 13 42 02" src="https://user-images.githubusercontent.com/45422060/77164557-d9422300-6ab0-11ea-9c25-7220dabaf842.png">

## Inhoudsopgave

- [Live Demo](#Live-Demo)
- [Installatie](#Installatie)
- [Concept](#Concept)
- [Wireflows](#Wireflows)
- [Feature Detection](#Feature-Detection)
  - [Onderzoek 8 features](#Onderzoek-8-features-Opdracht-2)
  - [Browser Testing](#Browser-Testing)
- [Artikelen](#Artikelen)
- [Opdrachten](#Opdrachten)
- [To Do](#To-Do)
- [Bronnen](#Bronnen)
- [Credits](#Credits)

## Live Demo

[Live Demo]()
De live demo werkt nog niet. Moet ik nog deployen via Heroku

## Installatie

### Installatie

```bash
#### Clone repository
git clone https://github.com/zeijls/browser-technologies-1920.git

cd progressive-web-apps-1920

#### Installeer dependencies en start de server
npm run dev
```

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

## Feature Detection

### Onderzoek 8 features Opdracht 2

Nadat opdracht 2 was afgerond heb ik opnieuw het 8 feature onderzoek toegepast op de enquete. De resultaten heb ik bij gehouden in mijn wiki.
[Wiki 8 Features Opdracht 2](https://github.com/Zeijls/browser-technologies-1920/wiki/Opdracht-2-Features-Enquete)

### Browser testing

<details><summary> Firefox </summary>
Voor het testen in verschillende browsers ben ik begonnen met Firefox. In deze browser werkte alles naar behoren en had ik nergens iets op aan te merken.
</details>

<details><summary> Safari </summary>
Alle features werken naar behoren.

</details>

<details><summary> Opera </summary>
Bij opera was eigenlijk precies hetzelfde verhaal als bij firefox en safari. Vanaf dit moment wilde ik alle browsers gaan uittesten. Ik kwam op de volgende website en hier kun je een proeftest draaien met allemaal verschillende browsers.
[Lamdatest](https://app.lambdatest.com/console/realtime)
</details>

<details><summary> Edge </summary>
Via lambdatest heb ik mijn Enquete getest via de browser Edge. Ik heb hier geen problemen mee ondervonden. 
</details>

<details><summary> Internet Explorer </summary>
Het testen van Internet Explorer heb ik ook getest via Lambdatest. Hier heb ik een aantal fouten ondervonden. De share button is niet clickable. Hier staat al een fallback onder, maar doordat je niet op de button kunt klikken, wordt deze niet weergegeven. De antwoorden die de gebruiker invoert worden niet automatisch opgeslagen in local storage. Voor bovenstaande problemen ga ik een oplossing zoeken.
</details>

### Fallback

<details><summary> Auto Save Local Storage </summary>

</details>

<details><summary> Reset button </summary>

</details>

<details><summary> Share button </summary>

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
- [ ] [Aria label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)

## Bronnen

- [CODEPEN FORM](https://codepen.io/balapa/pen/XbXVRg)
- [W3SCHOOLS](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_reset)

## Credits

- Ramon, hij heeft mij geholpen met het opzetten van de link om de enquete op te slaan.
