# eksamens-projekt-mathilde

Mit eksamensprojekt med udgangspunkt i EXD projektet fra første semester

Jeg har optimeret følgende i mit projekt:
Alle index, css og js filer samt img og audio mapperne

GENERELT:

- tilføjet korrekt navngivning af filer, img'er og audio
- lavet korrekt mappestruktur - alle css, js, img og audio sammen i semantiske mapper og index filer i root mappen
- lavet bedre og mere overskuelig strukturering af koden i index, css og js
- lavet passende overskrifer
- tilføjet flere kommentare der gør det nemmere at forstå koden

HTML:

- har lavet semantiske tags og classes på tværs af filerne
- alle png filer er konverteret til svg for et mere fleksibelt design når der skaleres
- der er lavet korrekte stier så siden kan deployes til github pages uden komplikationer
- sproget på siderne er ændret til dansk
- tilføjet favicon på begge html filer

CSS:

- følgende elementer er blevet fjernet: den store krabbe, cyklen, de to andre spil, mini klovnfisken, den grønne fisk, den gule fisk og overskriften på forsiden
- der er tilføjet to nye muslinger, skattekister og en ny fisk
- følgende elementer er ertsattet af optimerede versioner: akavriemanden, fiskene, tangen, sandet, akvariet, stenene, taleboblerne, tilbage pilen og baggrunden på akvarie.css
- animationer på fiskene er blevet forbedret
- størrelser og hastighed på fiskene er justeret til målgruppen
- der er tilføjet overordnet reset på margin, padding, box-sizing og overflow
- alle relevante px værdier er erstattet af vh eller vw for et mere responsivt design
- baggrund består nu af forskellige elementer i stedet for en samlet png så der kan laves mere dybde med styling og z-index
- der er lavet responsive design med breakpoints i begge css filer
- der er lavet en glød effekt på skattekisten

JS:

- følgende elementer er blevet fjernet: tooltip funktionen og data arrayet
- der er tilføjet og justeret i const variablerne
- der er tilføjet toggle effekter på den grønne og den pink fisk, krabben og skattekisterne
- der er lavet timeout funktioner på skattekisterne og de fisk der har toggle effekter
- der er tilføjet nye audio objekter og justeret i de gamle
- der er tilføjet event listeners på alle fisk, akvariemanden, skattekisterne og krabben
- der er tilføjet dom content loaded funktion for at sikre at alt content loades inden funktionerne køres
- der er blevet tilføjet if statements på alle elementer for at sikre at de findes, inden funktionerne køres
