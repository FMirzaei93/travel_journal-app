import Header from "./Header";
import ListItem from "./ListItem";
import data from "../Data";

export default function App() {
  const listElements = data.map((item) => {
    return (
      <ListItem
        key={item.id}
        {...item}
        //
      />
    );
  });

  return (
    <div>
      <Header />
      <div className='items'>{listElements}</div>
    </div>
  );
}
