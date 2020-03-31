# Progressive Web App enquete

## Browser Technologies @cmda-minor-web 1920

<img width="1357" alt="Screenshot 2020-03-31 at 14 57 27" src="https://user-images.githubusercontent.com/45422060/78028893-04a1f900-7360-11ea-853d-164af3ad135f.png">
<br>
<img width="1231" alt="Screenshot 2020-03-31 at 14 57 54" src="https://user-images.githubusercontent.com/45422060/78028920-0ff52480-7360-11ea-9199-b678f9256c1e.png">

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

cd browser-technologies-1920

#### Installeer dependencies en start de server
npm run dev
```

## Concept

Het hoofddoel van de website is een enquete invullen waarbij de gebruiker zijn antwoorden tussentijds kan opslaan. Dit sluit aan op mijn gekozen case. <br>
`Use case:`

> Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

<details><summary>Invullen van de Enquete</summary>

Je kunt verschillende vragen beantwoorden in de enquete. De vragen worden met Progressive Disclousure een voor een weergegeven.
<img width="1229" alt="Screenshot 2020-03-31 at 14 28 04" src="https://user-images.githubusercontent.com/45422060/78026500-05389080-735c-11ea-817c-1db1bb99d3ac.png">

</details>

<details><summary>Opslaan</summary>

Als javascript naar behoren werkt worden de enquete antwoorden automatisch opgeslagen. Zodra de gebruiker later terug komt zullen de ingevulde antwoorden er nog staan.  
Als javascript ontbreekt, en de gebruiker de antwoorden wilt opslaan kan hij op de button "opslaan" klikken. Hij ontvangt een linkje waarmee je de enquete later kunt vervolgen.
<img width="1082" alt="Screenshot 2020-03-31 at 14 28 21" src="https://user-images.githubusercontent.com/45422060/78026553-1a152400-735c-11ea-9b3a-c993f189c0d8.png">

</details>

<details><summary>Overzicht beantwoorde vragen</summary>

Zodra je op versturen klikt krijg je een overzicht van de beantwoorde vragen. Hier komt een button waarbij de de antwoorden kunt bevestigen.

<img width="1180" alt="Screenshot 2020-03-31 at 14 29 00" src="https://user-images.githubusercontent.com/45422060/78026714-62ccdd00-735c-11ea-8828-8c88805528b2.png">

</details>

<details><summary>Bevestiging</summary>

Zodra de enquete is bevestigd krijg je nog een laatste bericht met een bedankje voor het invullen van de enquete. Zo ver was ik nu nog niet gekomen.

<img width="1135" alt="Screenshot 2020-03-31 at 14 29 13" src="https://user-images.githubusercontent.com/45422060/78026732-6a8c8180-735c-11ea-89ca-5a33dcaebf0b.png">

</details>

## Wireflows vs Resultaat

#### Features

- Enquete invullen met verschillende antwoordmogelijkheden
- Enquete opslaan om later te hervatten (Mogelijk met hidden form field)

#### Functional / Reliable

In de functional Laag kun je de vragen van de enquete invullen en opslaan om later te hervatten. Je kunt je antwoorden opsturen, dan krijg je een overzicht van de gegeven antwoorden, en vervolgens een bevestiging dat de enquete is verstuurd.

`Semantische HTML (Laag 1)`

<details>
  <summary>  Wireflow
</summary>
  <img width="840" alt="2 1" src="https://user-images.githubusercontent.com/45422060/76973659-893c5280-6930-11ea-9ef5-f4fec0cd5bc1.png">
 </details>

`Resultaat`

 <details>
  <summary> Enquete vragen
</summary>
<img width="675" alt="Screenshot 2020-03-31 at 14 39 46" src="https://user-images.githubusercontent.com/45422060/78027435-a5db8000-735d-11ea-9874-e3a0fad173d2.png">
 </details>

  <details>
  <summary> Opslaan
</summary>
<img width="522" alt="Screenshot 2020-03-31 at 14 40 45" src="https://user-images.githubusercontent.com/45422060/78027513-c60b3f00-735d-11ea-8988-299f8e4f13db.png">
 </details>

   <details>
  <summary> Overzicht
</summary>
<img width="446" alt="Screenshot 2020-03-31 at 14 40 16" src="https://user-images.githubusercontent.com/45422060/78027549-d7544b80-735d-11ea-9010-abbc1c9f5431.png">
 </details>

   <details>
  <summary> Bevestiging
</summary>
<img width="522" alt="Screenshot 2020-03-31 at 14 40 45" src="https://user-images.githubusercontent.com/45422060/78027585-e6d39480-735d-11ea-9e4c-a356f985fcf9.png">
 </details>

#### Usable

In de usable laag ziet het formulier er heel netjes uit, maar de werking van het formulier is in principe hetzelfde als bij de functional laag. Er wordt wel een navigatie balk aan het concept toegevoegd zodat het voor de gebruiker duidelijk is hoeveel vragen er nog op hem te wachten staan.

`Design Patterns CSS (Laag 2)`

<details>
<summary> Wireflow</summary>
<img width="900" alt="2 2" src="https://user-images.githubusercontent.com/45422060/76973662-89d4e900-6930-11ea-8d47-acfbfe616056.png">
</details>

`Resultaat`

<details>
<summary> Save link without Javascript</summary>
<img width="1075" alt="Screenshot 2020-03-31 at 14 44 29" src="https://user-images.githubusercontent.com/45422060/78027747-29956c80-735e-11ea-9b20-fd270314dff7.png">
</details>

#### Pleasurable

In de pleasurable laag wordt de volgende vraag pas beschikbaar als het antwoord naar behoren is ingevuld. Verder kan de gebruiker in deze laag zijn formulier opslaan, zonder het linkje in de eerste twee lagen.

`Javascript (Laag 3)`

<details>
<summary> Wireflow </summary>
<img width="883" alt="2 3" src="https://user-images.githubusercontent.com/45422060/76973664-8b061600-6930-11ea-9fe0-c8fb3cf50962.png">
</details>

<details>
<summary> Automatisch opslaan Localstorage </summary>
<img width="1355" alt="Screenshot 2020-03-31 at 14 48 52" src="https://user-images.githubusercontent.com/45422060/78028112-c3f5b000-735e-11ea-88ec-2eb0bef73e85.png">
</details>

<details>
<summary> Reset button</summary>
Ingevulde antwoorden:
<img width="1238" alt="Screenshot 2020-03-31 at 14 53 39" src="https://user-images.githubusercontent.com/45422060/78028543-7af22b80-735f-11ea-9ef2-a3ffa2423022.png">
<br>
Gereset:
<img width="1226" alt="Screenshot 2020-03-31 at 14 54 01" src="https://user-images.githubusercontent.com/45422060/78028547-7cbbef00-735f-11ea-92c0-8950ac7a67eb.png">

</details>

<details>
<summary> Copy button</summary>
Copy button:
<img width="1098" alt="Screenshot 2020-03-31 at 14 50 16" src="https://user-images.githubusercontent.com/45422060/78028310-1d5ddf00-735f-11ea-82f0-09703d5cc781.png">
<br>
Alert:
<img width="1062" alt="Screenshot 2020-03-31 at 14 50 21" src="https://user-images.githubusercontent.com/45422060/78028316-1fc03900-735f-11ea-95c2-7f97429d694f.png">
<br>
Copied:
<img width="1039" alt="Screenshot 2020-03-31 at 14 50 28" src="https://user-images.githubusercontent.com/45422060/78028321-2189fc80-735f-11ea-8f04-ef53e37cf3fe.png">

</details>

<details>
<summary> Share button</summary>
Share:
<img width="476" alt="Screenshot 2020-03-31 at 14 14 50" src="https://user-images.githubusercontent.com/45422060/78028766-cad0f280-735f-11ea-968b-ce9080e7a505.png">
<br>
Fallback:
<img width="1229" alt="Screenshot 2020-03-31 at 14 55 59" src="https://user-images.githubusercontent.com/45422060/78028742-bf7dc700-735f-11ea-948b-138dcb1a99f1.png">
</details>

`Resultaat`

<details>
<summary> Save link without Javascript</summary>
<img width="1075" alt="Screenshot 2020-03-31 at 14 44 29" src="https://user-images.githubusercontent.com/45422060/78027747-29956c80-735e-11ea-9b20-fd270314dff7.png">
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
Het testen van Internet Explorer heb ik ook getest via Lambdatest. Hier heb ik een aantal fouten ondervonden. De antwoorden die de gebruiker invoert worden niet automatisch opgeslagen in local storage. Voor bovenstaande problemen ga ik een oplossing zoeken.De share button is niet clickable. Hier staat al een fallback onder, maar doordat je niet op de button kunt klikken, wordt deze niet weergegeven. De oplossing zal ik uitleggen bij de fallback.
</details>

### Fallback

<details><summary> Auto Save Local Storage </summary>
In sommige gevallen zal de automatische save via local storage niet werken. Dit kan komen doordat de gebruiker zijn javascript heeft disabled. Of doordat de browser dit niet ondersteund. Daarom heb ik een button gemaakt die de antwoorden uit de enquete nog steeds kan opslaan. Zodra de gebruiker op deze save button klikt, komt hij op de volgende pagina.
<img width="213" alt="Screenshot 2020-03-31 at 14 11 14" src="https://user-images.githubusercontent.com/45422060/78024966-85a9c200-7359-11ea-8db0-0306e6552897.png">

<img width="1084" alt="Screenshot 2020-03-31 at 14 00 40" src="https://user-images.githubusercontent.com/45422060/78024094-14b5da80-7358-11ea-98e3-e5ac3c09866f.png">

In de link die hier wordt weergegeven zijn alle waardes van de text fields opgeslagen in een query in de url. Zoals je in dit voorbeeld kunt zien staat er bijvoorbeeld: `firstname=Simone`, dit betekend van de gebruiker bij de eerste vraag Naam "Simone" heeft ingevuld.

</details>

<details><summary> Copy button </summary>
In Internet Explorer werkt de copy button niet helemaal lekker. Hiervoor heb ik als fallback een linkje om de url gezet. Zodat je ten alle tijden, of de copy button nou werkt of niet makkelijk op dit linkje kunt klikken om weer terug te gaan naar uw ingevulde antwoorden van de enquete.
<br>
<img width="249" alt="Screenshot 2020-03-31 at 14 12 25" src="https://user-images.githubusercontent.com/45422060/78025125-c30e4f80-7359-11ea-927a-2013480fec12.png">

<img width="1084" alt="Screenshot 2020-03-31 at 14 00 40" src="https://user-images.githubusercontent.com/45422060/78024094-14b5da80-7358-11ea-98e3-e5ac3c09866f.png">

</details>

<details><summary> Share button </summary>
Nadat de gebruiker de enquete heeft ingevuld, is er een mogelijkheid om deze te delen dmv. Web Share API. Deze wordt niet heel goed ondersteund, dus hiervoor heb ik een fallback gemaakt. Zodra de browser waarin de website wordt bezocht, de Web Share API niet ondersteund, wordt de fallback om de antwoorden te delen via mail weergegeven. 
<br>
Fallback;
<img width="716" alt="Screenshot 2020-03-31 at 14 20 34" src="https://user-images.githubusercontent.com/45422060/78025725-cce48280-735a-11ea-945b-bb8338e0ce66.png">
<br>
Voorbeeld als Web Share API wordt ondersteund:
<img width="476" alt="Screenshot 2020-03-31 at 14 14 50" src="https://user-images.githubusercontent.com/45422060/78025315-1ed8d880-735a-11ea-8243-73ef90cee371.png">
<br>
Can i use ondersteuning Web Share API:
<img width="1246" alt="Screenshot 2020-03-31 at 14 15 36" src="https://user-images.githubusercontent.com/45422060/78025352-2d26f480-735a-11ea-8c76-4df37122b1af.png">

<details><summary> Code </summary>

`Javscript`:

```js
if (shareButton) {
  shareButton.addEventListener("click", function() {
    if (navigator.share) {
      navigator
        .share({
          url: url,
          text: shareList
        })
        .then(function() {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      overlay.classList.add("show-share");
      shareModal.classList.add("show-share");
    }
  });
  overlay.addEventListener("click", function() {
    overlay.classList.toggle("show-share");
    shareModal.classList.toggle("show-share");
  });
}
```

</details>
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
