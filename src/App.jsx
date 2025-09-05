import React from "react";

function SongBlock({ title, lyrics }) {
  return (
    <section className="song-block">
      <h2>{title}</h2>
      <pre>{lyrics}</pre>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🤠 Johan 60 år</h1>
        <p></p>
      </header>

      <main className="content">
        <SongBlock
          title="01 –BLINKA LILLA PÄRLA
"
          lyrics={`mel. Blinka lilla stjärna
            
Blinka lilla pärla där,
hur jag undrar hur du är.
Hoppas att du sitter bra,
så att jag blir riktigt gl’a
Blinka lilla pärla där,
snart står du ej längre där.`}
        />
        <SongBlock
          title="02 - 1 2 75 6 7
"
          lyrics={`mel. Ritsch ratsch filibom
            
1 2, 75 6 7, 75 6 7, 75 6 7
1 2, 75 6 7, 75 6 7, 73
107 103 102, 107 6 19 47
17 18 16 15 13 19 14 17
19 16 15 11 9 47 - HEJ!`}
        />
        <SongBlock
          title="03 - JAG HAR ALDRIG...
"
          lyrics={`mel. O hur saligt att få vandra
            
Jag har aldrig var’t på snusen
aldrig rökat en cigarr, hallelulja.
Mina dygder äro tusen,
inga syndiga laster jag har.
Jag har aldrig sett nåt naket
inte ens ett litet nyfött barn.
Mina blickar går mot taket
därmed undgår jag frestarens
garn, hallelulja
Hallelulja, hallelulja
Bacchus spelar på gitarren.
Satan spelar på sitt handklaver.
Alla djävlar dansar tango
säg var kan man väl önska sig mer?
Jo att alla bäckar vore brännvin,
stadsparksdammen full av
bayerskt öl,
konjak i varenda rännsten
och punsch i varendaste pöl!
Och mera öl, och mera öl...`}
        />
        <SongBlock
          title="04 - VI SKÅLAR...
"
          lyrics={`mel. Flickan hon går i ringen

Vi skålar för våra vänner
och dom som vi känner
och dom som vi inte känner
dom skiter vi i!`}
        />
        <SongBlock
          title="05 - HELL AND GORE
"
          lyrics={`mel. Helan går
            
Hell and gore
Chung Hop father Allan Allan ley.
Hell and gore
Chung Hop father Allan ley.
Oh handsome in the hell and tar
hand hell are in the half and four.
Hell and gore
Chung Hop father Allan ley.`}
        />
        <SongBlock
          title="06 - SÅ LUNKA VI SÅ SMÅNINGOM
"
          lyrics={`Så lunka vi så småningom
från Bacchi buller och tumult,
när döden ropar: ”Granne, kom,
ditt timglas är nu fullt!”
Du gubbe, fäll din krycka ner
och du, du yngling, lyd min lag:
den skönsta nymf som åt dig ler,
inunder armen tag!
Tycker du att graven är för djup,
nå, välan så tag dig då en sup,
tag dig sen dito en, dito två, dito tre,
så dör du nöjdare!`}
        />
        <SongBlock
          title="07 - BÅTLÅT
"
          lyrics={`Det var en båt som sa till en annan:
”Vad du var stilig,
vi borde borda varann,
gjorda för varann,
och köla lite grann,
som bara båtar kan.”
Bada bam bam bam bam.
Bada bam bam bam bam.
Andra båten sa:
”Klart att jag vill va’
med och kryssa,
kyssa din stiliga för,
i en stillsam slör
vi varann förför,
som bara båtar gör.”
Bada bam bam bam bam.
Bada bam bam bam bam.
Sen när det blir lä,
ja då kan vi klä
av oss seglen,
ligga att tag vid en boj,
skepp o’hoj,
gnida vår fernissa
lite grann och fnissa,
kasta ett ankar,
bli lite vågade, ha lite skoj (Ojojoj).
Och hur vi sedan få
en och kanske två
egna små jollar,
jollrande efter på släp,
i ett navelrep,
det är en hemlighet,
som bara båtar vet.
Bada bam bam bam bam.
Bada bam bam bam bam.
Vi kan lägga till i
äktenskapets hamn
vid en brygga,
bygga ett båthus som vi
kunde ligga i
och tjära ner varann,
som bara båtar kan.
Bada bam bam bam bam.
Bada bam bam bam bam.`}
        />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Cowboy Songs</p>
      </footer>
    </div>
  );
}
