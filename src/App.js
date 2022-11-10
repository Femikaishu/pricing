import './App.css';
import Icon1 from "./icons/icon1.png";
import Icon2 from "./icons/icon2.png";
import Icon3 from "./icons/icon3.png";
function App() {
  return (
    <div className="panel">

     <div class="pricing-plan">
            <img src={Icon1} alt="" class="pricing-img"/>
            <h2 class="pricing-header">Personal</h2>
            <ul class="pricing-features">
                <li class="pricing-features-item">Custom domains</li>
                <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
            </ul> 
            <span class="pricing-price">Free</span>
            <a href="#/" class="pricing-button">Sign up</a>
        </div>

        <div class="pricing-plan">
            <img src={Icon2} alt="" class="pricing-img"/>
            <h2 class="pricing-header">Small team</h2>
            <ul class="pricing-features">
                <li class="pricing-features-item">Never sleeps</li>
                <li class="pricing-features-item">Multiple workers for more powerful apps</li>
            </ul>
            <span class="pricing-price">$150</span>
            <a href="#/" class="pricing-button is-featured">Free trial</a>
        </div>

        <div class="pricing-plan">
            <img src={Icon3} alt="" class="pricing-img"/>
            <h2 class="pricing-header">Enterprise</h2>
            <ul class="pricing-features">
                <li class="pricing-features-item">Dedicated</li>
                <li class="pricing-features-item">Simple horizontal scalability</li>
            </ul>
            <span class="pricing-price">$400</span>
            <a href="#/" class="pricing-button">Free trial</a>
        </div>

    </div>
  );
}

export default App;