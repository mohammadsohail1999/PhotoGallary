import './search.css';
import React from 'react'



class Search extends React.Component{

state = {
    term: ''

}




onSubmit = (e)=>{

 e.preventDefault();


 this.props.query(this.state.term);



}






    render(){
      
        return <div>
         <form onSubmit={this.onSubmit} className="w-full max-w-sm form" >

     



           <div className="flex items-center border-b border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" onChange={e=>{this.setState({term: e.target.value })}}/>
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={this.onSubmit}>
      Search
    </button>
   
  </div>






           </form>




        </div>





    }






}





export default Search;