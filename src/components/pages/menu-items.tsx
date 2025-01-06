function MenuItem({ cardCategree }: any) {
  return (
    <>
      {cardCategree &&
        cardCategree.map((item: any, index: number) => (
          <div
            style={{
              padding: 20,
              margin: 10,
              border: "1px solid black",
              borderRadius: 5,
              width: "97%",
            }}
            key={index}
          >
            <div>
              {/* <p>category: {item.card.info.category}</p> */}
              {/* <p>
                inStock: {item.card.info.inStock ? "In Stock" : "Out Of Stock"}
              </p> */}
              <p>Name: {item.card.info.name}</p>
              <p>description: {item.card.info.description}</p>
              <p>
                Price:{" "}
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
                rupees
              </p>
            </div>
            <button
              style={{
                color: "black",
                border: "1px solid black",
                width: 80,
                borderRadius: 7,
              }}
            >
              Add
            </button>
          </div>
        ))}
    </>
  );
}

export default MenuItem;
