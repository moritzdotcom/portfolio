import { Project } from '@/projects';
import { moritz } from './members';

export const cleancarBackendConfig: Project = {
  title: 'CleanCar App Backend',
  media: [
    {
      isVideo: true,
      source: {
        url: '/projects/cleancarBackend/showcase.webm',
        type: 'video/webm',
      },
      fallback: {
        url: '/projects/cleancarBackend/showcase.mp4',
        type: 'video/mp4',
      },
      poster: '/projects/cleancarBackend/poster.jpg',
      length: 77,
    },
    {
      isVideo: false,
      source: '/projects/cleancarBackend/0.png',
      alt: 'dashboard',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHQAAAQUAAwEAAAAAAAAAAAAACAMEBQYHAAIJAf/EAD8QAAEDAwEDBwcICwAAAAAAAAECAwQABREGBxIhCBMiMTJxkxZBUYORodEUQlZhgYKxshUXIyQzQ0ZTVHOS/8QAGwEAAQUBAQAAAAAAAAAAAAAAAwABAgUHBAb/xAAmEQACAgEDAwQDAQAAAAAAAAAAAQIDEQQSUQUhIjFBUoEUNGEy/9oADAMBAAIRAxEAPwD0K2k3mVa9NSpcNzdeBSlJ9GTijpYQBvLKHOhPWzTUC/XjUCkCYjfJwo4JJ+ugyvcSF06qVmZNWbZ0rUFpF2Rf1cysZSoBXEe2iQ1En6CjCu2O6PoJfqngyFc2NTkqPDA3qItRNCengzuvYGy7xVfXOPfU/wAqxEXpK2NnOTpCc7V7c99S/NtRF6Kp+w2c5Mtqc7V5c99SWvtXuRegpfsN3OStZHO1eXPYakuo3L3IvptD9jFuUBsnibLEW6Tbbgp0SVALBz6cVYdP11t1yhJ9iu6joKqaXOK7mQyJH7Trr1aR5JsOraq/nSkkZ+ej8azxrsaNnuNLroeBtF2fWS2SZK2C2yk7wz6TQ6bFVPdjJDV6OOrilI0nR+lYuldMM2Nh1TzbacEq8/ChSeZNhtPQqIbEM1/o6JJJTbjvJOc7xpZC4H8e8h0H93Kd3vpZEKi6J/tfjTjCrc3nsltknHfSyORGrNSTtPxmn4doXMU51pTnh7K6dPTG5+Twc2oulSsxWQZOVtfJV609ZZsqAqIvfA3FZz2vrqy6fUqtUop5K3qNrt0jk1gGp+R0+uvaJHiGw7NqL+dLyE5+e3+as8a8TRk/IuWgWQ7pezpRj+AnOe81ws7S+lO4yE+gUhMqs8ES1kPH30denoBfr6iCT5uePvqX0N9ijCErXurkFIPn40voX2SUJDTILbcwk/bUWv4On/R0cHtSc99N9EgW+XAQ3ZrKQvI3xx+9Vl0j9lFX1j9VgjSJGV171Iz+Uu4eG0x/Omnxn+Yj81Z5JeJo8X5I1nZzEYOjLQ7u9L5OOP2mq1liizu9ikJlYmhaZSlGNkdxo6ax6gXngWa51xAUi3AjuNPlcjd+BVLT+8AbakD04NNlcj9+BwljcOUxEg1HP9JYx7Hfdc/xhSyuR+/AKvLrKkWOzFSN3pjh96rTo/7SKnrPbSsDiRJw511oCiZ22HjtJfzp17J4BxBP/VZ5JeLNIg/NGtbPdVacZ0XaWnbzFQtMcApK8EHNVTTLVNYJ93WGmNw4vsTxBSwxNoYq1dpVRyq9Qj3uCn2kdx2TrPS7Y3U32EB/sFPtYtyOeW+mB/UELxRS2MW5HPLnS/0hheKKWxi3I+eXWlvpFB8UUtj4FvXIK3Lm1JZrrZbQi3XSPJUlYyG1gkdKrjokWtUuxTdckvxX3A5fkdPrrQ0jOWz0OvjTcmG40+gLQocQaz1JM0VvBnkqO2xltnfQlPUAtQA99SVUOCMrJ8kLMU4M4ed8RXxo8aocAJXT5ISY8+kHEh4esV8aNGmvgDK+zkg5cyYM4lv+Ir40ZUV8AZX2fIhZdyuKQcT5A9YaNHT1fE55ai35EJMvF2TnFykj1qqMtNVj/KAvU3fJkJLv17T1XWUPWmjx0tPxQGWru+TK9cbhPuCwJ0x5/d6ucWTiuujT1QlmMTjv1Fs44lLJESCec66skVcj/9k=',
    },
    {
      isVideo: false,
      source: '/projects/cleancarBackend/1.png',
      alt: 'detailed branch',
      blurUrl:
        'data:image/jpeg;base64,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',
    },
    {
      isVideo: false,
      source: '/projects/cleancarBackend/2.png',
      alt: 'coupon list',
      blurUrl:
        'data:image/jpeg;base64,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',
    },
    {
      isVideo: false,
      source: '/projects/cleancarBackend/3.png',
      alt: 'detailed coupon',
      blurUrl:
        'data:image/jpeg;base64,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',
    },
  ],
  contributors: [moritz],
  description: [
    'During my time at CleanCar, the marketing team regularly asked me to update promotions or opening times of our Branches displayed in the mobile Apps. This process seemed very inefficient to me and I wanted to enable anyone to update the App with ease and without the help of a developer. The CleanCar App Backend was born.',
  ],
  problem: [
    'The CleanCar App Backend should solve the following problems:',
    '[Update branch details]{Previously, branch details (e.g. opening times) had to be updated in a very complex Typo3 Backend. The App Backend reduced complexity by a lot.}',
    '[Display branches as closed during maintenance]{Branches were frequently closed for a day due to maintenance. Previously, displaying a branch as closed, was a tedious process and I always had to schedule a reminder for the next day to re-open then branch. In the new Backend, you can just press a button and enter the date of re-opening, which happens automatically.}',
    '[Manage coupons and promotions]{Coupons were designed by an agency, then had to be uploaded to Typo3, and the link then had to be inserted into the App configuration. In the new Backend, you simply enter the coupon info, and an image is generated which is then uploaded directly into the App, eliminating the need for the agency completely.}',
    '[Track changes and make them reviewable]{Instead of updating the live app immediately, changes made in the Backend were saved to a database first. After reviewing your changes, you can decide to publish or stash them. This removed the fear of making a mistake.}',
  ],
  challenges: [],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Docker', '- MateStack'],
};
