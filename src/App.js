import React from 'react';
import './style.css';

// Create a Component
// This component renders an <h1> element with the text "New World!" and a <p> element with the text "Hello there! What a wonderful world".
function NewWorld() {
  return (
    <div>
      <h1>New World!</h1>
      <p>Hello there! What a wonderful world</p>
    </div>
  );
}

// Avatar Component 
// This component renders an <img> element with a source URL for an avatar image. The style attribute is used to set the width of the image to 100 pixels.
function Avatar() {
  return (
    <img 
      className="card-image"
      src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEh1Qnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ef03fa2062c4e053e92dd89fcd75f6efa2436792/avatar.jpg"
      alt="Avatar"
      style={{ width: 100 }}
    />
  );
}

// Creating a Component
// This component renders a <div> element with the class name "card."
// Inside the card, it renders the Avatar component.
// It also includes a <div> element with the class name "card-name" and another <div> element with some text describing the user.
function UserProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="card-name">Alex Chuna</div>
      <div>Alex is a Front End engineering student at Altschool Africa</div>
    </div>
  );
}
// This is the root component of your application.
// It renders the UserProfileCard component within a <section> element with the class name "main-page."
// There's a commented-out <Component /> component that is not currently being rendered.
export default function App() {
  return (
    <section className="main-page">
      <UserProfileCard />
      {/* <NewWorld /> */}
    </section>
  );
}

// When you run this React application, it will display the user profile card with the avatar, name, and description in the specified structure. If you want to render the 'NewWorld' component as well, you can uncomment it within the App component's JSX, and it will render above the user profile card.
