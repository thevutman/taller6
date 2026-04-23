import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#faf6f0]">
      <div className="w-full h-full max-w-[1920px] max-h-[1080px] mx-auto aspect-video">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
