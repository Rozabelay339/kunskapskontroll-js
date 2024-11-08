# kunskapskontroll-js

## HTML Pseudokod

_ Lägg till en rubrik (h1):
-Texten ska vara "Kontaktlista"
  
- Skapa ett formulär för att lägga till ny kontakt:
- Lägg till en rubrik (h2): "Lägg till ny kontakt"
- Skapa en div för input-fält och knapp (id="input-and-button"): - Skapa en div för input-container (id="input-container"):
- Skapa ett textinput-fält för namn (id="name") med en placeholder: "Ange namn"
- Skapa ett textinput-fält för telefonnummer (id="phone") med en placeholder: "Ange telefonnummer"
- Skapa en knapp (id="add-contact-btn") med texten "Lägg till kontakt"
- Skapa en container för felmeddelanden (id="error-message")
  
-Skapa en sektion för kontaktlistans header:
-Lägg till en rubrik (h2) för "Kontakter" (id="contact-title")
-Skapa en knapp (id="delete-list-btn") för att radera listan med texten "Radera lista"
  
- Skapa en container för kontaktlistan (id="contact-list" och class="contact-container")
- Här kommer kontakterna att läggas till som listobjekt (ul)

### CSS Pseudokod

  Styla body:
    - Sätt en generell font-family för sidan
    - Applicera padding och margin för att säkerställa rätt avstånd runt innehållet
    - Sätt en bakgrundsfärg för sidan

  Styla sidans titel (h1):
    - Sätt en font-storlek och font-vikt för titeln
    - Applicera en färg på titeltexten
    - Centrera titeln

  Styla sektionen för att lägga till ny kontakt:
    - Sätt en max-bredd och margin för att centrera formuläret på sidan
    - Lägg till padding och bakgrundsfärg för formulärsektionen
    - Säkerställ att formulärets element (inputfält, knapp) har konsekvent avstånd och alignering
    - Styla input-fälten:
    - Sätt padding, border och bakgrundsfärg
    - Applicera border-radius för rundade hörn
    - Säkerställ att inputfälten har konsekvent fontstorlek och färg
    - Styla knappen:
    - Sätt padding, bakgrundsfärg och textfärg
    - Applicera border-radius för rundade hörn
    - Lägg till en hover-effekt för att ändra knappens bakgrundsfärg

  Styla felmeddelandets container:
    - Sätt en färg för feltexten (vanligtvis röd)
    - Lägg till margin eller padding för att göra felmeddelandet mer framträdande

  Styla kontaktlistans header-sektion:
    - Sätt en max-bredd och margin för header-sektionen
    - Justera innehållet i headern (titel och knapp), så att de är väl avståndsplacerade
    - Styla knappen för att radera lista:
    - Applicera padding, bakgrundsfärg och textfärg
    - Lägg till border-radius och hover-effekt för knappen

  Styla kontaktlistan (ul):
    - Ta bort standardliststilar (ingen punktlista eller padding)
    - Lägg till margin för att separera listan från andra innehåll på sidan

  Styla individuella kontaktposter (li):
    - Sätt padding, bakgrundsfärg och border för varje kontaktpost
    - Lägg till avstånd mellan kontaktfälten och knapparna (redigera- och ta bort-knappar)
    - Styla input-fälten inom kontaktposterna:
    - Säkerställ att de har samma stilar som inputfälten i formuläret för ny kontakt
    - Styla redigera- och ta bort-knapparna:
    - Applicera bakgrundsfärger och textfärger för båda knapparna
    - Lägg till hover-effekter för att ändra deras bakgrundsfärg

#### JAVASCRIPT

# Hämta element från DOM

 -Hämta textfältet för namn ("nameInput")
 -Hämta textfältet för telefon ("phoneInput")
 -Hämta knappen för att skapa en kontakt ("addContactBtn")
 -Hämta kontaktlistan ("contactList")

## Lägg till en klickhändelse för "Lägg till kontakt"-knappen (id="add-contact-btn"):

-När knappen klickas:
-Hämta och trimma värdet från "nameInput" och "phoneInput"
  -Återställ eventuell tidigare visat felmeddelande

  -Kontrollera om "nameInput" är tomt:
  -Om tomt, visa felmeddelande: "Namnfältet är tomt. Det är obligatoriskt att fylla."
  -Avbryt händelsen

 -Kontrollera om "nameInput" endast innehåller bokstäver:
 -Om inte, visa felmeddelande: "Namnfältet måste endast innehålla bokstäver."
-Avbryt händelsen

  -Kontrollera om "phoneInput" är tomt:
  -Om tomt, visa felmeddelande: "Telefonfältet är tomt. Det är obligatoriskt att fylla."
  -Avbryt händelsen

  -Kontrollera om "phoneInput" endast innehåller siffror och eventuellt ett "+"-tecken:
  -Om inte, visa felmeddelande: "Telefonfältet måste endast innehålla siffror och kan börja med ett + tecken."
  -Avbryt händelsen

  -Om alla fält är giltiga:
  -Skapa en ny kontakt genom att anropa funktionen `createContactItem(name, phone)`
  -Lägg till den nya kontakten till kontaktlistan (`contactList`)
  -Töm fälten "nameInput" och "phoneInput"

### Skapa en funktion `createContactItem(name, phone)
  
- Skapa en ny div för kontakt (class="contact-item")
- Lägg till namnfältet och telefonnummerfältet som inmatningsfält (inmatningsfält ska vara inaktiverade som standard)
- Lägg till en redigeringsknapp
- Lägg till en raderingsknapp

#### Skapa en funktion `createInputField(value)`

- Skapa ett inmatningsfält med angivet värde
- Sätt `disabled` till `true` för att förhindra redigering
- Returnera det skapade inmatningsfältet

##### Skapa en funktion `createEditButton(contactItem)`

- Skapa en knapp med texten "Redigera"
- Lägg till en klickhändelse som anropar funktionen `toggleEdit(contactItem, editBtn)`
  
###### Skapa en funktion `toggleEdit(contactItem, editBtn)`

- Växla redigeringstillstånd för kontaktens namnfält och telefonnummerfält
- Om användaren sparar redigeringen:
- Kontrollera om fälten inte är tomma, annars visa felmeddelande

######## Skapa en funktion `createDeleteButton(contactItem)`

-Skapa en knapp med texten "Ta bort"
-Lägg till en klickhändelse som tar bort kontakten från kontaktlistan när knappen klickas

######### Lägg till en klickhändelse för "Radera lista"-knappen (id="delete-list-btn")

-När knappen klickas:
-Töm innehållet i kontaktlistan (`contactList`)
