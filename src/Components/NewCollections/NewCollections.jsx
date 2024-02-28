import React , {useState , useEffect} from "react";
import './NewCollections.css'
// import new_Collection from '../Assets/new_collections'
import Item from "../Item/Item";
function NewCollections() {

    const [new_Collection, setNew_collection] = useState([]);
    useEffect(() => {
 fetch('http://localhost:4000/newcollections')
            .then((res) => res.json())
            .then((res) => {
               
            setNew_collection(res)
        })

        
    },[])
    return (
        <div className="new-collections">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_Collection.map((item , i) => {
                    
                    return (        
                        <Item key={i} id={item.id} name={item.name} image= {item.image} new_price = {item.new_price} old_price ={item.old_price} />
                    )
                })}

            </div>
        </div>
    )
}


export default NewCollections