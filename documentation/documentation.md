<h1>Ik heb een aantal npm packages gebruikt voor mijn project. hier een overzicht:</h1>
Frontend:<br>
"chart.js": "^4.0.1",<br>
"jwt-decode": "^3.1.2",<br>

chart.js heb ik gebruikt om de stats van de pokemon te laten zien in een grafiek. <br>
jwt-decode heb ik gebruikt om de token te decoderen.<br>

Backend:<br>
"bcrypt": "^5.1.0",<br>
"cors": "^2.8.5",<br>
"http-status-codes": "^2.2.0",<br>
"jsonwebtoken": "^9.0.0",<br>

bcrypt heb ik gebruikt om de wachtwoorden te hashen.<br>
cors heb ik gebruikt om de cors errors te voorkomen.<br>
http-status-codes heb ik gebruikt om de status codes te gebruiken.<br>
jsonwebtoken heb ik gebruikt om de token te maken.<br>

<h1>Gebruiks aanwijzingen:</h1><br>
als je als admin bent ingelogd kan je de pokemons updaten en verwijderen doormiddel van de auctionId in te vullen.<br>
de auctionid staat op de detailpagina van de auction.<br>
als je de auctionid invult dan worden de details van de auction opgehaald en kan je deze updaten of verwijderen<br>

Als je als user bent ingelogd kan je alleen de auctions bekijken en bieden op de auctions.<br>
op je account pagina kan je dan zien welke auctions je hebt gewonnen.

elke auction heeft een enddate en als de enddate voorbij is word de auction pas toegevoegd als de resource benaderd word.<br>
dit heb ik gedaan met middelware ipv een cronjob.

ook kan je op elke auction filteren met:<br>
-pokemon name<br>
-pokemon type<br>
-region<br>
-price.

<h1>Tot slot</h1><br>
door tijdsnood moest alles snel af. daardoor kan er wat verschil tussen styling zijn.<br>
