import React from 'react';

import api from './components/API/api'; 

import Cards from './components/cards';


import Search from './components/Search';

class App extends React.Component{


  state = {

   data: []

  }





ondatafetch =  async (term)=>{

  const res = await api.get(`/api`,{

     params:{
       
      key: '18104094-c1c28b0f8df43c950456a5532',
       q: term
    }


  })

   console.log(res.data.hits);
  this.setState({
   data: res.data.hits
 })




}


componentDidMount(){

 this.ondatafetch();


}




  


 render(){ 
     return (<div>
       <Search query = {this.ondatafetch}/>
       <Cards data={this.state.data} />
       
       </div>)
 }

}




export default App;
