import React, { use, useState } from 'react'


const PostBar = () => {
  
    const [data , setdata] = useState([
        {FirstName : "Ubaid", lastName : "Ullah" , profileImage: "https://image.shutterstock.com/image-photo/great-nature-scenery-slovenian-alps-260nw-2526651305.jpg", postTime : "12-dec-2024"},
        {FirstName : "Qadir", lastName : "Ullah" , profileImage: "https://image.shutterstock.com/image-photo/great-nature-scenery-slovenian-alps-260nw-2526651305.jpg", postTime : "12-dec-2024"},
        {FirstName : "Tabish", lastName : "Ullah" , profileImage: "https://image.shutterstock.com/image-photo/great-nature-scenery-slovenian-alps-260nw-2526651305.jpg", postTime : "12-dec-2024"},
        {FirstName : "Abdullah" , profileImage: "https://image.shutterstock.com/image-photo/great-nature-scenery-slovenian-alps-260nw-2526651305.jpg", postTime : "12-dec-2024"},
    ])
    const [dataFun , setdataFun] = useState([
        {firstName: "Shariq" , lastName: "Siddiqui", postImage: "https://image.shutterstock.com/image-photo/great-nature-scenery-slovenian-alps-260nw-2526651305.jpg", postTime: "12: 30"},
        {firstName: "Shariq" , lastName: "Siddiqui", postImage: "https://image.shutterstock.com/image-photo/great-nature-scenery-slovenian-alps-260nw-2526651305.jpg", postTime: "12: 30"},
        {firstName: "Shariq" , lastName: "Siddiqui", postImage: "https://image.shutterstock.com/image-photo/great-nature-scenery-slovenian-alps-260nw-2526651305.jpg", postTime: "12: 30"},
    
    ])
return (

    <div className="App">
    
     <div>
      {data.map((ele , i) => {
        return(
          <Post key={i} name={ele.FirstName} lastName={ele.lastName} time={ele.postTime} imgUrl={ele.profileImage} />
        )
      })}
    
      
      </div>
      <div>
        {dataFun.map((element , k)=>{
          return(
            < Post key={k} firstname={element.firstName} lastname={element.lastName} timetaken={element.postTime} imageUrl={element.postImage}  />
          )
        })}
      </div>
    </div>
    
  );
}


const Post = (props) => {
  return(
    <>
  <div className='pos'>
      <h1>{props.name} {props.lastName}</h1>
      <p>{props.time}</p>
      <img src={props.imgUrl} alt="" />

    </div>
    <div>
      <h1>{props.firstname} {props.lastname}</h1>
      <p>{props.timetaken}</p>
      <img src={props.imageUrl} alt="" />
    </div>
    </>
      
      
    )
}
  



  
export default PostBar;
