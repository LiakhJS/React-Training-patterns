import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GoReact from './GoReact';
import FormatName from './FormatName';
import RenderNumTimes from './RenderNumTimes';
import AppComposition from './AppComposition';
import Clock from './Clock';
import RenderToggle from './RenderToggle';
import Greeting from './Greeting';
import LoginControl from './LoginInOut';
import MailBox from './MailBox';
import {messages } from './MailBox';
import WarningPage from './WarningBanner';
import SideBarKeyUl from './BlogItem';
import {posts} from './BlogItem';
import NameForm from './NameForm';
import FlavorSelectForm from './FlavorForm';
import MultipleSelect from './MultipleSelect';
import AFewInputs from './AFewInputsReservation';
import Calculator from './BoiledWater2';
import RenderOfChildren from './PropsChildren';
import SignUpDialog from './FancyBorder';
import TodoApplication from './TodoApp';
import ItemsList from './ProductSearch';
import { propsValues } from './ProductSearch';
import ToDoListMatching from './Matching_sort_add';
import MouseTracker from './MouseTrack';
import MouseWithTracker from './MouseWithCat';
import {Ccat} from './MouseWithCat';
import ErrorBoundaryApp from './ErrorBoundary';
import TryCatch from './TryCatchAddEventListener';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <FormatName />
        <GoReact />
        <RenderNumTimes />
        <AppComposition />
        <Clock />
        <RenderToggle />
        <Greeting isLoggedIn={false} />
        <LoginControl />
        <MailBox unreadMessages = {messages} />
        <WarningPage />
        <SideBarKeyUl posts={posts}/>
        <NameForm />
        <FlavorSelectForm />
        <MultipleSelect />
        <AFewInputs/>
        <Calculator />
        <RenderOfChildren />
        <SignUpDialog/>
        <TodoApplication/>
    <ItemsList data={propsValues}/>
    <ToDoListMatching/>
    <MouseTracker />
    <MouseWithTracker/>
    <Ccat/>
    <ErrorBoundaryApp/>
<TryCatch />
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
