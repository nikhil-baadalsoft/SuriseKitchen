import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularPicks from './components/PopularPicks'
import Offer from './components/Offer'
import Footer from './components/Footer'
import axios from 'axios'
import { useEffect } from 'react'
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

    if (/mobile/i.test(userAgent)) {
      return "MOBILE";
    }

    if (/tablet|ipad/i.test(userAgent)) {
      return "TABLET";
    }

    return "DESKTOP";
  };

  const captureEvent = async (eventname, eventSequence) => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      let sessionId = sessionStorage.getItem("sessionId")
      if (!sessionId) {
        sessionId = crypto.randomUUID();
      }
      const refererurl = encodeURIComponent(window.location.href);
      const referrername = encodeURIComponent(document.title);
      const Payload = {
        eventName: eventname,
        eventSequence: eventSequence ?? 1,
        eventTimestamp: new Date().toISOString(),
        sessionId,
        page: "MARKETING",
        customerId: "",
        device: {
          browser: getBrowser(),
          operatingSystem: getOperatingSystem(),
          deviceType: getDeviceType(),
        },
        market: {
          utmSource: queryParams.get("utm_source") || "DIRECT",
          campaign: queryParams.get("utm_campaign") || "UNKNOWN",
        },
        referrer: {
          url: refererurl,
          referrer: referrername
        }
      }
      console.log("EVENT_PAYLOAD =>", Payload);
      const url = "https://app-customerevents-southindia-bud0d7e9a5akhuep.southindia-01.azurewebsites.net/api/v1/Events";
      await axios.post(url, Payload, {
        headers: {
          "Content-Type":
            "application/json",
          "Access-Control-Allow-Origin": "*"
        },
      })

      if (eventname !== "MARKETING_SITE_LAUNCHED") {
        const navigateurl = `https://sunrisebagels-ordering.vercel.app/locations/?sessionId=${sessionId}&refererUrl=${refererurl}&referrerName=${referrername}`
        window.open(navigateurl, "_blank");
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const sessionId = crypto.randomUUID();
    sessionStorage.setItem("sessionId", sessionId)
    captureEvent("MARKETING_SITE_LAUNCHED")
  }, [])
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