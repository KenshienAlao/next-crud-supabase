import { DataCreate } from "./components/datacreate";
import { DataFetchAll } from "./components/datafetchall";
import { DataFetchSingle } from "./components/datafetchsingle";
import { DataRemove } from "./components/dataremove";
import { DataUpdate } from "./components/dataupdate";

export default function Home() {
  return (
    <div className="grid grid-cols-3">
      <DataFetchAll />
      <DataFetchSingle />
      <DataCreate />
      <DataUpdate />
      <DataRemove />
    </div>
  );
}
