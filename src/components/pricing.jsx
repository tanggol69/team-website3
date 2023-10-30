import React from 'react';

const Pricing = (props) => {
  return (
    <div id="pricing" className="text-center">
    <div className="demo-wrap">
      <div className="demo-header">
        <h2>Simple & Affordable Pricing</h2>
        <p>We offer Basic and Premium plans that cater to different budgets and goals. Our commitment to affordability means you get exceptional value without compromising on quality. Explore our pricing options to find the plan that best suits your requirements, and remember, we stand behind our work with a satisfaction guarantee.</p>
      </div>

      <section className="pricing-plans">
        <div className="pricing-tables">
          {/* "Basic" Plan */}
          <div className="pricing-plan">
            <h2 className="plan-title">Basic</h2>
            <div className="plan-cost">
              <p className="plan-price">$399</p>
              <span>|</span>
              <p className="plan-type">Monthly</p>
            </div>
            <ul className="plan-features">
              <li>All UI Components</li>
              <li>Interactive Site</li>
              <li>Commercial Use</li>
              
     
        
            </ul>
            <a className="btn-plan" href="#contact">Select Plan</a>
          </div>

          {/* "Premium" Plan */}
          <div className="pricing-plan featured-plan">
            <div className="featured-ribbon">Best Value</div>
            <h2 className="plan-title">Premium</h2>
            <div className="plan-cost">
              <p className="plan-price">$589</p>
              <span>/</span>
              <p className="plan-type">Monthly</p>
            </div>
            <ul className="plan-features">
              <li>All UI Components</li>
              <li>Commercial Use</li>
              <li>Interactive / Mobile Friendly</li>
              <li>Email Support</li>
              <li>Lifetime Updates</li>
              <li>Resource Library</li>
              <li>Dedicated Support</li>
            </ul>
            <a className="btn-plan cta" href="#contact">Select Plan</a>
          </div>

        </div>
      </section>
    </div>
    </div>

  );
};

export default Pricing;
