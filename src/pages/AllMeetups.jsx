import React,{useState , useEffect} from 'react'
import MeetupList from '../components/meetups/MeetupList'



export const AllMeetups = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([])

    //uygulama ilk render edildiğinde çalışacak ve veritabanındaki verileri
    //çekip allMeetups sayfasında gösterecek useEffet ve useState kullanılarak
    useEffect(() => {
      fetch('https://react-meetup-app-4658d-default-rtdb.firebaseio.com/meetups.json',{
        method: 'GET'
      }).then(res => {
        return res.json();
      }).then(data => {

        const meetups = [];
        for (const key in data) {
          const meetup = {
            id:key,
            ...data[key]
          }
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
    }, []);


  if (isLoading) {
    return <section><p>Loading...</p></section>;
  }

  return (
    <section>
      <h1 className='title__all'>All Meetups</h1>
    <div className="cards">
      <MeetupList meetups={loadedMeetups} />
    </div>
    </section>
  )
}
