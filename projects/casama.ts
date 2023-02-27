import { Project } from '@/projects';
import { despot, moritz } from './members';

export const casamaConfig: Project = {
  title: 'Casama',
  media: [
    {
      isVideo: true,
      source: { url: '/projects/casama/showcase.webm', type: 'video/webm' },
      fallback: { url: '/projects/casama/showcase.mp4', type: 'video/mp4' },
      poster: '/projects/casama/poster.jpg',
      length: 22,
    },
    {
      isVideo: false,
      source: '/projects/casama/0.png',
      alt: 'single competitions',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABAUGCAEDBwIJ/8QAMRAAAQMEAAQEBQIHAAAAAAAAAQIDBAAFBhEHEiExEyJBUQgjMkNhFcEUFkJxkbHR/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBAP/EACoRAAICAQMCBQMFAAAAAAAAAAABAgMRBAUhEiITMUFCkQYUMhUjUVJT/9oADAMBAAIRAxEAPwD6MqUEjdWxSogPFW9ZDbbO2jGCBNfWUIJpmjwozTu/EPVDqfJC2MP+IiUyHjLa0pIPc+1X3i7IvcOeCkBHCPiLkrUGZsdYT30rtR1bsSXMmSUF6Az3D34j1EpEhrdEjqdhXvZJLBod4ZfEeBt2UwkH3NT+72Fe9k1n0PTfCb4gygrkymtfgmhz12zL8JE1NpC7HlZVAmTLRlakqkxydEf31Qabqr23S+BqluaGMh7807FDcUAOO+ajJBkiykh7XrWEijFRRBs6c29bBv75/ao6lYrGqV3HXWb9aIMVuLMuDTLimxpKlaPaq+rS3XLMItjoHabnjtqdfUm9tLLp5iC4Dqiy0epxzB/BFJI3nM8bLvOLnH0Om+cURbXqWs9L+CRrut8x25tNtfrbLfXmBDgG6BLb9RPjofwThNw8gn+aMe8JMRN4jKcCQAPFGzXp6O+pZlFkPMq5lk+KrPbr4clpWyrWlg/1Vp9ii1U8j2m8hY+97GtHGI/FADjvm70ZIMkWUfe71hIoxUUQrNHOaTbBv75/aoapYqGalydDuvDiHkzrFxfecSpKEjSVa9KFot3t0UeiCWBhi9zhHa4Li5j8x0NJTpRK6sVv99zUEkdESsQwRIUn9YXrZ38w/wDKtFuG4f5nOB9H4U2C6xmpEWU6tAHlUldV09+1Gnm4yikzpB8g4MW93IVgXKajl2AELJ10qK+pLJPuimjj4QgyrgLYLBDfvLU+WuUjzFS/XpuiUfUU7bFTGCSYelNNNMgandNJBO9JFauCyi7hEBce81MKIdIspIe12NYSKMTFEOy5zml2wA/eP7UHWL9oYguTv9t0mA0pStAIH+qoQxgrhXVpyKtXOk9FD3qcJyrl1R8zrQlVgWO+J4ZgnRO/rNP/AKvq/wCxwYPu2/FoTbbaClrfKEjZpC++VsuuzlhqaXc+lMhGT5BPtd4XLtcMSVOpJ0RvXQU5t9FWoni14QKS6XgimYZlfLnYJUOfagyggeflPsau3t+monGVcssnS8zRwtx75Y6+lbKuPajRQjwAuPebvTCiHSLKPvdzusJFGJiiNZHbl3VDXhP+E4yrmQr81KyhXR6WHijJyTOGWQwL3tAGvrVSy2mD9Qqjk0wsizcyQ2zeUoKvXnVXLdqrqg5v0CKrI9EzPlLAOTtpJ9fEpCFNUlnDIyiovAJfXc6Zt7kx3JWXg115fENMUaKq6ahhk64qUsI5HeeL97tc5Ue8JekKXvlW3sgCtTtmw1V2OTfB2/Tyi+0XTOMyZiVQDDlLL+htSSAKt9TtVU4KUGsojRTYpptAC3vlpJ6bApiuOFg0kFwAuOkqo6QZIsxIJ96wcTExFsgnr1o8Q0Ra+T1o8Q8Rc84tCuZCiCB3FGST4YaIHIuE3v8AxK/80SFNf8BYxTYtlT5q0lC5LhSe43TEKoLlIPCKQjlNNOdXG0qPuRum4oYikK32GASQygH8JFHikGikAyCaYiHiAL+qjIKj/9k=',
    },
    {
      isVideo: false,
      source: '/projects/casama/1.png',
      alt: 'multi competitions',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAwEBAQADAAAAAAAAAAAABAUGCAcCAAMJ/8QALhAAAQMDAgUDBAEFAAAAAAAAAQIDBAAFEQYhBxIiMUEIE1FCYXGyFCMyM2Kx/8QAGwEAAwEBAQEBAAAAAAAAAAAAAgMEBgUBAAf/xAApEQACAgEDAgUEAwAAAAAAAAAAAQIDEQQSMQUhBhMiQVEUFTJCI1Jx/9oADAMBAAIRAxEAPwD9GVKCRmuscVHMuLd61jGMG2aNKRLlKwSfzirNJ9PGxfUvESmmtSfcllaQ9R7rZUl9onxua7yn0NP8ypVJAkjRHqRCOf3mtu/emRt6D/dhKvAoe0r6h1ZxJbyDg7GnRu6Cv3YSWD0OHHqTfQFpdaIP5pi1PQF+7DTaPTXCr1EqBVJebGPzQT1nRU/RMNTaQvs7etrLfJNj1gpKloBKCKlr1FF835DyimmTnyN5D33q2KLIoAcd6qckOSNKSHseawkUYqKIjUC+bWFl3+oftSdWvQWUcnc4v+BNcwrEesbvcrRES5b4xeKtiBil22KpbnwNrjGSafJGx7jcX0KcNuX7iurHKKKq2M+OAb6pVJL3ZXaPud5ntrTconspRsnYb16pqT7HsoKEV8lDIcbQ0rnWlO3k4r0WZU4oyGhxKkYcSehXZQ+BWo8PrsyzSrJNvvfBrVxidGKAHHervTkhyRpR97vWEijFRRG3lzm1lZRn6h+1T61YgVVLudVnXKbGUQ0TypBIrmJLA73wKbVqWfeC6h1goDasdSe9eLEuUPvqVWNrzkML09MocpQEfZNFtQhtvkHuepZVrGACok4wlNfbUeNsiNWRLzra5JZYv7sBpCASE5GemrtFq6tJLM4bgo5ZAXjgGjlfv0nVDz0ltHNlRO9d6vxBVF7a6sZDrcovCZHBRZZDSllRRlOT5wa0tL3xUvk71aykBuPdVVKJQkaUkPY7GsJFGJiiSuK+bWllH+w/apNesVlNawdWuZeStRQM4BwK5ccYPXkU2V6ZILgfZDWFbY2zRzUV+IMdz5DlsL/lJUH9vjNAGK9RyJUJtK4sQSFlWDtnaptVZbXDNSyz2KTfcVtiK7dQ5PywkoyQn55aOWZQTfZjKk92IhN+bsyrDL9p5wuBnKQfNO08Xvj3CjLE+DNkh7CljP1q/wC1+p6aP8Uf8NDUvShe491d6sUShI0o+93OawkUYmKJS/x7kbnDu1sUC7FOeU433z5oNRpnqI7UPigmbr3XTiioMNjbH01LHpUvkPy8iiHrviDFLhlIaXk5Tjl2pr6Q3wz2ND9z47xI1kl8PGOnbx00S6LN+41aZsFmcVdbkf04zYwfITRfYbHwxkdJ37gdv42RbdeVq1qkNBSejCRg7faiXhrUXPFYuyqVDyg28+oLQsqDIhsu9TrfIghPmnV+F9ZBqXbCEw3OabRy1UtD6C+g9LhKh+Ca2Wng4wUX7GoqXpQC46SqqkihI0xIJ+awcTExFsgnfenxHRFr5O9PiPiLZBPz4p8R0RZIJ+aoiPiLXifmnxHRJ682u3zyFTIjbpHYqFPhJx4Y3anyhG5p+zJWCm3MgjcbVRGcvkbGqHwfa6AhCUIGEgYAFPiVRAl/3U5DUf/Z',
    },
    {
      isVideo: false,
      source: '/projects/casama/2.png',
      alt: 'my bets',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHQAAAgIDAAMAAAAAAAAAAAAABAYFBwIDCAABCf/EADUQAAEDAwIEAwYDCQAAAAAAAAECAwQABREGIRIxQVEHCCITFTJhcZGSobIUFhckJkJEYqL/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBgUA/8QAJxEAAgICAQIFBQEAAAAAAAAAAAECAwQRBRIhEyIxQZEGFDJCUWH/2gAMAwEAAhEDEQA/APoypQSM11jiorLxbvesYxhW3RpSJclW5P1xTmJ9vGxfcvURmmCkyupg8fmSttTmVp7ZrvKfB7/NjSpSNdutXmDuoXwPIBT3NGc+Cj6TZZV6M3tGeY5XwvNfnRI38Av3ZdLQI5oXzGE4XIZBPLJNEWTwC/csm0Zs+HHmCcP8w+2PvQ55nCJ+WZdTaQNZka2st8k2TWCkqWgEoIpavIovm/Ae0M0yc/Ul5D3zp2KHIoAcd9VGSDJHSkh7HWsJFGKihG1E5/V1nJPIg/8AVBy15UOUeo2Ku65ct1DcZvCDjJQDRFh1xinJhfEbPLRcUl5wJZ4SDhRCcCoyqFXFExnsKf1MYb3skxlODuDXOcdluo0uajTLfRxQ1jB5g1Hhnuok/wB4Y0UttSebmyd6JDHdibXsSmUL4nSWv4jvkOJ3Qr+4dhWg4BdmPYvcXX3uxrVxidGKAHHfVzoyQZI6Ufe51hIoxUUJd8X7TV9oSO4/VQMxaghqpDvBLcR6SiVAUriVsai2LtScZE7cd9jTFYdS3ILLJaDnwg1TJl2S3vREN+56tenrszEkJfdKg9nhONxQYS3NPRZQ7MysmlbrDjSGjJU8tzJSVdKYz743a6Vo9XBwe2V3qzR+pL5dxbjeFxS1uCkfKvcZkxxH5o9QeUlJ70LFy8AZbaZF9uOpn3pDSOIEk7/nXcr5+qD6K6tbJrbi+zFZKlMshpSyooynJ64NaSl9cVL+nerW0gNx71U0ojCR0pIexyNYSKMTFClcl8Ws7MP9h+qlM9arGa1ounhSeaR9q4+2FIDUN0h251tMl9poK6qOKZoosu/BbKS9dGyDq2xsNjN4hH6uCmXgZbXat/BIQ9rOzLbKEXiCknqHBUR47LT2638Htlf3CcxP1o0iFcWHgpI4ihQPSmK6J0Jyti0DlvYTr1L0HTMlTLicqTgkYomNKFliTRMdqSOeC+S3knck5+9byiPkRqal5UBuPernTSiMpHSj73M5rCRRiYoVL/HuRucO7WxQLsU54TjffPWqZGM8iPSg8USa/EjW6P8AEa+yaTXESfuEUdijrG86k1Zwe8I/CEcuApFdPAx8jAl1VMt4OxOcsc5BPpkfjTXdXI8h/nwWWM2DLts1HNEj8aaus7kH7r4LrDb9zOwa1s2hbu6/flPtqcThs5z0+VKZGJyHJy02gN+O6iduPjrpabbnoTkx1ZfGEgnON/pQofT2XU+qTQKqvck2hK/akOtB1v4F5I+ma0VEHGCTNXUvKgJx0lVNJDCR0xIJ71g4mJiRsgnfejxDRI18nejxDxI2QT36UeIaJGSCe9MRDxI14nvR4hoi9eLZAnKC5cVt1Q5FQo8ZOPowvSn6ohHrFaOMH3e1lPLblTEZy/oWNcP4bHQEIShAwkDAAo8RqIEv4qMgqP/Z',
    },
  ],
  contributors: [moritz, despot],
  link: 'https://app.casama.io',
  description: [
    'With Casama, we wanted to solve the general problem of money distribution within a group. After exploring some specific cases regarding this problem, we settled on betting within a group. Imagine, you wanted to bet on the next superbowl with your friends: Using Casama, you can create a group, set the stake for the bet and invite your friends to join. Every member places a bet and once the game ends, the pot gets redistributed within the group based on the agreed upon payout rules.',
    'Casama eliminates the tedious process of collecting the stakes, keeping track of all bets, determining the winners, and redistributing the money. We tested our idea during the 2022 World Cup with 110 Friends and a total betting volume of $ 14,000 in 330 betting groups. Since then, we implemented combo bets, so you can bet on multiple games at once within your group.',
  ],
  problem: [
    '[Trustless Peer to Peer betting]{In contrast to "traditional" betting apps, the purpose of Casama is to bet against other people, not against the house. This means, we had to establish trust within a betting group. Our solution was to create a Smart Contract that acts like a vault. Your stake is securely locked in this contract until your bet is resolved. Afterwards, every member of the group can access their share of the pot and cash out their winnings.}',
  ],
  challenges: [
    '[Appealing journey for crypto natives and newbies]{We wanted to create a fun experience for everyone. Our users had varying experience with Blockchain technology - some were confused by anything related to the Blockchain while others demanded a stronger focus on Blockchain features. In the end, we implemented two slightly different journeys with different levels of Blockchain experience in mind.}',
  ],
  learnings: [],
  techStack: [
    'For The Web Application',
    '- NextJS',
    '- MUI',
    '- Tailwind',
    '- Docker',
    'For the Smart Contracts',
    '- Solidity',
    '- Hardhat',
  ],
};
