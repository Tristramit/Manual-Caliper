// import { create } from "zustand";
// import * as Location from "expo-location";
// import { extractNumbers } from "../utils/functions";

// const useSampleStore = create((set) => ({
//   size: 0,
//   sizeItems: [],
//   location: null,
//   errorMsg: null,
//   init: async () => {
//     try {
//       let location = await Location.getCurrentPositionAsync({});
//       location = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       };
//       set((state) => ({ ...state, location }));
//     } catch (error) {
//       console.log(error);
//       set((state) => ({ ...state, errorMsg: error.message }));
//     }
//   },
//   handleAddSize: async (size) => {
//     try {
//       set((state) => ({
//         ...state,
//         sizeItems: [
//           ...state.sizeItems,
//           {
//             size: extractNumbers(size),
//             location: state.location,
//             timestamp: new Date().getTime(),
//           },
//         ],
//       }));
//     } catch (error) {
//       console.log(error);
//       set((state) => ({ ...state, errorMsg: error.message }));
//     }
//   },
//   deleteSize: (id) =>
//     set((state) => ({
//       ...state,
//       sizeItems: state.sizeItems.filter((sizeItem) => sizeItem.timestamp !== id),
//     })),
// }));


import { create } from "zustand";
import * as Location from "expo-location";
import { extractNumbers, currentTimeString } from "../utils/functions";

const useSampleStore = create((set) => ({
  size: 0,
  sizeItems: [],
  location: null,
  errorMsg: null,
  init: async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      location = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      set((state) => ({ ...state, location }));
    } catch (error) {
      console.log(error);
      set((state) => ({ ...state, errorMsg: error.message }));
    }
  },
  handleAddSize: async (size) => {
    try {
      set((state) => ({
        ...state,
        sizeItems: [
          ...state.sizeItems,
          {
            size: extractNumbers(size),
            location: state.location,
            id: currentTimeString(),
          },
        ],
      }));
    } catch (error) {
      console.log(error);
      set((state) => ({ ...state, errorMsg: error.message }));
    }
  },
  deleteSize: (id) =>
    set((state) => ({
      ...state,
      sizeItems: state.sizeItems.filter((sizeItem) => sizeItem.id !== id),
    })),
}));


export default useSampleStore;