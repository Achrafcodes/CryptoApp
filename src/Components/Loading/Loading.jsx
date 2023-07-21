import { Bars } from "@agney/react-loading";

function Loading() {
  return (
    <div className="flex bg-cyan-600/80  flex-col gap-12 justify-center items-center w-screen h-screen">
      <Bars width="50" />
      <h1 className="text-3xl">Loading</h1>
    </div>
  );
}

export default Loading;
