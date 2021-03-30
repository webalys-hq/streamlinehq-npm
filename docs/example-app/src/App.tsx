import React from 'react'
import touchId2 from '@streamlinehq/streamlinehq/images/streamline-regular/touch-id-2-HfbcEF.svg'
import alertUser from '@streamlinehq/streamlinehq/images/streamline-regular/alert-user-MwbG4N.svg'
import { ReactComponent as House3 } from '@streamlinehq/streamlinehq/images/streamline-bold/house-3-K0XEIs.svg'
import zoomIn from '@streamlinehq/streamlinehq/images/streamline-bold/zoom-in-xJP7Yj.svg'
import { ReactComponent as InterfaceShareHandLock } from '@streamlinehq/streamlinehq/images/streamline-mini-bold/interface-share-hand-lock-hreiMz.svg'
import interfaceFavoriteLike1 from '@streamlinehq/streamlinehq/images/streamline-mini-bold/interface-favorite-like-1-P77RgW.svg'
import avatar2 from '@streamlinehq/streamlinehq/images/illustrations-line/avatar-2-CySEP7.svg'
import { ReactComponent as AstronautRobot2 } from '@streamlinehq/streamlinehq/images/illustrations-line/astronaut-robot-2-tkRmxY.svg'

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
        <code>{`import touchId2 from '@streamlinehq/streamlinehq/images/streamline-regular/touch-id-2-HfbcEF.svg'`}</code>
        <code>{`<img src={touchId2} alt="Touch" width={100} height={100}/>`}</code>
        <img src={touchId2} alt="Touch" width={100} height={100} />
      </figure>
      <figure>
        <code>{`import alertUser from '@streamlinehq/streamlinehq/images/streamline-regular/alert-user-MwbG4N.svg'`}</code>
        <code>{`<img src={alertUser} alt="Alert" style={{background: 'blue', padding: '10px'}} width={150} height={150}/>`}</code>
        <img
          src={alertUser}
          alt="Alert"
          style={{ background: 'blue', padding: '10px' }}
          width={150}
          height={150}
        />
      </figure>
    </section>
    <section>
      <h2>
        <a href="https://app.streamlinehq.com/icons/streamline-bold">
          Streamline-bold
        </a>
      </h2>
      <figure>
        <code>{`import { ReactComponent as House3 } from '@streamlinehq/streamlinehq/images/streamline-bold/house-3-K0XEIs.svg'`}</code>
        <code>{`<House3 className="green"/>`}</code>
        <House3 className="green" />
      </figure>
      <figure>
        <code>{`import zoomIn from '@streamlinehq/streamlinehq/images/streamline-bold/zoom-in-xJP7Yj.svg'`}</code>
        <code>{`<img src={zoomIn} alt="Zoom" />`}</code>
        <img src={zoomIn} alt="Zoom" />
      </figure>
    </section>
    <section>
      <h2>
        <a href="https://app.streamlinehq.com/icons/streamline-mini-bold">
          Streamline-mini-bold
        </a>
      </h2>
      <figure>
        <code>{`import { ReactComponent as InterfaceShareHandLock } from '@streamlinehq/streamlinehq/images/streamline-mini-bold/interface-share-hand-lock-hreiMz.svg'`}</code>
        <code>{`<InterfaceShareHandLock width={100} height={100} className="green"/>`}</code>
        <InterfaceShareHandLock width={100} height={100} className="green" />
      </figure>
      <figure>
        <code>{`import interfaceFavoriteLike1 from '@streamlinehq/streamlinehq/images/streamline-mini-bold/interface-favorite-like-1-P77RgW.svg'`}</code>
        <code>{`<img src={interfaceFavoriteLike1} alt="Like" />`}</code>
        <img src={interfaceFavoriteLike1} alt="Like" />
      </figure>
    </section>
    <section>
      <h2>
        <a href="https://app.streamlinehq.com/illustrations/illustrations-line">
          Streamline UX – Line
        </a>
      </h2>
      <figure>
        <code>{`import avatar2 from '@streamlinehq/streamlinehq/images/illustrations-line/avatar-2-CySEP7.svg'`}</code>
        <code>{`<img src={avatar2} alt="Avatar" />`}</code>
        <img src={avatar2} alt="Avatar" />
      </figure>
      <figure>
        <code>{`import { ReactComponent as AstronautRobot2 } from '@streamlinehq/streamlinehq/images/illustrations-line/astronaut-robot-2-tkRmxY.svg'`}</code>
        <code>{`<AstronautRobot2 width={250} height={250} className="red"/>`}</code>
        <AstronautRobot2 width={250} height={250} className="red" />
      </figure>
    </section>
  </main>
)

export default App
