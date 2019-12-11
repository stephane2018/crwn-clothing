import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview';
class Shop extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
         collections: SHOP_DATA
       
      }
    }
    
  render() {
    console.log(this.state);
    const {collections}= this.state;
    return(
      <div className='shop-page'>
      {
         collections.map(({id, ...OtherCollectionProps}) =>(
          <CollectionPreview key={id} {...OtherCollectionProps}/>
        ))
      }
      </div>
    )
  }
}
export default Shop;
