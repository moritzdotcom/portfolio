import { Project } from '@/projects';
import { gerwin, maxWolff, mohammad, moritz } from './members';

export const barcrawlerConfig: Project = {
  title: 'BarCrawler.club',
  media: [
    {
      isVideo: true,
      source: { url: '/projects/barcrawler/showcase.webm', type: 'video/webm' },
      fallback: { url: '/projects/barcrawler/showcase.mp4', type: 'video/mp4' },
      poster: '/projects/barcrawler/poster.jpg',
      length: 75,
    },
    {
      isVideo: false,
      source: '/projects/barcrawler/0.png',
      alt: 'search',
      blurUrl:
        'data:image/jpeg;base64,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',
    },
    {
      isVideo: false,
      source: '/projects/barcrawler/1.png',
      alt: 'select',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHQAAAgICAwEAAAAAAAAAAAAABQYHCQQIAAECA//EADMQAAEDAwMCBAMGBwAAAAAAAAECAwQABQYHESESMQgTIiMVQYEyQlFhcZEUFjNicqGx/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBv/EACQRAAICAgICAgIDAAAAAAAAAAABAgMEERIhEzEFFCJRMkFh/9oADAMBAAIRAxEAPwCzJ50NJJJqEYqZLeDBgSZaR1FpBUB+Jp0hSEl5NrZeSuTa8QQuKtaktKLZ5A+tXRUP2Vty/QaxzGNVr/HccvdrRBdSeElIG/70JSjH0FJy9mXI0lzt8ElxsfRNBXaI6wW/oXncjfd9sA/403nB4wNcvD3nCGHX1Sm9kIKz9n5DemWRoDq2QNdnXokuTCkkeZHWW1bVsrfJbM8lxehYuMzvzVqKxekzNnO9OhWWl3GbsDsa4SR02xBzC6MC1y21PJCi2eN+asSAc01t99/iYl0XkCPh3q6YvXzvv+FZbJPWkiyK/tkwLUVo6+CdqMN8eyS99Alc64N+YVsehJ4NRtoC7ZkrfkPQQ7GT7hHajt62Fg+XLW1aZRubiG1FlfBO33TUWwL/AErrzWSRk12KArpMg7HY7V16NcUYbf5CRPmd+a1IpYAkS/c70yQmy0W5Tu/qrhpHUZHn8z4nGvirXkTMh1yWvob6Bunk/OowbJKdtthsDttdjlxtp3YpTuT32qhT5PSLNaXY+ulASC2NgRuKKIYkpSX2VMhQSSOKnsPo7iewwlpauU1F0RkJeITUeLgYZlvnzEqPSpsH5bc1mysj68eRrw8X7U+CIDyDUrT7J7BLatlmYEtxsKLgHIVSYnyMrrVFejRl/Euipzka33GXspfPYmvWxPKsX5Ev3O9PoUs/uc7v6q4iR0zExT4YlibdZdqjy3WF+guJBKee+9U2Lch4vof0qj3ddskOtNqQoBQR3CeaqjFRfQ7e12L+u2VZxjCYicNgl/zeF7fd5qu+coQbgtsetJv8iEUameIR6dIHwFZaaR1IVv3PP5Vkx7MiVfK1aZpUKXYlvoK4dqzrjNhti+Y0tp/zCFH+0fSo7L96SNNtWNrcWA7lp9lGu+SzbVl6HISWz7R6uCCKpTuym67V0WRsrwWrantmLmHhEs2m2H3DJYlzUtxlvlBUea2YmCqbE0xM35ieTU62jTK5y/cXz94/9r10V0eRfsX5Ev3DzViQuyzi5Te+5riJHSbIpvOqOX4xd3rVbLOt+C7/AFFhJO/NMq4PuQrlJdI9HX3NJQj2mFaFwktHcPKSQR9ajog3siskerrq/nrx3eu4Xt23JqfWi2TzNACTrTn8cKSi6IAP60zxYyWmDztAd/X/AFGighu5o/3TLDhoH2JHWMeKTMrDe3JdxbTMK07A7E7cUHhxiRZEmfbN/FpkN/xKfYbhCSsSxsFdJ9I/emjjxUk0CVra0zVG4TCsqUT3JNdOK6MbYAkSvX9qnEbLOritW55rho6TFO6IQokqQkn8xVqQosXBCEklKAP0FMhWxauClermrEILM9SueTTiixPUrc81YhWLc8nnmmQrFyepXPJqxJCi7OUeeadCsBPqPX3NEQ//2Q==',
    },
    {
      isVideo: false,
      source: '/projects/barcrawler/2.png',
      alt: 'overview',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABgcFCAkEAwD/xAAuEAABAwMEAQMDAgcAAAAAAAABAgMEAAURBgchMRIIIlETIzJBcRQVFkJhcpH/xAAaAQACAwEBAAAAAAAAAAAAAAACBAADBQEG/8QAIxEAAgICAQMFAQAAAAAAAAAAAAECAwQRIRITMgUUIjFBUf/aAAwDAQACEQMRAD8A0yedDSSSahGCupLx/AwZEzHl9FBVj5xRpAlY53qSv0u+SbLD06FOMqUBlCuQP1qO6qHDYSotmtpH1p3G3G1bJXEtOkw44nsBCqOq+q3iLOW49tS3JHRPib0KBJ0Ucd/gqmFKP9F2pEKiz7vXKUiMNJKSVqwSW1cUXXFfpzpYXq2E3FlsoWttCFKTkjx6qv3CTC7TYmNURp1hu8my3EAPxzhWP3pmqfcWymceh6A+4zO+avRUD0mZhzujQLNS7jNwDg1hJGm2AusJmbPMHl22as1wDsTFr2R0tdnlaolavYgyHyoLBdKSOaxrcLu2Oezbo9RVVSh0jk2d0BprSc1b9o1Qzc3iDlKHSojir8fFVD2hfKzHkLWhuOfTPsdIwfmnBA824sVDnmhpAPyBUIRszWWl4Ty40u+w2nU9pU4ARUIZ/wC894gytxrs5CmNvIUo4Ug5B5NaWL4id/2LG4TO+adSF2wfkS/ud0SQGzUW5TuD7qw0jUYDatm+VqlpB7bIqzXAIiHvTvuHrSI7NgaiejxpC1FtKXcY5/ek3y9F62lwNz007A602s1FIumoL85NjPIIShbnlg4qJckbLFTreqYtJS8UhPxRNbAa2cMYzG7i6wpwloIPj/yunRC2HQts1RqG/TrouS6tDvAD2AOTXUzjRXT1C6etGmdVsfyqO4z9QAL81eWeKexfIWv+hOT5ffNaSQm2QEiX9zui0Caf3Od37qxEjTAjVM3NtkjPaDR6B3yDNmgboN25D2nXXVtOlXgMHA5rz2fO9PVSPaYk8CjETa3JjU2Ps+5MG5SJet5DikLHsSehTGGrFH5i3q3spURlR5fo5Hni3lSehyadZ5w8W5LT7a3WkDyAIJxzUT2RclO9X6i1baLvdf6dQ/7nh5fTTn9TXTgld7LnfJi7XJvwWJCkpz5jB/GnsLyFsnxE9Pl981qpCBAyJf3DzRpHNmnFym95NYiRpNgjenxIYcYUrhYwaNIDZDRtYaqsMVMK33UJabJ8Rk8VWseO9h916OeZvLuG0nwF64HXuNWLHiD3mQkrfbchlJSL1kf7GiWLE472QT3qF3KhoWlq7/ln+40SxIg99oMth99NIWu1z3NwXW1zX3PLKwDnk/NKzx5KWoovjbFrkVPqs3F0prjUkKRpNSSwykBXiAAOP8U1h1SjLkoyJqS0iu8+X3zWmkJMgZEr3/lRgtmnVxWrJ5rDRpMFrkpXPNWoEF7ipXPNGgWDFwUr3c0aABmepXPJowQYnqVk81YgWDVw5yTRoFg5OOPLFGgQenKPPNGgWQT6j59mugH/2Q==',
    },
    {
      isVideo: false,
      source: '/projects/barcrawler/3.png',
      alt: 'barcrawl steps',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAGwABAAMBAAMAAAAAAAAAAAAABgUHCQQCAwj/xAAxEAABAwMCBQIFAgcAAAAAAAABAgMEAAUGESEHCBITMSIjFDJBYZEVUTRxcoGSsdH/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBQQG/8QAJREAAgIBAwMFAQEAAAAAAAAAAAECEQMEEiEFEzEUIjJBURUj/9oADAMBAAIRAxEAPwDTJ50NJJJqEYMzDLrVjcFdxu0nssJ8q01psIOXCFyklyyq7nx2wHo7gui9D9e2aesExbyxPWjLbVeogmwJaVtL8E7f7qbWnTJuTIS4XJpRIS8gn7KFGkCwzcZg30NGkU2GLjMG+9MSFt2GLhM870aQLDNxmed6NAh6TM0c80aBZqXcZugOhrCSNNsPqs9kyl1Vvv0VEmN5KFnY0duPKBaT4Zzt8IuHDshUdWGxSwPlVoaHv5L8l9uP4BMw5X7ReLobjZ767aYqR/DtFXSKfDVNKmrFywpvgKT+VGbBhPXuxZhIlS2we00vq0Uf70xatPhoF4K5TAauDnHyShQMdgK1OmqR/wBpnewgPHkYMyzF+KeDdtjJcfelOvH0lhOwpsZ45/FgOMo+QpPcy/qSFYfcAlXlXT4FNW39Ae78IK4yXWyUvILax5SfIo0Cw/Il+55okgLNRblO2PqrDSNRhe7X642m2TbnamC/IjNlaUDydKVqZ9uFh4Yqc6ZS2Oc3PECbdv0ybi8qO2l0tlXbH7152XUdVCdOPBvQ0Olkk1Iti8c0+B4pGSzkiHu8UdTqdtRtWvi1UXBSm6s5P5uTNNrEuEc+H83PCjNrqjHLEp1t9zcdZGgp/dh9MXl6dnwx3TRZbeRYs4tEyTkMVpDJ3HdGnn61N8W6s4nFx8nlPutluiBJta4dyQSB1ABYFXbqkUq8skZtlti7A/JVBiBXw6iR2k+dP5VeNOLuySaf0Zh8T5CW8xuqEAJSl9QAGwr0GL4oysnyZX8iX7nmm0LNP7nO8+qsRI0yAOdWrD1OXG7xFSY+nqQnfWpPD3ltJGex2Q7nMrwVgLS6vBwVqV57I11/FT0Fqieqp8He1i/BPi715XOXEiGWOksOkAgH7Vl6vpSzSqX0aul6tk08PYzog8DuBlrW69jc63i6KbKGu0pPVqaHD0yOne52y9T1bPqoODZW925SM7yD41ljK5TDMgkoCXtNNa7JzUncInD2MPpmpSfcBOY8JuPnA3EYthxK7ybrJdWFKcKyopGv2p2neKL/ANBUYPbVkNiz3N5PmNm6uyG4KUnvJKlfLpvXcpaZ+AVGVclL8QpMhGSzkyle8F+5/VpvXfjXtM6fyYGkS/cO9NSF2acXKb51NYiRpNhO6yW3UqS4lKgfII1piQDBF2hwFqJ+EY/wFGrBaQRu1vClh1qW+z0+EtrIH4pkQGG2VXCx3EXW3XWWJDe6Sp0kCja3KmUva7JaRx74wQ2FNsZEQfodTsNKFYMf4W8s/wBJnEebzNMZjKRlDIu7pJ0Uoa6fml5NHDI7QUdQ4rknbjz/ANwRFegtYmgJeQpvqCBtqKuOgXmyPVP8PkfMcjVkF7mXlSOgy3C4U/trWhCO1UcknbsHyJXr+amANmnVxWrU71ho0mFrkpW+9NQIXuKlb70aBYYuClerejQAYuBO+9MBYZuBJ11NGimGp5O+9GgGHZ6jvvRoEOzlHfejQLIJ9R6/JqwD/9k=',
    },
    {
      isVideo: false,
      source: '/projects/barcrawler/4.jpg',
      alt: 'team',
      blurUrl:
        'data:image/jpeg;base64,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AAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAbv/hEdNodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6bXdnLXJzPSJodHRwOi8vd3d3Lm1ldGFkYXRhd29ya2luZ2dyb3VwLmNvbS9zY2hlbWFzL3JlZ2lvbnMvIiB4bWxuczpzdERpbT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL0RpbWVuc2lvbnMjIiB4bWxuczpzdEFyZWE9Imh0dHA6Ly9ucy5hZG9iZS5jb20veG1wL3NUeXBlL0FyZWEjIiB4bWxuczphcHBsZS1maT0iaHR0cDovL25zLmFwcGxlLmNvbS9mYWNlaW5mby8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIGV4aWY6Q29tcG9zaXRlSW1hZ2U9IjIiIHBob3Rvc2hvcDpEYXRlQ3JlYXRlZD0iMjAyMC0wMy0xM1QxMDozMzoyNS42OTMiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAzLTEzVDEwOjMzOjI1IiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMy0xM1QxMDozMzoyNS42OTMiIHhtcDpDcmVhdG9yVG9vbD0iMTMuMy4xIj4gPG13Zy1yczpSZWdpb25zIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4gPG13Zy1yczpBcHBsaWVkVG9EaW1lbnNpb25zIHN0RGltOmg9IjMxNjgiIHN0RGltOnc9IjQyMjQiIHN0RGltOnVuaXQ9InBpeGVsIi8+IDxtd2ctcnM6UmVnaW9uTGlzdD4gPHJkZjpTZXE+IDxyZGY6bGk+IDxyZGY6RGVzY3JpcHRpb24gbXdnLXJzOlR5cGU9IkZhY2UiPiA8bXdnLXJzOkFyZWEgc3RBcmVhOnk9IjAuMzA4ODA5NTIzODA5NTIzNzYiIHN0QXJlYTp3PSIwLjA0Mjk1MjM4MDk1MjM4MDk2NCIgc3RBcmVhOng9IjAuNDk0MjM4MDk1MjM4MDk1MiIgc3RBcmVhOmg9IjAuMDU3NjE5MDQ3NjE5MDQ3NjI1IiBzdEFyZWE6dW5pdD0ibm9ybWFsaXplZCIvPiA8bXdnLXJzOkV4dGVuc2lvbnMgYXBwbGUtZmk6QW5nbGVJbmZvWWF3PSIwIiBhcHBsZS1maTpBbmdsZUluZm9Sb2xsPSIwIiBhcHBsZS1maTpDb25maWRlbmNlTGV2ZWw9Ijk5OCIgYXBwbGUtZmk6RmFjZUlEPSI3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6bGk+IDxyZGY6bGk+IDxyZGY6RGVzY3JpcHRpb24gbXdnLXJzOlR5cGU9IkZhY2UiPiA8bXdnLXJzOkFyZWEgc3RBcmVhOnk9IjAuMzczNzYxOTA0NzYxOTA0NzQiIHN0QXJlYTp3PSIwLjAzODc2MTkwNDc2MTkwNDc3NSIgc3RBcmVhOng9IjAuMzkwNTIzODA5NTIzODA5NTUiIHN0QXJlYTpoPSIwLjA1MTMzMzMzMzMzMzMzMzM0MiIgc3RBcmVhOnVuaXQ9Im5vcm1hbGl6ZWQiLz4gPG13Zy1yczpFeHRlbnNpb25zIGFwcGxlLWZpOkFuZ2xlSW5mb1lhdz0iMCIgYXBwbGUtZmk6QW5nbGVJbmZvUm9sbD0iMTgwIiBhcHBsZS1maTpDb25maWRlbmNlTGV2ZWw9IjYxNiIgYXBwbGUtZmk6RmFjZUlEPSI3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6bGk+IDxyZGY6bGk+IDxyZGY6RGVzY3JpcHRpb24gbXdnLXJzOlR5cGU9IkZhY2UiPiA8bXdnLXJzOkFyZWEgc3RBcmVhOnk9IjAuMzQwMjM4MDk1MjM4MDk1MjMiIHN0QXJlYTp3PSIwLjAzODc2MTkwNDc2MTkwNDc3NSIgc3RBcmVhOng9IjAuMzE2MTQyODU3MTQyODU3MTciIHN0QXJlYTpoPSIwLjA1MTMzMzMzMzMzMzMzMzM0MiIgc3RBcmVhOnVuaXQ9Im5vcm1hbGl6ZWQiLz4gPG13Zy1yczpFeHRlbnNpb25zIGFwcGxlLWZpOkFuZ2xlSW5mb1lhdz0iMCIgYXBwbGUtZmk6QW5nbGVJbmZvUm9sbD0iMCIgYXBwbGUtZmk6Q29uZmlkZW5jZUxldmVsPSI5NzkiIGFwcGxlLWZpOkZhY2VJRD0iNjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOmxpPiA8cmRmOmxpPiA8cmRmOkRlc2NyaXB0aW9uIG13Zy1yczpUeXBlPSJGYWNlIj4gPG13Zy1yczpBcmVhIHN0QXJlYTp5PSIwLjMzOTE5MDQ3NjE5MDQ3NjE1IiBzdEFyZWE6dz0iMC4wMzc3MTQyODU3MTQyODU3IiBzdEFyZWE6eD0iMC42MDU4MDk1MjM4MDk1MjM4IiBzdEFyZWE6aD0iMC4wNTEzMzMzMzMzMzMzMzMzNDIiIHN0QXJlYTp1bml0PSJub3JtYWxpemVkIi8+IDxtd2ctcnM6RXh0ZW5zaW9ucyBhcHBsZS1maTpBbmdsZUluZm9ZYXc9IjAiIGFwcGxlLWZpOkFuZ2xlSW5mb1JvbGw9IjAiIGFwcGxlLWZpOkNvbmZpZGVuY2VMZXZlbD0iNzU1IiBhcHBsZS1maTpGYWNlSUQ9IjYwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L213Zy1yczpSZWdpb25MaXN0PiA8L213Zy1yczpSZWdpb25zPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwEDAwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAFgAmAwERAAIRAQMRAf/EABkAAAIDAQAAAAAAAAAAAAAAAAYIAwcJBf/EACsQAAEDAwIFBAIDAQAAAAAAAAECAwQFBhEAIQcIEhMiMUFRYSOBFRcykf/EABsBAAIDAQEBAAAAAAAAAAAAAAQFAwYHAgAB/8QAKhEAAQQBAwMDAwUAAAAAAAAAAQACAxEEBSExEkFhEyKRBhXRMkJRocH/2gAMAwEAAhEDEQA/AF94w1RyzrjhSm2wGzMSFKUgnpwoH9D70qa2ym0jukJ66ZzK8H6bUXqfcF5UWmKbSlTDipyXEvoCApxfj/kJ9Dk6C97h+kol0QG4cOCfhBlS547duRx6g2LfFDS6am41GktJUS5DSB0r/KAnJPVkj2H71Bk4+S0gNFeeUz0f7a4Pkyj1kAU0npuzub8Dt5Vq0C671umhwqg7ajEtMmI28iY1MQ2h9ZWUnCDkp8QF/G+NG4LHSRtc/YpXrDYMXLkixjbAdt77cX3ri10afRuI82Q+23ZFLZbbxh2TUT+TPwEp+9PYsfZV6TI3WRV20O/bpmoLsWrVDpPfUhxxZK207q2znBHwPfVd0+Of9wO/8rSfqJ+ndJbEW2Dw2v8AFPcXC51VnT7wocNRjirRmokZasuQ23mnFKaXnY48ADk5GD86exdby1juaWfT+m0lzDtfx4Q/T7GnQKNW25jLX8jETEMNfWQloqdwvc+O6QU+++ifSIoob1RdLSrgNeUblp5OUX/f7T0+BTXg5T4jLwU8sSFIAZClbZ7pcI9QBrt0IaSSOFGZC6mg8qzrc5z+AlTtKkXlU7ocoMatIc7DNQjrSoLbIDiOpIKSQSPQ++iBLGz2k7qF8ch3rZJnf/AhmhR4FcoVbnPvrH5Vy5ikKAOOkpKEHy+9ZfDrWQ55Lqsd1oz9Ix2ja6KK6pYLdqcGacusvIfTWaq3OcQwCrpbaYWMFSsFSztv6baY6Rq0+XmPY82AD8/hAavpuPjYzXRtqz/X5VKWLDkS1VsS1tSHYyYrx7ifFfam9ZyPsJI/erg7KDXNICqYx+oEFFXFK+v7N5bKFYj0qdAYoMx19DbaEFp/tuO9pK984AUPb21HNkSGbfhdxQMbHY5S9WjHuHiHQWrMqt0yo1JojrkmDGbQHENLWcOEZxjq2/5r5K739Q5ql6NpLS08Xa//2Q==',
    },
  ],
  githubLink: 'https://github.com/Max-Wolff/BarCrawler',
  contributors: [moritz, maxWolff, gerwin, mohammad],
  description: [
    'As part of the LeWagon Coding Bootcamp, we should build a Web Application in groups of four as the final assignment. We wanted to tackle the problem of organizing Pub Crawls. In a Pub Crawl you choose a handful of locations (Pubs, Bars or Clubs) and have one drink at every location throughout the night. We outlined the user journey and started with the design in Figma. Our objective was to have a PubCrawl at the end of the Bootcamp and, as a bonus, we wanted to implement some drinking games into the app.',
  ],
  problem: [
    'We focused on three major problems to solve:',
    '[Choosing the best locations]{We decided to use the Foursquare Places API to get a list of Pubs, Bars and Clubs with a rating above 3 Stars.}',
    '[Optimizing the walking distance between the stops]{With help of the Google Maps API, we could retrieve the distances between each stop and calculate the shortest route.}',
    '[Sharing the route with your friends]{After choosing all locations, the user gets a QR Code to share with his friends or use the native Share API in the Browser to share the link directly in any group chat.}',
  ],
  challenges: [
    '[Coding as a team]{As this was our first group project, we had to learn how to distribute tasks effectively and how to code collaboratively, e.g. how to handle pull requests or deal with merge conflicts.}',
    '[Prioritizing tasks]{Our project was quite ambitious and we had to learn how to prioritize tasks to get a project done by the end of the deadline.}',
  ],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Heroku'],
};
