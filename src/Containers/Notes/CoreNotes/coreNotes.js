import React, {Component} from 'react';


class CoreNotes extends Component {
	render() {
    return (
<div id="wysiwyg" >
  <input type="button" value="B" onclick="document.execCommand('bold', false, '');"/>
   
  <input type="button" value="I" onclick="document.execCommand('italic', false, '');"/>
   
  <input type="button" value="U" onclick="document.execCommand('underline', false, '');" />
   
  <input type="button" value="delete" onclick="document.execCommand('delete', false, '');" />
   
  <input type="button" value="link" onclick="document.execCommand('createLink', false, 'http://google.com');" />
   
  <input type="button" value="image" onclick="document.execCommand('insertImage', false, 'http://lorempixel.com/40/20/sports/')" />
   
  <div contenteditable="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
</div>
		)
	}
}

export default CoreNotes;