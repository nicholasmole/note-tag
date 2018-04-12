import React from 'react';
import './Notes_TopBar_Options.css';
import CoreNotes from './CoreNotes/coreNotes';

export default () => (
  <div>
     <div className="Notes_TopBar_Options">Notes Topbar Option</div>
     <div className="Notes_Contain_Notes_And_Explorer">
      <div className="Notes_Explorer_Side_Part">Notes Explorer Side Part</div>
      <div className="Notes_Core_Notes">
        <CoreNotes/>
      </div> 
     </div>
  </div>

);
