import { useRouter } from "next/router";


const success = () => {
    
  const router = useRouter();
  console.log(router)

  return <div>success</div>;
};

export default success;
