import Item from './Item';

function ItemList({ itemsArray }) {
  return (
    <div className="mx-auto mt-4 flex w-full flex-col gap-3 px-4 sm:max-w-3xl">
      {itemsArray.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
