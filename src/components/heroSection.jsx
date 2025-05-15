function HeroSection({onButtonClick}) {
  return (
    <>
      <h1>
        Resume<span>Craft</span>: Your Resume, Done Right – Fast and Easy.
      </h1>
      <p className="description-paragraph">
        Create a standout resume effortlessly, with a simple and smooth process
        that saves you time and lets you focus on what matters most—landing your
        dream job!
      </p>
      <button onClick={onButtonClick}>GET STARTED</button>
    </>
  );
}


export { HeroSection };
