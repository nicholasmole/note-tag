import React, {Component} from 'react';

let oDoc, sDefTxt;

class CoreNotes extends Component {

	constructor(props) {
		super(props);
		oDoc = document.getElementById("textBox");
		sDefTxt = oDoc;
	}
	validateMode() {
		// if (!document.compForm.switchMode.checked) { return true ; }
		return true;
		alert("Uncheck \"Show HTML\".");
		oDoc.focus();
		return false;
	}
	formatDoc = (sCmd, sValue) => {
		if (this.validateMode()) { document.execCommand(sCmd, false, sValue); 
			// oDoc.focus(); 
		}
	}

	render() {
    return (
			<div id="wysiwyg" >
				<option value="h1">Title 1 &lt;h1&gt;</option>
				<a href="#" data-command='commandName' onClick={()=>this.formatDoc('italic')}><i>i</i></a>
				<div id="textBox" contentEditable="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
			</div>
		)
	}
}

export default CoreNotes;