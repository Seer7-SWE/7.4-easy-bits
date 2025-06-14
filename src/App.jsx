
import './App.css'
import { useRecoilValue } from 'recoil'
import { messagingAtom, networkAtom, notificationsAtom } from './atoms'


function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp() {
// // const networkNotificationCount = useRecoilValue(networkAtom)
// // const jobsAtomCount = useRecoilValue(jobsAtom);
// // const notificationsAtomCount = useRecoilValue(notificationsAtom)
// // const [MessagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

// // useMemo
// const totalNotificationCount = networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;

const [notificationsCounter, setNotificationCounts] = useState({});

useEffect(() => {
  //fetch
  axios.get("https://sum-server.100devs.com/notifications")
    .then(res => {
      setNetworkCount(res.data)
    })
}, [])

  return (
    <>
      <button>Home</button> 

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging ({MessagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>  
      
      <button onClick={() => {
        setMessagingAtomCount(messagingAtomCount + 1);
      }}>Me</button> 

    </>
  )
}

function ButtonUpdater() {
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);
  return <button onClick={() => {
    setMessagingAtomCount(c => c + 1);
  }}>Me</button>
}

export default App
