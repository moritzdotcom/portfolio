convert public/projects/wunderpass/0.png -blur 50x50 -resize 4% public/projects/wunderpass/0blur.jpg
convert public/projects/wunderpass/1.png -blur 50x50 -resize 4% public/projects/wunderpass/1blur.jpg
convert public/projects/wunderpass/2.png -blur 50x50 -resize 4% public/projects/wunderpass/2blur.jpg
convert public/projects/wunderpass/3.png -blur 50x50 -resize 4% public/projects/wunderpass/3blur.jpg
convert public/projects/wunderpass/4.png -blur 50x50 -resize 4% public/projects/wunderpass/4blur.jpg

node toBase64.js public/projects/wunderpass/0blur.jpg public/projects/wunderpass/1blur.jpg public/projects/wunderpass/2blur.jpg public/projects/wunderpass/3blur.jpg public/projects/wunderpass/4blur.jpg