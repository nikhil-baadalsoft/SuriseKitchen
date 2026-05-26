import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularPicks from './components/PopularPicks'
import Offer from './components/Offer'
import Footer from './components/Footer'
import axios from 'axios'
function App() {

  const getBrowser = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Edg")) return "EDGE";
    if (userAgent.includes("Chrome")) return "CHROME";
    if (userAgent.includes("Firefox")) return "FIREFOX";
    if (userAgent.includes("Safari")) return "SAFARI";

    return "UNKNOWN";
  };

  const getOperatingSystem = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Windows")) return "WINDOWS";
    if (userAgent.includes("Mac")) return "MACOS";
    if (userAgent.includes("Android")) return "ANDROID";
    if (userAgent.includes("iPhone") || userAgent.includes("iPad")) return "IOS";
    if (userAgent.includes("Linux")) return "LINUX";

    return "UNKNOWN";
  };

  const getDeviceType = () => {
    const userAgent = navigator.userAgent;
    console.log("userAgent",userAgent)

    if (/mobile/i.test(userAgent)) {
      return "MOBILE";
    }

    if (/tablet|ipad/i.test(userAgent)) {
      return "TABLET";
    }

    return "DESKTOP";
  };

  const captureEvent = async (eventname) => {
    try {

      const payload = {
        eventName: eventname,
        eventTimestamp: new Date().toISOString(),
        customerId: crypto.randomUUID(),
        device: {
          browser: getBrowser(),
          operatingSystem: getOperatingSystem(),
          deviceType: getDeviceType(),
        },
        market: {
          utmSource: new URLSearchParams(window.location.search).get("utm_source") || "DIRECT",
          campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "UNKNOWN",
        },
        refer: {
          url: window.location.href,
          referrer: document.referrer || "DIRECT"
        },
      }
      console.log("Payload", payload);
      const url = "https://app-customerevents-southindia-bud0d7e9a5akhuep.southindia-01.azurewebsites.net/api/v1/Events";
      const response = await axios.post(url,payload);
      console.log("Response",response);
      

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar captureEvent={captureEvent} />
      <Hero captureEvent={captureEvent} />
      <PopularPicks captureEvent={captureEvent} />
      <Offer captureEvent={captureEvent} />
      <Footer captureEvent={captureEvent} />
    </>
  );
}

export default App;