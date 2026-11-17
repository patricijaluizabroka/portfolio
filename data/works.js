/* cat = sadaļa no data/categories.js (piem., "photo-theatre").
   Darbu saraksts. Pievieno jaunu darbu, nokopējot vienu bloku {…}.
   img = ceļš uz bildi mapē assets/content/
   imgs = (nav obligāts) vairākas bildes, piem. imgs:[ceļš1, ceļš2, …] (tādi paši ceļi kā img)
   -> darba lapā parādās galerija ar bultiņām un indikatoriem. Bez imgs rādās viena bilde (img). */
var works=[
 {cat:"photo-personal",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/work-1.jpg",imgs:["assets/content/work-1.jpg","assets/content/work-3.jpg","assets/content/work-4.jpg"]},
 {cat:"installations",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/work-2.jpg",imgs:["assets/content/work-2.jpg","assets/content/work-5.jpg","assets/content/work-6.jpg"]},
 {cat:"installations",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/work-3.jpg"},
 {cat:"installations",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/work-4.jpg"},
 {cat:"photo-projects",title:"izlikos",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/work-5.jpg"},
 {cat:"photo-projects",title:"pakāros",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/work-6.jpg"},
 /* placeholder darbi: aizstāj ar īstajiem (img, title, tech, year, desc) */
 {cat:"photo-theatre",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"photo-theatre",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"photo-theatre",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"photo-projects",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"photo-personal",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"photo-personal",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"video",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"video",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"video",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"graphics-theatre",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"graphics-theatre",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"graphics-theatre",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"graphics-projects",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"graphics-projects",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"},
 {cat:"graphics-projects",title:"bez nosaukuma",tech:"tehnika",year:"2026",desc:"Darba apraksts: 2–3 rindkopas par ideju, procesu un materiāliem. Aizstāj šo tekstu ar savējo.",img:"assets/content/placeholder.png"}
];
