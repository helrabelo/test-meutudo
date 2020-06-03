import React from 'react';
import SectionHeader from '../components/section-header';

export default function Spread() {
  return (
    <>
      <section id="spread">
        <div className="container">
          <SectionHeader
            span="spread system of corona"
            title="how to spread corona virus"
            subtitle="COVID-19 is a new illness that can affect your lungs and airwys. It is caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, China"
          />
          <div className="spread-items row">
            <div className="spread-item">
              <div className="image">
                <span></span>
              </div>
              <div className="spread-content">
                <h3>Person-to-person spread as close Contact with infected</h3>
                <p>
                  The coronavirus is though to spread mainly from person to
                  person. This can happen between peoplo who are in close
                  contact with one another.
                </p>
              </div>
            </div>
            <div className="spread-item">
              <div className="image">
                <span></span>
              </div>
              <div className="spread-content">
                <h3>Droplets that from infected Person coughs or sneezes</h3>
                <p>
                  The coronavirus is though to spread mainly from person to
                  person. This can happen between peoplo who are in close
                  contact with one another.
                </p>
              </div>
            </div>
            <div className="spread-item">
              <div className="image">
                <span></span>
              </div>
              <div className="spread-content">
                <h3>Touching or contact with infected Surfaces or objects</h3>
                <p>
                  The coronavirus is though to spread mainly from person to
                  person. This can happen between peoplo who are in close
                  contact with one another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
