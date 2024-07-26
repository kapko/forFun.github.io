import React, {useEffect, useState} from "react";
import {collection, onSnapshot} from "@firebase/firestore";
import db from "../../firebase";
interface DotProps {
  color: string;
}
interface Color {
  name: string;
  id: string;
  value:string
}

const Dot:React.FC<DotProps> = ({ color }) => {
  const dotColor = {
    backgroundColor: color,
    height: 15,
    width: 15,
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: '10px'
  };

  return <span style={dotColor}></span>;
}
const TestComponent = () => {
  const [colors,setColors] = useState<Color[]>([{name:'loading...',id:'initial',value:'00f'}])
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'colors'), (snapshot) => {
      setColors(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Color[]
      );
    });

    return () => unsubscribe();
  }, []);
  console.log(colors)
  return (
    <div className='root'>
      <button className='button'>New</button>
      <ul>
        {colors.map((color)=> (
          <li key={color.id}>
            <a href='#'>
              edit
            </a><Dot color={color.value}/> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export  default  TestComponent;