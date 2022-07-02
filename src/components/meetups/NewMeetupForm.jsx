import React, { useRef } from 'react'
import './NewMeetupForm.css'
import toast, { Toaster } from 'react-hot-toast';


const NewMeetupForm = (props) => {

    const notify = () => toast.success('Here is your toast.');
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const descriptionInputRef = useRef()
    const addressInputRef = useRef()


    const submitHandler = (e) => {
        notify();
        e.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription,
            address: enteredAddress
        }
       setTimeout(() => {
        props.onAddMeetup(meetupData); 
        props.setIsActive('All')
       }, 1000);
      
    }


  return (
    <div>
        <Toaster position="top" />
        <form className='form' onSubmit={submitHandler}>
            <div className="control">
                <label htmlFor='title' >
                    Meetup Title
                </label>
                <input ref={titleInputRef} type="text" id='title' placeholder="Meetup Title" required />
            </div>
            <div className="control">
                <label htmlFor='image' >
                    Meetup Image
                </label>
                <input ref={imageInputRef} type="url" id='image' placeholder="Meetup Image " required />
            </div>
            <div className="control">
                <label htmlFor='address' >
                    Meetup Address
                </label>
                <input ref={addressInputRef}  type="text" id='address' placeholder="Meetup Address" required />
            </div>
            <div className="control">
                <label htmlFor='desc' >
                    Meetup Description
                </label>
                <textarea ref={descriptionInputRef}  rows='5' id='desc' placeholder="Meetup Description" required />
            </div>
            <div className="actions">
                <button type='submit'>Add Meetup</button>
            </div>
        </form>
    </div>
  )
}

export default NewMeetupForm