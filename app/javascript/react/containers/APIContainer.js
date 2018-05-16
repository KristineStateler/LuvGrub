import React, { Component } from 'react';


class APIContainer extends Component {
  constructor(props) {
   super(props);

   this.state = {
     hits: []
   };
 }

 componentDidMount() {
   fetch('https://hn.algolia.com/api/v1/search?query=all+food+recipes')
     .then(response => response.json())
     .then(data => this.setState({ hits: data.hits }));
 }

 render() {
     const { hits } = this.state;

     return (
       <div className="todays-articles">
       <h2>Want more??</h2>
       <div>
         {hits.map(hit =>
           <div key={hit.objectID}>
             <a href={hit.url}>{hit.title}</a>
           </div>
         )}
       </div>
     </div>
     );
   }
 }

export default APIContainer;
