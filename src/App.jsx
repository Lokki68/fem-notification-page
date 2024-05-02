import { useState } from 'react'
import './App.css'

function App() {
  const [notifications, setNotifications] = useState([
    {
      'id': '1',
      'author': {
        'name': 'Mark Webber',
        'img': './images/avatar-mark-webber.webp',
        'href': '#',
      },
      'text': 'reacted to your recent post',
      'link': {
        'text': 'My first tournament today!',
        'href': '#',
      },
      'time': '1m ago',
      'isUnread': true
    },
    {
      'id': '2',
      'author': {
        'name': 'Angela Gray',
        'img': './images/avatar-angela-gray.webp',
        'href': '#',
      },
      'text': 'followed you',
      'time': '5m ago',
      'isUnread': true
    },
    {
      'id': '3',
      'author': {
        'name': 'Jacob Thompson',
        'img': './images/avatar-jacob-thompson.webp',
        'href': '#',
      },
      'text': 'has joined your group',
      'link': {
        'text': 'Chess Club',
        'href': '#',
      },
      'time': '5 days ago',
      'isUnread': true
    },
    {
      'id': '4',
      'author': {
        'name': 'Rizky Hasanuddin',
        'img': './images/avatar-rizky-hasanuddin.webp',
        'href': '#',
      },
      'text': 'send you a private message',
      'time': '5 days ago',
      'privateMessage': " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
      'isUnread': false
    },
    {
      'id': '5',
      'author': {
        'name': 'Kimberly Smith',
        'img': './images/avatar-kimberly-smith.webp',
        'href': '#',
      },
      'text': 'has joined your group',
      'image': {
        'img': './images/image-chess.webp',
        'alt': 'Chess image',
      },
      'time': '1 week ago',
      'isUnread': false
    },
    {
      'id': '6',
      'author': {
        'name': 'Nathan Peterson',
        'img': './images/avatar-nathan-peterson.webp',
        'href': '#',
      },
      'text': 'reacted to your recent post',
      'link': {
        'text': '5 end-game strategies to increase your win rate',
        'href': '#',
      },
      'time': '2 weeks ago',
      'isUnread': false
    },
    {
      'id': '7',
      'author': {
        'name': 'Anna Kim',
        'img': './images/avatar-anna-kim.webp',
        'href': '#',
      },
      'text': 'left your group',
      'link': {
        'text': 'Chess Club',
        'href': '#',
      },
      'time': '2 weeks ago',
      'isUnread': false
    },
  ])

  function handleNotificationClick(id) {
    setNotifications(prev => prev.map(notification => (
      notification.id === id
        ? { ...notification, isUnread: !isUnread }
        : notification
    )))
  }

  return (
    <>
      <div className="container">
        <header>
          <div className="title">
            <h1>Notifications</h1>
            <span className="badge">
              {notifications.filter(notification => notification.isUnread).length}
            </span>
          </div>
          <button>Mark all as read</button>
        </header>
        <div className="wrapper">
          {
            notifications.map((notification) => (
              <div key={notification.id} data-unread={notification.isUnread} className='notification' >
                <div className="notifcation-content">
                  <img
                    src={notification.author.img}
                    alt={notification.author.name}
                    className='headshot'
                  />
                  <div className="post">
                    <div>
                      <div>
                        <div>
                          <a href={notification.author.href}>
                            {notification.author.name}
                          </a>
                          <span>{notification.text}</span>
                          {
                            notification.link && (
                              <a href={notification.link.href}>
                                {notification.link.text}
                              </a>
                            )
                          }
                          {
                            notification.isUnread && (
                              <span className="isUnread"></span>
                            )
                          }
                        </div>
                      </div>
                      <p className="time">{notification.time}</p>
                    </div>
                    {
                      notification.privateMessage && (
                        <p className="privateMessage">{notification.privateMessage}</p>
                      )
                    }
                  </div>
                </div>
                {
                  notification.image && (
                    <img src={notification.image.img} alt={notification.image.alt} />
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
