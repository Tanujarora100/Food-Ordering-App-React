import { SearchBar } from "../SearchBar/SearchBar";
import {DeliveryButton} from "../FastDelieveryButton/FastDelieveryButton"

//filter the restaurants according to the delievery time


export const Body = () => {

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SearchBar></SearchBar>
        <DeliveryButton></DeliveryButton>
      </div>
    </div>

  );
};
