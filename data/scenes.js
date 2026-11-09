/* Sākumlapas varianti (fons + enter poga) un tiem atbilstošais lapas fons.
   Lapas ielādē tiek izvēlēts nejaušs variants; atgriežoties sākumlapā - nākamais.
   x, y = pogas centrs (% no bildes), w = pogas platums (% no bildes platuma)
   mpos = bildes fokuss telefonā, mtop = pogas augstums telefonā
   page = fona bilde pārējām lapām, op = tās stiprums (0.2 = 20%) */
var scenes=[
 {bg:"assets/img/enter-01.jpg",btn:"assets/img/btn-01.png",page:"assets/img/bg-01.jpg",op:.2,x:61.4,y:29.3,w:26.0,mpos:"30% 50%",mtop:"78%"},
 {bg:"assets/img/enter-02.jpg",btn:"assets/img/btn-02.png",page:"assets/img/bg-02.jpg",op:.3,x:77.2,y:53.4,w:26.0,mpos:"40% 50%",mtop:"84%"},
 {bg:"assets/img/enter-03.jpg",btn:"assets/img/btn-03.png",page:"assets/img/bg-03.jpg",op:.3,x:68.8,y:40.9,w:26.0,mpos:"30% 50%",mtop:"68%"}
];
