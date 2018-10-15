import React from 'react';

const ArtistMenu = ({artistsList, index, action}) => 
{
   // console.log( "Artist Menu ",artistsList);
   const List = artistsList.map( (currentValue, i) => {
      var ClassName =  `list-group-item font-weight-bold list-group-item-info text ${(currentValue.id===index)?"isActive bg-active":"unactive bg-unactive"}`;
      return (
         <button key={currentValue.name.replace(/ /g, '')+"Button"} onClick={action} type="button" className={ClassName} >{currentValue.name}</button>
      );
   } );
   return(
      <div className="list-group col-12 col-xl-4 col-lg-3 col-sm-4 px-0 list-group-flush bg-unactive" >
         {List}
      </div>
   );
}

export default ArtistMenu;