import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';

const Home = () =>  (
  <main className="home__outer">
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Link to="/product/1">Click here to go to the prototype page</Link>
    <h2>A few caveats:</h2>
    <p>The spinner is for effect, the delay is artificial (it would otherwise load instantly). It's caused by a mock API call to retrieve product information from the 'database' in a thunk.</p>
    <p>Dimensions weren't given so I built it for 1600 x 900 (the inner container is 1000px). It's not responsive, but it should play nice down to abotu 1050px. Breakpoints were included for posterity but not used because of time.</p>
    <p>The menu system is partially dynamic (the CSS relative widths would need to be accounted for) so I also retrieve that data from a mock database (I skipped the API call here though).</p>
    <p>The modal system is also built for extensibility, even though only one type is used for now. In the context of limited time I made a mock in animation but no out (this requires a bit more lifecycle control (onTransitioneend etc.). The redux actions/store would be extended to accomodate entering/exiting states. Or a drop in library (I tried to avoid those for the purposes of a clean demonstration)</p>
    <p>The page styling is not responsive but the content is dynamic. And it is built on top of dynamic routing with RRv4. So if another product was added, it should be possible to route to as well.</p>
    <p>As well, in a typical use case of course, much of the CSS would be moved into generic mixins for repeated elements, but for this exercise I largely did not.</p>
    <p>There are fallback pages for 404 and database lookup errors. In a real use case the full error information would be provided of course. Try going to a random route or any product page except '1'.</p>
    <p>Most elements have some functionality -- the modals could be linked easily to a redux form system, with a big glaring exception being the item select features. Not fleshed out because of limited time. (Links are largely empty)</p>
    <p>Ideally, certain components would be made even more generic (Dropdown particularly). But the groundwork exists either way. MVP first!</p>
    <p>The Product page is kept stateful to allow for better managing key events to allow users to escape out of the modal since the design did not include a close button.</p>
    <p>Some smoke tests are included, but I felt this was too far outside the bounds of the task. Many of them will fail at the moment because they are not setup to handle redux. I wanted the groundwork laid, but otherwise it felt out of scope.</p>
    <p>And just for fun, a favicon to boot!</p>
  </main>
)

export default Home;