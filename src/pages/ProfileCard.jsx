export default function ProfileCard() {
  return (
    <div
      className="bg-[lightseagreen]
      "
    >
      <div
        className="flex flex-col items-center content-center justify-center min-h-screen text-lg text-center font-kumbh 
    bg-dark-cyan bg-[url('assets/profile-card-component-main/images/bg-pattern-bottom.svg')]"
      >
        <main className="overflow-hidden bg-white rounded-lg w-80">
          <img
            src="assets/profile-card-component-main/images/bg-pattern-card.svg"
            alt="background"
          />

          <div className="relative flex items-center content-center justify-center">
            <img
              src="assets/profile-card-component-main/images/image-victor.jpg"
              className="absolute rounded-full ring-4 ring-white"
              alt="avatar"
            />
          </div>

          <div className="mt-16 mb-8">
            <h2 className="font-bold text-desaturated-blue">
              Victor Crest{" "}
              <span className="font-normal text-dark-gray">26</span>
            </h2>
            <span className="text-base text-dark-gray">London</span>
          </div>

          <div className="flex items-center justify-between p-5 border-t-2 border-t-dark-gray">
            <div>
              <h3 className="font-bold text-desaturated-blue">80K</h3>
              <span className="text-base text-dark-gray">Followers</span>
            </div>

            <div>
              <h3 className="font-bold text-desaturated-blue">803K</h3>
              <span className="text-base text-dark-gray">Likes</span>
            </div>

            <div>
              <h3 className="font-bold text-desaturated-blue">1.4K</h3>
              <span className="text-base text-dark-gray">Photos</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
