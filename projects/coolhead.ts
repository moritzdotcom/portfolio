import { Project } from '@/projects';
import { moritz } from './members';

export const coolheadConfig: Project = {
  title: 'Coolhead.finance',
  media: [
    {
      isVideo: true,
      source: {
        url: '/projects/coolhead/showcase.webm',
        type: 'video/webm',
      },
      fallback: {
        url: '/projects/coolhead/showcase.mp4',
        type: 'video/mp4',
      },
      poster: '/projects/coolhead/poster.jpg',
      length: 50,
    },
    {
      isVideo: false,
      source: '/projects/coolhead/0.png',
      alt: 'authentication',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAABgAEBQcJCAH/xAA0EAAABQMCAwUGBgMAAAAAAAABAgMEBQARIQYHCBIxEyMyQZEUImGy0eEVM0NicrGCkqH/xAAbAQACAwEBAQAAAAAAAAAAAAADBAECBgUAB//EACgRAAICAQIEBgMBAAAAAAAAAAABAgMEERQiMkFRBRITFSEzMTRScf/aAAwDAQACEQMRAD8A08WUBMo02jktlb60VdSmqIuETdmRRcCHOJQ63Naq2NxXwEoipy0ZKuNnElVgMWZV5PMOX70NWtIb28D0+ycQp4pJUf8AH71HqyI21fYYOdktMEUBJeSW5jdA5PvVvXmRtKux4fh40wqFxeq5/b969uJ9yNnV2GanDPpZS/M8V/1qyyZlXg0voU/xA7Uw228axfxDg4nWNY9wtfNM4t852aMQ8QxKqqXKK+SjZB31zXbSMq2Drl3dTA0VIC2aYP3YAA5rOJGybK9kV+13DhQv5l+ah3L4D4j4i66VOkNn71vHtTunSoJpkDJh8qmMXJ6IrOagvNIGD7g6FU71WXQMYvnYcUfa29hTf4/9EvA6qg9RcwRD4q4E62DpQ7Kp18yDU5Nd/wBb1JY6ySX5ipCfyG1DDnNvGY6QHTcaKaxDCB/IwD5hTmF9qOZ4r+uzkGQedc1pEjESYPuHfedaIkBbNL5B5e+aziRs5MCBX7XceGD+PzULIWiGcJ6yL7pM6g2fsG0k1OzeJ86RwsYt7Xq0ZOL1RScI2Lyy/AEjtLpgyxx/CigQRx740dZdvcU9ux/5CXT2koTTRRCKZggJ/FYRG9DsunbzMPTjV0fWtCPmkPbtQpNFVTlT5QGxR+FCDgTu5oGHfaHknUoidU7ZMTJCYQwNGplpYtBXJgnVJSM85V0BFVSAOCmMAetauC1ij57a9JMHHLzvOtFSF2zTCQd9QvWdSNlKQJsV+13Khwvfw/NQclfA3gPiZ0XSJ1xV48KvHhV48AOtY6WkJ5EsS+FsoUoZuIXx8KLVOMHxLUXyK52LSD0AfcfTesS6IlHLzUBjJkRETE5jZpuu2tySUTnXY16g25md8w7Eq6wCbIHN/daSC4UYi18TBtw87zrRUhds0wfu8Dms6kbGTAxzOKwOrY+fBsK6Te3OAX8hvQ763NaIYxL41S1kWEpxLxKXihlfUfpSu1sOi/EKV1GqnFRApeKHV9R+lTtLCPcqV1GqnFxplLxRKvqP0qdnb2K+50LqNVOMnSKXji1fUfpU7G3sVfiuOupMbc78aa3N1cJGhStewLkVT2vj40K3HnTzDGPmVZPIwv3hlYgduZoE5BqJhQGwAqURH/tVp19RF8lr0pf4ZQzbwPanA3/UN/Y1sq1wo+Z3PjYMuHfeDmjJC7ZpxIGNYc1nEbKQMyBjZzREBYNSBh97NXQGQNSBjZzRUBkDMgY1hzREBkDcgYbDmiRAyIEJmVh3ArRj9ZscepkzWGoshGfMglFs62/K9COl9dawdNzt3GoXiiRwsYplMDVIU1qX4CWZVzi05Mr2ROcRMImERHNdGKONJ6sH3AiKg3GiJAWf/9k=',
    },
    {
      isVideo: false,
      source: '/projects/coolhead/1.png',
      alt: 'dashboard',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAABggJAwQFB//EADYQAAEDAgQEBAMFCQAAAAAAAAECAwQABQYHESEIEhMxIiNBUWGxshRCcZHRFyQmMkRicsHh/8QAGwEAAQUBAQAAAAAAAAAAAAAABgECAwQFAAf/xAAnEQACAgIBAwMFAQEAAAAAAAAAAQIDBBEhBRQxEhMiIzIzNFEkQf/aAAwDAQACEQMRAD8Ap484G0mraMlsVLjYzKxRgexwHcNTjHW6rxkeu9W8WtWT9Mihm3Spqco+RU8D575iYmxtarHKvrgbkvBDg0Pb861LcKuEG0YuP1G6y2MWUJs2VECXDYVNujy3HG0qJ5PcfjQ47JJ8BrHHraW0dBeRdgcPjuLun+P/AGk9+Yva1fw13uHrDbxHJOcPv4R+td3E/wCjezpf/AIxXw0XZ2d/D8w/ZtPvJT/s1bpyYa+b5M7IwbfV9JcHk2amVF9y2iRbhcJOoeVpoAPf4VYrvjOaUCnfiWVVOViPN7hL771ppGE2DsmXq5salSIWymE+WADvQ4kGTYmHHxIDljtYJ7LH1VfwF9VGT1V/52KjlGyn9qFhcHKQZSa28j8UgZwm+4iWPhhqPaYTiGk69Bv0/tFBMuZM9Sj9qN5IZktcoIBI96aO1sxxreYyysPKV8DXDVDXKNaZcJEKQhDriAlZ9SBSsXbXkX/jLlsqw1bS28hR5/RQPqKt4X5UZ3Vf12KFcJnfeiRICJMH5EvzO9SJELZS+4TNdd6HEgzkxNuPGR1LDbRr94fVV/CX1UZXU3vHYr2S6lHM2w6kn96TWzk/iYNYH7ESz9uaQ9aIaV9ug39IoIl5Z6pD7UZDGRHSXEqO1Jsc+DFFnGQ70wrtSbQyMvUwbxMyiVf2WH3VBASDok/CnwSfkbbJwXB5/mhgyz3bBVzl3Bl1xUZBU0Vnsat1pRmtFC+yVlTUkIPdJQQ64gH+VSgPzokgtpARa9SYOSZnmd6kSK7ZTC4S+41odSDKUhQuN5wyLPbUJOp5h86u4fFqM3qPNDFwybZUzmfYAo/1Sa18h7qYO4K1kRLJtu9KywlcxT5Df0igrW5M9STSgtmaPdIjqOk6v031Fd6Gd7kTM27bmlczakA/AUnpZ3uQATGtslXzEUdFsuJjqSkaqBI9Kkqare5Ihvi7lqD0CeZGGb9HwNdHFYiLiG2SVI5jvVmu+uU0kihbj2qDbkTsvEspfeBVqQtXzolgvigItfyYNyJnmd6lSK7ZTCfL2O9DqQYyYuvExg6841gQ0WmP1iydVDf3qeqbqmpIrX1q+twZ4PgnLLGeGsbWy+zLSRHhvhatj2FX7ctTrcUjKowJVXKbfCH9Z4nMPsQI8aTZXCWmkpO57gae1Dva2b2gz7+j0pNms9xT4ObBCrGsH8TTu1uG99inORxaYLYcKnrQ7oO25pI4uQ/Ij6hiLwZsPcS+X+JMUpW66i3IbSNS6o6HauliWryh8OoY75izr5t5r5bT8BXNq14miLkOskBCV7k0lWPZGxbR1+XTKp6ZNq7zQp95aVagrUQffeiyC+KPPbZfNg1Il+Yd6mSK7ZTi4KVod6HEGUgZuClb71IiFg1cFK8W9PRDIGrgpW+9SohkDNwUrQ71IiGQN3BR0O9SRIZAPiQaqCtVA+4UR8qc0hIyaBKQtzm5es7pr2Lh/WlUUNlOSXk0p6iBpqe1WolGT5OBIJLh1NSJELP/2Q==',
    },
    {
      isVideo: false,
      source: '/projects/coolhead/2.png',
      alt: 'watchlist',
      blurUrl:
        'data:image/jpeg;base64,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',
    },
    {
      isVideo: false,
      source: '/projects/coolhead/3.png',
      alt: 'community',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABgkECAMFBwEC/8QANhAAAQIFAgQDBAkFAAAAAAAAAQIDAAQFESEGBwgSIjETI1EUMkFhFhdxgZGhsbLhJEJEYsH/xAAbAQACAwEBAQAAAAAAAAAAAAADBgIEBQEAB//EACcRAAICAgAFBAIDAAAAAAAAAAABAgMEEQUSEyExFSIzQTRRFCMy/9oADAMBAAIRAxEAPwBnjzgbSYtoyWyqfGvuVqjRFDp7mmp4y63lWWR8cxcxKlbZysz8/Ilj0ucSq2h98dx9S61pVEma6sNzLwQsWOfzjUtwa663JGHjcVtttjB/YwOmbNOPy7E3P1VZbW0laun1H2wtytaY8RxoSS7E5Wx9BfR4gqDi0/JP8xzrzOvEr/RgOwmlnsGbe+d0fzHuvP8AZF4dX2iG1sFt/PvqlmaqXHU+8gDIibttitsGsbGm9I5RxBbVUXbinyM/R31lTyrKBFvjFjFvnOzTKfEMSqqlyijhtQm++Y20hVbB2Zm7uYMFSAtjMJ+bABzC4kOTZS/j6mSuhUux7LH7ov4O1ajK4pp0PZU/aJLv1pUBeCkzSY2chvpMW8KMVfHTHKstod06whxfIkyzdz6dIhKl5Z9Qr/yjyjy7MtKcrTpdSL944S++5KCkPpW2GuS4IvHl2ONbWgQ03oZnTuoJmtLqpX7Qq/Itw2H3GLVuT1IKGihj4XRtdm/JyTjMmmDpumlt5CiF/BQPxESwvlRDiv47Kg1Cc75hkSEiTB+Ym/M7wRIC2MvqE5e+YXEhzkym3HjMeJQaaL/3D90X8Jf2oyuJveOyr2y6lHc2g3JP9UmNnJ+Ji1gfkRHLjl+jTPP29mbvj/UQjy8s+qQeoow6cPkJ5B0ZsbER4kns3agOUxw6c2rFSdm9cpobniJZCb9OPhBlBcvMys7JOfIgf3b0DRJ3RVRm58OPrYbK2uYjpMEqklNcoLIjKVUlIX9VJoIdcQD7qlAfjDPBbihBtepMHJmc8zvBUiu2MwqE33F4XUhylIqFxvOGYo9NQk3PMP1i7h9rUZvEe9DK4bNsqZ3PoAUf8pMa+Q91MXcFayIjlUAq02yAnmvLN4t8hCRJpN7PqW2q9o+aAyWpdN0ctycWtaObTXY7W21tm3PYx4mcmnlJb3ZQFkpCkYwc9MGl8aKsfmZk3ulVp0LUpkz3s6EsnpNxzRPGfvS0DzYvpt70LPq85Z97qv1qz98NcF7UfPbX7mDcxOeZ3gqRXbGYT83g5hdSHGTK68TGjqzrWQk0UmX8Ysm6hn1g9U3VNSRWvrV9bgyvVD203D0xqOTr8rSLrk3A4kEHNo0ZZUZxcWjHrwJ02Kafgs4jit3slJFuXVpxs+GgIsfQD7IyXh1SYw+pXxWiMrjC3nl8fRtoAekdWDV9HPVb0R3ONbeFv3tPt/lEv4FRH1e8IdouJWd1prb2zcJEvSgwOhaiBzYitk4nJrpl3B4h1W3azpHEPuzoKs7cTUpS9Syzz6kkBCF5Mcw6Zxs20S4nk1zp1Fi8KlOgqWoKuCSR+MM0F2EWx+5g7MTfmHMFSANjOKgpVjmFxDlIGagpWcwRAWDVQUrqzE0BkDVQUrOYKgMgZqClWOYIgMgbqClWOYJEDIB9SJClJVdQPqFEfpEmkzkZNeASmFOFYSXXCL9isn/sdSRGU5fshT6iBa57RaiUZeTQTBJcNzBEgLP/2Q==',
    },
    {
      isVideo: false,
      source: '/projects/coolhead/4.png',
      alt: 'community member',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAgMBAAMAAAAAAAAAAAAABggEBQkHAAED/8QANxAAAQMDAgUABgcJAAAAAAAAAQIDBAAFEQYhBwgSMVETIiNBsbIyNWFzkaHRFBckQkNEUoLh/8QAGwEAAgIDAQAAAAAAAAAAAAAAAwYCBAABBQf/xAAmEQACAgIABQQDAQAAAAAAAAAAAQIDBBEFEhQhMRMiQVEyMzQj/9oADAMBAAIRAxEAPwDTx5wNpNW0clsVPnX4lao0RY7e5pqcY63lYWR796uYlSts5Wc/PyJY9LnEVXRXHTiNqHWVstEq9uFp90JWnB3/ADrqXYNddbkjh43FLbbowfyOVpOwXe73lcG6wZKYwQkpc6O+Ug+aWKbbLbHDxoeMumrGpjZrezoyeC2n5KAtcl8ZHbpokrJxetg66arY82jxPL5piSkqVLeH+v8A2o+vNfJPo6n8EZ7lv0mpfSp90jz01vqbPs10NP0ce4/8LbNw6t8KfaHV9TqsKBGM71axb5zs0yhxDEqrpcoo4fcJffeu2kKrYOyZeXNjRUgLZphPlgA70uJDk2Jfz9SSuxWvB7LHzVfwdq1HK4pp0PYp3CJLv70bAvAKTKTXZyG/SYt4UYq+OmbN2aOwi2RFpZQFFhvJCR/iKSn2kz1CHeK2VUy4SI05XQv1R7sVJR2ZvR6GoJGcBNZymbLmHNS5HS7IcQgnyoCotaNoXbnMlMHTdtLbyFEL9ygfeKt4X7Uc7iv87FBuEzvvTIkI8mD8iX7TvREgLZpfcJmc70uJDnJibc+Mj0lhtoz/ADD5qv4S/wBUcrib3jsV7gupR4m2HJJ/ik12cn9TFrA/oibR2j6qh/cN/KKR5eWeqw/FA9dQTNXsfwqSfYxnzat8lZCvReqa3tGEa5xXn7qxEW44ltKMkJP2VqKTfcHZKUV7TnnETTVh1Joy8SZTTzq4KSUdY+iatVuHOuRlC6V0q5K2Ih90lBDriAfoqUB+NMsFtISLXqTByTM9p3oiRXbNMLhL7jNLqQ5SkKFzvOGRZ7ahJyeofGruH2tRzeI96GLhwbZUzxPsAUf7pNdfIe6mLuCtZETaC0fVUP7hv5RSRLyz1SH4oq7k+Gp6G0spV19zntUU0zbLBaXmWkrQcp8VjeiUI8zBy5zktaiYUoY6kgflW4vZk48r0UnExuFE4fXoxehJcZJVgdzRaVqaK2S91S39GY95l4kvjP8AUV8TTfBe1Hm9z97BqRM9p3oqRXbNMJ8vY70upDjJi68zGjrzrWBDRaY/piycqG/mj1TdU1JFa+tX1uDOD6J4Zaz01ra2X2ZaSI8N8LVsewq/blqdbikcqjAlVcpt9kaAROaKxwoMdh2zu9TTSUHc9wMeKXXiWNjpHiNMUlsoJ/NNYVzRINneASfJoVeBam3oi+J0P5JkjnE0mlgIVbHQQPJ/SjdDa/gjPidDWtkG08ymh9V39H7TJTAS0kes6e+1a6SyHlE6c+ma8k3iJxX0BO0XdYsTU0Vx1bJCUhW5NTrompptGX5dLqkkzO68TUqkPLSrILiiPt3pprXtR57dL3sGpEv2h3oyRXbNOLgpWDvS4hykDNwUrfeiICwauCletvU0BkDVwUrfeioDIGbgpWDvREBkDdwUcHeiRAyAfUqQpQUSQfIJHwqTSNRk14BF9SwvHpXME9us/rW1FEZTl9kOeogYye1WolGXkoJBJcOTREgLP//Z',
    },
  ],
  contributors: [moritz],
  link: 'https://app.coolhead.finance',
  description: [
    'Coolhead is a Web Application I developed for a startup. The idea is to help investors to keep a cool head and stick to their investment strategy even in turbulent economic times. Users can create rules for a stock based on popular strategies (e.g. limit orders, using momentum or saving plans). Once a rule gets triggered, the user gets notified to execute the transaction. Users can also follow rules created by other investors.',
  ],
  problem: [
    '[Keeping a cool head in all economic situations]{By creating rules for stocks in your portfolio or stocks you want to buy, you are less distracted by market fluctuations and tend to stick to more rational strategies.}',
    '[Being informed on what other people are doing]{With Coolheads community feature, you can follow and observe what other investors do and copy their strategies.}',
  ],
  challenges: [
    '[First Fullstack Javascript Project]{So far, I was used to writing Backend code in ruby. I wanted to try out a Fullstack JS project this time, which was challenging at first I quickly learnt to enjoy this new workflow.}',
    '[First TypeScript Project]{I have noticed a strong shift in the developer scene and everyone was talking about the benefits of TypeScript. After getting used to it, I would never want to miss it in any future project.}',
  ],
  learnings: [],
  techStack: ['- NextJS', '- PrismaDB', '- Stripe', '- Docker', '- Tailwind'],
  prev: { slug: 'casama', name: 'Casama' },
  next: { slug: 'athome', name: 'AtHome Web' },
};
