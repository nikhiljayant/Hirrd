import React, { useEffect } from "react";
// Api
import { getJobs } from "@/api/apiJobs";
// Custom Hook
import useFetch from "@/hooks/useFetch";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs);

  useEffect(() => {
    fnJobs();
  }, []);

  return <div>JobListing</div>;
};

export default JobListing;
