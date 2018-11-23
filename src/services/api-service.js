export default class ApiService {
  _mockUps = [
    {
      id: 1,
      title: 'Top menu',
      style: {
        backgroundImage: 'linear-gradient(to right bottom, #d4f2ff, #00A5E5, #00A5E5, #d4f2ff)',
        padding: '1rem 2rem'
      },
      screen: 'menu1.jpg',
      children: [
        {
          id: '1.1',
          title: 'Menu wrapper',
          style: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            height: '40px',
            margin: 0,
            padding: 0,
            borderBottom: '1px solid #888',
            textAlign: 'center',
            backgroundColor: '#444'
          },
          children: [
            {
              id: '1.1.1',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#fff',
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                cursor: 'pointer',
                transition: 'background-color .5s ease-in'
              },
              styleHover: {
                backgroundColor: '#005f5f'
              },
              text: 'Home'
            },
            {
              id: '1.1.2',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#444',
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                backgroundColor: '#fff',
                cursor: 'default'
              },
              text: 'Tutorials'
            },
            {
              id: '1.1.3',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#fff',
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                cursor: 'pointer',
                transition: '.3s background-color'
              },
              styleHover: {
                backgroundColor: '#005f5f'
              },
              text: 'About'
            },
            {
              id: '1.1.4',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#fff',
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                cursor: 'pointer',
                transition: '.3s background-color'
              },
              styleHover: {
                backgroundColor: '#005f5f'
              },
              text: 'Newsletters'
            },
            {
              id: '1.1.5',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#fff',
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                cursor: 'pointer',
                transition: '.3s background-color'
              },
              styleHover: {
                backgroundColor: '#005f5f'
              },
              text: 'Contacts'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Menu design #2',
      style: {
        backgroundColor: '#F0F0F0',
        padding: '2rem 3rem'
      },
      screen: 'menu2.jpg',
      children: [
        {
          id: '2.1',
          title: 'Menu wrapper',
          style: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            height: '40px',
            margin: 0,
            padding: 0,
            boxShadow: '2px 2px 6px #888',
            borderRadius: '3px',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(to right bottom, #d4f2ff, #00A5E5, #00A5E5, #d4f2ff)'
          },
          children: [
            {
              id: '2.1.1',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#fff',
                fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                cursor: 'pointer',
                transition: 'background-color .4s ease-in'
              },
              styleHover: {
                backgroundColor: '#444'
              },
              text: 'Home'
            },
            {
              id: '2.1.2',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#444',
                fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                backgroundColor: '#fff',
                cursor: 'default'
              },
              text: 'Tutorials'
            },
            {
              id: '2.1.3',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#fff',
                fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                cursor: 'pointer',
                transition: 'background-color .4s ease-in'
              },
              styleHover: {
                backgroundColor: '#444'
              },
              text: 'About'
            },
            {
              id: '2.1.4',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#fff',
                fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                cursor: 'pointer',
                transition: 'background-color .4s ease-in'
              },
              styleHover: {
                backgroundColor: '#444'
              },
              text: 'Newsletters'
            },
            {
              id: '2.1.5',
              title: 'Menu item',
              style: {
                width: '120px',
                color: '#fff',
                fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
                fontSize: '1.2em',
                lineHeight: '40px',
                cursor: 'pointer',
                transition: 'background-color .4s ease-in'
              },
              styleHover: {
                backgroundColor: '#444'
              },
              text: 'Contacts'
            }
          ]
        }
      ]
    },
  ];

  _delay = (delayTime, ...args) => {
    return new Promise(resolve => setTimeout(() => resolve(...args), delayTime));
  };

  getData = async () => {
    return await this._delay(3000, this._mockUps);
  }
}
