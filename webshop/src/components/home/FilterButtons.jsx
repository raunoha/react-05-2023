import React from 'react'

function FilterButtons(props) {
    const filterByCategory = (categoryClicked) => {  //koik funkstioonid on kokku tõstetud
        const result = props.dbProducts.filter((product) =>   // oli productsfromfile!!!
        product.category.includes(categoryClicked));
        props.setProducts(result)
      }

  return (
    <div>
    {props.categories.map(category => 
  <button key={category.name} onClick={() => filterByCategory(category.name)}>
    {category.name} 
  </button>
    )}
    </div>
  )
}

export default FilterButtons