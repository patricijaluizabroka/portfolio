/* Sākumlapa: video (field) + enter poga + lapas fons.
   video / videoM = video datoram / telefonam (telefonam vertikāls izgriezums), poster = pirmais kadrs
   x, y = pogas centrs (% no video kadra), w = pogas platums (% no kadra platuma)
   mpos = video fokuss telefonā, mtop = pogas augstums telefonā (daļa no ekrāna augstuma),
   eTop/eBot = video augšas/apakšas krāsa (Safari joslām sākumlapā)
   page = fona bilde pārējām lapām, op = tās stiprums (0.25 = 25%),
   tone = tai atbilstošā vidējā krāsa (rezerves krāsa ārpus bildes: pārrite, drošās zonas) */
var scenes=[
 {video:"assets/ui/field.mp4",videoM:"assets/ui/field-m.mp4",poster:"assets/ui/field-poster.jpg",posterM:"assets/ui/field-poster-m.jpg",btn:"assets/ui/btn-02.png",page:"assets/ui/bg-03.jpg",tone:"#d9e0ed",op:.25,x:77.2,y:53.4,w:26.0,mpos:"50% 40%",mtop:.2,eTop:"#b083fa",eBot:"#6e4bc2"}
];
