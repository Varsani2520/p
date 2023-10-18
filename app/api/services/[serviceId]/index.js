const { useRouter } = require("next/router");

export  function POST (request) {
  const { query } = useRouter();
  return <div>this is {query.serviceId} page</div>;
};
