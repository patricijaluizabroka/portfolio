# patrīcija luiza broka – portfolio

Statiska lapa (HTML, CSS, JS) bez būvēšanas soļiem. Darbojas GitHub Pages.

## Struktūra

```
index.html          lapas karkass (visas sadaļas)
css/style.css       stili (krāsas un fonts augšā, :root)
js/main.js          navigācija un darbu attēlošana
data/works.js       darbu saraksts: sadaļa (cat), nosaukums, tehnika, gads, apraksts, bilde
data/categories.js  my creations apakšnavigācija (photo, video, graphics, installations)
data/scenes.js      sākumlapas varianti (fons un pogas vieta)
assets/img/         visas bildes
.nojekyll           izslēdz Jekyll apstrādi
```

## Publicēšana GitHub Pages

1. GitHub: **New repository**, nosaukums, piem., `portfolio` (Public).
2. **Add file → Upload files**: ievelc visu šīs mapes saturu (ar mapēm un `.nojekyll`) un nospied **Commit changes**.
3. **Settings → Pages**: *Source* = **Deploy from a branch**, *Branch* = `main`, mape `/ (root)` → **Save**.
4. Pēc ~1 minūtes lapa būs adresē `https://LIETOTĀJS.github.io/portfolio/`.
   Ja repozitorijam dod nosaukumu `LIETOTĀJS.github.io`, adrese būs `https://LIETOTĀJS.github.io/`.

## Satura maiņa

- **Darba sadaļa:** `cat` laukā ieraksti, piem., `photo-theatre`, `video` vai `installations`. Sadaļas maina `data/categories.js`.
- **Darbs:** atver `data/works.js`, maini `title`, `tech`, `year`, `desc`. Jaunu darbu pievieno, nokopējot bloku `{ … }` un pievienojot jaunu bildi `assets/img/`.
- **Par mani / kontakti:** teksts ir `index.html` sadaļās `#about` un `#contact`.
- **Krāsas un fonts:** `css/style.css`, `:root` sākumā.
- **Fona bilde / enter poga:** aizstāj `assets/img/bg.jpg` un `assets/img/enter-btn.png`. Pogas vietu maina `#enter a` kārtulā `css/style.css`.

Padoms: bildes saspied līdz ~1600 px platumā (JPG), lai lapa ielādējas ātri.

Lokāli lapu var atvērt, dubultklikšķinot uz `index.html`.
