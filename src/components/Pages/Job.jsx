import React, { useEffect } from "react";
// Dependency
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
// Api
import { getSingleJob } from "@/api/apiJobs";
// Hooks
import useFetch from "@/hooks/useFetch";

const Job = () => {
  const { isLoaded, user } = useUser();

  const { id } = useParams();

  const {
    fn: fnJob,
    data: job,
    loading: loadingJob,
  } = useFetch(getSingleJob, { job_id: id });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  if (!isLoaded || loadingJob) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return <div>Job</div>;
};

export default Job;
