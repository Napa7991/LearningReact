

function Animals() {
const animals = ["lion","cow","tiger","bull"]
  return (
    <>
     {animals.map((animal)=>{
        return <li key={animal}>{animal}</li>
     })}
    </>
  )
}

export default Animals;
