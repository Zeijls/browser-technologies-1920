# Browser Technologies

## Opdracht 1.2 - Fork je OBA

Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

### Features

# Features

Voor deze oefening moesten we in groepjes van 6 studenten alle 8 features onderverdelen. Vervolgens ging iedereen individueel onderzoek doen naar de feature die hem was aangewezen, en zich richten op de volgende punten;

- Zoek uit welke problemen ze kunnen veroorzaken (verzamel cijfers, meningen, ervaringen)
- Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)
- Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving)
- Beschrijf hoe je dit kan fiksen

Vervolgens hebben wij de volgende poster gemaakt met onze bevindingen;
![PosterFeatures](https://user-images.githubusercontent.com/45422060/76599380-32d0ad80-6505-11ea-8743-ec2b5946bd9f.jpeg)

## 1. Afbeeldingen uitzetten

Zodra ik alle images disable in de devtoolbar van chrome valt het hele concept van de website op de overzichtspagina weg. Ik kan vanaf hier niet meer verder klikken naar een detailpagina doordat de link om de afbeelding staat. Voor de detailpagina geld het zelfde verhaal.

### Oplossing

Het is belangrijk om de afbeeldingen een alt attribute te geven met een goede omschrijving waardoor er ten alle tijden wel te zien is wat er op de plaats had moeten staan. Verder kan ik een element om de afbeelding heen plaatsen waar de link op staat zodat er altijd nog te zien is dat er iets ontbreekt op de pagina. Als ik deze een achtergrond kleur geef is de skeleton van de website zichtbaar.

Verder zou ik het element waar de image in staat en width en een height geven zodat het UI skeleton niet steeds aanpast zodra er meer content wordt geladen, anders kan dit als vervelend worden ervaren.

![Overzichtspagina Afbeeldingen Disable](/docs/img/afbeeldingDisable.png)

## 2. Custom Fonts uitzetten

Om de custom fonts uit te schakelen heb ik een extensie van Chrome gedownload genaamd Font Blocker;
[Font Blocker](https://chrome.google.com/webstore/detail/font-blocker/knpgaobajhnhgkhhoopjepghknapnikl?hl=nl)

Voor mijn Web App geeft dit niet veel problemen. Ik heb 2 fallback fonts en het huidige font is een Websave font. Zodra ik de Font Blocker activeer worden de titel en subtitel een stukje kleiner. Het verschil is zodanig klein dat ik dit niet als storend ervaar. In principe is alleen de styling bold van het element verwijderd. Hieronder is het verschil weergegeven;

![Font Blocker Uit](/docs/img/fontBlockerOff.png)
![Font Blocker Aan](/docs/img/fontBlockerOn.png)

### Oplossing

Om dit op te lossen is in dit geval weinig nodig. Het is belangrijk om een fallback font te hebben. Deze is in de code aanwezig. Verder is het belangrijk om jezelf af te vragen of dit custom font daadwerkelijk een goede toevoeging is voor de website. Het komt vaak voor dat het door jou aangegeven font niet in alle browsers wordt weergegeven. Een oplossing is om het font te downloaden waardoor je het kunt meesturen bij het laden van de website.

## 3. Kleur en kleurenblindheid

Voor het testen heb ik een extensie van Chrome gebruikt genaamd Color Blinding;
[Color Blinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa/related)

De extensie heeft verschillende opties die je kunt selecteren voor de soorten kleurenblindheid;
![Color Blinding](/docs/img/ColorBlinding.png)

Zodra ik de extensie Color Blinding activeer op de homepage gebeurt er vrij weinig. Ik heb alle verschillende opties uitgeprobeerd, maar er zijn geen veranderingen. Als ik deze zelfde test uitvoer op de detailpagina veranderen de kleuren in het schilderij samen met de achtergrond kleur van het artikel. Ten alle tijden blijft het contrast groot genoeg om duidelijk de verschillen te kunnen zien.

### Oplossing

Voor nu moet ik vooral zo doorgaan omdat het contrast duidelijk te zien is. Zodra ik in de toekomst meerdere kleuren wil toevoegen is het belangrijk de kleurencombinatie eerst te testen op de volgende website;
[Check my Colours](https://www.checkmycolours.com/)

## 4. Muis en trackpad werkt niet

Op dit moment werkt de Web App erg goed zonder muis en trackpad. Dit komt omdat de schilderijen de enige linkjes in de overzichtspagina zijn. Zodra je er een selecteert en naar de detailpagina navigeert is de link "Terug naar het overzicht" de enige link.

### Oplossing

Voor nu hoef ik hier geen oplossing voor te bedenken. Voor in de toekomst wil ik een filteroptie toevoegen waarbij je kan kiezen tussen een aantal schilders. Het is belangrijk dat deze boven de resultaten komt te staan zodat je hier met de tab eerder bij komt. Verder is het belangrijk om een goede semantische HTML te hebben. Het zou ook handig zijn om een skip content link te activeren zodra de gebruiker met de tab door de website browst. Hierdoor kan hij meteen door naar de footer. Als de website wat gecompliceerder wordt is het een goed idee om met (Focus & onblur) en (onmouse over & out) te werken.

## 5. Breedband internet uitzetten

Om sloom internet in te stellen in de website ga je naar inspecteren > network > online en selecteer je slow 3G.
Zodra ik het slow 3g activeer op mijn website worden de afbeeldingen nog steeds tegelijk weergegeven. De loading state doet er wel wat langer over. Voor de detailpagina duurt het een stuk langer voordat de pagina wordt geladen en zie je eerst een aantal seconde een rood vlak.

### Oplossing

Het is belangrijk om feedback te geven zodra de pagina aan het laden is. Op dit moment gebeurt dit bij het laden van de overzichtspagina, maar nog niet bij de detailpagina. Ik had verwacht dat de afbeeldingen 1 voor 1 zouden worden geladen en er een popcorn effect zou optreden. Dit is tot mijn verbazing niet het geval, toch zou ik hier in de toekomst meer aandacht aan kunnen besteden met het UI skeleton.

## 6. Javascript (volledig)

De javascript uitzetten doe je door in de devtool bar van Chrome > javascript disable.
Zodra ik de javascript van de website volledig uitzet gebeurt er in principe niets meer. Dit komt doordat alle data wordt geladen aan de hand van javascript.

### Oplossing

Veel content die op dit moment mist zou ook zonder javascript kunnen worden geladen door middel van Server Site Renderen.

## 7. LocalStorage en Cookies uitschakelen

Door de cookies uit te schakelen wordt direct ook de local storage uitgeschakelt. Dit door je door in de devtoolbar van Chrome > disable cookies.

In principe veranderd er niets in de website en werken alle features nog hetzelfde als toen de cookies wel aanstonden.

### Oplossing

Voor nu is er eigenlijk niets om te verbeteren. Zodra ik mijn data opsla in local Storage wordt dit wel een probleem. Als ik de local storage los zou kunnen uitschakelen van de cookies zou de Web App wel kunnen werken zonder cookies.

Het is nog belangrijk om te weten dat:

- Cookies zijn server site
- Local Server is client site

De opdracht is te vinden in mijn wiki via de volgende link;
[Features](https://github.com/Zeijls/browser-technologies-1920/wiki/Features)

### Devices

De opdracht is te vinden in mijn wiki via de volgende link;
[Device Onderzoek](https://github.com/Zeijls/browser-technologies-1920/wiki/Device-onderzoek)

### Browsers

De opdracht is te vinden in mijn wiki via de volgende link;
[Browser Onderzoek](https://github.com/Zeijls/browser-technologies-1920/wiki/Browser-Onderzoek)

### Screenreader

De opdracht is te vinden in mijn wiki via de volgende link;
[Screenreader](https://github.com/Zeijls/browser-technologies-1920/wiki/Screenreader)
