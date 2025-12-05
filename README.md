# eksamens-projekt-mathilde

Mit eksamensprojekt med udgangspunkt i EXD projektet fra første semester

Jeg har optimeret følgende i mit projekt:
Alle index, css og js filer samt img og audio mapperne

GENERELT:

- Jeg har tilføjet korrekt navngivning af filer, img'er og audio
- Jeg har lavet korrekt mappestruktur - alle css, js, img og audio sammen i semantiske mapper og index filer i root mappen
- Jeg har lavet bedre og mere overskuelig strukturering af koden i index, css og js
- Jeg har lavet passende overskrifer
- Jeg har tilføjet flere kommentare der gør det nemmere at forstå koden

HTML:

- Jeg har lavet semantiske tags og classes på tværs af filerne
- Alle png filer er konverteret til svg for et mere fleksibelt design når der skaleres
- Der er lavet korrekte stier så siden kan deployes til github pages uden komplikationer
- Sproget på siderne er ændret til dansk

CSS:

- Følgende elementer er blevet fjernet: den store krabbe, cyklen, de to andre spil, mini klovnfisken, den grønne fisk, den gule fisk og overskriften på forsiden
- Der er tilføjet to nye muslinger, skattekister og en ny fisk
- Følgende elementer er ertsattet af optimerede versioner: akavriemanden, fiskene, tangen, sandet, akvariet, stenene, taleboblerne, tilbage pilen og baggrunden på akvarie.css
- Animationer på fiskene er blevet forbedret
- Størrelser og hastighed på fiskene er justeret til målgruppen
- Der er tilføjet overordnet reset på margin, padding, box-sizing og overflow
- Alle relevante px værdier er erstattet af vh eller vw for et mere responsivt design
- Baggrund består nu af forskellige elementer i stedet for en samlet png så der kan laves mere dybde med styling
- Der er lavet responsive design med breakpoints i begge css filer
- Der er lavet en glød effekt på skattekisten

JS:

- Følgende elementer er blevet fjernet: tooltip funktionen og data arrayet
- Der er tilføjet og justeret i const variablerne
- Der er tilføjet toggle effekter på den grønne og den pink fisk, krabben og skattekisterne
- Der er lavet timeout funktioner på skattekisterne og de fisk der har toggle effekter
- Der er tilføjet nye audio objekter og justeret i de gamle
- Der er tilføjet event listeners på alle fisk, akvariemanden, skattekisterne og krabben
- Der er tilføjet dom content load funktion for at sikre at alt contetn loades inden funktionerne køres
- Der er justeret z-index på fisk, sten og tang elementer for at skabe dybde i spillet
- Der er blevet tilføjet if funktioner på alle elementer for at sikre at de findes inden funktioenrne køres
