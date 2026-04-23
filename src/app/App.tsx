import { RouterProvider } from "react-router";
import { router } from "./routes";
import { HandTrackingProvider } from "./context/HandTrackingContext";


export default function App() {
  return (
    <HandTrackingProvider>
      <div className="w-screen h-screen overflow-hidden bg-[#faf6f0]">
        <div className="w-full h-full max-w-[1920px] max-h-[1080px] mx-auto aspect-video">
          <RouterProvider router={router} />
        </div>
      </div>
    </HandTrackingProvider>
  );
}
