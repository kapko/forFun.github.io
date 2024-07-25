import React, {useEffect,useState} from 'react';
import {onSnapshot,collection} from '@firebase/firestore'
import './index.css'
import db from './firebase'

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
  };

  return <span className='circle' style={dotColor}></span>;
}
function App() {
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

  console.log(colors,'colors')
  return (
    <div className='root'>
      <button className='button'>New</button>
      <ul>
        {colors.map((color)=> (
          <li>
            <a href='#'>
              edit
            </a><Dot color={color.value}/> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
