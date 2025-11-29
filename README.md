# zkreml.cz — Neo Layout

Minimalistický osobní web postavený na statickém HTML + CSS.  
Layout vychází z návrhu NeoCard v2 (grafitově–tyrkysová varianta).

## Struktur

```text
├── index.html       # hlavní stránka
├── css/
│   └── style.css    # vlastní styly
├── img/             # obrázky a avatar
└── README.md
```

## Větve

- **main** — produkční větev, aktuální stav webu  
- **neo-layout** — pracovní vývoj layoutu

## Lokální náhled

Spuštění lokálního serveru:

python3 -m http.server 8000

Aplikace poběží na:

<http://127.0.0.1:8000>

## Nasazení

Web je statický, nevyžaduje žádné závislosti.  
Stačí nahrát soubory na hosting (Surfer, nginx, Cloudron Static, atd.).

## Licence

MIT
