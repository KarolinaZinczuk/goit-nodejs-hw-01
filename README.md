# Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table)
node index.js --action list
https://monosnap.com/file/4Gc5kOTOlLe8sMgmbxzpObSNK9zzoK

# Otrzymujemy kontakt po id
node index.js --action get --id 5
https://monosnap.com/file/444UZ4vyBXrOyXQiSw1SQOdCsnlCyx

# Dodajemy kontakt
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/FsenSshv4e8QtNpmjUppLiIcKfdY04

# Usuwamy kontakt
node index.js --action remove --id 7e433327-0fe8-48c0-8b55-14a6356061de
https://monosnap.com/file/JxVCi5aLIyHJAMbbuiQ2oJUdj5TgES
