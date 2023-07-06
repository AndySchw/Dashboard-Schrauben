# Dashboard-Schrauben

Dieses Projekt stellt ein Dashboard bereit, das Daten über Schrauben in verschiedenen Diagrammen darstellt. Das Dashboard wird mit der Vorlagen-Engine Pug und dem Framework Express.js gerendert und dargestellt.

## Installation

Klonen Sie das Repository auf Ihren lokalen Computer.
Installieren Sie die erforderlichen npm-Pakete, indem Sie npm install in der Wurzel des geklonten Verzeichnisses ausführen.

## Technologien

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

