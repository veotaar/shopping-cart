import ItemList from '../components/ItemList';

function Shop() {
  return (
    <div className="min-h-[calc(100vh-3rem)] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-50 to-gray-100">
      <ItemList />
    </div>
  );
}

export default Shop;
