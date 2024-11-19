import React, { useEffect } from "react";
// Api
import { getSavedJobs, saveJob } from "@/api/apiJobs";
// Hook
import useFetch from "@/hooks/useFetch";
// Dependency
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
// Components
import JobCard from "../Partials/JobCard";

const SavedJob = () => {
  const { isLoaded } = useUser();

  const {
    loading: loadingSavedJobs,
    data: dataSavedJobs,
    fn: fnSavedJobs,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) {
      fnSavedJobs();
    }
  }, [isLoaded]);

  if (!isLoaded || loadingSavedJobs) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Saved jobs
      </h1>

      {loadingSavedJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataSavedJobs?.length ? (
            dataSavedJobs.map((saved) => {
              return (
                <JobCard
                  key={saved.id}
                  job={saved.job}
                  savedInit={true}
                  onJobSaved={fnSavedJobs}
                />
              );
            })
          ) : (
            <div>No Saved Jobs!</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedJob;
