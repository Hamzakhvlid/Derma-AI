import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Skeleton, Text, Flex, Container } from "@radix-ui/themes";

export default function DoctorDetailScreenLoading() {
  const skeletonData = {
    doctorName: "Loading...",
    specialization: "Loading...",
    qualifications: [{ institution: "Loading...", program: "Loading..." }],
    experienceYears: "Loading...",
    reviewsCount: "Loading...",
  };

  return (
    <div className="wrapper">
      <div className="drop-shadow-md p-4 bg-white  m-3 rounded-lg mt-20">
        <Skeleton />
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex xl:flex-row flex-col">
            <Skeleton />
            <div className="skeleton-avatar">
              <Skeleton />
            </div>
            <div className="sm:pb-0 pb-4">
              <Skeleton />
              <div className="skeleton-info">
                <Skeleton />
              </div>
              <Skeleton />
              <div className="skeleton-reviews">
                <Skeleton />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex sm:flex-col flex-row space-x-3 sm:space-x-0 sm:space-y-2">
            <div className="skeleton-button">
              <Skeleton />
            </div>
            <div className="skeleton-button">
              <Skeleton />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex m-3 lg:flex-row flex-col-reverse space-x-4 mt-20">
        <div className="left">
          <div className="skeleton-reviews">
            <Skeleton />
          </div>
          {/* Qualifications */}
          <div className="skeleton-qualifications">
            <Skeleton />
          </div>
          {/* Experience */}
          <div className="skeleton-experience">
            <Skeleton />
          </div>
          {/* FAQs */}
          <div className="skeleton-faqs">
            <Skeleton />
          </div>
        </div>
        <div id="bookappointment" className="right">
          <Skeleton />
        </div>
      </div>

      {/* Professional Statement */}
      <div className="text-sm m-3">
        <Container size="1">
          <Flex direction="column" gap="3">
            <Skeleton>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque felis tellus, efficitur id convallis a, viverra
                eget libero. Nam magna erat, fringilla sed commodo sed, aliquet
                nec magna.
              </Text>
            </Skeleton>
            <Text>
              <Skeleton>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque felis tellus, efficitur id convallis a, viverra
                eget libero. Nam magna erat, fringilla sed commodo sed, aliquet
                nec magna.
              </Skeleton>
            </Text>
          </Flex>
        </Container>
      </div>
    </div>
  );
}
