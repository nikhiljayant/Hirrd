import React, { useEffect, useState } from "react";
// Dependency
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
// Icons
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSigninModal, setShowSigninModal] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("sign-in")) {
      setShowSigninModal(true);
    }
  }, [searchParams]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSigninModal(false);
      setSearchParams({});
    }
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/logo.png" className="h-20" />
        </Link>

        <SignedOut>
          <Button variant="outline" onClick={() => setShowSigninModal(true)}>
            Login
          </Button>
        </SignedOut>
        <SignedIn>
          <Link to="/post-job" className="w-full flex justify-end mr-5">
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-2" />
              Post a Job
            </Button>
          </Link>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="My Jobs"
                labelIcon={<BriefcaseBusiness size={15} />}
                href="/my-jobs"
              />
              <UserButton.Link
                label="Saved Jobs"
                labelIcon={<Heart size={15} />}
                href="/saved-jobs"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </nav>

      {showSigninModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
