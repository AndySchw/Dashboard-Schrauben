# Wählen Sie ein Basis-Image aus
FROM node

# Erstellen Sie einen Arbeitsordner in Ihrem Docker-Image
WORKDIR /usr/src/app

# Kopieren Sie die package.json und package-lock.json (wenn vorhanden) in den Arbeitsordner
COPY package*.json ./

# Installieren Sie die Anwendungsabhängigkeiten
RUN npm install

# Kopieren Sie den restlichen Anwendungscode in den Arbeitsordner
COPY . .

# Exponieren Sie den Port, auf dem Ihre Anwendung läuft (z.B. 3000 für eine typische Express-App)
EXPOSE 3000

# Definieren Sie den Befehl, um die Anwendung zu starten
CMD [ "node", "app.js" ]
