import { Project } from '@/projects';
import { andreas, jonas, moritz } from './members';

export const cleancarAppConfig: Project = {
  title: 'CleanCar Web App',
  media: [
    {
      isVideo: true,
      source: {
        url: '/projects/cleancarApp/showcase.webm',
        type: 'video/webm',
      },
      fallback: {
        url: '/projects/cleancarApp/showcase.mp4',
        type: 'video/mp4',
      },
      poster: '/projects/cleancarApp/poster.jpg',
      length: 64,
    },
    {
      isVideo: false,
      source: '/projects/cleancarApp/0.png',
      alt: 'dashboard',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAgMAAwEAAAAAAAAAAAAABgcEBQkBAwgC/8QAORAAAQMDAwICBAsJAAAAAAAAAQIDBAAFEQYhMQcSCCITMlGSFBVCUmFxgYKx0eEjQUNiY3KhssL/xAAbAQABBQEBAAAAAAAAAAAAAAAEAQIDBQcABv/EACYRAAMBAAICAQMEAwAAAAAAAAABAgMEEQUhQSMxMhQzUXESIjT/2gAMAwEAAhEDEQA/ANKp0jneiJQPTFrq4Sbrqa22ZuUplp7BXgc707RuV6GwlT9nTpvRLt6vk62XBMhlmMSEOFv1v802v84lV39wfG3ro4qfSLEdLrDIlGKZcjuBxnt2rlva+Qp4Q/glL6E2Bz1pzvu/rSrkaL5EfHzfwdC/D5plfrTHT939ad+q1XyNfEyfwdC/DhpJfrSXT939ad+s1XyN/RYv4FD176XWbp3BgzrQ+sqeVhQI+mjvH8rXTVTTAPIcXLPF1KEzOkc716uUeStlDIkftOanSIGzRKdI53rP5RolMXd8u0a3a6tEqU72IT274/mrtM3fqRM9Jj3QxrZrjT7lwLSZiSt04GG8Z+2m1xNku2h08vFvpMt46ZciepSEJS1yDjkUK+16CV7LRha1vqbcawhPyvbSC9AzrPVI066hKUOHu+aM1Plhe34kGu8Y/kStNXaddYyJa2SWlfO5pt5vN9MWdFa7QlvGMUo0/bFAY8//AEKO8V75CAvK/wDOzyhOkc717eUeFplE/I8/NTpELZojOkYyKz+UaHTAC7x41x1zaY8ptLjZ7cg/3U3ZuF2hcUrfTGxZNG2JMoyUWxoFs7Heh3ydWumwlcbJPtSXMeNIXKWHHOxCT5fqqD7kqJLbs74X6NSB6EfK9tcKCGvdSWi1XOLBnNtrW+QElQzRvG4+usuof2AuRyMsqU2vuD1rvcvUGoH7Ta7iI7EUZKU8cVHtjefuyXHaNPUHx1U6Ww9V6VffvFwW6qE0XED6RvScbV5aJydyclrm5o8K3hQjypEdJyG3FIH2GtD47dQmzO+QlFuUDsiRlfNFJAdV7NEp0jnes/lGiUwUilMjqNaG17jy/wC1Rcpf6knEfdHoVmK1GSoNDGaryxI55NOGnGT7aUQSvWjfVdmH9QfhV74z9myi8p+9BG6YoaOt7r6RWMDgfv2FB+Q+0hfj/vQ1NXORhpK7diiFfBleWq/L80WOv4MzQ1G/i6TRn+Ov8a0nir6UmZ8t/Vr+wYkScL5oxIBbNEp0jnes/lGiUwNuM242rUcLUFvYDxi4ygjOcHNJti9V0hcd1k+2FT3iD1A2CDYR7h/Oh14+2EPyMIqnvEbfGie6wj3D+dSLxujGPyWaIbvifu7PrWAe6aevFasjflskLvXnXG7alu8K5Js4bERQUR281ZcTh6YQ4/krOXzMt7VfwFvQ3qHHmXu63m7+hi9wISFnt4x7ar/IYadqOiw8fyM+nXY575qm1XjSF2ejvx1ZjK8wcFVkRUaJNFpek3m3LM29SSB8aziFZHp3MY+utL4q+lJmXLf1a/sGH5Hn5o1IBbNFpqjg71n0miUD04nfeiJILB+cT7ankHoHZxOTvU8g1A9PUd96IkgsH5pO+9ESDUCt1nTIvcmNJcaCue1WM0lxNV20Oi6U9JkdjVupo9vXEZvcpLKhgo79iKjfHyqu3I9cnWYaVAbPcWsqWpRJJJJ9pq7ySUpIpNW3TbKOQT6TmiEC0f/Z',
    },
    {
      isVideo: false,
      source: '/projects/cleancarApp/1.png',
      alt: 'new daily closing',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAABgMFBwkCBAgB/8QANhAAAQMDAwIDBAcJAAAAAAAAAQIDBAAFEQYhMQcSCBMUIkFRkhUyYWJxctEjQ1OBkaGxsuH/xAAbAQACAwEBAQAAAAAAAAAAAAACBAEDBwUABv/EACYRAAICAgEDBAIDAAAAAAAAAAABAgMEESEFQVEUIiMxEnETMjT/2gAMAwEAAhEDEQA/ALKp0jnemIoXkyNtVmRc9T22zIkqaZewV4Gc70VjcVwDBKT5EdOaKcvV9n22eiQwxGJ7HC3gK/vQy/OEVLf2L0zdtjhKPCNyT00sCXFNrkySQcfVryvmu406IPsIK6T6bcT3F2SQfu1PqLF3I9PX4FY3QnS89JPqH0/imi9Vb5BeJU+x674ctJKSSuS6QBk+z/2i9Zau4PoqX2IP606L05o1uM5YVvhzv7V96cA70/gZVtlqjJnP6hi1V0uUVyRZOkc719VFHyc2MMiR+05q9IobLEp0jnes/ijRJMBJz+eoNnPdjHbz+ahvWkTS+SX7ey96hx3DfarkgDJpVvgZS5GCWu/p1EG220GETv8AVplOn+Pn7F2rnZx9BYI7YQCpCBt8BS+0MaZm0ygA5A+zFQ34PJeTPymjsRUbJ0c2+MRiLGsVuWy0hCivcgAE+0K6fSuchHM6t/nZynOkc719vFHwsmMT8j2+avSKWyxGdIxkVn8UaHJgPLUXtf2hKdz7PH5qryFqIeO9yJrtDElDqyrIQPcaSHRVxbiZuG8E/bR74B1ybS1SVp7VIFAGLs7IAWMGvHgB1PfHWdSGAuYWmwD2gHnapS2Q2CnUrp3btb6Vky7pKdV6NouNgg880xjWOqxSiL5Ncba3GRw7eFCPKfYSchtxSB/I1oWO3KCbM7yEoWOKB2RIyvmmkhOUuSxKdI53rP4o0STBaC539SbOD93/AGqrKXtLMR7kdEEAJOABXPOiNDyO+bjGaNfQD+zf9GO0HzFUAR56MfxFV4kjnUltJ1OuUzHVIdbyUpxn3CrqlFvUmU2uSW4oftRpcc0HcXH2fKX6VWU4xjapjpWJLyRLbrbfgrU1E/23SYM/v1/5rRsVfFEzbLfyy/YMSJOF804kItliU6RzvWfxRokmBtxm3G1ajhagt7AeMXGUEZzg5qLqXatImm9VPbCp7xB6gaBzYR8h/Wl10+bGH1GCGh7xEXtqQHzYht7u00a6ZYwH1OtGL3iourWytPj5D+tGuk2sB9XqRpO+Li4Nc6dHyH9aNdGtfcB9ZqQSdKOrieot4nTpcZuGpoHCVYGf60nk4ksR6kOYuXHLjuBJGrr3Ce0bdWy+wk+lVjDgpete9DNj9jKxNSyB9LTiFZHnuYx+NaZir4omYZb+WX7Bh+R7fNOpCLZYtNUcHes+iaJIHpxO+9MRKJg/OJ+NXxF5A7OJyd6viLSB6eo770xEomD80nfemIi0hmavV1tL61W2e7HKs57DjNU3012P3LZdj3WVrUHo1rlrnV7rC2HNQTFNqBBSV7EUFeLTv+qDsy7tP3Mj6e4tZUtSiSSST8a79SSikjgWtuTbGKQT5nNMIVkf/9k=',
    },
    {
      isVideo: false,
      source: '/projects/cleancarApp/2.png',
      alt: 'invoices',
      blurUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAArAE0DAREAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAABgQFBwkBAgMI/8QANhAAAQMDAwICBggHAAAAAAAAAQIDBAAFEQYSIQcxCBMUIjRB0eEVMlFicXKCsSNDYYGSobL/xAAbAQABBQEBAAAAAAAAAAAAAAAEAAECAwcFBv/EACcRAAICAgEDAwQDAAAAAAAAAAABAgMEEQUhI0ESFCITMWFxFTI0/9oADAMBAAIRAxEAPwCyqdI780RFA8mRrq0Sbrqa22VuUplp7BXtHfmpWNxXQjBKT6nHTuiXbzfp1rnpkMsRs7HS39b/AHUZOcIqW/uD0zdtjhKOkhwV0wsLkkxlSpG7OM7eP3pfWmvIU6YPwKldCbA4PWnO8/d+dOsixeRnj1vwcV+HzTK/rTHT+n51L3Vq8kXiVPwJ3fDlpJSSVyXSAMn1fnUveWryR9lS/BB/WnRenNGtxnLCt8Ob9q96cA80fgZVtlqjJnP5DFqrpcorqRZOkd+a9VFHk5sYZEj+J3q9IobLEp0jvzWfxRokmAk1/PUGznPI2/8AVRvWkPS9sl+A096Q47hvaruQkZoVvoEpHZnylyVIMdOR2OKbY+jLby1Syx5Q2j34pC0bqcIkhny+D76QtHUIJUQpA2/hSFo83+MFqMxYrctphCFb+SBgn1hXT4td9HM5X/OzyrOkd+a9vFHhZMYn5Hr96vSKWyxGdIxkVn8UaHJkf3m4xomt7U/LeCG07cn9VNdBzWoj0zUXtkqWPWen3JfkouicqOAnB5od4lqW2i9ZVTekwqiEKllaTkKGQaHfQIT2ZZ9uXSEzZz25OaQgO1Fd3xqU29c7yWwDtTnucU6WxNgX1R6fwNX6dkOXZ91fojZcbOD3onGslVYpRBsiuNtbjI8Q3hQjyn2EnIbcUgf2NaDjtygmzPMhKFjigdkSMr70UkByl1LEp0jvzWfxRokmBqoUS79QLTEmtBxtW3KT+aoXycEnEljxVjakThH6f6UhuB9m1oC0nIOTxQryrWtNhaxak9pDlFSlEtSU8ADAof7l/g2Z9uXSEzLntyeKQiP9WQH5OqVvxE5dbBI5A9w+2pJ6Ga2JL/L1Q5p24tS20eSmMoHG2rK2vWiuz+jK+dRP4ucwZ/nr/etHxV2oma5b7sv2DMiThfejEgFssSnSO/NZ/FGiSYG3GbcbVqOFqC3sB4xcZQRnODmmupdq0h6b1U9sKnvEHqBoHNhH+B+NDrj5sIfIwQxK8RGpWJ6312VPlHsnb86u/jZOP5KnyUE/wbL8UlzYJUrTo3fkPxpLibWM+XqQke8XE5tW5WnASPuH41JcNayD5mpBB0v6rOdTrvOlONNQFtAgBZCc8f1rlcpg5GOvTW+p0sDNpyfk10DbVDjsfTF1U7c4ykmMrgOpzXLw6M6N0XZLoHZFlDql6V1K2tSSR9KziFZBfXjH41sWIu1EyXLfdl+wYfkev3o1IBbLFpqjg81n0TRJA9OJ55oiJRMH5xP21fEHkDs4nJ5q+INIHp6jzzRESiYPzSeeaIiDSGZu93a0PrVbJ70YqzkoVjNU30wsfyWy7HusrWoPQkueuNWusOMuX+WpCk4Ukr4IqEMWna+KLJ5d2n8mR/PcWsqUpRJJJJrv1JKKSPP2tuTbGOQT5neiECyP/9k=',
    },
  ],
  contributors: [moritz, jonas, andreas],
  description: [
    'I was recruited by CleanCar to help implement their new digital strategy. The most impactful project was the implementation of an ERP system. When we introduced the ERP system, we faced the problem that it was quite challenging for the target group to handle.. Hence, we decided to build a simple-to-use interface on top of the powerful ERP system: The CleanCarApp.',
  ],
  problem: [
    'Integrating a powerful tool, like an ERP system, can confuse or intimidate people. Some examples included:',
    '[Data was not clearly visible]{If you wanted to get the daily revenue, for example, you had to navigate through tabs, generate reports and wait for the answer. Such an important metric should be instantly visible, so we put it right on the Dashboard of the App.}',
    '[Difficult handling of upcoming or urgent tasks]{We figuered out how to import tasks from our external audit system into the ERP, but there was no way of letting people know, when they are due. Thus, we put a reminder on the dashboard for urgent or upcoming tasks.}',
    '[Daily closings were a nightmare]{At the end of a day, all branch managers had to submit a report regarding cash earnings, inventory, damages etc. The ERP had seperate inputs for those metrics scattered throughout the application. We created a simple interface, tailored to every branch, and handled the import behind the scenes.}',
  ],
  challenges: [],
  learnings: [],
  techStack: ['- Ruby on Rails', '- PostgreSQL', '- Docker', '- MateStack'],
};
