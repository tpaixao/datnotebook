import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.css';

// Import bootstrap(v3 or v4) dependencies
//import 'bootstrap3/js/modal';
//import 'bootstrap3/js/dropdown';
//import 'bootstrap3/js/tooltip';

//  https://github.com/kevgathuku/react-bootstrap-jquery/pull/1/files
window.jQuery = $;
require('bootstrap3');

class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content);
  }

  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          lang: 'en-US',
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview']]
          ]
        }}
        onChange={this.onChange}
      />
    );
  }
}

export default RichTextEditor;
