let CanvasB = 960;
let CanvasH = 510;
let Rand = 5;
let Regal = 80;
let Books = [
 {ID: 6 , Pages: 535 , Std: 11 , Rating: 4 , Year: 2022 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Die Verlobten des Winters Die Spiegelreisende 1" , Author: "Christelle Dabos "},
 {ID: 7 , Pages: 613 , Std: 12 , Rating: 5 , Year: 2022 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Die Spiegelreisende Band 2 - Die Verschwundenen vom Mondscheinpalast" , Author: "Christelle Dabos "},
 {ID: 8 , Pages: 520 , Std: 10 , Rating: 5 , Year: 2022 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Die Spiegelreisende Band 3 - Das Gedächtnis von Babel" , Author: "Christelle Dabos "},
 {ID: 88 , Pages: 304 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Biografie" , Title: "Greenlights oder die Kunst bergab zu rennen | Nummer Eins der New York Times-Bestsellerliste Die Autobiographie von Oscar-Preisträger Matthew McConaughey" , Author: "Matthew McConaughey "},
 {ID: 85 , Pages: 10 , Std: 11 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Hörbuch" , Genre: "Fantasy" , Title: "Die Insel der besonderen Kinder Miss Peregrine 1" , Author: "Ransom Riggis "},
 {ID: 172 , Pages: 613 , Std: 12 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Fantasy" , Title: "Die Spiegelreisende Band 4 - Im Sturm der Echos" , Author: "Christelle Dabos "},
 {ID: 52 , Pages: 10 , Std: 15 , Rating: 3 , Year: 2022 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fiction" , Title: "Die unendliche Geschichte" , Author: "Michael Ende "},
 {ID: 70 , Pages: 10 , Std: 3 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Hörbuch" , Genre: "Fiction" , Title: "Enthüllt Die wahren Hintergründe der Kanguru-Verschwörung" , Author: "Marc-Uwe Kling "},
 {ID: 72 , Pages: 160 , Std: 3 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Hochdosiert" , Author: "Jeff T. Bowles "},
 {ID: 66 , Pages: 288 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Dear Data" , Author: "Giorgia Lupi "},
 {ID: 164 , Pages: 223 , Std: 4 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Handbuch Modulares Informatoins Design" , Author: "Darjan Hil "},
 {ID: 69 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Beautiful News" , Author: "David McCandless "},
 {ID: 68 , Pages: 425 , Std: 9 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Data Sketches" , Author: "Nadineh Bremer "},
 {ID: 173 , Pages: 320 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Human Design Entdecke die Person die Du wirklich bist" , Author: "Chetan Parkyn "},
 {ID: 174 , Pages: 312 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Human Design einfach erklärt" , Author: "Karen Curry Parker "},
 {ID: 5 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2022 , Art: "Gelesen" , Typ: "Buch" , Genre: "Psychology" , Title: "Ich denke zu viel" , Author: "Christel Patitcollin "},
 {ID: 21 , Pages: 576 , Std: 12 , Rating: 4 , Year: 2022 , Art: "Gelesen" , Typ: "Buch" , Genre: "Psychology" , Title: "Die Liebe und ihr Henker" , Author: "Irvin D. Yalom "},
 {ID: 22 , Pages: 240 , Std: 5 , Rating: 5 , Year: 2022 , Art: "Gelesen" , Typ: "Buch" , Genre: "Psychology" , Title: "Denn alles ist vergänglich Geschichten aus der Psychotherapie" , Author: "Irvin D. Yalom "},
 {ID: 78 , Pages: 576 , Std: 12 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "12 Rules For Life Ordnung und Struktur in einer chaotischen Welt" , Author: "Jordan B. Peterson "},
 {ID: 71 , Pages: 672 , Std: 13 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Warum wir denken was wir denken" , Author: "Jordan B. Peterson "},
 {ID: 80 , Pages: 272 , Std: 5 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Was uns krank macht - was uns heilt Aufbruch in eine neue Medizin. Das Zusammenspiel von Körper Geist und Seele besser verstehen." , Author: "Christian Schubert "},
 {ID: 74 , Pages: 320 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Die Macht des Unterbweusstseins" , Author: "Murphy Joseph "},
 {ID: 87 , Pages: 208 , Std: 4 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "199 Fragen an dich selbst" , Author: "Michael Curse Kurth "},
 {ID: 79 , Pages: 272 , Std: 5 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Das perfekte Mindset – Peak Performance Absolute Spitzenleistung mit den neuesten wissenschaftlichen Erkenntnissen erreichen" , Author: "Brad Stulberg "},
 {ID: 76 , Pages: 160 , Std: 3 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Was wir gewinnen wenn wir verzichten" , Author: "Christian Firus "},
 {ID: 82 , Pages: 224 , Std: 4 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Über die Psychologie des Geldes Zeitlose Lektionen über Reichtum Gier und Glück" , Author: "Morgan Housel "},
 {ID: 89 , Pages: 208 , Std: 4 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Überraschung im Café am Rande der Welt Eine Erzählung vom Suchen und Finden" , Author: "John Strelecky "},
 {ID: 165 , Pages: 379 , Std: 8 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Rock Your Live" , Author: "Lars Amend "},
 {ID: 75 , Pages: 192 , Std: 4 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Selbstbetrachtung" , Author: "Marc Aurel "},
 {ID: 163 , Pages: 350 , Std: 7 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Das Illustrierte Kompendium der Phylosophie" , Author: "Masato Tanaka "},
 {ID: 81 , Pages: 480 , Std: 10 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Das große Buch vom Schlaf Die enorme Bedeutung des Schlafs - Beste Vorbeugung gegen Alzheimer Krebs Herzinfarkt und vieles mehr" , Author: "Prof. Dr. med. Matthew Walker "},
 {ID: 86 , Pages: 144 , Std: 3 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Die vier Versprechen Ein Weg zur Freiheit und Würde | Der spirituelle Klassiker" , Author: "Don Miguel Ruiz "},
 {ID: 83 , Pages: 176 , Std: 4 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Ikigai Die japanische Lebenskunst" , Author: "Ken Mogi "},
 {ID: 84 , Pages: 10 , Std: 10 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "Genesis Die Befreiung der Geschlechter" , Author: "Veit Lindau "},
 {ID: 73 , Pages: 240 , Std: 5 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Mit einem Schlag" , Author: "Dr. Jill B. Tailor "},
 {ID: 67 , Pages: 176 , Std: 4 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Weisheit des ungesicherten Lebens" , Author: "Alan Watts "},
 {ID: 166 , Pages: 471 , Std: 9 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Vorlesungen zur Einführung in die Psychoanalyse" , Author: "Sigmund Freud "},
 {ID: 168 , Pages: 313 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Unzertrennlich Über den Tod und das Leben" , Author: "Irvin D. Yalom "},
 {ID: 4 , Pages: 10 , Std: 6 , Rating: 5 , Year: 2022 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Roman" , Title: "Der Buchspazierer" , Author: "Carsten Henn "},
 {ID: 12 , Pages: 10 , Std: 12 , Rating: 4 , Year: 2022 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Roman" , Title: "Eine ganz Dumme Idee" , Author: "Fredrik Backman "},
 {ID: 24 , Pages: 10 , Std: 11 , Rating: 5 , Year: 2022 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Roman" , Title: "Die Unbeschreibliche Wahrscheinlichkeit des Zufalls" , Author: "Johann Ironmonger "},
 {ID: 54 , Pages: 320 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Gelesen" , Typ: "Buch" , Genre: "Roman" , Title: "Aleph" , Author: "Paulo Coelho "},
 {ID: 57 , Pages: 10 , Std: 4 , Rating: 5 , Year: 2022 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Roman" , Title: "Der erste letzte Tag" , Author: "Sebastian Fizek "},
 {ID: 77 , Pages: 10 , Std: 13 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Hörbuch" , Genre: "Roman" , Title: "Der Würfler" , Author: "Luke Rheinhart "},
 {ID: 167 , Pages: 287 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Roman" , Title: "Elf Minuten" , Author: "Paulo Coelho "},
 {ID: 169 , Pages: 275 , Std: 6 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Roman" , Title: "Das Kaufhaus der Träume" , Author: "Lee Mi-ye "},
 {ID: 170 , Pages: 190 , Std: 4 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Roman" , Title: "Die Katze die von Büchern Träumte" , Author: "Sosuke Natsukawa "},
 {ID: 171 , Pages: 351 , Std: 7 , Rating: 4 , Year: 2022 , Art: "Merkliste" , Typ: "Buch" , Genre: "Roman" , Title: "Das Apfelblütenfest" , Author: "Carsten Henn "},
 {ID: 2 , Pages: 10 , Std: 9 , Rating: 4 , Year: 2022 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Romance" , Title: "Den Mund voll ungesagter Dinge Roman" , Author: "Anne Freytag "},
 {ID: 101 , Pages: 10 , Std: 26 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Hörbuch" , Genre: "Biografie" , Title: "Steve Jobs Die autorisierte Biografie des Apple-Gründers" , Author: "Walter Isaacson "},
 {ID: 102 , Pages: 10 , Std: 13 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Hörbuch" , Genre: "Biografie" , Title: "Permanent Record Meine Geschichte" , Author: "Edward Snowden "},
 {ID: 31 , Pages: 10 , Std: 12 , Rating: 4 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fantasy" , Title: "Willkommen in Night Vale" , Author: "Joseph Fink "},
 {ID: 39 , Pages: 384 , Std: 8 , Rating: 5 , Year: 2021 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "QualityLand" , Author: "Marc-Uwe Kling "},
 {ID: 40 , Pages: 10 , Std: 10 , Rating: 5 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fantasy" , Title: "QualityLand 2.0" , Author: "Marc-Uwe Kling "},
 {ID: 23 , Pages: 10 , Std: 13 , Rating: 5 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fiction" , Title: "Der Wal und das Ende der Welt" , Author: "Johann Ironmonger "},
 {ID: 35 , Pages: 10 , Std: 5 , Rating: 5 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fiction" , Title: "Die Känguru-Chroniken Live und ungekürzt" , Author: "Marc-Uwe Kling "},
 {ID: 36 , Pages: 10 , Std: 5 , Rating: 4 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fiction" , Title: "Das Känguru-Manifest Live und ungekürzt" , Author: "Marc-Uwe Kling "},
 {ID: 37 , Pages: 10 , Std: 8 , Rating: 3 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fiction" , Title: "Die Känguru-Offenbarung Live und ungekürzt" , Author: "Marc-Uwe Kling "},
 {ID: 38 , Pages: 10 , Std: 4 , Rating: 4 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fiction" , Title: "Die Känguru-Apokryphen Live und ungekürzt" , Author: "Marc-Uwe Kling "},
 {ID: 63 , Pages: 10 , Std: 19 , Rating: 4 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Fiction" , Title: "Sofies Welt" , Author: "Jostein Gaarder "},
 {ID: 92 , Pages: 192 , Std: 4 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Fiction" , Title: "Der gelbe Vogel" , Author: "Myron Levoy "},
 {ID: 3 , Pages: 10 , Std: 13 , Rating: 4 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Finance Business" , Title: "Wie Elon Musk die Welt verändert - Die Biografie" , Author: "Ashlee Vance "},
 {ID: 98 , Pages: 272 , Std: 5 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Trader-Kompetenzen Verhalten erkennen Fehler vermeiden Trading verbessern" , Author: "Stefan Sillman "},
 {ID: 17 , Pages: 10 , Std: 7 , Rating: 4 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Nonfiction" , Title: "Darm mit Charme Alles über ein unterschätztes Organ" , Author: "Giulia Enders "},
 {ID: 93 , Pages: 336 , Std: 7 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Auf der Suche nach Schrödingers Katze Quantenphysik und Wirklichkeit" , Author: "John Gribbin "},
 {ID: 97 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Good Talk How to Design Conversations That Matter" , Author: "Daniel Stillman "},
 {ID: 13 , Pages: 155 , Std: 3 , Rating: 5 , Year: 2021 , Art: "Gelesen" , Typ: "Buch" , Genre: "Psychology" , Title: "Die fünf Sprachen der Liebe" , Author: "Gary Chapman "},
 {ID: 30 , Pages: 10 , Std: 7 , Rating: 3 , Year: 2021 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "Komm ich erzähl dir eine Geschichte" , Author: "Jorge Bucay "},
 {ID: 100 , Pages: 10 , Std: 8 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "Factfulness Wie wir lernen die Welt so zu sehen wie sie wirklich ist" , Author: "Hans Roslng "},
 {ID: 99 , Pages: 320 , Std: 6 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Super Human Der Bulletproof-Plan um Ihr biologisches Alter zu senken und länger zu leben" , Author: "Dave Aspey "},
 {ID: 91 , Pages: 336 , Std: 7 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Also sprach Zarathustra Leinen mit Goldprägung" , Author: "Friedrich Nietzsche "},
 {ID: 90 , Pages: 160 , Std: 3 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Roman" , Title: "Der große Gatsby Leinen mit Goldprägung" , Author: "F. Scott Fitzgarold "},
 {ID: 94 , Pages: 912 , Std: 18 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Romance" , Title: "Freed - Fifty Shades of Grey. Befreite Lust von Christian selbst erzählt Roman (Fifty Shades of Grey aus Christians Sicht erzählt Band 3)" , Author: "E L James "},
 {ID: 95 , Pages: 640 , Std: 13 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Romance" , Title: "Darker - Fifty Shades of Grey. Gefährliche Liebe von Christian selbst erzählt Roman (Fifty Shades of Grey aus Christians Sicht erzählt Band 2)" , Author: "E L James "},
 {ID: 96 , Pages: 640 , Std: 13 , Rating: 4 , Year: 2021 , Art: "Merkliste" , Typ: "Buch" , Genre: "Romance" , Title: "Grey - Fifty Shades of Grey von Christian selbst erzählt Roman (Fifty Shades of Grey aus Christians Sicht erzählt Band 1)" , Author: "E L James "},
 {ID: 115 , Pages: 672 , Std: 13 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Biografie" , Title: "Total Recall Die wahre Geschichte meines Lebens" , Author: "Arnold Schwarzenegger "},
 {ID: 61 , Pages: 352 , Std: 7 , Rating: 4 , Year: 2020 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Die 4-Stunden-Woche" , Author: "Timothy Ferriss "},
 {ID: 112 , Pages: 384 , Std: 8 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Das Günter-Prinzip fürs Business So werden Sie schweinehundeerfolgreich (Günter der innere Schweinehund" , Author: "Stefan Frädrich "},
 {ID: 104 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "10xDNA Das Mindset der Zukunft" , Author: "Frank Thelen "},
 {ID: 108 , Pages: 136 , Std: 3 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Hautklar Das Buch für eine reine Haut nach dem Absetzen der Pille" , Author: "Sina Oberle "},
 {ID: 103 , Pages: 304 , Std: 6 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Der Tipping Point" , Author: "Malcolm Gladwell "},
 {ID: 109 , Pages: 336 , Std: 7 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Superforecasting – Die Kunst der richtigen Prognose" , Author: "Dan Gardner "},
 {ID: 113 , Pages: 189 , Std: 4 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Heilen durch Erkenntnis. Die Intelligenz des Unterbewusstseins" , Author: "Andreas Winter "},
 {ID: 110 , Pages: 304 , Std: 6 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Der zweite Code EPIGENETIK oder Wie wir unser Erbgut steuern können" , Author: "Peter Spork "},
 {ID: 114 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Mindfuck Warum wir uns selbst sabotieren und was wir dagegen tun können (Die Mindfuck-Bücher)" , Author: "Petra Bock "},
 {ID: 107 , Pages: 176 , Std: 4 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Still werden - Kraft tanken Mit der Transzendentalen Meditation" , Author: "Bob Roth "},
 {ID: 105 , Pages: 10 , Std: 8 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "It's All Good Ändere deine Perspektive und du änderst deine Welt" , Author: "Lars Amend "},
 {ID: 106 , Pages: 272 , Std: 5 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Why not? Inspirationen für ein Leben ohne Wenn und Aber" , Author: "Lars Amend "},
 {ID: 111 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2020 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Der perfekte Tag Die richtige Energie zum richtigen Zeitpunkt - Der individuelle Tagesplaner für Power rund um die Uhr" , Author: "Slatco Sterzenbach "},
 {ID: 20 , Pages: 10 , Std: 17 , Rating: 5 , Year: 2020 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Roman" , Title: "Und Nietzsche weinte" , Author: "Irvin D. Yalom "},
 {ID: 53 , Pages: 176 , Std: 4 , Rating: 5 , Year: 2020 , Art: "Gelesen" , Typ: "Buch" , Genre: "Roman" , Title: "Der Alchemist" , Author: "Paulo Coelho "},
 {ID: 11 , Pages: 672 , Std: 13 , Rating: 5 , Year: 2020 , Art: "Gelesen" , Typ: "Buch" , Genre: "Romance" , Title: "Fifty Shades of Grey - Befreite Lust" , Author: "E L James "},
 {ID: 118 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Biografie" , Title: "Die sieben Todsünden - Mein Leben mit Slipknot und Stone Sour" , Author: "Corey Taylor "},
 {ID: 128 , Pages: 288 , Std: 6 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Biografie" , Title: "Die wahre Geschichte von McDonald's Erzählt von Gründer Ray Kroc" , Author: "Ray Kroc "},
 {ID: 49 , Pages: 672 , Std: 13 , Rating: 4 , Year: 2019 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Des Teufels Gebetbuch" , Author: "Markus Heitz "},
 {ID: 117 , Pages: 1260 , Std: 25 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Fiction" , Title: "Der Streik" , Author: "Ayn Rand "},
 {ID: 1 , Pages: 10 , Std: 45 , Rating: 3 , Year: 2019 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Finance Business" , Title: "Warren Buffett Das Leben ist wie ein Schneeball" , Author: "Alice Schroeder "},
 {ID: 62 , Pages: 10 , Std: 12 , Rating: 3 , Year: 2019 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Finance Business" , Title: "Machtbeben Die Welt vor der größten Wirtschaftskrise aller Zeiten" , Author: "Dirk Müller "},
 {ID: 129 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Reich werden und bleiben Ihr Wegweiser zur finanziellen Freiheit. Wie sich Geld durch kluge Investitionen vermehren Reichtum sichern und Financial Freedome erreichen lässt" , Author: "Rainer Zitelmann "},
 {ID: 123 , Pages: 224 , Std: 4 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Frag immer erst warum Wie Top-Firmen und Führungskräfte zum Erfolg inspirieren" , Author: "Simon Sinek "},
 {ID: 130 , Pages: 240 , Std: 5 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Steigern Sie Ihren finanziellen IQ Wie Sie intelligenter mit Ihrem Geld umgehen" , Author: "Robert T. Kiyosaki "},
 {ID: 131 , Pages: 600 , Std: 12 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Grundlagen der Immobilienwirtschaft Recht - Steuern - Marketing - Finanzierung - Bestandsmanagement - Projektentwicklung" , Author: "Kerry-U. Brauer "},
 {ID: 116 , Pages: 688 , Std: 14 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Die Prinzipien des Erfolgs Bridgewater-Gründer Ray Dalios Principles mit dem Prinzip der stetigen Verbesserung" , Author: "Ray Dalio "},
 {ID: 122 , Pages: 544 , Std: 11 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Das Robbins Power Prinzip Befreie die innere Kraft | Schluss mit Fremdbestimmung Frustration und Unsicherheit" , Author: "Anthony Robbins "},
 {ID: 125 , Pages: 224 , Std: 4 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Auf der Straße des Erfolgs Wie Sie die Prinzipien aus Think and Grow Rich erfolgreich in Ihrem Leben umsetzen" , Author: "Napoleon Hill "},
 {ID: 126 , Pages: 152 , Std: 3 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "ByeBye Pille In 4 Schritten zurück zur Balance" , Author: "Isabel Morelli "},
 {ID: 19 , Pages: 172 , Std: 3 , Rating: 4 , Year: 2019 , Art: "Gelesen" , Typ: "Buch" , Genre: "Psychology" , Title: "The Miracle Morning The Not-So-Obvious Secret Guaranteed to Transform Your Life (Before 8AM)" , Author: "Hal Elrod "},
 {ID: 25 , Pages: 10 , Std: 3 , Rating: 5 , Year: 2019 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "Das Café am Rande der Welt" , Author: "John Strelecky "},
 {ID: 26 , Pages: 10 , Std: 7 , Rating: 5 , Year: 2019 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "Wiedersehen im Café am Rande der Welt Eine inspirierende Reise zum eigenen Selbst" , Author: "John Strelecky "},
 {ID: 27 , Pages: 10 , Std: 6 , Rating: 4 , Year: 2019 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "The Big Five for Life Was Wirklich Zählt im Leben" , Author: "John Strelecky "},
 {ID: 28 , Pages: 10 , Std: 9 , Rating: 4 , Year: 2019 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "Das Leben gestalten mit den Big Five for Life Das Abenteuer geht weiter The Big Five for Life" , Author: "John Strelecky "},
 {ID: 29 , Pages: 10 , Std: 3 , Rating: 5 , Year: 2019 , Art: "Gelesen" , Typ: "Hörbuch" , Genre: "Psychology" , Title: "Safari des Lebens" , Author: "John Strelecky "},
 {ID: 33 , Pages: 618 , Std: 12 , Rating: 5 , Year: 2019 , Art: "Gelesen" , Typ: "Buch" , Genre: "Psychology" , Title: "Grenzenlos Erfolgreich" , Author: "Julian Hosp "},
 {ID: 34 , Pages: 380 , Std: 8 , Rating: 5 , Year: 2019 , Art: "Gelesen" , Typ: "Buch" , Genre: "Psychology" , Title: "DAS TIMEHORIZON PRINZIP" , Author: "Julian Hosp "},
 {ID: 127 , Pages: 320 , Std: 6 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Jeder Mensch kann schlafen lernen" , Author: "Shawn Stevenson "},
 {ID: 120 , Pages: 464 , Std: 9 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Flow. Das Geheimnis des Glücks" , Author: "Mihaly Csikszentmihalyi "},
 {ID: 121 , Pages: 224 , Std: 4 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Die subtile Kunst des darauf Scheißens" , Author: "Mark Manson "},
 {ID: 124 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Die Gesetze der Gewinner Erfolg und ein erfülltes Leben" , Author: "Buso Schäfer "},
 {ID: 119 , Pages: 816 , Std: 16 , Rating: 4 , Year: 2019 , Art: "Merkliste" , Typ: "Buch" , Genre: "Roman" , Title: "Metro 2033 Roman (Metro-Romane Band 1)" , Author: "Dmitry Glukhovsky "},
 {ID: 9 , Pages: 608 , Std: 12 , Rating: 5 , Year: 2019 , Art: "Gelesen" , Typ: "Buch" , Genre: "Romance" , Title: "Fifty Shades of Grey - Geheimes Verlangen" , Author: "E L James "},
 {ID: 10 , Pages: 608 , Std: 12 , Rating: 5 , Year: 2019 , Art: "Gelesen" , Typ: "Buch" , Genre: "Romance" , Title: "Fifty Shades of Grey - Gefährliche Liebe" , Author: "E L James "},
 {ID: 144 , Pages: 272 , Std: 5 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Biografie" , Title: "Thomas Edison Der Erfinder der Modernen Welt" , Author: "David J. Kent "},
 {ID: 46 , Pages: 688 , Std: 14 , Rating: 5 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Blutportale Roman" , Author: "Markus Heitz "},
 {ID: 47 , Pages: 320 , Std: 6 , Rating: 4 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "DOORS ? - Kolonie" , Author: "Markus Heitz "},
 {ID: 48 , Pages: 288 , Std: 6 , Rating: 3 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "DOORS X - Dämmerung" , Author: "Markus Heitz "},
 {ID: 14 , Pages: 208 , Std: 4 , Rating: 5 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Der reichste Mann von Babylon" , Author: "George Samuel Clason "},
 {ID: 15 , Pages: 192 , Std: 4 , Rating: 3 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Investment Punk" , Author: "Gerald Hörhan "},
 {ID: 16 , Pages: 192 , Std: 4 , Rating: 3 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Gegengift" , Author: "Gerald Hörhan "},
 {ID: 18 , Pages: 288 , Std: 6 , Rating: 4 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Kopf schlägt Kapital" , Author: "Günter Faltin "},
 {ID: 56 , Pages: 352 , Std: 7 , Rating: 4 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Rich Dad Poor Dad 2 Cash Flow Quadrant - Rich Dad's Guide to Financial Freedom" , Author: "Robert T. Kiyosaki "},
 {ID: 64 , Pages: 419 , Std: 8 , Rating: 3 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Das System Immobilie" , Author: "Thomas Knedel "},
 {ID: 65 , Pages: 218 , Std: 4 , Rating: 1 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Der reichste Hausmeister Deutschlands" , Author: "Andreas Sell "},
 {ID: 155 , Pages: 184 , Std: 4 , Rating: 3 , Year: 2018 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "33 Geheimnisse der Immobilienfinanzierung die Ihnen Ihre Bank nicht verrät … und wie Sie die optimale Finanzierung finden." , Author: "Norman Argubi "},
 {ID: 133 , Pages: 464 , Std: 9 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Der Schwarze Schwan Die Macht höchst unwahrscheinlicher Ereignisse" , Author: "Nassim Nicholas Taleb "},
 {ID: 134 , Pages: 416 , Std: 8 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Cashkurs So machen Sie das Beste aus Ihrem Geld Aktien Versicherungen Immobilien" , Author: "Dirk Müller "},
 {ID: 149 , Pages: 326 , Std: 7 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Die Denker der Wirtschaft Ideen und Konzepte der großen Wirtschaftsphilosophen" , Author: "Robert L. Heilbronner "},
 {ID: 152 , Pages: 87 , Std: 2 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Morgan - der ungekrönte König der Welt" , Author: "Fritz Schwarz "},
 {ID: 154 , Pages: 346 , Std: 7 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Mein Leben und Werk Unter Mitwirkung von Samuel Crowther" , Author: "Henry Ford "},
 {ID: 136 , Pages: 192 , Std: 4 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Kryptowährungen Bitcoin Ethereum Blockchain ICOs & Co. einfach erklärt" , Author: "Julian Hosp "},
 {ID: 148 , Pages: 129 , Std: 3 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Die Airbnb-Formel In 5 Schritten vom Anfänger zum Superhost" , Author: "Hannes Ühss "},
 {ID: 147 , Pages: 336 , Std: 7 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Der große Gebert Die Klassiker Börsenzyklen Börsenindikatoren und Der intelligente Investor aktualisiert und komplett überarbeitet" , Author: "Thomas Gebert "},
 {ID: 151 , Pages: 208 , Std: 4 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Erfolg im Crash Wie Sie mit konkreten Anlageideen von der Krise profitieren" , Author: "Florian Homm "},
 {ID: 135 , Pages: 400 , Std: 8 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Motivation und Persönlichkeit" , Author: "Abraham H. Maslow "},
 {ID: 142 , Pages: 192 , Std: 4 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Das Peter-Prinzip oder Die Hierarchie der Unfähigen" , Author: "Laurance J. Peter "},
 {ID: 145 , Pages: 672 , Std: 13 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Money Die 7 einfachen Schritte zur finanziellen Freiheit" , Author: "Tony Robbins "},
 {ID: 132 , Pages: 240 , Std: 5 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Kapitalismus und Freiheit Geleitwort von Horst Siebert" , Author: "Jan W. Haas "},
 {ID: 138 , Pages: 384 , Std: 8 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Der größte Raubzug der Geschichte Warum die Fleißigen immer ärmer und die Reichen immer reicher werden. Überarbeitete und aktualisierte Taschenbuchausgabe" , Author: "Marc Friedrich "},
 {ID: 139 , Pages: 368 , Std: 7 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Der Crash ist die Lösung Warum der finale Kollaps kommt und wie Sie Ihr Vermögen retten" , Author: "Marc Friedrich "},
 {ID: 140 , Pages: 2736 , Std: 55 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Karl Marx Das Kapital (Vollständige Gesamtausgabe)" , Author: "Karl Marx "},
 {ID: 143 , Pages: 160 , Std: 3 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Parkinsons Gesetz und andere Untersuchungen über die Verwaltung" , Author: "C. Northcote Parkinson "},
 {ID: 141 , Pages: 256 , Std: 5 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Die Kunst des klaren Denkens 52 Denkfehler die Sie besser anderen überlassen" , Author: "Rolf Dobelli "},
 {ID: 146 , Pages: 272 , Std: 5 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Jetzt! Die Kraft der Gegenwart" , Author: "Eckhart Tolle "},
 {ID: 150 , Pages: 422 , Std: 8 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "EQ. Emotionale Intelligenz" , Author: "Daniel Goleman "},
 {ID: 153 , Pages: 160 , Std: 3 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Psychology" , Title: "Go Pro 7 Schritte zum Network Marketing Profi" , Author: "Eric Worre "},
 {ID: 137 , Pages: 832 , Std: 17 , Rating: 4 , Year: 2018 , Art: "Merkliste" , Typ: "Buch" , Genre: "Roman" , Title: "BLACKOUT - Morgen ist es zu spät Roman" , Author: "Marc Elsberg "},
 {ID: 44 , Pages: 608 , Std: 12 , Rating: 5 , Year: 2017 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Exkarnation - Krieg der alten" , Author: "Markus Heitz "},
 {ID: 45 , Pages: 608 , Std: 12 , Rating: 4 , Year: 2017 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Exkarnation - Seelensterben" , Author: "Markus Heitz "},
 {ID: 50 , Pages: 520 , Std: 10 , Rating: 4 , Year: 2017 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Ritus (Die Bestie #1)" , Author: "Markus Heitz "},
 {ID: 51 , Pages: 624 , Std: 12 , Rating: 4 , Year: 2017 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Sanctum (Die Bestie #2)" , Author: "Markus Heitz "},
 {ID: 55 , Pages: 320 , Std: 6 , Rating: 5 , Year: 2017 , Art: "Gelesen" , Typ: "Buch" , Genre: "Finance Business" , Title: "Rich Dad Poor Dad" , Author: "Robert T. Kiyosaki "},
 {ID: 158 , Pages: 176 , Std: 4 , Rating: 4 , Year: 2017 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Adele Spitzeder Der größte Bankenbetrug aller Zeiten" , Author: "Julia Nebel "},
 {ID: 156 , Pages: 480 , Std: 10 , Rating: 4 , Year: 2017 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Rich Dad's Investmentguide Wo und wie die Reichen wirklich investieren" , Author: "Robert T. Kiyosaki "},
 {ID: 157 , Pages: 168 , Std: 3 , Rating: 4 , Year: 2017 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Das Geschäft des 21. Jahrhunderts" , Author: "Robert T. Kiyosaki "},
 {ID: 159 , Pages: 944 , Std: 19 , Rating: 4 , Year: 2017 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Die Geheimnisse der Wertpapieranalyse Überlegenes Wissen für Ihre Anlageentscheidung" , Author: "Benjamin Graham "},
 {ID: 160 , Pages: 272 , Std: 5 , Rating: 4 , Year: 2017 , Art: "Merkliste" , Typ: "Buch" , Genre: "Finance Business" , Title: "Denke nach und werde reich Die 13 Gesetze des Erfolgs" , Author: "Napoleon Hill "},
 {ID: 32 , Pages: 358 , Std: 7 , Rating: 5 , Year: 2017 , Art: "Gelesen" , Typ: "Buch" , Genre: "Psychology" , Title: "25 Geschichten für mein jüngeres Ich" , Author: "Julian Hosp "},
 {ID: 161 , Pages: 416 , Std: 8 , Rating: 4 , Year: 2016 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Der siebte Sinn der Tiere" , Author: "Rupert Sheldrake "},
 {ID: 162 , Pages: 544 , Std: 11 , Rating: 4 , Year: 2016 , Art: "Merkliste" , Typ: "Buch" , Genre: "Nonfiction" , Title: "Das Gedächtnis der Natur Das Geheimnis der Entstehung der Formen" , Author: "Rupert Sheldrake "},
 {ID: 41 , Pages: 688 , Std: 14 , Rating: 5 , Year: 2014 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Judassohn (Kinder des Judas #2)" , Author: "Markus Heitz "},
 {ID: 42 , Pages: 624 , Std: 12 , Rating: 5 , Year: 2014 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Judastöchter (Kinder des Judas #3)" , Author: "Markus Heitz "},
 {ID: 43 , Pages: 720 , Std: 14 , Rating: 5 , Year: 2014 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Kinder des Judas (Kinder des Judas #1)" , Author: "Markus Heitz "},
 {ID: 58 , Pages: 416 , Std: 8 , Rating: 4 , Year: 2012 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Die Tribute von Panem 1. Tödliche Spiele" , Author: "Suzanne Collins "},
 {ID: 59 , Pages: 432 , Std: 9 , Rating: 5 , Year: 2012 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Die Tribute von Panem 2. Gefährliche Liebe" , Author: "Suzanne Collins "},
 {ID: 60 , Pages: 432 , Std: 9 , Rating: 5 , Year: 2012 , Art: "Gelesen" , Typ: "Buch" , Genre: "Fantasy" , Title: "Die Tribute von Panem 3. Flammender Zorn" , Author: "Suzanne Collins "},
];


function setup() {
 createCanvas(CanvasB, CanvasH);
}

function draw() {
  background(255);

  let x = Rand;
  let y = Regal;

  let tooltipContainer = createGraphics(CanvasB, CanvasH);


  for (let i = 0; i < Books.length; i++) {
    let bookWidth = Books[i].Std * 3;
    let bookHeight = Books[i].Rating * 10;

    // Neue Reihenfolge:
    if (x + bookWidth > CanvasB - Rand) {
      y += Regal;
      x = Rand;
    }


    // Text bei Mouseover
    if (
      mouseX > x &&
      mouseX <= x + bookWidth &&
      mouseY > y - bookHeight &&
      mouseY < y
    ) {
      let padding = 8;
      let borderRadius = 4;
      let maxWidth = 250;
      let tooltipText = "Titel: " + Books[i].Title + " -|||- Author: " + Books[i].Author + " -|||- Genre: " + Books[i].Genre ;
      tooltipContainer.clear();
    
      tooltipContainer.textSize(15);
    
      let words = tooltipText.split(' ');
      let lines = [];
      let currentLine = words[0];
    
      for (let j = 1; j < words.length; j++) {
        let word = words[j];
        let nextLine = currentLine + ' ' + word;
        if (tooltipContainer.textWidth(nextLine) < maxWidth) {
          currentLine = nextLine;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
    
      lines.push(currentLine);
    
      let lineHeight = 20;
      let textHeight = lineHeight * lines.length;
    
      tooltipContainer.fill("#333");
      tooltipContainer.noStroke();
      tooltipContainer.rect(mouseX, mouseY -2, maxWidth + padding * 2, textHeight + padding * 2, borderRadius);
    
      tooltipContainer.fill(255);
      for (let j = 0; j < lines.length; j++) {
        tooltipContainer.text(lines[j], mouseX + padding, mouseY + 10 + padding + lineHeight * j);
      }  

      fill(176, 123, 255, 77);

    }
    


      

    // Bücher Formen
    rect(x, y + 1 - bookHeight, bookWidth, bookHeight);

    if (i === 0 || Books[i].Year !== Books[i - 1].Year) {
      noStroke()
      fill(0);
      textSize(15);
      text(Books[i].Year, x, y + 20);
    }


    // Add a rectangle in the top-left corner if the book type is "Hörbuch"
    if (Books[i].Typ === "Hörbuch") {
      noStroke();
      if (Books[i].Art === "Merkliste") {
        fill(0);
      } else {
        fill(255);
      }
      let rectSize = bookWidth / 4;
      triangle(x+0.75, y - bookHeight + 10, x+0.75, y - bookHeight + 2, x + 9, y - bookHeight + 2);
    }


    // 4px Abstand zwischen den einzelnen Bücher
    if (i < Books.length - 1 && Books[i].Year !== Books[i + 1].Year) {
      x += bookWidth + 20;
    } else {
      x += bookWidth + 4;
    }


    // Regalbrett
    noStroke();
    fill(20);
    rect(Rand - 5, y, CanvasB - Rand * 2 + 10, 6);

    
    // Aussehen Bücher
    if (i < Books.length - 1 && Books[i+1].Art === "Merkliste") {
      stroke(0);
      strokeWeight(0.75);
      fill(255);
    } else {
      noStroke();
      fill(20);
    }
    
  }
  image(tooltipContainer, 0, 0);

}
