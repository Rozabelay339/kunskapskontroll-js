# kunskapskontroll-js

## Kontaktlista - JavaScript App

Ett enkelt kontaktlista-projekt som hanterar kontaktskapande, redigering och radering av kontakter med hjälp av HTML, CSS och JavaScript.

## HTML Pseudokod

- **Rubrik (h1):** "Kontaktlista"

- **Formulär för att lägga till ny kontakt**
- Rubrik (h2): "Lägg till ny kontakt"
- Div-container (`id="input-and-button"`)
- Div (`id="input-container"`)
- Textinput för namn (`id="name"`) med placeholder: "Ange namn"
- Textinput för telefonnummer (`id="phone"`) med placeholder: "Ange telefonnummer"
- Knapp (`id="add-contact-btn"`): "Lägg till kontakt"
- Container för felmeddelanden (`id="error-message"`)

- **Sektion för kontaktlistans header**
- Rubrik (h2): "Kontakter" (`id="contact-title"`)
- Knapp för att radera lista (`id="delete-list-btn"`): "Radera lista"

- **Container för kontaktlistan:**
- Div (`id="contact-list"`, `class="contact-container"`) för att lista kontakter (ul)

## CSS Pseudokod

- **Body:**
- Font-family, padding och margin, bakgrundsfärg

- **Sidans titel (h1)**
- Font-storlek, font-vikt, textfärg, centrering

- **Formulärsektion**
- Maxbredd, centrering, padding, bakgrundsfärg
- Input-fält: padding, border, bakgrundsfärg, border-radius
- Knapp: padding, bakgrundsfärg, textfärg, border-radius, hover-effekt

- **Felmeddelandets container**
- Textfärg (vanligtvis röd), margin/padding

- **Kontaktlistans header**
- Maxbredd, margin, placering av rubrik och knapp
- Radera lista-knapp: padding, bakgrundsfärg, textfärg, border-radius, hover-effekt

- **Kontaktlista (ul)**
- Ta bort punktlista och padding, margin

- **Individuella kontaktposter (li)**
- Padding, bakgrundsfärg, border
- Inre layout för namn, telefon och redigerings-/ta bort-knappar med hover-effekter

## JavaScript Pseudokod

### Hämta element från DOM

- **Element** Textfält för namn (`nameInput`), telefon (`phoneInput`), Lägg till kontakt-knapp (`addContactBtn`), kontaktlistan (`contactList`)

### Lägg till kontakt-knappen (`add-contact-btn`)

- **Vid klick** 
- Hämta och trimma värden från `nameInput` och `phoneInput`
- Kontrollera fältens innehåll och visa felmeddelanden vid behov
- Om giltiga: skapa en ny kontakt, lägg till i kontaktlistan, töm inputfält

### Funktioner

- **`createContactItem(name, phone)`**
- Skapar kontaktpost (`div`), inaktiverade inputfält, redigerings- och ta bort-knapp

- **`createInputField(value)`**
- Skapar inmatningsfält med angivet värde, `disabled: true`

- **`createEditButton(contactItem)`**
- Skapar redigeringsknapp med klickhändelse till `toggleEdit(contactItem, editBtn)`

- **`toggleEdit(contactItem, editBtn)`**
- Växlar redigeringstillstånd för kontaktens inputfält och sparar redigeringen vid behov

- **`createDeleteButton(contactItem)`**
- Skapar ta bort-knapp med klickhändelse för att ta bort kontaktposten

- **"Radera lista"-knappen (`delete-list-btn`)**
- Tömmer kontaktlistan (`contactList`) vid klick
