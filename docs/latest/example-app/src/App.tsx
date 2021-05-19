import React from 'react'
import TouchId2 from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/touchid/touch-id-2.svg'
import AlertUser from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/alerts/alert-user.svg'
import { ReactComponent as Server3 } from '@streamlinehq/streamlinehq/img/streamline-regular/internet-networks-servers/servers/server-3.svg'
import { ReactComponent as House3 } from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/home/interface-home-3.svg'
import TravelHotel5Star from '@streamlinehq/streamlinehq/img/streamline-mini-bold/maps-travel/hotel/travel-hotel-5-star.svg'
import ZoomIn from '@streamlinehq/streamlinehq/img/streamline-bold/interface-essential/zoom/zoom-in.svg'
import { ReactComponent as InterfaceShareHandLock } from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/share/interface-share-hand-lock.svg'
import InterfaceFavoriteLike1 from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/bookmark-favorite/interface-favorite-like-1.svg'
import Avatar2 from '@streamlinehq/streamlinehq/img/illustrations-line/users/users/avatar-2.svg'
import { ReactComponent as AstronautRobot2 } from '@streamlinehq/streamlinehq/img/illustrations-line/robot/robots-explorer/astronaut-robot-2.svg'
import AvatarStar2 from '@streamlinehq/streamlinehq/img/illustrations-duotone/users/super-users-admin/avatar-star-2.svg'

import './App.css'

const App = () => (
  <main>
    <h1>streamlinehq example app</h1>

    <p>
      <code>streamlinehq.json </code> in this app (not added to git but you can
      check <code>streamlinehq_example.json</code> instead) has{' '}
      <code>
        "streamline-regular", "streamline-bold", "streamline-mini-bold",
        "illustrations-line"
      </code>{' '}
      inside its <code>families</code> key. This means that this app has got
      access to images from these 4 Streamline families.
    </p>
    <p>
      SVG images can be added directly as React components in this example app
      because <code>create-react-app</code>{' '}
      <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs">
        supports it
      </a>
      . Your app might support importing svg files in a different way.
    </p>
    <p>
      Code for each image is taken from{' '}
      <a href="https://app.streamlinehq.com/">Streamline app</a>. Click on an
      icon there and then click on NPM Package button in the sidebar to see how
      to import it.
    </p>

    <section>
      <h2>
        <a href="https://app.streamlinehq.com/icons/streamline-regular">
          Streamline-regular
        </a>
      </h2>
      <figure>
        <code>{`import TouchId2 from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/touchid/touch-id-2.svg'`}</code>
        <code>{`<img src={TouchId2} alt="Touch" width={100} height={100}/>`}</code>
        <img src={TouchId2} alt="Touch" width={100} height={100} />
      </figure>
      <figure>
        <code>{`import AlertUser from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/alerts/alert-user.svg'`}</code>
        <code>{`<img src={AlertUser} alt="Alert" style={{background: 'blue', padding: '10px'}} width={150} height={150}/>`}</code>
        <img
          src={AlertUser}
          alt="Alert"
          style={{ background: 'blue', padding: '10px' }}
          width={150}
          height={150}
        />
      </figure>
      <figure>
        <code>{`import { ReactComponent as Server3 } from '@streamlinehq/streamlinehq/img/streamline-regular/internet-networks-servers/servers/server-3.svg'`}</code>
        <code>{`<Server3 width={100} className="green" />`}</code>
        <Server3 width={100} className="green" />
      </figure>
    </section>
    <section>
      <h2>
        <a href="https://app.streamlinehq.com/icons/streamline-bold">
          Streamline-bold
        </a>
      </h2>
      <figure>
        <code>{`import ZoomIn from '@streamlinehq/streamlinehq/img/streamline-bold/interface-essential/zoom/zoom-in.svg'`}</code>
        <code>{`<img src={ZoomIn} alt="Zoom" height={50} />`}</code>
        <img src={ZoomIn} alt="Zoom" height={50} />
      </figure>
    </section>
    <section>
      <h2>
        <a href="https://app.streamlinehq.com/icons/streamline-mini-bold">
          Streamline-mini-bold
        </a>
      </h2>
      <figure>
        <code>{`import { ReactComponent as House3 } from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/home/interface-home-3.svg'`}</code>
        <code>{`<House3 className="green" width={100}/>`}</code>
        <House3 className="green" width={100} />
      </figure>
      <figure>
        <code>{`import { ReactComponent as InterfaceShareHandLock } from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/share/interface-share-hand-lock.svg'`}</code>
        <code>{`
          <InterfaceShareHandLock
            width={100}
            height={200}
            preserveAspectRatio="none"
            className="green"
          />
        `}</code>
        <InterfaceShareHandLock
          width={100}
          height={200}
          preserveAspectRatio="none"
          className="green"
        />
      </figure>
      <figure>
        <code>{`import InterfaceFavoriteLike1 from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/bookmark-favorite/interface-favorite-like-1.svg'`}</code>
        <code>{`<img src={InterfaceFavoriteLike1} alt="Like" width={75} />`}</code>
        <img src={InterfaceFavoriteLike1} alt="Like" width={75} />
      </figure>
      <figure>
        <code>{`import TravelHotel5Star from '@streamlinehq/streamlinehq/img/streamline-mini-bold/maps-travel/hotel/travel-hotel-5-star.svg'`}</code>
        <code>{`
          <img
            src={TravelHotel5Star}
            alt="5 star"
            width={75}
            style={{ background: 'red' }}
          />
        `}</code>
        <img
          src={TravelHotel5Star}
          alt="5 star"
          width={75}
          style={{ background: 'red' }}
        />
      </figure>
    </section>
    <section>
      <h2>
        <a href="https://app.streamlinehq.com/illustrations/illustrations-line">
          Streamline UX – Line
        </a>
      </h2>
      <figure>
        <code>{`import InterfaceFavoriteLike1 from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/bookmark-favorite/interface-favorite-like-1.svg'`}</code>
        <code>{`<img src={Avatar2} alt="Avatar" width={150} />`}</code>
        <img src={Avatar2} alt="Avatar" width={150} />
      </figure>
      <figure>
        <code>{`import { ReactComponent as AstronautRobot2 } from '@streamlinehq/streamlinehq/img/illustrations-line/robot/robots-explorer/astronaut-robot-2.svg'`}</code>
        <code>{`<AstronautRobot2 width={250} height={250} className="red"/>`}</code>
        <AstronautRobot2 width={250} height={250} className="red" />
      </figure>
    </section>
    <section>
      <h2>
        <a href="https://app.streamlinehq.com/illustrations/illustrations-duotone">
          Streamline UX – Duotone
        </a>
      </h2>
      <figure>
        <code>{`import AvatarStar2 from '@streamlinehq/streamlinehq/img/illustrations-duotone/users/super-users-admin/avatar-star-2.svg'`}</code>
        <code>{`<img src={AvatarStar2} alt="Avatar" height={30} />`}</code>
        <img src={AvatarStar2} alt="Avatar" height={30} />
      </figure>
    </section>
  </main>
)

export default App
