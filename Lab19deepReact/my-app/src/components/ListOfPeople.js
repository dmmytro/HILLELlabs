import React from "react";
//import ShowDataButton from "./ShowDataButton";

const styles = {
    nameButton:{
        backgroundColor: 'blue',
        color: 'white'
    },

    block: {
        margin: 'auto',
        padding: '10px',
        textAlign: 'center'
    }

};

const characterList = [

    {

        name: 'Jon',

        phone: '+380123456789'

    },

    {

        name: 'Alice',

        phone: '+380123123123'

    },

    {

        name: 'Bob',

        phone: '+380123213543'

    }

]


function ListOfPeople(){
    const dataList = characterList.map(
    (element) => {
        return (
            <div className="block" style={styles.block}>

                <span className="name-field"> {element.name}: </span>
                <span className="number-field"> {element.phone} </span>
            </div> 
        )
    }
)
return (
    <div>
        {dataList}
    </div>
)
}

export default ListOfPeople;