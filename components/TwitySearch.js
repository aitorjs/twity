import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class TwitySearch extends React.Component {	
	render() { return <div>
     <form className="navbar-form navbar-right" role="search" id="searchForm">
       <div className="form-group">
         <input type="text" className="form-control hidden-xs" placeholder="Bilatu Twitterren" id="searchFormValue" />
         <Glyphicon glyph="search" />
      </div>
    </form>
	</div>
	}
}



