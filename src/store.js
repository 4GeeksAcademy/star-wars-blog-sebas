export const initialStore = () => ({
  people: [],
  planets: [],
  species: [],
  config: {
    message: null,
    developer: "4Geeks Academy",
  },
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_data":
      const exists = store[action.endpoint].some(
        (item) => item.uid === action.payload.uid
      );
      if (exists) return store;

      return {
        ...store,
        [action.endpoint]: [...store[action.endpoint], action.payload],
      };

    case "add_to_favorites":
      const alreadyFavorite = store.favorites.some(
        (fav) => fav.uid === action.payload.uid && fav.endpoint === action.payload.endpoint
      );
      if (alreadyFavorite) return store;
      const updatedFavorites = [...store.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...store, favorites: updatedFavorites };

    case "remove_from_favorites":
      const filtered = store.favorites.filter(
        (fav) =>
          !(
            fav.uid === action.payload.uid &&
            fav.endpoint === action.payload.endpoint
          )
      );
      localStorage.setItem("favorites", JSON.stringify(filtered));
      return { ...store, favorites: filtered };

    default:
      throw Error("Unknown action.");
  }
}
