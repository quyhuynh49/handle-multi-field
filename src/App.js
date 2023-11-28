import { useState } from "react";

function App() {
  const [list, setList] = useState([{}]);

  return (
    <div>
      {list.length > 0 &&
        list.map((_, index) => {
          return (
            <div key={index}>
              <fieldset>
                <legend>Item:</legend>
                {index > 0 && (
                  <div>
                    <input
                      onChange={(event) => {
                        console.log(event.target.checked);
                        let prevItem = {};
                        const newList = list.map((tempItem, tempIndex) => {
                          if (index === tempIndex + 1) {
                            event.target.checked
                              ? (prevItem = { ...tempItem })
                              : (prevItem = {});
                          }

                          return index === tempIndex
                            ? { ...prevItem }
                            : { ...tempItem };
                        });
                        console.log(newList);
                        setList(newList);
                      }}
                      type="checkbox"
                      id={`inherit ${index}`}
                    />
                    <label htmlFor={`inherit ${index}`}>
                      inherit info from previous entry
                    </label>
                  </div>
                )}
                <div>
                  <label htmlFor={`name ${index}`}>name</label>
                  <input
                    id={`name ${index}`}
                    value={list[index].name || ""}
                    onChange={(event) => {
                      const newList = list.map((tempItem, tempIndex) => {
                        return index === tempIndex
                          ? { ...tempItem, name: event.target.value }
                          : { ...tempItem };
                      });
                      setList(newList);
                    }}
                    type="text"
                    placeholder="enter name"
                  />
                </div>
                <div>
                  <label htmlFor={`address ${index}`}>address</label>
                  <input
                    id={`address ${index}`}
                    value={list[index].address || ""}
                    onChange={(event) => {
                      const newList = list.map((tempItem, tempIndex) => {
                        return index === tempIndex
                          ? { ...tempItem, address: event.target.value }
                          : { ...tempItem };
                      });
                      setList(newList);
                    }}
                    type="text"
                    placeholder="enter address"
                  />
                </div>
                <button
                  onClick={() => {
                    const newList = list.filter((_, i) => i !== index);
                    setList(newList);
                  }}
                >
                  delete
                </button>
              </fieldset>
            </div>
          );
        })}
      <button
        onClick={() => {
          setList([...list, {}]);
        }}
      >
        create new
      </button>
    </div>
  );
}
export default App;
