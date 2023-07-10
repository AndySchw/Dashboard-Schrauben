# Dashboard-Schrauben

Diese Anwendung ist eine Webanwendung, die auf Node.js basiert und das Express.js-Framework sowie die MongoDB-Datenbank verwendet. Sie dient zur Visualisierung von Daten rund um den Verkauf von Schrauben verschiedener Hersteller.

Auf der Startseite der Anwendung werden drei verschiedene Diagramme dargestellt:

Das erste Diagramm zeigt die drei meistverkauften Schraubentypen an. Es verwendet Daten, die aus einer MongoDB-Aggregationsabfrage stammen, um die Gesamtverkaufsmenge für jeden Schraubentyp zu ermitteln und diese in absteigender Reihenfolge zu sortieren.

Das zweite Diagramm zeigt die Hersteller mit der besten Verkaufsmenge. Es verwendet eine ähnliche Aggregationsabfrage wie das erste Diagramm, jedoch wird hier die Gesamtverkaufsmenge für jeden Hersteller ermittelt.

Das dritte Diagramm zeigt den besten Verkaufstag der Hersteller. Hierfür werden die Daten gruppiert nach Hersteller und Datum, dann sortiert nach Verkaufsmenge und schließlich die höchste Verkaufsmenge für jeden Hersteller ermittelt.

Zusätzlich gibt es für jeden der drei Haupt-Hersteller (Wuerth, HECO und SWG) eine eigene Seite, die ähnliche Diagramme wie auf der Startseite, jedoch speziell für den jeweiligen Hersteller, anzeigt.

Die Anwendung setzt zudem das Pug-Template-System für die HTML-Struktur ein und verwendet die Chart.js-Bibliothek zur Erstellung der Diagramme.

Insgesamt dient diese Anwendung dazu, einen Überblick über die Verkaufsdaten von Schrauben verschiedener Hersteller zu geben und diese Informationen auf eine leicht verständliche und visuell ansprechende Weise zu präsentieren.

## Installation

Klonen Sie das Repository auf Ihren lokalen Computer.
Nutzen Sie Ihr MongoDB Accound oder erstellen Sie einen neuen, damit sie die Daten aus "output.json" reinladen können und wieder einlesen. Dazu ist es Wichtig eine .env mit den nötigen Benutzerdaten in dem Order APP zu erstllen um auf die Datenbank zu zugreifen.
Installieren Sie die erforderlichen npm-Pakete, indem Sie npm install in der Wurzel des geklonten Verzeichnisses ausführen.

## Technologien

### Mongoose

Mongoose ist ein Object Data Modeling (ODM) Werkzeug für Node.js und MongoDB. Es bietet eine einfache und strukturierte Methode, um mit MongoDB zu arbeiten, indem es Schema-basierte Lösungen bietet.
Hiermit wird das Projekt auch mit der MongoDB Atlas verbunden.

### Pug

Pug ist eine Vorlagensprache, die HTML generiert. Es ermöglicht eine saubere, einfache und leicht zu lesende Syntax, die die Komplexität der HTML-Syntax reduziert und eine leistungsstarke Möglichkeit bietet, dynamisches HTML zu generieren.

Beispiel:

pug

``` 
ul
  each schraube in schrauben
    li= schraube.name 
```


### Express.js

Express.js ist ein Webanwendungs-Framework für Node.js. Es ist minimal, flexibel und bietet eine robuste Reihe von Funktionen für Web- und Mobilanwendungen. In diesem Projekt dient Express.js dazu, die Webanwendung zu hosten und Anfragen zu verarbeiten.

Beispiel:

javascript
``` 
app.get('/', (req, res) => {
  res.render('index', { title: 'Dashboard-Schrauben', message: 'Willkommen zu unserem Schrauben-Dashboard!' });
}); 
```


### Chart.js

Chart.js ist eine einfache, flexible JavaScript-Bibliothek zur Erstellung von Diagrammen auf Webseiten. Sie liefert acht voreingestellte Diagrammtypen und ist hochgradig anpassbar. In diesem Projekt verwenden wir Chart.js, um ansprechende Diagramme zur Darstellung der Schraubendaten zu erstellen.

Verwendung

Starten Sie die Anwendung mit "node .\app.js" in der Powershell.

Öffnen Sie einen Webbrowser und navigieren Sie zu http://localhost:3000, um das Dashboard anzuzeigen.

## Weitereintwicklung

Für weiter Sprints gibt es viele Ideen yum erweitern der App. Es gehören auf jeden fall mehr Charts zur übersicht vorallem bei Herstellern.
Persönlich wären Dropdown Menus die dafür sorgen interaktiv die Charts anzupassen an gewünschte Daten. Auch Datenerfassung sollte nich tauser acht gelassen werden.