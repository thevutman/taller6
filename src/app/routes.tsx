import { createBrowserRouter } from "react-router";
import Portada from "./pages/Portada";
import Indice from "./pages/Indice";
import Capitulo1 from "./pages/Capitulo1";
import Capitulo2 from "./pages/Capitulo2";
import Capitulo3 from "./pages/Capitulo3";
import MapaInvitacion from "./pages/MapaInvitacion";
import Chismografo from "./pages/Chismografo";
import RecetaArepaChocolo from "./pages/RecetaArepaChocolo";
import Cabina from "./pages/Cabina";
import Historias from "./pages/Historias";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portada,
  },
  {
    path: "/indice",
    Component: Indice,
  },
  {
    path: "/capitulo-1",
    Component: Capitulo1,
  },
  {
    path: "/capitulo-2",
    Component: Capitulo2,
  },
  {
    path: "/capitulo-3",
    Component: Capitulo3,
  },
  {
    path: "/mapa",
    Component: MapaInvitacion,
  },
  {
    path: "/chismografo",
    Component: Chismografo,
  },
  {
    path: "/receta/arepa-de-chocolo",
    Component: RecetaArepaChocolo,
  },
  {
    path: "/chismografo/cabina",
    Component: Cabina,
  },
  {
    path: "/historias",
    Component: Historias,
  }
]);