import { Project } from '@/projects';
import { moritz } from './members';

export const athomeConfig: Project = {
  title: 'AtHome Website',
  media: [
    {
      isVideo: false,
      source: '/projects/athome/0.png',
      alt: 'home',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABQgGBwMECQEC/8QAMRAAAQMDAgUCBQIHAAAAAAAAAQIDBAAFBhEhBwgSIjFBURMUFTJhCXEXI3KCkaGy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDBAIF/8QAIxEAAgIBBAIDAQEAAAAAAAAAAAECEQMEEiExE1EFIjIUQf/aAAwDAQACEQMRAD8AKRnfzTESTELHKy3J4ePR5AZ+Y01V7b6U7EXkxyw3BGoORN7HT7zQmgao20cttxaO2Rt6f1mnwI2xy73tiOuQL4FJQkq2UfSi0BElY47CcW09cXUqbV0/crf/AFXp4PjMmeO5Mw5ddDE6aM7cJTSC59WWAkak9Stq6n8Y8fckKOvUuos8xDJjLyCTam56ZLTIO4VroRWPNh8Lq7NGHMsyuqLMgv8Ajeolg5HkdnmmIQeM743qJQsTgm6j+JduLi+lITufYa0MFwM/LyjDmJrzJy6OlfxNCku+D7VRKhSludskcTHnLtHbfiznFsrGqVpUSCKV0BsZRKkYLg9zuqn1PFhklKVe+lTk/Q0q7Eqs/MHkWQXF9Eu2pSkOq028jWsr1+oi9qbSO4YsE3ygVnHMOxYoTqXAhpbgKSlQ0/xWSeqzzkqbZeXhxqooj3K1xLs07Jb1Nul8abMlxXwkur86nwK9PApf6YuL4HFt0tDzaHWlhSFDUEeoq4B5iR2eaYhDY7tRKFk8Cm25nE+2xnd0OJCVfsTQA2tw5c+Gbkpy5yo0nrW58RRDvrrXfkaEsdsnlofstlt7NshKUGWE9KAdzpU3K+Sqxs+b5b7PmFpftM0lUdwd409KOxSg12VtE4BcJoDwdYhkLB37RvQ2pLa0JYHF7kJr+oDwxw61Xu0NwEfKNOJBPQdOrarabFFO0iWaXsTKBDj2fKLa3bH32x80juSsjXetrikujNudnVXAJClYraipRKjGRqSfO1Y2aSZsSOygBFY7lROy0OXtfVxYtX9v/VAHQO79JhLCvFCHdEYbZiqHcd66oW5+wlbm0NocDfjTek0gtsEkJVIIIAHV7U6Qbn7FM53sBYzbJbHGkXlMJCEp1J9dq7x5lil9uiOWMpL6i63Xl7xiwqiXd/JkuqaeQUJC/uOtbcmt0n5i+TOsGdcyHAwpxDeO25DatUpYSAfcVjtPo1rolzD/AGeaQCNx3PzUihKcHyydheTRMkgNB1yNp2nTffWgRdl65uc2u0BUaJbG2lqPnRIoBgOPzDcR1pAU23qB52oe5qkNbUY18beK0i6xpjcxKGGj/MbGndU/HK+xzkn0TRrj5mDiur6e3udfCauTFw5tOImWZhdbYpUdTJZA0UhP4/Fdwxxn+hSltKGbvGYzrhAYkyJDjaX0duivGtP+XEnuQnmbVHQTB3lDG7aFjRQjo1B/auejpEvYf7PNACSME6ipHYSjk7UCCkYnbegTCsYnbeuhBaMTtvTAMRSdt6AM8m0Wy5FKp8Jp8jwVjWgDag4hjKXEOCyReoEEHo9aabCid29KW20NtgJSkaAD0oANMqPT5pgf/9k=',
    },
    {
      isVideo: false,
      source: '/projects/athome/1.png',
      alt: 'flats',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAgMAAwEAAAAAAAAAAAAABQYEBwgBAwkC/8QAMRAAAQMEAAQFAgQHAAAAAAAAAQIDBAAFBhEHEiExCBQiQWETkRZRsdFERWNxgZOy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDBAIF/8QAIBEAAwACAwEBAQEBAAAAAAAAAAECAxEEITESQRMyIv/aAAwDAQACEQMRAD8AKRnfmmI4n3yLbpUZqdKLDLvdQOvem3r0SWzi95GzHDZsFzW8Coc2yT0pK5/RuWMlqyLH1RW1S8gU28R6klZHWj6QfLDDeQ2BpO/xAr/Ya4rLM+lIwXfgFuXG7BLDK8pMyVaXB/VP7UTmmvB3guPSbbePOGSuQs5G4Avttw/tXTzTIpw3Xg+cKOKEHM73Ot9uuHmmYmwVc29GnjyK10cZMbxvTLogv9utVJhyPI9HemIwPGd7daiUBWUNxZMuEiWfQCP1rmltaHL0wrYLPCuM1UdkBDQ7KUO9Zpwua3s1PIqnwnX2x2C0ALmyWwr2CSN1W7mPScQ78E3KrxEjsJRbXgrn6a96wXkWR/8AJ6WKP5z2U5fsSvuR3pCkx1KGwrn9tV3jit7HluHOmME5mDizcZE9CGy2jXXpvpTvHdPoWO8cT2W74Rctxa3Xq6qduLMYyVHlDitcx37Vs40VC7PP5dq66NpW6Wh5tDrSwpChsEe4rSYw8xI9HemIwbHdqJQ+xY7lkt9gW62RfMPKI0j/ADXN05W0dQk32Pl24RcVILO7dji0/IB6VCrt+I0RE77FJ7gnxdvEjnkWVxxY9jvVYcmLLb7NsPHCOUeGvidMUfMY+tCh2I3XE4MkvodZsb/SdH8O3FiDry9lcOvg/tV5rNH4Rp4qEjP+FD0C6tMcS45gpI21tWt9PmtEci4/0iFYpr/LEhzH8Itt9gtWKasLD6PUl3W+tdvlU3pIX8Eltm/sJe5ccto5irUdA2T36VsT2jG/RvYkeiuhGFY7lROy0PD4sK4sWoH4/wCqAPQO6oSYahyj7UD3oWED6R529A11pCdN+khmS6OZRc7A6oehLbM05f4h8zxy93e3Ft5X0iRGICtb+1ZK5vHx7TfY3NfhmzxAZNe+Jz2PycukOMrUpHPokdOtVx8jDeP7XhynUsqnK8VxW23K2y7BOUC2+gLBUepoxcrFkv5Uhbr3ZvPAnz+F7WSf4ZH6VpAcWH/R3oEYbjufNSKDTg+WTsLyaJkkBoOuRtek669d0CL0l+MDL50ctN2ltBPvpNdTpPshyYyZI+cb0zqheKLMOTldtTaj+fpptp+EuJiz4p1mrbCLfiYytz+Tt/ZNLWzWnohyOLkm6uF2ZiUNxSjskoTs1mfDw09tD+mZs8VWUT75dLb5Wy+TQ0Br6Cfj4rXx8WOF866JZGZ/aTeJV2gpdiS1jzKDspV+dafjHPiJ9no1grikYzbEKBBEZAIP9qzsuhwYf9HegDEjBOxUjsJRyelAgpGJ6daBMKxienWuhBaMT060wDEUnp1oA75NntdzKFT4LT5T2KxvVGwJUHEcZStCxZYvMkgg8nY09sB7t6UttobbASlI0APagA0yo8vemB//2Q==',
    },
    {
      isVideo: false,
      source: '/projects/athome/2.png',
      alt: 'offerings',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAABQcIBgMEAQL/xAA2EAABAwQABAQDAw0AAAAAAAABAgMEAAUGEQcSITEIEyJhQXGBQqGyCRQVFhgjMjREUXKR4f/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREAAgICAgIDAQAAAAAAAAAAAAECEgMRITETIgQyQUL/2gAMAwEAAhEDEQA/ACkZ33piNVg1hczDLIOOJk+SmRrat++qbYh/XXwxQrHAcnyMk8ttobUpSlapcvopJfotYtqwly7Ls8fMkF5vv6+lENzn412U/HFbZrmsLw+HA/P5+bNMtDusuHVdU/izxpN/pz+WLfqflUPAY7CZLWdNutnspDhIrDNF4NWHiks26m2xLhlHyu3i6WXJS6xvW+c1mp76NHHQJfgz8Zy1/H5Mzz0ISSFbJrRPZLWjTwX+3WqEHI8j0d6YiB4zvbrWJoMngQvm4qWn6fioYIuPNsfi5Pj0mzzHi20+NKUDrVIYjbX4ReH8C4G5iepTrnc83/az8ftZdlNxfYVyfwx4hkVl/Qbk94MqP2FdfuNaNyktNiVE+EeXHvCRhNitptbUl55HwKyTqoyReRezKg4wfCGLjzWD8HrOizTL3GhNqO0+cvW6cI1WkKTsxKZvxHwqVxNeciZJCcS4khJS53OhWsUZs1NulodbQ62sKQobBHxFUSHmJHo70xEGx3axNBm8Al83Fa0/T8VAItHjJacjvWBz4GLSlR7gsfu1juKTHrZOGGYjx0hzWHL3OkOssI5VDr6jqsslkvQqONJ8j54VRMiDr5vzbgT9nn3UYPJ/ZeRRXQyvIbHbddJkQl+UBuTEHJbWxJfkIbW2OUNuFPXRrWCbT0S3p8ks4q9iaoKJM2VJVcBJR5alOEnv866cM3GLjOJlN26ZeGCySrGrYoqJ3HR1Px6Vzss2LEj0UAQrHcrEsYfBK7N2viba5bqCpKddB/lQCL1YzOFcmiENKT7GqqD4PpvLJAHJrVOjFY7M5Cw2dlFFGFjt+s0bW+Q0UYWIN8fl1st1yq0m4OqabQkDYJB7VthkoPkjJFy6JZgYXb3RHvcG6gtJkIIQV9T1p5Pk+1YomGL12y+8Ee5cYtg32joH3VkaGxYf9HegRDcdz3rI0D+M3+bjV9jX2C0lxyPr0nXXrumnokcLPibysnaLS0PkE1Vg5PV+0jmT40Le2PomnYWjq3x9zZz+kR/pNOwaPfH455sR/JNnfsmiwtE0eKTKL/mWS2wToGjyjlKUbHb2q4TjH7EzT/BXWbCM1cDMxpKxDako5kaUPj/arefE+CVCXZd+EOKbxu2oWNKTHQCD8qxZqjXsP+jvQBEjBOxWRYSjk9KBBSMT060CYVjE9OtUILRienWmAYik9OtAHeRaLZclocnQmn1J/hKxsigApb7La2kpabhNpRsHlG9bpJIZsbelLbaUIHKlI0APhVCDTKjy96YH/9k=',
    },
    {
      isVideo: false,
      source: '/projects/athome/3.png',
      alt: 'detailed flat',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAABQYIBAcJA//EADQQAAEDAwIEBAUACwAAAAAAAAECAwQABQYRIQcSIjEIE0FhFDJxgbIJFRYjRFFygqKxwf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAHhEAAgIDAQEBAQAAAAAAAAAAAAECEQMSMSFBBBP/2gAMAwEAAhEDEQA/ACkZ33piGXD7FKy7KIeOxn/KMjTVX30piN4veGG42yOuTMv6Wm0blSlEDSqitnQpPX0QcqtmGYUOa5ZqggbdC/WpzSjgW0hRltweMP4UJyyys3y0ZMlcZ4aoJUamGSM1aLUGxoicCLovpayIKV/IKNVsgcGuhFvgVkTfy3z/ACNO0KhaTDu2NZW/j9xleelCSUq117U07Extgv8AbeqEHI8jo70xEDxne29YmhsngQvm4qWn7flQwRY3Ge0Xq94NMgWBREtwEJ0+lS7+D8+kKZR4WeMOS29SFtBTijr1an/tY58cs8KZcpRqkVvwP4dz8N4e2+w3xwplsJ0WAfYVeDH/ADgosz2kvpsmFbIsZQcS6vm+tajtvpkXfNcWxlKBf73Fglfy+cvTWhJsCcM44lYPJ4muuRclhOJcSQkhzudBVRTJY126Wh5tDrSwpChqCPUVRIeYkdHemIg2O7WJobN4BL5uK1p+35UAi/LsCYa9DpQUml0EW8JLQSvVSqfqCTTfgWZgNLHMtJFFk0ZAispGnLSGSR4yZWNxrtCavaHVEpHlhDnKAdK0x5VDpEsbnwg7NmbcnLrZNt0yQgGQjQecT61w/r/TkU1pwp4tOnQbBJBOMWslRJ+GRuT32rui7VkjkxI6KoRCsdysSzaHh7XzcWLV/b+VAHQS6gmIrSgpOgU1cmI6EoWEp9zVqDfCHJIzkT1rGqFDSpaoaZ6JkSFfKoH70gIS/SDRGblkdoamXJUQcqSCPXatsUFPpE5uHCHr5FNvv9pDFwMpPxLY1223+tbvBBr1GUsrkzpJgT5/Za1an+GR/quc2HJh/o70CIbjue9ZGg04Plk7C8miZJAaDrkbTpOm++tAjfK/GJlcpst/qZsa+yaAMRXiayiYkJctSNjrsE1eKcsfBTjGQQY8SuW9KUWxASBp2TSlcnbBUlRnM+I3Myr93b0BJ/pp+C9JV8ZXEDIM1utufn2xavKSNORGvp7VtgqJGRbE12t24yb1ASbPIGkhG/lHbf6V1NqjBJ2dLcGdUjGbYlQ0IjIBB9Nq4X06kODD/R3oAiRgnUVkWEo5O1AgpGJ23oEwrGJ23qhBaMTtvTAMRSdt6APeVZ7Xcyk3CC0+R25060XQGTAw7F0OIcTY4oUkgg8nY07YD5b0pabQ22AlKRoAPSgA0yo8vemB/9k=',
    },
    {
      isVideo: false,
      source: '/projects/athome/4.png',
      alt: 'contact',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABQgGBwEDBAkC/8QAMRAAAQMDAgUCBAUFAAAAAAAAAQIDBAAFBhEhBwgSEzEiYUFRcYEVMkKCsgkUJTSi/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAwEAAwEAAAAAAAAAAQIRAyExEgQUQSL/2gAMAwEAAhEDEQA/ACkZ33pkkuH2KVl2UQ8djP8AaMjTVX30pkvBfLFcoH+xfCNTtoTR+pFzF18bY/LxOU8Gm78dT7mj9ZO+LUnXbO5cMtagrVbbyC/+gEmn2M+O2zcvuWJgtm43rpkfqAUaLYOUVb4FZE3+W+f9Gj9QcqNJh3bGsrfx+4yu+lCSUq118U5elUtgv+N6ohyPI9HmmRB4zvjesWiyeBC+ripaft/KiiHWzabIiJa7CUkn505n9KmvyGWebLdKS4hHUfBHwp3HIL5O1MoQkpSFPOdQPvWcO2X46ur2ppBL9m2L4utCMgvUWCV/l7y+nWnJaC35xxLweVxNdci5NCcS4khJS4NzoKvMqalduloebQ60sKQoagj4imkeYkejzTIhsd2sWizeAS+ritaft/KgQ82VMpc7fUnWrwWgi3tASUJCdATWlvpMTRoNobCev4Vg0fRW2Br1UB51f1FUX7Ncmtlpw1+cXo4HcQysp+HtW38fWbary+HWJLf9J9auE/FqLeoF1nxbmGmZCCtanVHbWuvueOXXZXplgbyxi9rDhJWIyAdfOulclaJkxI9FAIrHcrFa0OXtfVxYtX7f5UA/N9hmUEAK0P0o51edzP2OWHCREBOy1/KnM2fS3ua+RuNx7Z7awQs+BT1JPiffOsuXHtsFwt66UuF0oPM9xGs+A55brv8AgzbinkDqATudq28OO+oNeW2f9VVl25pbRerX+DNY6ltT7iEhfR43rovisnWF8navbC5Qcx63uDYLZSrT61zNUuYf9HmkCNx3PesmiU4Plk7C8miZJAaDrkbT0nTffWgl8nnDyuRp/hmx9k04K2I5rsrdUFC0Ng/RNVL/AIXGTzLZdJcC1WtoftTU2XvVzXM8daeYfL3m+0LejQ+yapmXDmWzO55lklucusQsobSNChPt7Vv4NTN7U6xrfrKoEw2f7mN2VvKV30aDpV866deXNn1H9fefdh4sIdUjHLalQIIjpBB+lcN+tUuYf9HmgEkYJ1FZLEo5O1BCkYnbegqKxidt6ohaMTtvTAxFJ23oDfJs9ruZSq4QWnynwVjXSkqaufcdcHEcaS4habNGCgQQenxRId8mr6tTq3pS22htsBKUjQAfCqQNMqPT5ph//9k=',
    },
  ],
  githubLink: 'https://github.com/moritzdotcom/athome-website',
  contributors: [moritz],
  description: [
    'This project included both, redesigning the legacy website as well as implementating the new design. With a general content structure in mind, I proceeded to get inspiration from modern Websites.',
  ],
  problem: [],
  challenges: [
    'Although it was "only" a Website, some challenges occured:',
    '[Creating a new Logo]{The logo of the company was of very low resolution, so I decided to redesign it in Affinity Designer.}',
    '[Implementing the Immoscout API to get current rental offers]{The authentication process with the API was complicated and kept me busy for a few hours.}',
    '[Making the site responsive]{The old website was not responsive at all, so I had no point of reference.}',
  ],
  learnings: [],
  techStack: ['- NextJS', '- Tailwind'],
  prev: { slug: 'coolhead', name: 'Coolhead' },
  next: { slug: 'cleancarApp', name: 'CC App' },
};
