import React, {useState, useEffect} from 'react';
import scss from './style.module.scss';

function Button(events) {
  const {list, preview = 'select', onChange} = events;

  const [isOpen, setIsOpen] = useState(false);
  const [labels, setLabels] = useState([]);
  const [activeData, setActiveData] = useState(null);
  const [activePreview, setActivePreview] = useState(preview);


  useEffect(()=>{ setLabels(list); },[list])

  useEffect(()=>{
   activeData && setActivePreview(activeData.text);


   (typeof onChange === 'function' && activeData) && onChange(activeData);
  },[activeData])



  useEffect(()=>{
    const close_select = () => setIsOpen(false);
    
    window.addEventListener('click', close_select)

    return () => {
      window.removeEventListener('click', close_select);
    }
  }, [])



  function clickItem(dataItem){
    setActiveData(dataItem);
    setIsOpen(false);
  }


  
  return (<>
    <div 
      className={scss.wrap} 
      data-open={isOpen} 
      onClick={e => e.stopPropagation()}
      data-value={activeData?.value}
    >
      <div className={scss.preview} onClick={() => setIsOpen(prev => !prev)} >{activePreview}</div>
      <ul className={scss.list}>
        {labels.map((el, i) => (
          <li 
            key={i}
            className={scss.item} 
            data-active={el.value === activeData?.value}
            onClick={() => clickItem(el)}
          >{el.text}</li>
        ))}
      </ul>
    </div>
  </>);
}

export default Button;