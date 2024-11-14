import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Boxes, BriefcaseBusiness, Download, School } from "lucide-react";

const ApplicationCard = ({ application, isCandidate = false }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = application?.resume;
    link.target = "_blank";
    link.click();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {isCandidate
            ? `${application?.job?.title} at ${application?.job?.company?.name}`
            : application?.name}

          <Download
            size={18}
            className="bg-white text-black rounded-full h-8 w-8 p-1.5 cursor-pointer"
            onClick={handleDownload}
          />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex gap-2 items-center">
            <BriefcaseBusiness size={15} /> {application?.experience} years of
            experience
          </div>
          <div className="flex gap-2 items-center">
            <School size={15} /> {application?.education}
          </div>
          <div className="flex gap-2 items-center">
            <Boxes size={15} /> Skills: {application?.skills}
          </div>
        </div>
        <hr />
        {/* 2:53:21 */}
      </CardContent>
    </Card>
  );
};

export default ApplicationCard;
