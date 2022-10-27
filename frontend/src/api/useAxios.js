
import { useAxios } from "use-axios-client";

const frontport = process.env.frontport || 5000;
export default function App() {
  const { data, error, loading } = useAxios({
    url: "http://localhost:3000/"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  ) 
}