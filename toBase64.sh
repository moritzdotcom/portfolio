convert public/projects/wundernft/0.png -blur 50x50 -resize 4% public/projects/wundernft/0blur.jpg
convert public/projects/wundernft/1.png -blur 50x50 -resize 4% public/projects/wundernft/1blur.jpg

node toBase64.js public/projects/wundernft/0blur.jpg public/projects/wundernft/1blur.jpg