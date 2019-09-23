import React from 'react';
import contacts from '../contacts.json'


class ContactList extends React.Component {

    constructor(props){
        super(props)



        this.state = {

            visibleContacts: contacts.slice(0,5),
            restOfList: contacts.slice(5),
            asc: true,
        }
    }

    showContacts = () =>{
        return this.state.visibleContacts.map((eachContact, index)=>{

            return (
            
                        <tr key={index}>
                        <td>
                            <img src= {eachContact.pictureUrl}  alt = "pic" height = "100px"  />
                        </td>
                        <td>{eachContact.name}</td>
                        <td>{eachContact.popularity}</td>
                        <td>

                        <button onClick = {()=>{this.deleteContact(index) }}> Delete </button>
                        </td>
                        </tr>
                
            )
        })
    }


    deleteContact = (index) =>{

        let copy = [...this.state.visibleContacts];

        copy.splice(index, 1);

        this.setState({visibleContacts: copy});
    }

    addRandom = () =>{
        let visible =[...this.state.visibleContacts];
        let others = [...this.state.restOfList];

        let randomNum = Math.floor(Math.random() * others.length)

        visible.unshift(...others.splice(randomNum,1))
        // this splices it out of the others array
        // but since .splice returns the values that were deleted
        // we can also push them into the other array at the same time

        this.setState({
            visibleContacts: visible,
            restOfList: others,
        })

    }


    sortBySomething = (whatToSortBy) =>{
        let copy = [...this.state.visibleContacts];
        if(this.state.asc){

            copy.sort((a,b)=>{
                console.log(a[whatToSortBy], b[whatToSortBy])

                if(a[whatToSortBy] > b[whatToSortBy]){
                    return 1
                } else if(b[whatToSortBy] > a[whatToSortBy]){
                    return -1
                } else{
                    return 0
                }
            })


        } else {
            copy.sort((a,b)=>{
                if(a[whatToSortBy] > b[whatToSortBy]){
                    return -1
                } else if(b[whatToSortBy] > a[whatToSortBy]){
                    return 1
                } else{
                    return 0
                }
            })
        }

      

        this.setState({
            visibleContacts: copy,
            asc: !this.state.asc,
        })



    }

    render(){
        return(
            <div>

                        <button onClick={this.addRandom}>
                            Add Random Contact
                        </button>

                        <button onClick={()=>{this.sortBySomething('name')}}>
                        Sort By Name
                        </button>


                        <button onClick={()=>{this.sortBySomething('popularity')}}>
                        Sort By Popularity
                        </button>
                               
                        <table>
                            <thead>
                            <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>{this.showContacts()}</tbody>
                        </table>
               
            </div>
        )
    }
}

export default ContactList;






