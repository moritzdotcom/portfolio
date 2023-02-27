convert public/projects/coolhead/0.png -blur 50x50 -resize 4% public/projects/coolhead/0blur.jpg
convert public/projects/coolhead/1.png -blur 50x50 -resize 4% public/projects/coolhead/1blur.jpg
convert public/projects/coolhead/2.png -blur 50x50 -resize 4% public/projects/coolhead/2blur.jpg
convert public/projects/coolhead/3.png -blur 50x50 -resize 4% public/projects/coolhead/3blur.jpg
convert public/projects/coolhead/4.png -blur 50x50 -resize 4% public/projects/coolhead/4blur.jpg

node toBase64.js public/projects/coolhead/0blur.jpg public/projects/coolhead/1blur.jpg public/projects/coolhead/2blur.jpg public/projects/coolhead/3blur.jpg public/projects/coolhead/4blur.jpg