import React from 'react'
// For issues T-2244 and T-2234
import PieLineGraph from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/dashboard/pie-line-graph.svg'
import AlertUser from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/alerts/alert-user.svg'
import RadioactiveCircle from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/alerts/radioactive-circle.svg'
import SatelliteSignal from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/share/satellite-signal.svg'
import { ReactComponent as Server3 } from '@streamlinehq/streamlinehq/img/streamline-regular/internet-networks-servers/servers/server-3.svg'

import { ReactComponent as ZoomIn } from '@streamlinehq/streamlinehq/img/streamline-bold/interface-essential/zoom/zoom-in.svg'

import TravelHotel5Star from '@streamlinehq/streamlinehq/img/streamline-mini-bold/maps-travel/hotel/travel-hotel-5-star.svg'
import { ReactComponent as InterfaceShareHandLock } from '@streamlinehq/streamlinehq/img/streamline-mini-bold/interface-essential/share/interface-share-hand-lock.svg'

import Avatar2 from '@streamlinehq/streamlinehq/img/illustrations-line/users/users/avatar-2.svg'
import { ReactComponent as AstronautRobot2 } from '@streamlinehq/streamlinehq/img/illustrations-line/robot/robots-explorer/astronaut-robot-2.svg'

import AvatarNetwork from '@streamlinehq/streamlinehq/img/illustrations-multicolor/users/users/avatar-network.svg'
import Avatar4 from '@streamlinehq/streamlinehq/img/illustrations-multicolor/users/users/avatar-4.svg'
import { ReactComponent as ContactBook1 } from '@streamlinehq/streamlinehq/img/illustrations-multicolor/users/user-profile-data/contact-book-1.svg'
import { ReactComponent as FingerprintHand3 } from '@streamlinehq/streamlinehq/img/illustrations-multicolor/users/fingerprint-identification/fingerprint-hand-3.svg'

import './App.css'

const App = () => (
  <main>
    <h1>streamlinehq example app</h1>

    <p>
      <code>.env</code> file in this app (not added to git but you can check{' '}
      <code>.env.example</code>) has{' '}
      <code>
        "streamline-regular","streamline-bold","streamline-mini-bold","illustrations-line",
        "illustrations-multicolor"
      </code>{' '}
      inside its <code>STREAMLINE_FAMILIES</code> key. This means that this app
      has got access to images from these Streamline families.
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

    <h2>One-colored images</h2>

    <section>
      <h3>
        <a href="https://app.streamlinehq.com/icons/streamline-regular">
          Streamline-regular
        </a>
      </h3>
      <figure>
        <code>{`import PieLineGraph from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/dashboard/pie-line-graph.svg'`}</code>
        <code>{`
          <div style={{ width: '200px' }}>
            <img src={PieLineGraph} alt="Pie line graph" />
          </div>
        `}</code>
        <div style={{ width: '200px' }}>
          <img src={PieLineGraph} alt="Pie line graph" />
        </div>
        <figcaption>
          Imported as an image, nothing is changed (note that it takes all
          available space, which is 200px because of the parent div)
        </figcaption>
      </figure>
      <figure>
        <code>{`import SatelliteSignal from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/share/satellite-signal.svg'`}</code>
        <code>{`<img src={SatelliteSignal} alt="Satellite" width={150} />`}</code>
        <img src={SatelliteSignal} alt="Satellite" width={150} />
        <figcaption>Imported as an image, custom width is set</figcaption>
      </figure>
      <figure>
        <code>{`import AlertUser from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/alerts/alert-user.svg'`}</code>
        <code>{`<img src={AlertUser} alt="Alert" style={{background: 'blue', padding: '10px'}} width={150} />`}</code>
        <img
          src={AlertUser}
          alt="Alert"
          style={{ background: 'blue', padding: '10px' }}
          width={150}
        />
        <figcaption>
          Imported as an image, custom width and style for the img tag itself is
          set
        </figcaption>
      </figure>
      <figure>
        <code>{`import RadioactiveCircle from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/alerts/radioactive-circle.svg'`}</code>
        <code>{`
          <img
            src={RadioactiveCircle}
            alt="Radioactive"
            style={{
              filter: 'invert(.5) sepia(1) saturate(5) hue-rotate( 175deg )'
            }}
            width={150}
          />
        `}</code>
        <img
          src={RadioactiveCircle}
          alt="Radioactive"
          style={{
            filter: 'invert(.5) sepia(1) saturate(5) hue-rotate( 175deg )',
          }}
          width={150}
        />
        <figcaption>
          Imported as an image, custom width is set, color is changed with a{' '}
          <a href="https://blog.union.io/code/2017/08/10/img-svg-fill/">
            `filter` CSS rule
          </a>
          .
        </figcaption>
      </figure>
      <figure>
        <code>{`import { ReactComponent as Server3 } from '@streamlinehq/streamlinehq/img/streamline-regular/internet-networks-servers/servers/server-3.svg'`}</code>
        <code>{`<Server3 width={100} stroke="green" />`}</code>
        <Server3 width={100} stroke="green" />
        <figcaption>
          Imported as a React component, width and stroke are set directly as
          props.
        </figcaption>
      </figure>
    </section>

    <section>
      <h3>
        <a href="https://app.streamlinehq.com/icons/streamline-bold">
          Streamline-bold
        </a>
      </h3>
      <figure>
        <code>{`import { ReactComponent as ZoomIn } from '@streamlinehq/streamlinehq/img/streamline-bold/interface-essential/zoom/zoom-in.svg'`}</code>
        <code>{`<ZoomIn width={100} className="green" />`}</code>
        <ZoomIn width={100} className="green" />
        <figcaption>
          Imported as a React component, width is set as a prop, while fill is
          set via CSS.
        </figcaption>
      </figure>
    </section>

    <section>
      <h3>
        <a href="https://app.streamlinehq.com/icons/streamline-mini-bold">
          Streamline-mini-bold
        </a>
      </h3>
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
        <figcaption>
          Imported as a React component, width and height are set as props,
          while fill is set via CSS and also aspect ratio is not preserved (set
          via a prop).
        </figcaption>
      </figure>
      <figure>
        <code>{`import TravelHotel5Star from '@streamlinehq/streamlinehq/img/streamline-mini-bold/maps-travel/hotel/travel-hotel-5-star.svg'`}</code>
        <code>{`
          <img
            src={TravelHotel5Star}
            alt="5 star"
            height={75}
            style={{ background: 'red', borderRadius: 20, padding: 10 }}
          />
        `}</code>
        <img
          src={TravelHotel5Star}
          alt="5 star"
          height={75}
          style={{ background: 'red', borderRadius: 20, padding: 10 }}
        />
        <figcaption>
          Imported as an image, custom height and style for the img tag itself
          is set
        </figcaption>
      </figure>
    </section>

    <section>
      <h3>
        <a href="https://app.streamlinehq.com/illustrations/illustrations-line">
          Streamline UX – Line
        </a>
      </h3>
      <figure>
        <code>{`import Avatar2 from '@streamlinehq/streamlinehq/img/illustrations-line/users/users/avatar-2.svg'`}</code>
        <code>{`<img src={Avatar2} alt="Avatar" width={150} />`}</code>
        <img src={Avatar2} alt="Avatar" width={150} />
        <figcaption>Imported as an image, custom width is set</figcaption>
      </figure>
      <figure>
        <code>{`import { ReactComponent as AstronautRobot2 } from '@streamlinehq/streamlinehq/img/illustrations-line/robot/robots-explorer/astronaut-robot-2.svg'`}</code>
        <code>{`<AstronautRobot2 width={250} height={150} stroke="red"/>`}</code>
        <AstronautRobot2 width={250} height={150} stroke="red" />
        <figcaption>
          Imported as a React component, stroke, width and height are set as
          props.
        </figcaption>
      </figure>
    </section>

    <h2>Multi-colored images</h2>

    <section>
      <h3>
        <a href="https://app.streamlinehq.com/illustrations/illustrations-multicolor">
          Streamline UX – Multicolor
        </a>
      </h3>
      <figure>
        <code>{`import AvatarNetwork from '@streamlinehq/streamlinehq/img/illustrations-multicolor/users/users/avatar-network.svg'`}</code>
        <code>{`<img src={AvatarNetwork} alt="AvatarNetwork" width={150} />`}</code>
        <img src={AvatarNetwork} alt="AvatarNetwork" width={150} />
        <figcaption>Imported as an image, custom width is set</figcaption>
      </figure>
      <figure>
        <code>{`import Avatar4 from '@streamlinehq/streamlinehq/img/illustrations-multicolor/users/users/avatar-4.svg'`}</code>
        <code>{`
          <img
            src={Avatar4}
            alt="Avatar4"
            width={150}
            style={{ background: 'blue', padding: 10, borderRadius: 150 }}
          />
        `}</code>
        <img
          src={Avatar4}
          alt="Avatar4"
          width={150}
          style={{ background: 'blue', padding: 10, borderRadius: 150 }}
        />
        <figcaption>
          Imported as an image, custom width and style for the img tag itself is
          set
        </figcaption>
      </figure>
      <figure>
        <code>{`import { ReactComponent as ContactBook1 } from '@streamlinehq/streamlinehq/img/illustrations-multicolor/users/user-profile-data/contact-book-1.svg'`}</code>
        <code>{`<ContactBook1 width={100} className="red" />`}</code>
        <ContactBook1 width={100} className="red" />
        <figcaption>
          Imported as a React component, width is set as a prop, stroke is set
          via CSS to red while fill is original.
        </figcaption>
      </figure>
      <figure>
        <code>{`import { ReactComponent as FingerprintHand3 } from '@streamlinehq/streamlinehq/img/illustrations-multicolor/users/fingerprint-identification/fingerprint-hand-3.svg'`}</code>
        <code>{`<FingerprintHand3 width={100} className="red green" />`}</code>
        <FingerprintHand3 width={100} className="red green" />
        <figcaption>
          Imported as a React component, width is set as a prop, fill is set to
          green via CSS while stroke is set via CSS to red.
        </figcaption>
      </figure>
    </section>
  </main>
)

export default App
