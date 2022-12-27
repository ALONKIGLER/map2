

ShowMap comp =>
first i fetch data using the fetch function (inside useEffact) and save the data in loadData Stat

in the return() there are 2 parts, one for the List and the other for the map 

list part
1. I use the map function to return the list.
2. if the user clicks on the card, flag up and shows the card.
3. if not click, show all the cards.

map part
1.sand the object to return Marker 
2.position={getPosition(wq)}  getPosition => return only the point from the object
3.onClick={() => onMarkerClick(wq)} onMarkerClick=> setSelectedPoint to show the picked card  
and setinitialCenter to centre the map




// css
css=> grid
