import ItemList from '../components/ItemList';

const shopItems = [
  {
    id: 1,
    name: 'Bananas',
    amount: '1 kg',
    price: 2.19,
  },
  {
    id: 2,
    name: 'Lemons',
    amount: '5 pack',
    price: 1.4,
  },
  {
    id: 3,
    name: 'Potatoes',
    amount: '3 kg',
    price: 4.49,
  },
  {
    id: 4,
    name: 'Avocado',
    amount: 'each',
    price: 1.39,
  },
  {
    id: 5,
    name: 'Apples',
    amount: '1.5 kg',
    price: 2.49,
  },
  {
    id: 6,
    name: 'Oranges',
    amount: '2 kg',
    price: 2.99,
  },
  {
    id: 7,
    name: 'Onions',
    amount: '1 kg',
    price: 1.24,
  },
  {
    id: 8,
    name: 'Carrots',
    amount: '500 g',
    price: 1.09,
  },
  {
    id: 9,
    name: 'Beets',
    amount: '500 g',
    price: 1.39,
  },
  {
    id: 10,
    name: 'Tomatoes',
    amount: '500 g',
    price: 2.19,
  },
  {
    id: 11,
    name: 'Butternut Squash',
    amount: 'each',
    price: 2.98,
  },
  {
    id: 12,
    name: 'Tangerines',
    amount: '1 kg',
    price: 2.85,
  },
];

function Shop() {
  return <ItemList itemsArray={shopItems} />;
}

export default Shop;
