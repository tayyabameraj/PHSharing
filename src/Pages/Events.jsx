import { Box, Spinner } from 'gestalt'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listEvents } from '../actions/eventAction';
import EventCard from '../Components/EventCard'
import Page from '../Components/Page'
const Events = () => {
    const dispatch = useDispatch();
    const eventList = useSelector((state)=>state.eventList)
    const {loading, err, events} = eventList;
    // Getting Events
    useEffect(()=>{
        dispatch(listEvents())
    },[])
    return (
        <Page title="Events" id="Events">
            {loading ? <Spinner show={true} accessibilityLabel="Example spinner" /> :
            <Box display="flex" direction="row">
            {events ? events.map((event, ind)=> (
                <Box column={4} key={ind}>
                    <EventCard event={event} />
                </Box>
            )): ''}
            
            </Box>
            }
        </Page>
    )
}

export default Events
