// "use client";

// import {
//   useContext,
//   useState,
//   createContext,
//   useEffect,
//   ReactNode,
// } from "react";

// type DataContextproviderProps = {
//   children: ReactNode;
// };

// type DataMovie = {
//   poster_path: string;
//   original_title: string;
//   overview: string;
//   id: number;
// };

// type DataContext = {
//   moviesData: DataMovie[];
// };

// export const DataContext = createContext<DataMovie[] | null | undefined>(null);

// export default function DataContextProvider({
//   children,
// }: DataContextproviderProps) {
//   let moviesData: DataMovie[] | null | undefined = [];

//   const dataFetch = async () => {
//     const data = await (
//       await fetch(
//         "https://api.themoviedb.org/3/discover/movie?api_key=8df3ffa86c0ab3d6b3421e6a7d051382"
//       )
//     ).json();
//     moviesData = data.results;
//   };
//   dataFetch();

//   return (
//     <DataContext.Provider value={moviesData}>{children}</DataContext.Provider>
//   );
// }

// export function useDataContext() {
//   const context = useContext(DataContext);
//   console.log(context);

//   if (context === undefined || context === null) {
//     throw new Error("useDataContext must be used within a DataContextProvider");
//   }
//   return context;
// }
